import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './how.css?inline';

type Info = {
  heading: string;
  description: string;
};

const How = component$(() => {
  useStylesScoped$(styles);

  const info: Info[] = [
    {
      heading: 'Connect',
      description:
        'To get started, upload your videos, add audio, and product media to the platform',
    },
    {
      heading: 'Customize',
      description:
        'Choose from a wide range of icons, styles, actions, and layouts to customize videos to your preference',
    },
    {
      heading: 'Integrate',
      description:
        'Add video feed to your website with a few lines of code or integrate the Rizzle SDK for iOS and Android apps',
    },
  ];

  return (
    <div class='wrapper'>
      <h2>How it works</h2>
      <div className='cards'>
        {info.map((card, index) => (
          <div className='card' key={index}>
            <h3>{index + 1}</h3>
            <h4>{card.heading}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className='background' />
    </div>
  );
});

export default How;
