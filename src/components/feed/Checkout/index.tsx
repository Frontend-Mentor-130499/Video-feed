import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import { StateType } from '..';
import { FeedContext } from '..';

import styles from './checkout.css?inline';

const Checkout = component$(() => {
  useStylesScoped$(styles);
  const store = useContext(FeedContext) as StateType;

  return (
    <div className='container'>
      <div
        className='cross'
        onClick$={() => (store.isGetInTouchActive = false)}
      >
        <img src='https://rtalk.tv/mint/cross.svg' alt='close icon' />
      </div>

      <div className='flair'>
        <img src='https://rtalk.tv/mint/checkoutFlair.svg' alt='flair image' />
      </div>

      <div className='wrapper'>
        <p className='heading'>Do you want to see more?</p>
        <p className='sub'>
          Contact us to implement a video feed and find out how Rizzle will work
          on your website or app
        </p>

        <a href='mailto:support@rizzle.tv' className={`getInTouch`}>
          <button className='bold-600 text-white'>Get in touch</button>
        </a>
      </div>
    </div>
  );
});

export default Checkout;
