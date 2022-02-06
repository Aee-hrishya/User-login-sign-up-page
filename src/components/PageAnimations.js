import React from "react";
import { useSpring, animated } from "react-spring";

export const FormAnimation = ({ children }) => {
  //These are the styles that we want to apply when the entire page form loads
  const styles = useSpring({
    loop: false,
    from: { x: -500 },
    to: { x: 1 },
    delay: 200,
    config: { friction: 15, transition: 100 },
  });

  //We pass the styles here as props
  return <animated.div style={styles}>{children}</animated.div>;
};

//Animaton for the main heading
export const HeadingAnimation = ({ children }) => {
  const styles = useSpring({
    loop: false,
    from: { x: 5000 },
    to: { x: 1 },
    delay: 500,
    config: {
      friction: 40,
      transition: 100,
    },
  });
  return <animated.div style={styles}>{children}</animated.div>;
};

export const DescriptionAnimation = ({ children }) => {
  const styles = useSpring({
    loop: false,
    from: { x: -5000 },
    to: { x: 1 },
    delay: 600,
    config: {
      friction: 40,
      transition: 100,
    },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

//The animation for all the inputs
export const InputAnimation = ({ children }) => {
  const styles = useSpring({
    loop: false,
    from: { y: -5000 },
    to: { y: 1 },
    delay: 700,
    config: { transition: 20, friction: 15 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

//The animation for the buttons
export const OtherAnimation = ({ children }) => {
  const styles = useSpring({
    loop: false,
    from: { y: 1000 },
    to: { y: 1 },
    delay: 1500,
    config: {
      friction: 15,
      bounce: 2,
    },
  });
  return <animated.div style={styles}>{children}</animated.div>;
};
