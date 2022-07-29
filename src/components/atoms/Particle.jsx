import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import { backgroundParticle } from '../../config/configParticel';

const Particle = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };

    return (
        <Particles id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={backgroundParticle} />
    );
};

export default Particle;
