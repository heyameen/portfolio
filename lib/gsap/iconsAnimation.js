import { gsap, Power3 } from 'gsap';

const iconsAnimation = () => {
    const icons = document.querySelectorAll('.icon');

    gsap.from(icons, {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 3,
        stagger: 0.2,
        ease: Power3.easeOut,
    });

    gsap.to(icons, {
        scale: 1.2,
        duration: 0.5,
        // repeat: -1,
        // yoyo: false,
        ease: Power3.easeInOut,
    });
};

export default iconsAnimation;
