"use client";

type AnimatedCounterProps = {
  from: number;
  to: number;
};

const AnimatedCounter = ({ from, to }: AnimatedCounterProps) => {
  // Render the final value only — animations removed intentionally
  return <span>{to.toLocaleString()}</span>;
};

export default AnimatedCounter;
