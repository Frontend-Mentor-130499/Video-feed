import { component$ } from '@builder.io/qwik';

type PageProps = {
  width: number;
  height: number;
};

const DownArrow = component$<PageProps>((props) => (
  <svg
    width={`${props.width ? props.width : '9'}`}
    height={`${props.height ? props.height : '5'}`}
    viewBox='0 0 9 6'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M1 1L4.5 4.5L8 1' stroke='white' />
  </svg>
));

export default DownArrow;
