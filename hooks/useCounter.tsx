import { useState, useEffect } from "react";

/**
 * First degree or linear polynomial: y = mx + b,
 * where m=Δy/Δx. For Δ use in the code a d will be used instead.
 * @interface useCounterProps
 * @property {number}    b - Initial value.
 * @property {number}    x - Initial step.
 * @property {number}   dy - Increments on value.
 * @property {number}   dx - Increments on steps.
 */
interface useCounterProps {
  b?: number;
  x?: number;
  dy?: number;
  dx?: number;
}

const useCounter: (props: useCounterProps) => [number, () => void] = (
  props: useCounterProps
) => {
  const dy = props.dy ? props.dy : 1;
  const dx = props.dx ? props.dx : 1;
  const m = dy / dx;
  const b = props.b ? props.b : 0;
  const [x, setX] = useState(props.x ? props.x : 0);
  const [y, setY] = useState(m * x + b);

  function toCount() {
    setX(prevX => {
      return prevX + dx;
    });
  }

  useEffect(() => {
    setY(m * x + b);
  }, [x]);

  return [y, toCount];
};

export default useCounter;
