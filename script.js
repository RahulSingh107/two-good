const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation() {
    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")

    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })

    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    });
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 60,
            top: dets.y - 60
        })
    })
};

videoconAnimation();

function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 80,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2,
        ease: "elastic.out(1,0.8)"

    })
    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1,
        duration: 0.6,

    })
};

loadingAnimation();

