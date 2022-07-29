import color from '../assets/scss/_color.scss';

export const backgroundParticle = {
    fpsLimit: 60,
    fullScreen: { enable: true },
    particles: {
        number: {
            value: 6
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 1
        },
        size: {
            value: 100,
            random: {
                enable: true,
                minimumValue: 70
            }
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'top',
            outModes: {
                default: 'bounce',
                top: 'destroy',
                bottom: 'none',
                right: 'destroy'
            }
        },
        collisions: {
            enable: true,
        },
    },
    interactivity: {
        detectsOn: 'canvas',
        events: {
            resize: true,
            onHover: {
                enable: true,
                mode: 'repulse',
            },
        },
        modes: {
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    style: {
        filter: 'blur(40px)'
    },
    themes: [
        {
            name: 'light',
            default: {
                value: true,
                mode: 'light'
            },
            options: {
                background: {
                    color: '#D9D9D9'
                },
                particles: {
                    color: {
                        value: [`${color.redParticle}`, `${color.greenParticle}`, `${color.darkGreenParticle}`, `${color.yellowParticle}`]
                    }
                }
            }
        },
    ],
    emitters: {
        direction: 'random',
        position: {
            x: 50,
            y: 150
        },
        rate: {
            delay: 0.7,
            quantity: 2
        },
        size: {
            width: 100,
            height: 0
        }
    }
    ,
    detectRetina: true,
};
