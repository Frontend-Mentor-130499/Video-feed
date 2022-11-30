/* eslint-disable operator-linebreak */
/* eslint-disable no-unsafe-optional-chaining */
import {
  component$,
  useStylesScoped$,
  useContext,
  useStore,
  Signal,
  $,
  useContextProvider,
  createContext,
  useClientEffect$,
} from '@builder.io/qwik';
import { FeedContext, StateType } from '..';
import Toolbar from './toolbar';
import ExpandedView from './expandedView';
import Checkout from '../Checkout';
import { PlayBtn } from '../../../icons/icons';
import styles from './video.css?inline';
import useLazyvideo from '../../../lib/lazyVideo';

type PageProps = {
  videoRef: Signal<HTMLVideoElement>;
};

export type VideoStateTypes = {
  clicked: boolean;
  proceed: boolean;
};

export type InfoType = {
  heroImage: string;
  currentImage: string;
  video: string;
  price: string;
  discountedPrice: string;
  title: string;
  description: string;
  colors: string[];
  liquidCapacities: string[];
  warranties: string[];
  similarProducts: {
    image: string;
    title: string;
    price: string;
  }[];
  images: string[];
};

export const VideoContext = createContext('VideoContext');

const ECommerce = component$<PageProps>(({ videoRef }) => {
  useStylesScoped$(styles);

  const store = useContext<StateType>(FeedContext) as StateType;

  const state = useStore({
    clicked: false,
    proceed: false,
  }) as VideoStateTypes;

  useClientEffect$(() => {
    videoRef.value.addEventListener('timeupdate', () => {
      const decimal = videoRef.value.currentTime / videoRef.value.duration;
      const time = decimal * 100;
      store.videoCurrentProgress = time;
    });
  });

  useContextProvider(VideoContext, state);

  useLazyvideo();

  const information = {
    heroImage:
      'https://imgrizzle.s.llnwi.net/original/Mint/Feed/ECommerce/ThermoFlask/thumbnail.webp',
    currentImage:
      'https://imgrizzle.s.llnwi.net/original/Mint/Feed/ECommerce/ThermoFlask/current.webp',
    video: 'https://vidrizzle.s.llnwi.net/Mint/Feed/ECommerce.mp4',
    price: '99.99',
    discountedPrice: '39.99',
    title: 'Thermos Flask',
    description:
      'The Thermo Stainless Steel Flask is perfect to use in any condition. The airtight lid ensures there is zero leaking or spilling and the flask cap can also be used as a cup. The flask is BPA and Phthalate-free, meaning the beverages stored in it are safe to drink.',
    colors: ['rgb(196, 196, 196)', 'rgb(232, 195, 99)', 'rgb(0, 0, 0)'],
    liquidCapacities: ['500', '1000', '1500'],
    warranties: ['12', '18'],
    similarProducts: [
      {
        image:
          'https://imgrizzle.s.llnwi.net/original/Mint/Feed/ECommerce/ThermoFlask/1.webp',
        title: 'Thermos-X2',
        price: '59.99',
      },
      {
        image:
          'https://imgrizzle.s.llnwi.net/original/Mint/Feed/ECommerce/ThermoFlask/2.webp',
        title: 'Thermos-X1',
        price: '19.99',
      },
      {
        image:
          'https://imgrizzle.s.llnwi.net/original/Mint/Feed/ECommerce/ThermoFlask/3.webp',
        title: 'Thermos-X3',
        price: '99.99',
      },
      {
        image:
          'https://imgrizzle.s.llnwi.net/original/Mint/Feed/ECommerce/ThermoFlask/4.webp',
        title: 'Thermos-X4',
        price: '79.99',
      },
    ],
    images: [
      'https://imgrizzle.s.llnwi.net/original/Mint/Feed/ECommerce/ThermoFlask/hero.webp',
      'https://imgrizzle.s.llnwi.net/original/Mint/Feed/ECommerce/ThermoFlask/hero.webp',
      'https://imgrizzle.s.llnwi.net/original/Mint/Feed/ECommerce/ThermoFlask/hero.webp',
    ],
  };

  const toggleVideoPlay = $(() => {
    if (videoRef.value.paused) {
      videoRef.value.play();
      store.isPlaying = true;
    } else {
      videoRef.value.pause();
      store.isPlaying = false;
    }
  });

  return (
    <>
      <div className='videoSection'>
        <div className='imageWrapper'>
          <video
            ref={videoRef}
            className={`video lazy-load-video`}
            onClick$={() => toggleVideoPlay()}
            muted={store.isMuted}
            autoPlay
            loop
          >
            <source data-src={information.video} type='video/mp4' />
          </video>
        </div>

        {!state.clicked && !state.proceed ? (
          <Toolbar info={information} videoRef={videoRef} />
        ) : null}

        {!store.isPlaying && (
          <div
            className={`cp playBtnContainer`}
            onClick$={() => toggleVideoPlay()}
          >
            <PlayBtn />
          </div>
        )}
        <ExpandedView info={information} videoRef={videoRef} />

        {store.isGetInTouchActive && <Checkout />}
      </div>
    </>
  );
});

export default ECommerce;
