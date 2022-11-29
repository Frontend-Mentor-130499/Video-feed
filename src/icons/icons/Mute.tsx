import { component$ } from '@builder.io/qwik';

const Mute = component$(() => (
  <svg
    viewBox='0 0 32 33'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ width: '100%', height: '100%' }}
  >
    <path
      d='M7.97746 22.9103V10.4093H3.49436C2.66905 10.4093 2 11.1089 2 11.9719V21.3477C2 22.2107 2.66905 22.9103 3.49436 22.9103H7.97746ZM7.97746 22.9103L17.6526 29.2172C18.6434 29.9375 20 29.1961 20 27.9342V23.9995M7.97746 10.0887L17.6526 3.78183C18.6434 3.06147 20 3.80292 20 5.06485V8.99951'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
    />
    <path
      d='M19.0001 20.5L27 12.5001M19 12.5L26.9999 20.4999'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
));

export default Mute;
