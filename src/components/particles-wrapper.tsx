"use client";

import { useMeasure } from "@uidotdev/usehooks";
import { memo, useCallback } from "react";
import Particles from "react-particles";
import { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const particlesOptions: ISourceOptions = {
  style: {
    height: "100vh",
  },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 90,
  interactivity: {
    events: {},
    modes: {
      push: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  fullScreen: false,
  detectRetina: true,
};

export const ParticlesWrapper = memo(() => {
  const [ref, { width }] = useMeasure();
  const notMobile = width && width > 500;
  const particlesInit = useCallback(
    async (engine: Engine) => {
      if (notMobile) {
        await loadSlim(engine);
      }
    },
    [width],
  );

  return (
    <div ref={ref} className="z-0 h-full w-full">
      {notMobile && (
        <Particles
          className="absolute top-0 z-0 h-full w-full"
          init={particlesInit}
          id="tsparticles"
          options={particlesOptions}
        />
      )}
    </div>
  );
});

ParticlesWrapper.displayName = "ParticlesWrapper";
