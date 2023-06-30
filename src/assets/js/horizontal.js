// 가로모드
const horizontal = document.querySelector('#horizontal');
const sections = gsap.utils.toArray('#horizontal > section');

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: horizontal,
    start: 'top top',
    end: () => '+=' + (horizontal.offsetWidth - innerWidth),
    pin: true,
    anticipatePin: 1,
    scrub: 1,
    markers: false,
    invalidateOnRefresh: true,
  },
});

// gsap.from('#section07 .site__title h2', {
//   y: 200,
//   duration: 2,
//   ease: 'elastic',
//   scrollTrigger: {
//     trigger: '#section07',
//     containerAnimation: scrollTween,
//     start: 'left center',
//     toggleActions: 'play none reverse none',
//     markers: true,
//     id: '#section07',
//   },
// });

// 타이틀 이미지 애니메이션
const titles = document.querySelectorAll('.site__title > h2');

titles.forEach(title => {
  gsap.from(title, {
    opacity: 0,
    y: -250,
    skewY: 20,
    stagger: 0.8,
    scrollTrigger: {
      trigger: title.closest('#horizontal > section'), // 해당 이미지가 속한 섹션을 트리거로 설정합니다.
      containerAnimation: scrollTween,
      start: 'left center',
      toggleActions: 'play none none none',
      markers: false,
    },
  });
});

// 목업 이미지 애니메이션
const images = document.querySelectorAll('.site__img img');

images.forEach(image => {
  gsap.from(image, {
    y: 500,
    duration: 0.5,
    ease: 'circ',
    scrollTrigger: {
      trigger: image.closest('#horizontal > section'), // 해당 이미지가 속한 섹션을 트리거로 설정합니다.
      containerAnimation: scrollTween,
      start: 'left center',
      toggleActions: 'play none none none',
      markers: false,
    },
  });
});

// 왼쪽 컨텐츠
const siteContLeft = document.querySelectorAll('.site__cont .site__left');

siteContLeft.forEach(left => {
  gsap.from(left, {
    x: 200,
    opacity: 0,
    duration: 1,
    ease: 'elastic',
    scrollTrigger: {
      trigger: left.closest('#horizontal > section'), // 해당 이미지가 속한 섹션을 트리거로 설정합니다.
      containerAnimation: scrollTween,
      start: 'left center',
      toggleActions: 'play none none none',
      markers: false,
    },
  });
});

// 오른쪽 컨텐츠
const siteContRight = document.querySelectorAll('.site__cont .site__right');

siteContRight.forEach(right => {
  gsap.from(right, {
    x: -300,
    opacity: 0,
    duration: 1,
    ease: 'elastic',
    scrollTrigger: {
      trigger: right.closest('#horizontal > section'), // 해당 이미지가 속한 섹션을 트리거로 설정합니다.
      containerAnimation: scrollTween,
      start: 'left center',
      toggleActions: 'play none none none',
      markers: false,
    },
  });
});
