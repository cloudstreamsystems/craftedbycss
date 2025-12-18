"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

export default function ParticleCloud() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
          },
        },
        color: {
          value: ["#3730a3", "#06B6D4", "#ff4400"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.1, max: 0.3 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        size: {
          value: { min: 20, max: 80 },
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        links: {
          enable: false,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          bubble: {
            distance: 200,
            size: 100,
            duration: 2,
            opacity: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 pointer-events-none"
      />
    );
  }

  return null;
}
