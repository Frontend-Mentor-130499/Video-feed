import { component$ } from '@builder.io/qwik';

const Play = component$(() => (
  <svg
    width='70'
    height='70'
    viewBox='0 0 70 70'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle opacity='0.2' cx='35' cy='35' r='35' fill='#D7FF00' />
    <path
      d='M26 22.545C26 20.6364 28.1528 19.5219 29.7112 20.6237L47.549 33.2343C48.8752 34.1719 48.8752 36.1393 47.549 37.0769L29.7112 49.6875C28.1528 50.7893 26 49.6748 26 47.7662V22.545Z'
      fill='black'
    />
  </svg>
));

export default Play;
