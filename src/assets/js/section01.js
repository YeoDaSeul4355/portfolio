gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 2,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const targets = gsap.utils.toArray('.split');
let SplitClient = new SplitType(targets, { type: 'lines, words, chars' });

gsap.set('#section01 .sec01__bgImg .bgImg01', { autoAlpha: 0, x: 50 });
gsap.set('#section01 .sec01__bgImg .bgImg02', { autoAlpha: 0, x: -50 });

gsap.set('#section01 .sec01__text .t1  .char', { autoAlpha: 0, y: 50 });
gsap.set('#section01 .sec01__text .t2  .char', { autoAlpha: 0, y: 50 });
gsap.set('#section01 .sec01__text .t3  .char', { autoAlpha: 0, y: 50 });
gsap.set('#section01 .sec01__text .t4  .char', { autoAlpha: 0, y: 50 });
// gsap.set('#section01 .sec1-bg', { autoAlpha: 0 });
gsap.set('#section01 .sec01__image .i1', { autoAlpha: 0, yPercent: 100 });
gsap.set('#section01 .sec01__image .i2', { autoAlpha: 0, top: 100 });
gsap.set('#section01 .sec01__image .i3', { autoAlpha: 0, top: 100 });

setTimeout(() => {
  let tl = gsap.timeline();
  tl.to(
    '#section01 .sec01__bgImg .bgImg01',
    { autoAlpha: 1, x: 0, duration: 0.3, stagger: 0.1, ease: Power3.easeInOut },
    'ee +=0.1',
  );
  tl.to('#section01 .sec01__bgImg .bgImg02', { autoAlpha: 1, x: 0, duration: 0.3, ease: Power3.easeInOut }, 'ee +=0.1');
  tl.to(
    '#section01 .sec01__text .t1 .char',
    { duration: 0.5, autoAlpha: 1, stagger: { amount: 0.51, y: 0, from: 'random' } },
    '-=0.5',
  );
  tl.to(
    '#section01 .sec01__text .t2 .char',
    { duration: 0.5, autoAlpha: 1, stagger: { amount: 0.51, y: 0, from: 'random' } },
    '-=0.5',
  );
  tl.to(
    '#section01 .sec01__text .t3 .char',
    { duration: 0.5, autoAlpha: 1, stagger: { amount: 0.51, y: 0, from: 'random' } },
    '-=0.5',
  );
  tl.to(
    '#section01 .sec01__text .t4 .char',
    { duration: 0.5, autoAlpha: 1, stagger: { amount: 0.51, y: 0, from: 'random' } },
    '-=0.5',
  );
  //   tl.to('#section01 .sec1-bg', { autoAlpha: 1 });
  tl.to('#section01 .sec01__image .i1', { autoAlpha: 1, yPercent: 0, ease: 'bounce.out' });
  tl.to('#section01 .sec01__image .i2', { autoAlpha: 1, top: '20vw', ease: 'bounce.out' });
  tl.to('#section01 .sec01__image .i3', { autoAlpha: 1, top: '25vw', ease: 'bounce.out' });
}, 2000);
