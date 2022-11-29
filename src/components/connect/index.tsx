import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './connect.css?inline';

const Connect = component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div className='wrapper'>
        <div className='text'>
          <h2>Connect to anything</h2>
          <h3>
            Rizzle empowers you to work with popular databases and CMS
            platforms.
          </h3>
          <img src='/1.webp' alt='connections' />
        </div>
        <div className='background' />
      </div>
    </>
  );
});

export default Connect;
