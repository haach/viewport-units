import {css} from '@emotion/react';
import {useState} from 'react';
import Headroom from 'react-headroom';

const options = ['vh', 'vmin', 'vmax', 'lvh', 'svh', 'dvh'];

export const App = () => {
  const [color, setColor] = useState<'salmon' | 'darkseagreen'>('salmon');
  const [unit, setUnit] = useState<string>('vh');
  return (
    <div
      css={css`
        background-color: ${color};
        display: flex;
        flex-direction: column;
        height: 100vh;
        height: ${`100${unit}`};
      `}
    >
      <Headroom
        css={css`
          background-color: #eee;
          flex: 0 0 auto;
          padding: 10px 20px;
        `}
      >
        <header>
          <p>A header bar that hides on scroll</p>
        </header>
      </Headroom>
      <div
        css={css`
          flex: 1 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <p>This should take the available height</p>
        <p>Current unit: {unit}</p>
        <select onChange={(e) => setUnit(e.target.value)}>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <footer
        css={css`
          flex: 0 0 auto;
          padding: 10px 20px;
          background-color: #eee;
        `}
      >
        <p>Always in the bottom</p>
        <button onClick={() => setColor(color === 'salmon' ? 'darkseagreen' : 'salmon')}>Change bg color</button>
      </footer>
    </div>
  );
};
