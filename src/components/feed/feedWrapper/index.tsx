import {
  component$,
  Signal,
  useContext,
  useStore,
  Slot,
  useStylesScoped$,
} from '@builder.io/qwik';
import { FeedContext, StateType } from '..';
import ProgressBar from '../ProgressBar';
import UiButton from '../UiButton';
import {
  Bookmark,
  Dislike,
  FSOff,
  Fullscreen,
  Like,
  Mute,
  Sound,
  ThreeDots,
} from '~/icons/icons';

import styles from './feedWrapper.css?inline';

type PageProps = {
  videoRef: Signal<HTMLVideoElement>;
  label: string;
};

const FeedWrapper = component$<PageProps>((props) => {
  useStylesScoped$(styles);

  const store = useContext(FeedContext) as StateType;

  const state = useStore({
    isLiked: false,
    isDislike: false,
    isBookmarked: false,
  });

  return (
    <div className='relative'>
      <div className='topBar'>
        <div className='leftBtnContainer'>
          <div
            className='icon'
            onClick$={() => {
              store.isFS = !store.isFS;
            }}
          >
            {store.isFS ? <FSOff /> : <Fullscreen />}
          </div>
          <div
            className='icon'
            onClick$={() => {
              store.isMuted = !store.isMuted;
            }}
          >
            {store.isMuted ? <Mute /> : <Sound />}
          </div>
        </div>

        <div className='icon'>
          <ThreeDots />
        </div>
      </div>

      <div>
        <Slot />
      </div>

      <div className={`progress`}>
        <div className={`interact`}>
          <div className='cp' onClick$={() => (state.isLiked = !state.isLiked)}>
            <Like fill={state.isLiked ? '#D7FF00' : 'none'} />
          </div>
          <div
            className='cp'
            onClick$={() => (state.isDislike = !state.isDislike)}
          >
            <Dislike fill={state.isDislike ? '#D7FF00' : 'none'} />
          </div>
          <div
            className='cp'
            onClick$={() => (state.isBookmarked = !state.isBookmarked)}
          >
            <Bookmark fill={state.isBookmarked ? '#D7FF00' : 'none'} />
          </div>
        </div>

        <div className='bottomBtn'>
          <UiButton
            label={props.label}
            padding='17px 24px'
            background='#BB00ED'
            width='100%'
            video={props.videoRef}
          />
        </div>

        <ProgressBar done={store.videoCurrentProgress} />
      </div>
    </div>
  );
});

export default FeedWrapper;
