import gsap from 'gsap';

const subHeadingAnimation = () => {
    const subheading = document.querySelector('.subheading');

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(subheading, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });

    tl.to(subheading, { color: 'blue', repeat: -1, yoyo: true });
};

export default subHeadingAnimation;
