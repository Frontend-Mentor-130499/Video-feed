import { component$ } from '@builder.io/qwik';

const Blueellipse = component$(() => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 366 189'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_4249_12761)'>
        <path
          d='M344 94.5C344 134.541 271.918 167 183 167C94.0821 167 22 134.541 22 94.5C22 54.4594 94.0821 22 183 22C237.452 22 285.59 34.1727 314.727 52.8049'
          stroke='#00B2FF'
          stroke-width='7'
          stroke-linecap='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_4249_12761'
          x='0.5'
          y='0.5'
          width='365'
          height='188'
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
            values='0 0 0 0 0 0 0 0 0 0.698039 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_4249_12761'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_4249_12761'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
});

export default Blueellipse;
