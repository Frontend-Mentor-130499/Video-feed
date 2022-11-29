import { component$ } from '@builder.io/qwik';

const Ellipse = component$(() => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 149 89'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_4249_12558)'>
        <path
          d='M128.814 44.5C128.814 58.031 104.455 69 74.4069 69C44.3588 69 20 58.031 20 44.5C20 30.969 44.3588 20 74.4069 20C92.8079 20 109.075 24.1135 118.922 30.4099'
          stroke='#D7FF00'
          stroke-width='3'
          stroke-linecap='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_4249_12558'
          x='0.5'
          y='0.5'
          width='147.814'
          height='88'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='9' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.843137 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_4249_12558'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_4249_12558'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
});

export default Ellipse;
