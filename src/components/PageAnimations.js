import React from "react";
import { useSpring, animated } from "react-spring";

export const FormAnimation = ({ children }) => {
  //These are the styles that we want to apply when the entire page form loads
  const styles = useSpring({
    loop: false,
    from: { x: -500 },
    to: { x: 1 },
    config: { friction: 15, transition: 100 },
  });

  //We pass the styles here as props
  return <animated.div style={styles}>{children}</animated.div>;
};

export const InputAnimation = ({ children }) => {
  const styles = useSpring({
    loop: false,
    from: { y: -500 },
    to: { y: 1 },
    config: { friction: 15, transition: 100 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export const OtherAnimation = ({ children }) => {
  const styles = useSpring({
    loop: false,
    from: { y: 1000 },
    to: { y: 1 },
    config: {
      friction: 15,
      transition: 100,
    },
  });
  return <animated.div style={styles}>{children}</animated.div>;
};
