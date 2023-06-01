import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const aboutAnimation = () => {
    // Select the "About Me" section
    const aboutMeSection = document.querySelector('.about-me');

    gsap.fromTo(
        aboutMeSection,
        { opacity: 0, x: -50, delay: 5 },
        {
            opacity: 1,
            x: 0,
            duration: 2,
            scrollTrigger: {
                trigger: aboutMeSection,
                start: 'top 0%', // Adjusted to start at 10% of the section's height from the top
                end: 'bottom 20%',
                scrub: true,
            },
        },
    );
};

export default aboutAnimation;
