import { component$ } from '@builder.io/qwik';

const ArrowRight = component$(() => (
  <svg
    style={{ width: '100%', height: '100%' }}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle opacity='0.25' cx='24' cy='24' r='24' fill='#A0A0A4' />
    <path d='M21 16L29 24L21 32' stroke='white' strokeWidth='2' />
  </svg>
));

export default ArrowRight;
