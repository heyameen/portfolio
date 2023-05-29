import gsap from 'gsap';

const headerParagraphAnimation = () => {
    const paragraph = document.querySelector('.paragraph');

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.from(paragraph, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 2.5,
    });
};

export default headerParagraphAnimation;
