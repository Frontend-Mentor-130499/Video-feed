import { useClientEffect$ } from '@builder.io/qwik';

const LazyImage = () => {
  useClientEffect$(
    (track) => {
      const lazyLoadImages = Array.from(
        document.getElementsByClassName('lazy-load-img')
      );
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const image = entry.target as HTMLImageElement;
          console.log(image);
          image.src = image.dataset.src as string;
          image.classList.remove('lazy-load-img');
        });
      });
      lazyLoadImages.forEach((img) => {
        observer.observe(img);
      });
    },
    { eagerness: 'visible' }
  );
};

export default LazyImage;
