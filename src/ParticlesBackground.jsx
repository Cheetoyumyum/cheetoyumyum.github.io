import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: {
            value: "#0a0f1a",
          },
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 2,
            random: true,
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 200,
              size: 4,
              duration: 2,
              opacity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}