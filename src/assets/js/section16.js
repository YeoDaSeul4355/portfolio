setTimeout(() => {
  gsap.from('.move__bg .moveBg03 img', {
    y: -300,
    duration: 0.5,
    opacity: 0,
    ease: 'elastic',
    scrollTrigger: {
      trigger: '#section16',
      start: 'top top',
      end: 'bottom bottom',
      markers: false,
      scrub: 1,
    },
  });

  gsap.from('.move__bg .moveBg03 h2', {
    y: 100,
    duration: 0.5,
    opacity: 0,
    ease: 'elastic',
    scrollTrigger: {
      trigger: '#section16',
      start: 'top top',
      end: 'bottom bottom',
      markers: false,
      scrub: 1,
    },
  });

  gsap.from('.move__bg .moveBg01 img', {
    rotate: 360,
    duration: 1,
    scale: 0,
    ease: 'circ',
    scrollTrigger: {
      trigger: '.move__bg .moveBg01',
      start: 'top 80%',
      end: 'bottom bottom',
      markers: false,
      scrub: 1,
    },
  });
  gsap.from('.move__bg .moveBg02 img', {
    rotate: 360,
    duration: 1,
    scale: 0,
    ease: 'circ',
    scrollTrigger: {
      trigger: '.move__bg .moveBg02',
      start: 'top 80%',
      end: 'bottom bottom',
      markers: false,
      scrub: 1,
    },
  });
  gsap.from('.move__bg .moveBg04 img', {
    rotate: 360,
    duration: 1,
    scale: 0,
    ease: 'circ',
    scrollTrigger: {
      trigger: '.move__bg .moveBg04',
      start: 'top 80%',
      end: 'bottom bottom',
      markers: false,
      scrub: 1,
    },
  });
  gsap.from('.move__bg .moveBg05 img', {
    rotate: 360,
    duration: 1,
    scale: 0,
    ease: 'circ',
    scrollTrigger: {
      trigger: '.move__bg .moveBg05',
      start: 'top 80%',
      end: 'bottom bottom',
      markers: false,
      scrub: 1,
    },
  });
});
