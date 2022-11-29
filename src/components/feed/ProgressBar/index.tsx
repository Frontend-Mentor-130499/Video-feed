import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './ProgressBar.css?inline';

type PageProps = {
  done: number;
  position?: string;
  width?: string;
  bottom?: string;
};

const ProgressBar = component$<PageProps>(
  ({ done, position = 'relative', width = '100%', bottom = '0' }) => {
    useStylesScoped$(styles);
    return (
      <div
        style={{
          position,
          width,
          bottom,
        }}
        className='container'
      >
        <div className='done' style={{ width: `${done}%` }}></div>
      </div>
    );
  }
);

export default ProgressBar;
