import { useClientEffect$ } from '@builder.io/qwik';

const LazyVideo = () => {
  useClientEffect$(
    (track) => {
      const lazyLoadVideos = Array.from(
        document.getElementsByClassName('lazy-load-video')
      );
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const video = entry.target as HTMLVideoElement;
          console.log(video);
          // video.poster = video.dataset.poster;
          Array.from(video.getElementsByTagName('source')).forEach((source) => {
            source.src = source.dataset.src as string;
          });
          video.load();
          video.play().then(() => {
            observer.unobserve(video);
          });
          video.classList.remove('lazy-load-video');
        });
      });
      lazyLoadVideos.forEach((video) => {
        observer.observe(video);
      });
    },
    { eagerness: 'load' }
  );
};

export default LazyVideo;
