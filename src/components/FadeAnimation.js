import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export default FadeAnimation = (props) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, [animation]);

  return (
    <Animated.View
      style={{
        ...props.style,
        elevation: 0,
        opacity: animation,
      }}
    >
      {props.children}
    </Animated.View>
  );
};
