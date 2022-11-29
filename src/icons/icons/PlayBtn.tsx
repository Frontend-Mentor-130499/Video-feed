import { component$ } from '@builder.io/qwik';

const PlayBtn = component$(() => (
  <svg fill='none' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>
    <g filter='url(#a)'>
      <rect width='64' height='64' rx='32' fill='#000' fillOpacity='0.7' />
      <path
        d='m25 21.868c0-0.7987 0.8901-1.2751 1.5547-0.832l15.197 10.131c0.5938 0.3959 0.5938 1.2683 0 1.6642l-15.197 10.131c-0.6646 0.4431-1.5547-0.0333-1.5547-0.832v-20.263z'
        fill='#fff'
      />
    </g>
    <defs>
      <filter
        id='a'
        x='-10'
        y='-10'
        width='84'
        height='84'
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='5' />
        <feComposite
          in2='SourceAlpha'
          operator='in'
          result='effect1_backgroundBlur_1016_13351'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_backgroundBlur_1016_13351'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
));

export default PlayBtn;
