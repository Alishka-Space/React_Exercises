import  { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <h1>{feedback}</h1>
      <Count count={count} />
      <Button addOne={() => setCount(count + 1)} />
    </div>
  );
};

export default Counter;