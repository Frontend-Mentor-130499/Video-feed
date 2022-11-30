import { component$ } from '@builder.io/qwik';

import Hero from '~/components/hero';
import How from '~/components/how';
import Connect from '~/components/connect';
import Feed from '~/components/feed';
import Insights from '~/components/insights';

const Index = component$(() => {
  return (
    <>
      <Hero />
      <How />
      <Connect />
      <Feed />
      <Insights />
    </>
  );
});

export default Index;
