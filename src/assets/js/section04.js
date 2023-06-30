setTimeout(() => {
  // 스티커 애니메이션
  gsap.set('.skill__image01 .skillImg01', { opacity: 1, scale: 2, rotate: 0 });
  gsap.set('.skill__image01 .skillImg02', { opacity: 1, scale: 2, rotate: 0 });
  gsap.set('.skill__image01 .skillImg03', { opacity: 1, scale: 2, rotate: 0 });

  gsap.to('.skill__image01 .skillImg01', {
    duration: 0.1,
    opacity: 1,
    scale: 1,
    rotate: -30,
    y: '20vh',
    scrollTrigger: {
      trigger: '.skill__image01 .skillImg03',
      scrub: 1,
    },
  });

  gsap.to('.skill__image01 .skillImg02', {
    duration: 0.1,
    opacity: 1,
    scale: 1,
    rotate: 30,
    y: '-5vh',
    scrollTrigger: {
      trigger: '.skill__image01 .skillImg03',
      scrub: 1,
    },
  });

  gsap.to('.skill__image01 .skillImg03', {
    duration: 0.1,
    opacity: 1,
    scale: 1,
    rotate: -30,
    y: '10vh',
    scrollTrigger: {
      trigger: '.skill__image01 .skillImg03',
      scrub: 1,
    },
  });

  // 글씨 교차 애니메이션
  let tl4 = gsap.timeline({ repeat: 0, repeatDelay: 0.2 });
  let tl5 = gsap.timeline({ repeat: 0, repeatDelay: 0.5 });
  let tl6 = gsap.timeline({ repeat: 0, repeatDelay: 0.5 });
  let tl7 = gsap.timeline({ repeat: 0, repeatDelay: 0.5 });

  tl4.fromTo(
    '.skills__text',
    {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: 'bottom',
    },
    {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'top',
      delay: 0.8,
      duration: 1,
    },
  );

  ScrollTrigger.matchMedia({
    '(min-width: 600px)': function () {
      //main rail 움직이기
      gsap.to('.skills__text', {
        scrollTrigger: {
          trigger: '.infinite__item',
          scrub: 1,
        },
        x: -150,
      });
    },
  });

  tl5.fromTo(
    '.skills__text02',
    {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: 'bottom',
    },
    {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'top',
      delay: 0.8,
      duration: 1,
    },
  );

  ScrollTrigger.matchMedia({
    '(min-width: 600px)': function () {
      //main rail 움직이기
      gsap.to('.skills__text02', {
        scrollTrigger: {
          trigger: '.infinite__item',
          scrub: 1,
        },
        x: 150,
      });
    },
  });

  tl6.fromTo(
    '.skills__text03',
    {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: 'bottom',
    },
    {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'top',
      delay: 0.8,
      duration: 1,
    },
  );

  ScrollTrigger.matchMedia({
    '(min-width: 600px)': function () {
      //main rail 움직이기
      gsap.to('.skills__text03', {
        scrollTrigger: {
          trigger: '.infinite__item',
          scrub: 1,
        },
        x: -300,
      });
    },
  });

  tl7.fromTo(
    '.skills__text04',
    {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)',
      transformOrigin: 'bottom',
    },
    {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'top',
      delay: 0.8,
      duration: 1,
    },
  );

  ScrollTrigger.matchMedia({
    '(min-width: 600px)': function () {
      //main rail 움직이기
      gsap.to('.skills__text04', {
        scrollTrigger: {
          trigger: '.infinite__item',
          scrub: 1,
        },
        x: 200,
      });
    },
  });

  // skill 핀 애니메이션
  const skillPin = gsap.timeline();
  skillPin.from('.mySkill .left', {});

  ScrollTrigger.create({
    animation: skillPin,
    trigger: '.mySkill .left .paint',
    start: 'top 0%',
    end: '+=3000',
    scrub: 1,
    pin: '.mySkill .left',
    markers: false,
    anticipatePin: 1,
    pinSpacing: false,
  });

  const ani3 = gsap.timeline();
  ani3.from('.skill__box h2 img', {
    autoAlpha: 0,
    y: -100,
    ease: 'elastic',
    duration: 0.3,
    stagger: 0.2, // 로고들 간의 간격 조절
  });

  ScrollTrigger.create({
    animation: ani3,
    trigger: '.right',
    start: 'top top',
    end: '+=3000',
    scrub: 1,
    markers: false,
    anticipatePin: 1,
  });
});
