import { component$ } from '@builder.io/qwik';

type PageProps = {
  fill: string;
};

const LikePlain = component$<PageProps>((props) => (
  <svg
    width='32'
    height='33'
    viewBox='0 0 32 33'
    fill={props.fill}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.5887 27.4999H7.23547C6.64259 27.4999 6.07399 27.2681 5.65475 26.8555C5.23552 26.4429 5 25.8833 5 25.2999V17.5999C5 17.0165 5.23552 16.4569 5.65475 16.0443C6.07399 15.6317 6.64259 15.3999 7.23547 15.3999H10.5887M18.4128 13.2V8.79998C18.4128 7.92477 18.0595 7.08541 17.4307 6.46654C16.8018 5.84768 15.9489 5.5 15.0596 5.5L10.5887 15.3999V27.4999H23.1967C23.7359 27.5059 24.259 27.3199 24.6698 26.9763C25.0806 26.6326 25.3514 26.1545 25.4322 25.6299L26.9747 15.7299C27.0233 15.4146 27.0017 15.0927 26.9114 14.7864C26.821 14.4801 26.6641 14.1969 26.4514 13.9562C26.2388 13.7156 25.9755 13.5233 25.6799 13.3927C25.3842 13.2621 25.0633 13.1963 24.7392 13.2H18.4128Z'
      stroke={props.fill === 'none' ? 'white' : props.fill}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
));

export default LikePlain;
