import { component$, useStylesScoped$, useStore } from '@builder.io/qwik';
import Ellipse from '~/icons/ellipse';
import styles from './header.css?inline';

const Header = component$(() => {
  useStylesScoped$(styles);
  const state = useStore({
    active: 0,
  });
  return (
    <nav>
      <div class='firstSection'>
        <a href='https://rizzle.tv'>
          <img class='logo' src='/logo.png' alt='Logo' />
        </a>
        <ul class='options'>
          <div class='linkWrapper'>
            <div class={`ellipse ${state.active === 0 ? 'show' : ''}`}>
              <Ellipse />
            </div>
            <a
              onClick$={() => {
                state.active = 0;
              }}
              class='link'
              href='#'
            >
              VideoFeed
            </a>
          </div>
          <div class='linkWrapper'>
            <div class={`ellipse ${state.active === 1 ? 'show' : ''}`}>
              <Ellipse />
            </div>
            <a
              onClick$={() => {
                state.active = 1;
              }}
              class='link'
              href='#'
            >
              ROI Calculator
            </a>
          </div>
        </ul>
      </div>
      <button class='primary'>Get in touch</button>
    </nav>
  );
});

export default Header;
