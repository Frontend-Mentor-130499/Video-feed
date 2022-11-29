import { component$ } from '@builder.io/qwik';

const ThreeDots = component$(() => (
  <svg
    width='32'
    height='33'
    viewBox='0 0 32 33'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='16' cy='8.5' r='2' fill='white' />
    <circle cx='16' cy='16.5' r='2' fill='white' />
    <circle cx='16' cy='24.5' r='2' fill='white' />
  </svg>
));

export default ThreeDots;
