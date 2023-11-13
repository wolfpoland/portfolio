"use client";
import { useSpring, animated } from "@react-spring/web";
import React, { useState, useEffect, memo, FC } from "react";

type TypingAnimationProps = {
  text: string;
  speed?: number;
  dataTestId?: string;
};

export const TypingAnimation: FC<TypingAnimationProps> = memo(
  ({ text = "", speed = 100, dataTestId }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (displayedText.length < text.length) {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, [displayedText, text, speed]);

    const props = useSpring({
      opacity: displayedText ? 1 : 0,
      from: { opacity: 0 },
    });

    return (
      <animated.div
        data-testid={dataTestId}
        className="h-[24px] mb-1"
        style={props}
      >
        {displayedText}
      </animated.div>
    );
  },
);

TypingAnimation.displayName = "TypingAnimation";
