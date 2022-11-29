import { component$ } from '@builder.io/qwik';

type PageProps = {
  fill: string;
};

const BookmarkPlain = component$<PageProps>((props) => (
  <svg
    width='32'
    height='33'
    viewBox='0 0 32 33'
    fill={props.fill}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.66675 28.5V7.16667C6.66675 6.45942 6.9477 5.78115 7.4478 5.28105C7.94789 4.78095 8.62617 4.5 9.33341 4.5H22.6667C23.374 4.5 24.0523 4.78095 24.5524 5.28105C25.0525 5.78115 25.3334 6.45942 25.3334 7.16667V28.5L17.4427 23.4267C17.0125 23.1499 16.5117 23.0027 16.0001 23.0027C15.4885 23.0027 14.9877 23.1499 14.5574 23.4267L6.66675 28.5Z'
      stroke={props.fill === 'none' ? 'white' : props.fill}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
));

export default BookmarkPlain;
