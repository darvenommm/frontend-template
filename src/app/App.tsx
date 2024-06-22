import { useState } from 'react';

export const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <button onClick={(): void => setCount((count): number => count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={(): void => setCount((count): number => count + 1)}>+</button>
    </>
  );
};
