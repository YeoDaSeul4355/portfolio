const ani9 = gsap
  .timeline()
  .fromTo(
    '.about__image01 .circle01',
    { xPercent: -300, borderRadius: 0, rotate: 360 },
    { xPercent: 0, borderRadius: 500, rotate: 0 },
    'first',
  )
  .fromTo('.about__image01 .circle02', { xPercent: 300, borderRadius: 0 }, { xPercent: 0, borderRadius: 300 }, 'first')
  .fromTo(
    '.about__image01 .circle03',
    { xPercent: -300, borderRadius: 20 },
    { xPercent: 0, borderRadius: 200 },
    'second',
  )
  .fromTo('.about__image01 .circle04', { xPercent: 600, borderRadius: 0 }, { xPercent: 0, borderRadius: 100 }, 'second')
  .fromTo('.about__image01 .aboutImg01', { scale: 0, rotate: 360 }, { scale: 1.2, rotate: 0 }, 'img')
  .from('.about__image01 .aboutImg02', { xPercent: 300 }, 'img02')
  .from('.about__image01 .aboutImg03', { yPercent: 300 }, 'img');

ScrollTrigger.create({
  animation: ani9,
  trigger: '#section02',
  start: 'top top',
  end: '+=5500',
  scrub: 1,
  pin: true,
  markers: false,
  anticipatePin: 1,
});
