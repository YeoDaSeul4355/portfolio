// about h2 글짜 쪼개기
let typeSplit02 = new SplitType('.about02 > h2', {
  types: 'lines, words, chars',
  tagName: 'span',
});
// about h2
gsap.from('.about02 > h2 .line', {
  y: '120%',
  opacity: 0,
  duration: 0.5,
  ease: 'circ.out',
  stagger: 0.3,

  scrollTrigger: {
    trigger: '.about02',
    start: 'top center',
    end: '+=800',
    // markers: true,
    scrub: 1,
    opacity: 1,
  },
});

// 사진
const ani2 = gsap.timeline();
ani2
  .from('.about__image02 .aboutImg04', { y: -100, autoAlpha: 0, ease: 'circ', duration: 0.5 })
  .from('.about__image02 .aboutImg01', { y: -100, autoAlpha: 0, borderRadius: 200 })
  .fromTo('.about__image02 .aboutImg02', { x: -100, autoAlpha: 0, rotate: 0 }, { x: 0, autoAlpha: 1, rotate: 10 })
  .fromTo('.about__image02 .aboutImg06', { x: 100, autoAlpha: 0, rotate: 0 }, { x: 0, autoAlpha: 1, rotate: -10 })
  .from('.about__image02 .aboutImg03', { y: 100, autoAlpha: 0, rotate: 10, ease: 'elastic' })
  .from('.about__image02 .aboutImg05', { y: 100, autoAlpha: 0, rotate: -10, ease: 'elastic' });

ScrollTrigger.create({
  animation: ani2,
  trigger: '.about__image02',
  start: 'top top',
  end: '+=4000',
  scrub: 1,
  pin: true,
  anticipatePin: 1,
  markers: false,
});

const mediaQuery = window.matchMedia('(max-width: 600px)');
// about p 글짜 쪼개기
let typeSplit03 = new SplitType('.about__image03 > p', {
  types: 'lines, words, chars',
  tagName: 'span',
});
// about p
const aboutP = gsap.from('.about__image03 > p .line', {
  y: '120%',
  opacity: 0,
  duration: 0.5,
  ease: 'circ.out',
  stagger: 0.1,

  scrollTrigger: {
    trigger: '.about__image03',
    start: 'top top',
    end: '+=500',
    markers: false,
    scrub: 1,
    opacity: 1,
  },
});

// 사탕
TweenMax.to('.about__image03 .aboutImg01', 0.4, {
  x: '+=30',
  rotation: '+=60',
  yoyo: true,
  duration: 0.4,
  repeat: Infinity,
});
TweenMax.to('.about__image03 .aboutImg01', 0.4, {
  x: '-=30',
  rotation: '-=30',
  yoyo: true,
  duration: 0.4,
  repeat: Infinity,
});
// 고양이
TweenMax.to('.about__image03 .aboutImg02', 0.4, {
  x: '-=60',
  rotation: '-=60',
  yoyo: true,
  duration: 0.4,
  repeat: Infinity,
});
TweenMax.to('.about__image03 .aboutImg02', 0.4, {
  x: '+=30',
  rotation: '+=30',
  yoyo: true,
  duration: 0.4,
  repeat: Infinity,
});
