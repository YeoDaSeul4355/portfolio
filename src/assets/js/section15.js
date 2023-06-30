setTimeout(() => {
  gsap.from('.scriptHead__inner > h2.title01', {
    x: 500,
    opacity: 0,
    stagger: 0.8,
    duration: 1,
    ease: 'circ',
    scrollTrigger: {
      trigger: '#section15 .bgImg',
      start: 'top top',
      end: 'bottom bottom',
      markers: false,
    },
  });
  gsap.from('.scriptHead__inner > h2.title02', {
    x: -500,
    opacity: 0,
    stagger: 0.8,
    duration: 1,
    ease: 'circ',
    scrollTrigger: {
      trigger: '#section15 .bgImg',
      start: 'top top',
      end: 'bottom bottom',
      markers: false,
    },
  });

  const hoverItems = document.querySelectorAll('.hoverItem');

  hoverItems.forEach(hoverItem => {
    const tl = gsap.timeline({ paused: true });
    tl.to(hoverItem, { duration: 0.5, opacity: 0 });
    hoverItem.animation = tl;

    hoverItem.addEventListener('mouseenter', function () {
      this.animation.play();
    });
  });

  // 카드 뒤집기
  console.clear();

  gsap.utils.toArray('.cardCont').forEach(function (card) {
    gsap.set(card, {
      transformStyle: 'preserve-3d',
      transformPerspective: 1000,
    });
    const q = gsap.utils.selector(card);
    const front = q('.cardFront');
    const back = q('.cardBack');

    gsap.set(back, { rotationY: -180 });

    const tl = gsap
      .timeline({ paused: true })
      .to(front, { duration: 1, rotationY: 180 })
      .to(back, { duration: 1, rotationY: 0 }, 0)
      .to(card, { z: 50 }, 0)
      .to(card, { z: 0 }, 0.5);
    card.addEventListener('mouseenter', function () {
      tl.play();
    });
    card.addEventListener('mouseleave', function () {
      tl.reverse();
    });
  });
});
