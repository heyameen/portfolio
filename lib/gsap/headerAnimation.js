import gsap from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const headerAnimation = () => {
    const headerText = "Ameen Alade.";
    const textChars = headerText.split('');
    const header = document.querySelector('.header-text');


    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    textChars.forEach((char, index) => {
        const charElement = document.createElement('span');
        charElement.textContent = char;
        charElement.style.opacity = 0;
        header.appendChild(charElement);

        tl.to(charElement, { opacity: 1, duration: 0.5, stagger: 0.05 }, `-=${0.5 - index * 0.02}`);

        tl.to(charElement, { y: -50, duration: 0.7, repeat: -1, yoyo: true }, `-=${0.5 - index * 0.02}`);
    });

    tl.to('.header-text span', { color: '#9ca3af', repeat: -1, yoyo: true });    
};

export default headerAnimation;
