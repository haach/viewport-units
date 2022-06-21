import {css} from '@emotion/react';

export const App = () => {
  return (
    <div
      css={css`
        background-color: mintcream;
      `}
    >
      <header>
        <p>Hello Vite + React!</p>

        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
};
