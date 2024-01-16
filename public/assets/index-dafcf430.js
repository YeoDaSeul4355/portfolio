(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();gsap.registerPlugin(ScrollTrigger);const f=new Lenis({duration:2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e))});function m(e){f.raf(e),requestAnimationFrame(m)}requestAnimationFrame(m);document.getElementById("loading");document.getElementById("loading-text");window.addEventListener("load",y);function y(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart,r=document.getElementById("loading"),o=document.getElementById("loading-text"),s=0,t=100/e,i=setInterval(function(){s+=t,o.textContent=Math.round(s)+"%",s>=100&&(clearInterval(i),main.style.height="100%",s=100,o.textContent=Math.round(s)+"%",r.classList.add("hidden"),document.body.style.visibility="visible",setTimeout(function(){r.style.display="none"},500),h())})}function h(){const e=gsap.utils.toArray(".split");new SplitType(e,{type:"lines, words, chars"}),gsap.set("#section01 .sec01__bgImg .bgImg01",{autoAlpha:0,x:50}),gsap.set("#section01 .sec01__bgImg .bgImg02",{autoAlpha:0,x:-50}),gsap.set("#section01 .sec01__text .t1  .char",{autoAlpha:0,y:50}),gsap.set("#section01 .sec01__text .t2  .char",{autoAlpha:0,y:50}),gsap.set("#section01 .sec01__text .t3  .char",{autoAlpha:0,y:50}),gsap.set("#section01 .sec01__text .t4  .char",{autoAlpha:0,y:50}),gsap.set("#section01 .sec01__image .i1",{autoAlpha:0,yPercent:100}),gsap.set("#section01 .sec01__image .i2",{autoAlpha:0,top:100}),gsap.set("#section01 .sec01__image .i3",{autoAlpha:0,top:100}),setTimeout(()=>{let r=gsap.timeline();r.to("#section01 .sec01__bgImg .bgImg01",{autoAlpha:1,x:0,duration:.3,stagger:.1,ease:Power3.easeInOut},"ee +=0.1"),r.to("#section01 .sec01__bgImg .bgImg02",{autoAlpha:1,x:0,duration:.3,ease:Power3.easeInOut},"ee +=0.1"),r.to("#section01 .sec01__text .t1 .char",{duration:.5,autoAlpha:1,stagger:{amount:.51,y:0,from:"random"}},"-=0.5"),r.to("#section01 .sec01__text .t2 .char",{duration:.5,autoAlpha:1,stagger:{amount:.51,y:0,from:"random"}},"-=0.5"),r.to("#section01 .sec01__text .t3 .char",{duration:.5,autoAlpha:1,stagger:{amount:.51,y:0,from:"random"}},"-=0.5"),r.to("#section01 .sec01__text .t4 .char",{duration:.5,autoAlpha:1,stagger:{amount:.51,y:0,from:"random"}},"-=0.5"),r.to("#section01 .sec01__image .i1",{autoAlpha:1,yPercent:0,ease:"bounce.out"}),r.to("#section01 .sec01__image .i2",{autoAlpha:1,top:"20vw",ease:"bounce.out"}),r.to("#section01 .sec01__image .i3",{autoAlpha:1,top:"25vw",ease:"bounce.out"})},2e3)}gsap.set(".sec02__sticker .s1",{autoAlpha:0,scale:1,rotate:360});setTimeout(()=>{gsap.timeline().to(".sec02__sticker .s1",{autoAlpha:1,scale:1,rotate:0,ease:Power3.easeInOut})},3e3);gsap.to(".sec02__sticker .s1",{scale:1,rotate:180,duration:.1,ease:"none",scrollTrigger:{trigger:"#section02",start:"top 90%",end:"center 10%",scrub:1,markers:!1}});gsap.to(".sec02__sticker .s2",{opacity:0,scale:.5,rotate:180,duration:.1,ease:"none",scrollTrigger:{opacity:1,trigger:"#section02",start:"top 90%",end:"center 10%",scrub:1}});new SplitType(".sec02__text > div",{types:"lines, words, chars",tagName:"span"});gsap.from(".sec02__text > div .word",{y:"110%",opacity:0,rotationZ:"10",duration:.8,ease:"circ.out",stagger:.1,scrollTrigger:{trigger:".sec02__text",start:"top center",end:"+=400",scrub:1,opacity:1}});gsap.to(".sec02__image .i1",{scale:1,rotate:360,duration:.5,ease:"none",scrollTrigger:{trigger:"#section02",start:"top 90%",end:"bottom 10%",scrub:1,markers:!1}});gsap.to(".sec02__image .i2",{scale:1,rotate:-350,duration:.5,ease:"none",scrollTrigger:{trigger:"#section02",start:"top 90%",end:"bottom 10%",scrub:1}});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){const e=gsap.timeline().fromTo(".sec03__circle .circle01",{xPercent:-300,borderRadius:0,rotate:360},{xPercent:0,borderRadius:500,rotate:0},"first").fromTo(".sec03__circle .circle02",{xPercent:300,borderRadius:0},{xPercent:0,borderRadius:300},"first").fromTo(".sec03__circle .circle03",{xPercent:-400,borderRadius:20},{xPercent:0,borderRadius:200},"second").fromTo(".sec03__circle .circle04",{xPercent:600,borderRadius:0},{xPercent:0,borderRadius:100},"second").fromTo(".sec03__image .i1",{scale:0,rotate:360},{scale:1,rotate:0},"img").from(".sec03__image .i2",{xPercent:300},"img02");ScrollTrigger.create({animation:e,trigger:"#section03",start:"top top",end:"+=5500",scrub:1,pin:!0,markers:!1,anticipatePin:1})},"(max-width: 799px)":function(){const e=gsap.timeline().fromTo(".sec03__image .i1",{yPercent:200,autoAlpha:0},{yPercent:0,autoAlpha:1},"img").fromTo(".sec03__image .i2",{xPercent:300,autoAlpha:0},{xPercent:0,autoAlpha:1},"img");ScrollTrigger.create({animation:e,trigger:"#section02",start:"top top",end:"+=180",scrub:1,markers:!1})}});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){new SplitType(".sec04__title > div",{types:"lines, words, chars",tagName:"span"}),gsap.from(".sec04__title > div .line",{y:"120%",opacity:0,duration:.5,ease:"circ.out",stagger:.3,scrollTrigger:{trigger:"#section04",start:"top center",end:"+=800",scrub:1,opacity:1}})},"(max-width: 799px)":function(){new SplitType(".sec04__title > div",{types:"lines, words, chars",tagName:"span"}),gsap.from(".sec04__title > div .line",{y:"120%",opacity:0,duration:.5,ease:"circ.out",stagger:.3,scrollTrigger:{trigger:"#section04",start:"top center",end:"+=800",opacity:1}})}});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){const e=gsap.timeline();e.from(".sec04__image .i4",{y:-100,autoAlpha:0,ease:"circ",duration:.5}).from(".sec04__image .i1",{y:-100,autoAlpha:0,borderRadius:200}).fromTo(".sec04__image .i2",{x:-100,autoAlpha:0,rotate:0},{x:0,autoAlpha:1,rotate:10}).fromTo(".sec04__image .i6",{x:100,autoAlpha:0,rotate:0},{x:0,autoAlpha:1,rotate:-10}).from(".sec04__image .i3",{y:100,autoAlpha:0,rotate:10,ease:"elastic"}).from(".sec04__image .i5",{y:100,autoAlpha:0,rotate:-10,ease:"elastic"}),ScrollTrigger.create({animation:e,trigger:".sec04__image",start:"top top",end:"+=4000",scrub:1,pin:!0,anticipatePin:1,markers:!1})},"(max-width: 799px)":function(){}});new SplitType(".sec04__desc > p",{types:"lines, words, chars",tagName:"span"});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){gsap.from(".sec04__desc > p .line",{y:"120%",opacity:0,duration:.5,ease:"circ.out",stagger:.4,scrollTrigger:{trigger:".sec04__desc",start:"top top",end:"+=500",markers:!1,scrub:1,opacity:1}})},"(max-width: 799px)":function(){gsap.from(".sec04__desc > p",{y:"120%",opacity:0,duration:.5,ease:"circ.out",stagger:.4,scrollTrigger:{trigger:"#section04",start:"top top",end:"+=500",opacity:1}})}});TweenMax.to(".sec04__bgImg .bgI01",.3,{x:"+=10",rotation:"+=60",yoyo:!0,duration:.3,repeat:1/0});TweenMax.to(".sec04__bgImg .bgI01",.3,{x:"-=10",rotation:"-=30",yoyo:!0,duration:.3,repeat:1/0});TweenMax.to(".sec04__bgImg .bgI02",.3,{x:"-=10",rotation:"-=60",yoyo:!0,duration:.3,repeat:1/0});TweenMax.to(".sec04__bgImg .bgI02",.3,{x:"+=10",rotation:"+=30",yoyo:!0,duration:.3,repeat:1/0});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){gsap.set(".sec05__sticker .s1",{opacity:1,scale:1.5,rotate:0}),gsap.set(".sec05__sticker .s2",{opacity:1,scale:1.5,rotate:0}),gsap.set(".sec05__sticker .s3",{opacity:1,scale:1.5,rotate:0}),gsap.to(".sec05__sticker .s1",{duration:.1,opacity:1,scale:1,rotate:-30,y:"20vh",scrollTrigger:{trigger:".sec05__sticker .s3",scrub:1}}),gsap.to(".sec05__sticker .s2",{duration:.1,opacity:1,scale:1,rotate:30,y:"-5vh",scrollTrigger:{trigger:".sec05__sticker .s3",scrub:1}}),gsap.to(".sec05__sticker .s3",{duration:.1,opacity:1,scale:1,rotate:-30,y:"10vh",scrollTrigger:{trigger:".sec05__sticker .s3",scrub:1}})},"(max-width: 799px)":function(){gsap.set(".sec05__sticker .s1",{opacity:1,scale:1,rotate:0}),gsap.set(".sec05__sticker .s2",{opacity:1,scale:1,rotate:0}),gsap.set(".sec05__sticker .s3",{opacity:1,scale:1,rotate:0}),gsap.to(".sec05__sticker .s1",{duration:.1,opacity:1,scale:1,rotate:-30,y:"20vh",scrollTrigger:{trigger:".sec05__sticker .s3",scrub:1}}),gsap.to(".sec05__sticker .s2",{duration:.1,opacity:1,scale:1,rotate:30,y:"-5vh",scrollTrigger:{trigger:".sec05__sticker .s3",scrub:1}}),gsap.to(".sec05__sticker .s3",{duration:.1,opacity:1,scale:1,rotate:-30,y:"10vh",scrollTrigger:{trigger:".sec05__sticker .s3",scrub:1}})}});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){gsap.to(".skills__text",{scrollTrigger:{trigger:".infinite__item",scrub:1},x:-150}),gsap.to(".skills__text02",{scrollTrigger:{trigger:".infinite__item",scrub:1},x:150})},"(max-width: 799px)":function(){gsap.to(".skills__text",{scrollTrigger:{trigger:".infinite__item",scrub:1},x:-150}),gsap.to(".skills__text02",{scrollTrigger:{trigger:".infinite__item",scrub:1},x:150})}});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){const e=gsap.timeline();e.from(".sec06__left",{}),ScrollTrigger.create({animation:e,trigger:".sec06__left .left__img",start:"top 0%",end:"+=3000",scrub:1,pin:".sec06__left",markers:!1,anticipatePin:1,pinSpacing:!0});const r=gsap.timeline();r.from(".skill__box h2 img",{autoAlpha:0,y:-100,ease:"elastic",duration:.3,stagger:.2}),ScrollTrigger.create({animation:r,trigger:".skill__box",start:"top top",end:"+=3000",scrub:1,markers:!1,anticipatePin:1})},"(max-width: 799px)":function(){document.querySelectorAll(".skill__box").forEach((r,o)=>{const t=(o%2===0?"right":"left")==="left"?-100:100;gsap.fromTo(r,{x:t,scale:1,y:100,autoAlpha:0},{x:0,autoAlpha:1,scale:1,y:100,duration:.5,ease:"none",scrollTrigger:{trigger:".sec06__left",start:"top top",end:"+=300"}})}),gsap.from(".skill__box h2 img",{y:100,autoAlpha:0,duration:1,scrollTrigger:{trigger:".sec06__left",start:"top top",end:"+=300"}})}});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){const e=gsap.timeline().fromTo(".sec07__image .i1",{opacity:1,x:-200},{opacity:1,x:0});ScrollTrigger.create({animation:e,trigger:"#section07",start:"top 10%",end:"+=1500",scrub:1,markers:!1});const r=gsap.timeline().fromTo(".sec07__image .i2",{opacity:1,x:200},{opacity:1,x:0});ScrollTrigger.create({animation:r,trigger:"#section07",start:"top 10%",end:"+=1500",scrub:1,markers:!1})},"(max-width: 799px)":function(){const e=gsap.timeline().fromTo(".sec07__image .i1",{opacity:1,x:-100},{opacity:1,x:0});ScrollTrigger.create({animation:e,trigger:".skill__box",start:"top 10%",end:"+=200",scrub:1,markers:!1});const r=gsap.timeline().fromTo(".sec07__image .i2",{opacity:1,x:100},{opacity:1,x:0});ScrollTrigger.create({animation:r,trigger:".skill__box",start:"top 10%",end:"+=200",scrub:1,markers:!1})}});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){gsap.to(".sec07__textAni .skills__text",{scrollTrigger:{trigger:".sec07__textAni .infinite__item",scrub:1},x:-150}),gsap.to(".sec07__textAni .skills__text02",{scrollTrigger:{trigger:".sec07__textAni .infinite__item",scrub:1},x:150})},"(max-width: 799px)":function(){gsap.to(".sec07__textAni .skills__text",{scrollTrigger:{trigger:".sec07__textAni .infinite__item",scrub:1},x:-150}),gsap.to(".sec07__textAni .skills__text02",{scrollTrigger:{trigger:".sec07__textAni .infinite__item",scrub:1},x:150})}});new SplitType(".sec07__text > h2",{types:"lines, words, chars",tagName:"span"});new SplitType(".sec07__text > p",{types:"lines, words, chars",tagName:"span"});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){gsap.from(".sec07__text > h2 .char",{y:"120%",opacity:0,duration:.5,ease:"circ.out",stagger:.3,scrollTrigger:{trigger:".sec07__text",start:"top center",end:"+=400",scrub:1,opacity:1}}),gsap.from(".sec07__text > p .word",{y:"120%",opacity:0,duration:.5,ease:"circ.out",stagger:.3,scrollTrigger:{trigger:".sec07__text",start:"top center",end:"+=400",scrub:1,opacity:1}})},"(max-width: 799px)":function(){gsap.from(".sec07__text > h2 .char",{y:"120%",opacity:0,duration:.5,ease:"circ.out",stagger:.3,scrollTrigger:{trigger:"#section07",start:"top center",end:"+=400",scrub:1,opacity:1}}),gsap.from(".sec07__text > p .word",{y:"120%",opacity:0,duration:.5,ease:"circ.out",stagger:.3,scrollTrigger:{trigger:"#section07",start:"top center",end:"+=400",scrub:1,opacity:1}})}});const l=document.querySelector("#horizontal"),p=gsap.utils.toArray("#horizontal > section");let c=gsap.to(p,{xPercent:-100*(p.length-1),ease:"none",scrollTrigger:{trigger:l,start:"top top",end:()=>"+="+(l.offsetWidth-innerWidth),pin:!0,anticipatePin:1,scrub:1,markers:!1,invalidateOnRefresh:!0}});ScrollTrigger.matchMedia({"(min-width: 800px)":function(){document.querySelectorAll(".site__title > h2").forEach(t=>{gsap.from(t,{opacity:0,y:-250,skewY:20,stagger:.8,scrollTrigger:{trigger:t.closest("#horizontal > section"),containerAnimation:c,start:"left center",toggleActions:"play none none none",markers:!1}})}),document.querySelectorAll(".site__img img").forEach(t=>{gsap.from(t,{y:500,duration:.5,ease:"circ",scrollTrigger:{trigger:t.closest("#horizontal > section"),containerAnimation:c,start:"left center",toggleActions:"play none none none",markers:!1}})}),document.querySelectorAll(".site__cont .site__left").forEach(t=>{gsap.from(t,{x:200,opacity:0,duration:1,ease:"elastic",scrollTrigger:{trigger:t.closest("#horizontal > section"),containerAnimation:c,start:"left center",toggleActions:"play none none none",markers:!1}})}),document.querySelectorAll(".site__cont .site__right").forEach(t=>{gsap.from(t,{x:-300,opacity:0,duration:1,ease:"elastic",scrollTrigger:{trigger:t.closest("#horizontal > section"),containerAnimation:c,start:"left center",toggleActions:"play none none none",markers:!1}})})},"(max-width: 799px)":function(){document.querySelectorAll(".site__title").forEach(r=>{gsap.from(r,{opacity:0,y:-250,skewY:20,stagger:.8,scrollTrigger:{trigger:r.closest("#horizontal > section"),containerAnimation:c,start:"left center",toggleActions:"play none none none",markers:!1}})})}});new SplitType(".horizontal__text > h2",{types:"lines, words, chars",tagName:"span"});gsap.from(".horizontal__text > h2 .char",{y:"120%",opacity:0,duration:.8,ease:"circ.out",stagger:.3,scrollTrigger:{trigger:".horizontal__text",containerAnimation:c,start:"left center",end:"+=200",scrub:1,opacity:1}});new SplitType(".horizontal__text > p",{types:"lines, words, chars",tagName:"span"});gsap.from(".horizontal__text > p .word",{y:"120%",opacity:0,duration:.8,ease:"circ.out",stagger:.3,scrollTrigger:{trigger:".horizontal__text",containerAnimation:c,start:"left center",end:"+=200",scrub:1,opacity:1}});gsap.from(".sec08__title > h2.title01",{x:500,opacity:0,stagger:.8,duration:1,ease:"circ",scrollTrigger:{trigger:"#section08",start:"top top",end:"bottom bottom",scrub:1,markers:!1}});gsap.from(".sec08__title > h2.title02",{x:-500,opacity:0,stagger:.8,duration:1,ease:"circ",scrollTrigger:{trigger:"#section08",start:"top top",end:"bottom bottom",scrub:1,markers:!1}});const x=document.querySelectorAll(".hoverItem");x.forEach(e=>{const r=gsap.timeline({paused:!0});r.to(e,{duration:.5,opacity:0}),e.animation=r,e.addEventListener("mouseenter",function(){this.animation.play()})});gsap.from(".sec09__image .i3 img",{y:-400,duration:1.5,opacity:0,ease:"bounce",scrollTrigger:{trigger:"#section09",start:"top top",end:"bottom bottom",scrub:1}});gsap.from(".sec09__image .i3 h2",{y:100,duration:1.5,opacity:0,ease:"bounce",scrollTrigger:{trigger:"#section09",start:"top top",end:"bottom bottom",scrub:1}});gsap.from(".sec09__image .i1",{rotate:360,duration:1,scale:0,ease:"circ",scrollTrigger:{trigger:".sec09__image .i1",start:"top 80%",end:"bottom bottom",markers:!1,scrub:1}});gsap.from(".sec09__image .i2",{rotate:360,duration:1,scale:0,ease:"circ",scrollTrigger:{trigger:".sec09__image .i2",start:"top 80%",end:"bottom bottom",markers:!1,scrub:1}});gsap.from(".sec09__image .i4",{rotate:360,duration:1,scale:0,ease:"circ",scrollTrigger:{trigger:".sec09__image .i4",start:"top 80%",end:"bottom bottom",markers:!1,scrub:1}});gsap.from(".sec09__image .i5",{rotate:360,duration:1,scale:0,ease:"circ",scrollTrigger:{trigger:".sec09__image .i5",start:"top 80%",end:"bottom bottom",markers:!1,scrub:1}});console.clear();gsap.utils.toArray(".cardCont").forEach(function(e){gsap.set(e,{transformStyle:"preserve-3d",transformPerspective:1e3});const r=gsap.utils.selector(e),o=r(".cardFront"),s=r(".cardBack");gsap.set(s,{rotationY:-180});const t=gsap.timeline({paused:!0}).to(o,{duration:1,rotationY:180}).to(s,{duration:1,rotationY:0},0).to(e,{z:50},0).to(e,{z:0},.5);e.addEventListener("mouseenter",function(){t.play()}),e.addEventListener("mouseleave",function(){t.reverse()})});setTimeout(()=>{const e=o=>{gsap.set(o,{autoAlpha:0})},r=o=>{let s=0,t=0,i=o.dataset.delay;o.classList.contains("reveal_LTR")?(s=-100,t=0):o.classList.contains("reveal_BTT")?(s=0,t=200):o.classList.contains("reveal_TTB")?(s=0,t=-100):(s=100,t=0),gsap.fromTo(o,{autoAlpha:0,x:s,y:t},{autoAlpha:1,x:0,y:0,delay:i,duration:1.25,overwrite:"auto",ease:"expo"})};gsap.utils.toArray(".reveal").forEach(o=>{e(o),ScrollTrigger.create({trigger:o,start:"top bottom",end:"bottom top",markers:!1,onEnter:()=>{r(o)}})})});document.querySelectorAll(".button").forEach(e=>{let r=document.createElement("div"),o=e.textContent.trim().split("");function s(t,i,a){let n=document.createElement("span"),_=i>=a.length/2?-1:1,u=i>=a.length/2?a.length/2-i+(a.length/2-1):i,g=u/(a.length/2),d=1-g;n.innerHTML=t.trim()?t:"&nbsp;",n.style.setProperty("--move",g),n.style.setProperty("--rotate",d),n.style.setProperty("--part",_),r.appendChild(n)}o.forEach(s),e.innerHTML=r.outerHTML,e.addEventListener("mouseenter",t=>{e.classList.contains("out")||e.classList.add("in")}),e.addEventListener("mouseleave",t=>{e.classList.contains("in")&&(e.classList.add("out"),setTimeout(()=>e.classList.remove("in","out"),950))})});
