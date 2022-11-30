import { component$, useStylesScoped$ } from '@builder.io/qwik';
import LazyImage from '~/lib/lazyImage';
import styles from './insights.css?inline';

const Insights = component$(() => {
  useStylesScoped$(styles);
  LazyImage();
  return (
    <div class='wrapper'>
      <div className='blueGlow'></div>
      <div class='textSection'>
        <h2>Access your data and get insights</h2>
        <p>
          Rizzle’s advanced analytics help you gain insight into how your
          audience engages with your videos. Get a better understanding of user
          behavior and actions to personalize content and send notifications.
        </p>
        <button class='primary'>Get in touch</button>
      </div>
      <div className='imageContainer'>
        <img class='lazy-load-img' data-src='/Insights.png' alt='Insights' />
        <div className='glow'>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 779 486'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_f_4249_12941)'>
              <rect
                x='15'
                y='15'
                width='748.259'
                height='455.562'
                rx='24'
                stroke='url(#paint0_linear_4249_12941)'
                stroke-width='6.92308'
              />
            </g>
            <g filter='url(#filter1_f_4249_12941)'>
              <rect
                x='15'
                y='15'
                width='748.259'
                height='455.562'
                rx='24'
                stroke='url(#paint1_linear_4249_12941)'
                stroke-width='1.73077'
              />
            </g>
            <rect
              x='15'
              y='15'
              width='748.259'
              height='455.562'
              rx='24'
              stroke='url(#paint2_linear_4249_12941)'
              stroke-width='1.15385'
            />
            <defs>
              <filter
                id='filter0_f_4249_12941'
                x='0.000113487'
                y='-8.58307e-06'
                width='778.259'
                height='485.562'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  stdDeviation='5.76923'
                  result='effect1_foregroundBlur_4249_12941'
                />
              </filter>
              <filter
                id='filter1_f_4249_12941'
                x='11.2502'
                y='11.25'
                width='755.759'
                height='463.062'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
                />
                <feGaussianBlur
                  stdDeviation='1.44231'
                  result='effect1_foregroundBlur_4249_12941'
                />
              </filter>
              <linearGradient
                id='paint0_linear_4249_12941'
                x1='-127.813'
                y1='121.9'
                x2='-12.038'
                y2='628.341'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.228893' stop-color='#00B2FF' />
                <stop offset='0.694742' stop-color='#00B2FF' stop-opacity='0' />
              </linearGradient>
              <linearGradient
                id='paint1_linear_4249_12941'
                x1='-127.813'
                y1='121.9'
                x2='-12.038'
                y2='628.341'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.228893' stop-color='#00B2FF' />
                <stop offset='0.694742' stop-color='#00B2FF' stop-opacity='0' />
              </linearGradient>
              <linearGradient
                id='paint2_linear_4249_12941'
                x1='-127.813'
                y1='121.9'
                x2='-12.038'
                y2='628.341'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0.228893' stop-color='#F0FBFF' />
                <stop offset='0.694742' stop-color='#E8F8FF' stop-opacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
});

export default Insights;
