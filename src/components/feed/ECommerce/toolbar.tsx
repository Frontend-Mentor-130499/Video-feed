import {
  component$,
  Signal,
  useStylesScoped$,
  useContext,
} from '@builder.io/qwik';
import { InfoType, VideoStateTypes } from '.';
import { FeedContext, StateType } from '..';
import { VideoContext } from '.';
import styles from './toolbar.css?inline';

type PageProps = {
  info: InfoType;
  videoRef: Signal<HTMLVideoElement>;
};

const Toolbar = component$<PageProps>(({ info, videoRef }) => {
  useStylesScoped$(styles);

  const feedStore = useContext(FeedContext) as StateType;
  const videoStore = useContext(VideoContext) as VideoStateTypes;

  return (
    <>
      <div className='toolbarWrapper'>
        <section className='bottomSection'>
          <div className='interactiveSection'>
            <section
              onClick$={() => {
                videoStore.clicked = true;
                videoRef.value.pause();
                feedStore.isPlaying = false;
              }}
              className='detailsWrapper'
            >
              <div className='detailsImage'>
                <img
                  src={info.heroImage}
                  alt='Hero Image'
                  style={{
                    borderRadius: '10px',
                  }}
                />
              </div>
              <section className='textSection'>
                <p className='title'>{info.title}</p>
                <div className='priceSection'>
                  <p className='discountedPrice'>${info.discountedPrice}</p>
                  <p className='price'>${info.price}</p>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
    </>
  );
});

export default Toolbar;
