setTimeout(() => {
  // TweenMax.to('.myPic .myPic01', 0.02, {
  //   rotation: '+=2',
  //   yoyo: true,
  //   duration: 1,
  //   repeat: Infinity,
  // });
  // TweenMax.to('.myPic .myPic01', 0.02, {
  //   rotation: '-=2',
  //   yoyo: true,
  //   duration: 1,
  //   repeat: Infinity,
  // });

  // TweenMax.to('.myPic .myPic02', 0.02, {
  //   rotation: '+=2',
  //   yoyo: true,
  //   duration: 1,
  //   repeat: Infinity,
  // });
  // TweenMax.to('.myPic .myPic02', 0.02, {
  //   rotation: '-=2',
  //   yoyo: true,
  //   duration: 1,
  //   repeat: Infinity,
  // });

  // 이미지
  const img01 = gsap.timeline().fromTo('.myPic .myPic01', { opacity: 1, x: -200 }, { opacity: 1, x: 0 });

  ScrollTrigger.create({
    animation: img01,
    trigger: '#section05',
    start: 'top 10%',
    end: '+=1500',
    scrub: 1,
    markers: false,
  });

  const img02 = gsap.timeline().fromTo('.myPic .myPic02', { opacity: 1, x: 200 }, { opacity: 1, x: 0 });

  ScrollTrigger.create({
    animation: img02,
    trigger: '#section05',
    start: 'top 10%',
    end: '+=1500',
    scrub: 1,
    markers: false,
  });

  // 글씨 교차 애니메이션
  let tl8 = gsap.timeline({ repeat: 0, repeatDelay: 0.2 });
  let tl9 = gsap.timeline({ repeat: 0, repeatDelay: 0.5 });
  let tl10 = gsap.timeline({ repeat: 0, repeatDelay: 0.5 });

  tl8.fromTo(
    '.skill__image02 .skills__text',
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
      gsap.to('.skill__image02 .skills__text', {
        scrollTrigger: {
          trigger: '.skill__image02 .infinite__item',
          scrub: 1,
        },
        x: -150,
      });
    },
  });

  tl9.fromTo(
    '.skill__image02 .skills__text02',
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
      gsap.to('.skill__image02 .skills__text02', {
        scrollTrigger: {
          trigger: '.skill__image02 .infinite__item',
          scrub: 1,
        },
        x: 150,
      });
    },
  });

  tl10.fromTo(
    '.skill__image02 .skills__text03',
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
      gsap.to('.skill__image02 .skills__text03', {
        scrollTrigger: {
          trigger: '.skill__image02 .infinite__item',
          scrub: 1,
        },
        x: -300,
      });
    },
  });
});
