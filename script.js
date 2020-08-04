gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from('nav img', {
    y: -30,
    opacity: 0,
    ease: 'expo.easeInOut',
    delay: .3
})
.from('nav #links a', {
    stagger: .2,
    y: -40,
    opacity: 0,
    ease: 'expo.easeInOut',
})
.from('nav>a', {
    y: -30,
    opacity: 0,
    ease: 'expo.easeInOut',
})
.from('#main .elem', {
    stagger: .2,
    y: 30,
    opacity: 0,
    ease: 'expo.easeInOut',
})
.from('#bigImage img', {
    scale: 1.05,
    y: 30,
    opacity: 0,
    ease: 'expo.easeInOut',
})


gsap.from('#entryLevel .entrelem', {
    scrollTrigger: {
        trigger: '#entryLevel',
        toggleActions: "play pause resume reverse",
    },
    stagger: .4,
    y: 30,
    duartion: 2,
    opacity: 0,
    ease: 'expo.easeInOut'
})

gsap.from('#courseBanner .crselem', {
    scrollTrigger: {
        trigger: '#courseBanner',
        toggleActions: "play pause resume reverse",
    },
    stagger: .4,
    y: 50,
    duartion: 2,
    delay: 2,
    opacity: 0,
    ease: 'expo.easeInOut'
})

gsap.from('#brandswork .brelem', {
    scrollTrigger: {
        trigger: '#brandswork',
        toggleActions: "play pause resume reverse",
    },
    stagger: .2,
    y: 50,
    duartion: 2,
    opacity: 0,
    ease: 'expo.easeInOut'
})

gsap.from('#showcaseGreen .shwelem', {
    scrollTrigger: {
        trigger: '#showcaseGreen',
        toggleActions: "play pause resume reverse",
    },
    stagger: .4,
    x: -50,
    opacity: 0,
    ease: 'expo.easeInOut'
})


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#statstext',
        toggleActions: "play pause resume reverse",
    }
});

tl2.from('#statstext .sttselem', {
    stagger: .4,
    y: 30,
    opacity: 0,
    ease: 'expo.easeInOut'
})
.from('#cards .card', {
    stagger: .3,
    y: 30,
    opacity: 0,
    ease: 'expo.easeInOut'
})
.from('#cards .card img', {
    stagger: .3,
    x: 100,
    opacity: 0,
    ease: 'expo.easeInOut'
})