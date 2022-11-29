import { component$ } from '@builder.io/qwik';

type PageProps = {
  width: number;
  height: number;
};

const UpArrow = component$<PageProps>((props) => (
  <svg
    width={`${props.width ? props.width : '9'}`}
    height={`${props.height ? props.height : '5'}`}
    viewBox='0 0 9 5'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M1 4.5L4.5 1L8 4.5' stroke='white' />
  </svg>
));

export default UpArrow;
