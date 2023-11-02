import { animated, useSpring } from "@react-spring/web";
import { FC, memo, useEffect, useRef, useState } from "react";
import { UtilityService } from "patryk/utils/utility";

export type AnimatedIconProps = {
  children: React.ReactNode;
};

export const AnimatedIcon: FC<AnimatedIconProps> = memo(({ children }) => {
  const mouseEnterRef = useRef(false);
  const [props, set] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useEffect(() => {
    const finishInterval = setInterval(() => {
      const randomInt = UtilityService.randomInt(1, 10);

      if (mouseEnterRef.current) {
        return;
      }

      if (randomInt === 5) {
        set({ scale: 1.5 });
      } else if (props.scale.to((scale) => scale !== 1)) {
        set({ scale: 1 });
      }
    }, 1000);

    return () => clearInterval(finishInterval);
  }, []);

  return (
    <animated.div
      style={{
        display: "inline-block",
        transform: props.scale.to((scale) => `scale(${scale})`),
      }}
      onMouseEnter={() => {
        set({ scale: 3 });
        mouseEnterRef.current = true;
      }}
      onMouseLeave={() => {
        set({ scale: 1 });
        mouseEnterRef.current = false;
      }}
    >
      {children}
    </animated.div>
  );
});

AnimatedIcon.displayName = "AnimatedIcon";
