/* eslint-disable object-curly-newline */
import cn from 'classnames';

import styles from './expandedView.css?inline';
import {
  component$,
  Signal,
  useContext,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik';
import { FeedContext, StateType } from '..';
import { VideoContext, VideoStateTypes, InfoType } from '.';

type PageProps = {
  info: InfoType;
  videoRef: Signal<HTMLVideoElement>;
};

const ExpandedView = component$<PageProps>(({ info, videoRef }) => {
  useStylesScoped$(styles);
  const state = useStore({
    capacity: 1,
    warranty: 0,
  });

  const feedStore = useContext(FeedContext) as StateType;
  const videoStore = useContext(VideoContext) as VideoStateTypes;

  return (
    <div
      className={cn('totalWrapper', {
        open: videoStore.clicked,
      })}
    >
      <section className='imageSection'>
        <div class='carousel-wrapper'>
          <div class='carousel'>
            {info.images.map((image, index) => (
              <div key={index} className='imageContainer'>
                <img src={image} alt='Thermo Flask' />
              </div>
            ))}
          </div>
        </div>

        <a href='https://thermozyu.com' className='urlSection'>
          thermozyu.com
        </a>
        <span
          onClick$={() => {
            videoStore.clicked = false;
            videoRef.value.play();
            feedStore.isPlaying = true;
          }}
          className='cross'
        />
      </section>
      <div className='container'>
        <section className='firstSection'>
          <div className='textSection'>
            <p className='title'>{info.title}</p>
            <div className='priceSection'>
              <p className='discountedPrice'>${info.discountedPrice}</p>
              <p className='price'>${info.price}</p>
            </div>
          </div>
          <div className='bookmark'>
            <svg
              width='16'
              height='20'
              viewBox='0 0 16 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19L9.082 15.195C8.7593 14.9874 8.3837 14.877 8 14.877C7.6163 14.877 7.2407 14.9874 6.918 15.195L1 19Z'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </section>
        <section className='descriptionSection'>
          <p className='description'>{info.description}</p>
          <p className='learnmore'>Learn more</p>
        </section>
        <section className='colors'>
          <h3>Color</h3>
          <div className='colorWrapper'>
            {info.colors.map((color, index) => (
              <div
                key={index}
                className='color'
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
        </section>
        <section className='capacitySection'>
          <h3>Liquid Capacity</h3>
          <div className='capacityWrapper'>
            {info.liquidCapacities.map((liquid, index) => (
              <p
                onClick$={() => (state.capacity = index)}
                key={index}
                className={cn('capacity', {
                  active: index === state.capacity,
                })}
              >
                {liquid} mL
              </p>
            ))}
          </div>
        </section>
        <section className='warrantySection'>
          <h3>Warranty</h3>
          <div className='warrantyWrapper'>
            {info.warranties.map((warrant, index) => (
              <p
                onClick$={() => (state.warranty = index)}
                key={index}
                className={cn('warranty', {
                  active: index === state.warranty,
                })}
              >
                {warrant} months
              </p>
            ))}
          </div>
        </section>
        <section className='similarSection'>
          <div className='topSection'>
            <h3>Similar Products</h3>
            <p className='show'>Show All</p>
          </div>
          <div className='productsWrap'>
            <div className='products'>
              {info.similarProducts.map((product, index) => (
                <div key={index} className='product'>
                  <div className='imageWrapper'>
                    <img
                      src={product.image}
                      alt='Product Image'
                      style={{
                        borderRadius: '10px',
                      }}
                    />
                  </div>
                  <p className='productTitle'>{product.title}</p>
                  <p className='productPrice'>${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className='buttons'>
          <button
            onClick$={() => {
              videoStore.clicked = false;
              videoRef.value.play();
              feedStore.isPlaying = true;
            }}
            className='cancelButton'
          >
            Cancel
          </button>
          <button
            onClick$={() => {
              videoStore.clicked = false;
              videoStore.proceed = true;
            }}
            className='totalButton'
          >
            Total $39.99
          </button>
        </div>
      </div>
    </div>
  );
});

export default ExpandedView;
