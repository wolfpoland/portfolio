'use client';
import { useSpring, animated } from '@react-spring/web';
import React, { useState, useEffect } from 'react';

export const TypingAnimation = ({ text = "", speed = 100 }) => {
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

  return <animated.div className="h-[24px] mb-1" style={props}>{displayedText}</animated.div>;
};
