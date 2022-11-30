/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  component$,
  useStore,
  useStylesScoped$,
  useSignal,
  Signal,
  $,
  useWatch$,
  useClientEffect$,
  useContextProvider,
  createContext,
} from '@builder.io/qwik';
import styles from './feed.css?inline';
import FeedWrapper from './feedWrapper';
import LazyImage from '~/lib/lazyImage';
import ECommerce from './ECommerce';

export type StateType = {
  current: number;
  videoCurrentProgress: number;
  isGetInTouchActive: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  videoCurrentProgressFS: number;
  isGetInTouchActiveFS: boolean;
  isPlayingFS: boolean;
  isMutedFS: boolean;
  isFS: boolean;
};

export const FeedContext = createContext<StateType>('feed');

const Feed = component$(() => {
  useStylesScoped$(styles);

  const cats = [
    { name: 'E - Commerce', width: 120, left: 0, btnText: 'Buy Now' },
    { name: 'OTT', width: 50, left: 170, btnText: 'Watch Now' },
    { name: 'News', width: 72, left: 260, btnText: 'Watch Now' },
    { name: 'Food & Beverages', width: 154, left: 375, btnText: 'Buy Now' },
    { name: 'Podcasts', width: 80, left: 575, btnText: 'View More Segments' },
  ];

  const state = useStore({
    current: 0,
    videoCurrentProgress: 0,
    isGetInTouchActive: false,
    isPlaying: true,
    isMuted: true,
    videoCurrentProgressFS: 0,
    isGetInTouchActiveFS: false,
    isPlayingFS: true,
    isMutedFS: true,
    isFS: false,
  });

  useContextProvider(FeedContext, state);

  const video = useSignal<HTMLVideoElement>() as Signal<HTMLVideoElement>;
  const videoFS = useSignal<HTMLVideoElement>() as Signal<HTMLVideoElement>;

  LazyImage();

  const toggleVideoPlay = $(() => {
    if (video.value.paused) {
      video.value.play();
      state.isPlaying = true;
    } else {
      video.value.pause();
      state.isPlaying = false;
    }
  });

  const toggleVideoPlayFS = $(() => {
    if (videoFS.value.paused) {
      videoFS.value.play();
      state.isPlayingFS = true;
    } else {
      videoFS.value.pause();
      state.isPlayingFS = false;
    }
  });

  useWatch$(({ track }) => {
    const isFS = track(() => state.isFS);
    const isPlaying = track(() => state.isPlaying);
    const isPlayingFS = track(() => state.isPlayingFS);
    if (isPlaying && isFS) {
      toggleVideoPlayFS();
    }

    if (!isFS && !isPlayingFS) {
      toggleVideoPlay();
    }
  });

  return (
    <div class='wrapper'>
      <div className='yellowGlow'></div>
      <div className='leftSection'>
        <h2>Feed application for industries</h2>
        <p>
          The Rizzle feed uplifts your website or app with videos that engage.
          Identify and convert the most engaging parts of your longer videos
          into short videos. Add interactive elements and AR effects. Explore
          endless video applications with the Rizzle feed and boost conversions.
        </p>
        <ul className='tabbedSection'>
          {cats.map((cat, index) => (
            <li
              onClick$={() => {
                state.current = index;
              }}
              key={index}
              class={`tab ${state.current === index ? 'current' : ''}`}
            >
              {cat.name}
            </li>
          ))}
        </ul>
        <span
          class='underglow'
          style={`width: ${cats[state.current].width}px; left: ${
            cats[state.current].left
          }px`}
        />
      </div>
      <div className='videoSection'>
        <img
          className='outline'
          src='https://rtalk.tv/website/pudina/fvglow.png'
          alt='outline'
        />
        <FeedWrapper videoRef={video} label={cats[state.current].btnText}>
          <ECommerce videoRef={video} />
        </FeedWrapper>
      </div>
    </div>
  );
});

export default Feed;
