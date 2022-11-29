import { component$, useStylesScoped$ } from '@builder.io/qwik';
import Pinkellipse from '../../icons/pinkellipse';
import Blueellipse from '../../icons/blueellipse';
import styles from './hero.css?inline';
import LazyVideo from '~/lib/lazyVideo';

const Hero = component$(() => {
  useStylesScoped$(styles);

  LazyVideo();

  return (
    <div class='hero'>
      <div className='leftSection'>
        <h2>Elevate your website or app with a short video feed</h2>
        <p className='description'>
          Add a TikTok-like experience to your website, iOS, or Android apps
          with just a few lines of code. Skyrocket sales with videos that sell.
        </p>
        <button class='primary'>Get in touch</button>
      </div>
      <div className='rightSection'>
        <div className='videoWrapper'>
          <div className='video'>
            <video loop autoPlay muted class='lazy-load-video'>
              <source data-src='https://rtalk.tv/website/pudina/vfhero.mp4' />
            </video>
          </div>
          <div className='glow'>
            <svg
              width='390'
              height='670'
              viewBox='0 0 390 670'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_f_4249_12727)'>
                <path
                  d='M15 23C15 18.5817 18.5817 15 23 15H367C371.418 15 375 18.5817 375 23V647C375 651.418 371.418 655 367 655H23C18.5817 655 15 651.418 15 647V23Z'
                  stroke='url(#paint0_linear_4249_12727)'
                  stroke-width='6.92308'
                />
              </g>
              <g filter='url(#filter1_f_4249_12727)'>
                <path
                  d='M15 23C15 18.5817 18.5817 15 23 15H367C371.418 15 375 18.5817 375 23V647C375 651.418 371.418 655 367 655H23C18.5817 655 15 651.418 15 647V23Z'
                  stroke='url(#paint1_linear_4249_12727)'
                  stroke-width='1.73077'
                />
              </g>
              <path
                d='M15 23C15 18.5817 18.5817 15 23 15H367C371.418 15 375 18.5817 375 23V647C375 651.418 371.418 655 367 655H23C18.5817 655 15 651.418 15 647V23Z'
                stroke='url(#paint2_linear_4249_12727)'
                stroke-width='1.15385'
              />
              <defs>
                <filter
                  id='filter0_f_4249_12727'
                  x='0.000113487'
                  y='0.000113487'
                  width='390'
                  height='670'
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
                    result='effect1_foregroundBlur_4249_12727'
                  />
                </filter>
                <filter
                  id='filter1_f_4249_12727'
                  x='11.2502'
                  y='11.2499'
                  width='367.5'
                  height='647.5'
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
                    result='effect1_foregroundBlur_4249_12727'
                  />
                </filter>
                <linearGradient
                  id='paint0_linear_4249_12727'
                  x1='-53.7097'
                  y1='165.179'
                  x2='291.997'
                  y2='683.073'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.228893' stop-color='#00B2FF' />
                  <stop
                    offset='0.694742'
                    stop-color='#00B2FF'
                    stop-opacity='0'
                  />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_4249_12727'
                  x1='-53.7097'
                  y1='165.179'
                  x2='291.997'
                  y2='683.073'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.228893' stop-color='#00B2FF' />
                  <stop
                    offset='0.694742'
                    stop-color='#00B2FF'
                    stop-opacity='0'
                  />
                </linearGradient>
                <linearGradient
                  id='paint2_linear_4249_12727'
                  x1='-53.7097'
                  y1='165.179'
                  x2='291.997'
                  y2='683.073'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.228893' stop-color='#F0FBFF' />
                  <stop
                    offset='0.694742'
                    stop-color='#E8F8FF'
                    stop-opacity='0'
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className='backWrapper'>
          <div className='backImage'></div>
          <div className='glow-orange'>
            <svg
              width='477'
              height='445'
              viewBox='0 0 477 445'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_f_4249_12573)'>
                <rect
                  x='15'
                  y='15'
                  width='519'
                  height='415'
                  rx='24'
                  stroke='url(#paint0_linear_4249_12573)'
                  stroke-width='6.92308'
                />
              </g>
              <g filter='url(#filter1_f_4249_12573)'>
                <rect
                  x='15'
                  y='15'
                  width='519'
                  height='415'
                  rx='24'
                  stroke='url(#paint1_linear_4249_12573)'
                  stroke-width='1.73077'
                />
              </g>
              <rect
                x='15'
                y='15'
                width='519'
                height='415'
                rx='24'
                stroke='url(#paint2_linear_4249_12573)'
                stroke-width='1.15385'
              />
              <defs>
                <filter
                  id='filter0_f_4249_12573'
                  x='0.000113487'
                  y='0.000113487'
                  width='549'
                  height='445'
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
                    result='effect1_foregroundBlur_4249_12573'
                  />
                </filter>
                <filter
                  id='filter1_f_4249_12573'
                  x='11.2502'
                  y='11.2499'
                  width='526.5'
                  height='422.5'
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
                    result='effect1_foregroundBlur_4249_12573'
                  />
                </filter>
                <linearGradient
                  id='paint0_linear_4249_12573'
                  x1='-57.5'
                  y1='538.5'
                  x2='393.376'
                  y2='644.953'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.228893' stop-color='#FFC700' />
                  <stop
                    offset='0.713162'
                    stop-color='#FFC700'
                    stop-opacity='0'
                  />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_4249_12573'
                  x1='-57.5'
                  y1='538.5'
                  x2='393.376'
                  y2='644.953'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.228893' stop-color='#FFC700' />
                  <stop
                    offset='0.713162'
                    stop-color='#FFC700'
                    stop-opacity='0'
                  />
                </linearGradient>
                <linearGradient
                  id='paint2_linear_4249_12573'
                  x1='-57.5'
                  y1='538.5'
                  x2='393.376'
                  y2='644.953'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.228893' stop-color='#FFF6F1' />
                  <stop
                    offset='0.713162'
                    stop-color='#FFECE1'
                    stop-opacity='0'
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className='stats'>
        <div className='conversion'>
          <div className='pinkEllipse'>
            <Pinkellipse />
          </div>
          <p class='text'>Increase conversion by over</p>
          <p class='number'>80%</p>
        </div>
        <div className='audience'>
          <div className='blueEllipse'>
            <Blueellipse />
          </div>
          <p class='text'>Increase audience engagement by</p>
          <p class='number'>250%</p>
        </div>
      </div>
      <div className='pinkgradient' />
      <div className='bluegradient' />
    </div>
  );
});

export default Hero;
