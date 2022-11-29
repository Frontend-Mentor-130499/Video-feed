import { component$ } from '@builder.io/qwik';

const Pinkellipse = component$(() => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 350 182'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_4249_12756)'>
        <path
          d='M22 91C22 129.108 90.5004 160 175 160C259.5 160 328 129.108 328 91C328 52.8924 259.5 22 175 22C123.254 22 77.5075 33.5851 49.8182 51.3177'
          stroke='#FB5AFB'
          stroke-width='7'
          stroke-linecap='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_4249_12756'
          x='0.5'
          y='0.5'
          width='349'
          height='181'
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
            values='0 0 0 0 0.984314 0 0 0 0 0.352941 0 0 0 0 0.984314 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_4249_12756'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_4249_12756'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
});

export default Pinkellipse;
