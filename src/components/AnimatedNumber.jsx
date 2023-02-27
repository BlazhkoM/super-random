import { animated, useSpring } from '@react-spring/web';

const AnimatedNumber = ({ num }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: num,
    delay: 200,
    config: { mass: 1, tension: 30, friction: 10 },
  });

  return (
    <animated.span>
      {number.to(n => Math.floor(n).toLocaleString())}
    </animated.span>
  );
};

export default AnimatedNumber;
