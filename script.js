function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}
lenis()


function loadingAnimation() {
    const loaders = [
        document.querySelector("#loader-1"),
        document.querySelector("#loader-2"),
        document.querySelector("#loader-3"),
        document.querySelector("#loader-4")
    ];

    // Loop through each loader
    loaders.forEach((loader, index) => {
        setTimeout(() => {
            loader.style.display = "block";  // Show loader
        }, 1000 + index * 500);  // Delay for each loader

        setTimeout(() => {
            loader.style.display = "none";  // Hide loader
        }, 1500 + index * 500);  // Delay for hiding each loader
    });

    // Move the loader container up after all loaders finish
    setTimeout(() => {
        gsap.to("#loader", { top: "-100%" });
    }, 3300);
}

loadingAnimation();

function page1ScrollAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1-wrapper",
            scroller: "body",
            start: "0% 0%",
            end: "130% 0%",
            pin: true,
            scrub: 2,
            // markers: true
        }
    })

    tl
        .to("#page1", {
            scale: 0.8,
            rotate: "-5deg",
        }, "a")
        .to("#page1 #line-1", {
            transform: "translateY(-10%)"
        }, "a")
        .to("#page1 #line-2", {
            transform: "translateY(-15%)"
        }, "a")
        .to("#page1 #line-3", {
            transform: "translateY(-25%)"
        }, "a")
        .to("#page1 #line-4", {
            transform: "translateY(-15%)"
        }, "a")
        .to("#page1 #line-5", {
            transform: "translateY(-10%)"
        }, "a")
        .to("#page1-wrapper #overlay", {
            backgroundColor: "#00000024"
        }, "a")
        .to("#page1-wrapper #heading h1", {
            opacity: 1,
            delay: 0.3
        }, "a")
}
page1ScrollAnimation();

function page2TextFillOnScroll() {
    const heads = document.querySelectorAll("#page2 h1")

    heads.forEach((head) => {
        var headText = head.textContent;
        var splittedText = headText.split("");

        var clutter = "";
        splittedText.forEach(function (char) {
            if (char === " ") {
                clutter += char;
            } else {
                clutter += `<span>${char}</span>`;
            }
        });

        head.innerHTML = clutter;
    })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "-30% 30%",
            end: "50% 30%",
            scrub: 2,
            // markers: true
        }
    })

    tl
    .to("#rounded-div-wrapper" ,{
        height: 0,
        marginTop: 0,
        duration: 3
    })
    .to("#page2 #heading-1 h1 span", {
        color: "#0D0D11",
        stagger: 0.1,
    })
    .to("#page2 #heading-2 h1 span", {
        color: "#0D0D11",
        stagger: 0.1,
        delay: -2
    })
}
page2TextFillOnScroll();



function page3ScrollAnimation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "0% 0%",
            end: "500% 0%",
            scrub: 2,
            pin: true,
            // markers: true
        }
    });

    tl3
    .to("#page3 i", {
        rotate: "360deg"
    }, "b")
    .to("#page3 #section-container", {
        transform: "translateY(-360%)"
    }, "b")
    .to("#page3 #star", {
        x: "50vw",
        rotate: "180deg",
        xPercent: -100
    });
}

page3ScrollAnimation();




function page4ScrollAnimation() {
    var heads = document.querySelectorAll("#page4 h1")

    heads.forEach((head) => {
        var headText = head.textContent;
        var splittedText = headText.split("");
        
        var clutter = "";
        splittedText.forEach(function(char) {
            if(char === " ") {
               clutter += char;
             } else {
               clutter += `<span>${char}</span>`;
             }
        });
        
        head.innerHTML = clutter;
    })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "0% 30%",
            end: "50% 30%",
            scrub: 2,
            // markers: true
        }
    })

    tl
    .to("#page4 h1 span", {
        color: "#0D0D11",
        stagger: 0.1,
    })
    .to("#page4 h1 span", {
        color: "#0D0D11",
        stagger: 0.1,
        delay: -2
    })

}
page4ScrollAnimation();




function page5ScrollAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            scroller: "body",
            start: "0% 0%",
            end: "400% 0%",
            scrub: 2,
            pin: true,
            // markers: true
        }
    })

    tl
    .to("#pg5-open-container", {
        clipPath: `polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)`,
    },"a")
    .from("#page5 #head-1", {
        top: "50%",
        left: "44%",
        transform: "translate(-50%, -50%)"
    },"a")
    .from("#page5 #head-2", {
        top: "50%",
        left: "56%",
        transform: "translate(-50%, -50%)"
    },"a")
    .to("#pg5-inner-container", {
        transform: "translateY(-705%)",
        duration: 8
    })
}
page5ScrollAnimation();