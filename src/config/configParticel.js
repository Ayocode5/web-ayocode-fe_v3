export const backgroundParticle = {
  fpsLimit: 60,
  fullScreen: { enable: true },
  particles: {
    number: {
      value: 5,
      density: {
        enable: false,
      },
    },
    Zindex: {
      value: -99990,
    },
    opacity: {
      value: 0.5,
      anim: {
        enable: false,
      },
    },
    shape: {
      type: ['polygon'],
      stroke: {
        width: 4,
        random: true,
        color: ['#371B58', '#4FD3C4'],
      },
      polygon: {
        nb_sides: 4,
        fill: false,
      },
    },
    size: {
      value: 140,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 100,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      straight: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
      },
    },
  },
  detectRetina: true,
};
