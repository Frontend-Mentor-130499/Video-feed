import {
  component$,
  Signal,
  useContext,
  useStylesScoped$,
} from '@builder.io/qwik';

import { FeedContext } from '..';

import { StateType } from '..';

import styles from './UiButton.css?inline';

type PageProps = {
  label: string;
  padding: string;
  background: string;
  width: string;
  video?: Signal<HTMLVideoElement>;
  border?: string;
  fontSize?: string | number;
};

const UiButton = component$<PageProps>(
  ({ label, padding, width, background, video, border, fontSize }) => {
    useStylesScoped$(styles);
    const store = useContext(FeedContext) as StateType;
    const styleObj = {
      padding,
      width,
      background,
      border,
      fontSize,
    };

    return (
      <button
        className={`bold-600 btn`}
        style={styleObj}
        onClick$={() => {
          store.isPlaying = false;
          store.isGetInTouchActive = true;
          video?.value.pause();
        }}
      >
        {label}
      </button>
    );
  }
);

export default UiButton;
