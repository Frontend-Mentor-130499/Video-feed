import {
  component$,
  Slot,
  useStyles$,
  useStylesScoped$,
} from '@builder.io/qwik';
import Header from '../components/header';

import styles from './layout.css?inline';

import slickStyles from 'slick-carousel/slick/slick.css?inline';
import themeStyles from 'slick-carousel/slick/slick-theme.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  useStyles$(slickStyles);
  useStyles$(themeStyles);

  return (
    <>
      <main class='container'>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
