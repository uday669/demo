function startTag() {
    gsap.from("#text-A span", {
        transformOrigin: "50% 100%",
        rotateX: 180,
        duration: 1,
        opacity: 0,
        delay: 0
    });



    gsap.from("#SVG-1", {
        x: -500,
        delay: 2.8,
        duration: 0.4, // Set duration for this animation
        rotate: -360,
        repeat: 0
    });


    let NewSvg = gsap.timeline({ repeat: -1 }); // Repeat indefinitely


    NewSvg.to("#SVG-1", {
        rotate: -270, // Rotate 360 degrees
        duration: 0.2, // Duration of 2 seconds
    });

    NewSvg.to("#SVG-1", {
        duration: 2 // Duration of the pause
    });


    gsap.from("#SVG-2", {
        visibility: "visible",
        duration: 1.2,
        scale: 0,
        delay: 1

    })
    gsap.to("#SVG-2", {
        visibility: "visible",
        duration: 2,
        y: -350,
        opacity: 0,
        delay: 2

    })
    gsap.from("#textAtyp", {
        visibility: "visible",
        duration: 1,
        y: 80,
        opacity: 0,
        delay: 2.3

    })
    gsap.to("#textAtyp", {
        delay: 2.9,
        transform: "rotateY(90deg)",
        delay: 3.6,

    })

    gsap.to("#menText", {
        visibility: "visible",
        transform: "rotateY(0deg)",
        delay: 4,
    })
}



function svgmia() {

    let Mtext = gsap.timeline();

    gsap.from("#MText", {
        opacity: 0,
        x: -150,
        duration: 0.8,
        visibility: "visible ",
        delay: 5.4,

    })
    Mtext.from("#IText", {
        delay: 1.1,
        y: -200,
        opacity: 0,
        duration: 0.5,
        delay: 3,
    })

    Mtext.to("#svg-3", {
        // x: 130,
        rotate: 360, // Rotate 360 degrees
        duration: 1,
        scale: 1,
        visibility: "visible "
    });


    Mtext.to("#svg-3", {
        duration: 0.8 // Duration of the pause
    });


    Mtext.to("#svg-3", {
        x: 165,
        rotate: 720, // Rotate another 360 degrees (total 720)
        duration: 1 // Duration of 2 seconds
    });
    // Mtext.from("#MText", {
    //     opacity: 0,
    //     x: -150,
    //     duration: 0.1,
    //     visibility: "visible "

    // })


    Mtext.to("#svg-3", {
        x: 165,
        y: 140,
        rotate: 720, // Rotate another 360 degrees (total 720)
        duration: 0.6,
        opacity: 0,
    });
    gsap.from("#ATage", {
        x: 0,
        y: 140,
        duration: 0.6,
        opacity: 0,
        delay: 6.5,
    });

}


function fontTE() {
    let TwoText = gsap.timeline();
    TwoText.to("#TextOne", {
        y: -180,
        duration: 0.4,
        visibility: "visible ",
        delay: 3,
    })
    TwoText.to("#TextOne", {
        duration: 1,
        visibility: "visible ",
    })
    TwoText.to("#TextOne", {
        y: -300,
        duration: 0.6,
        opacity: 0,
    })
    gsap.from("#TextFont", {
        delay: 4.6,
        y: 180,
        opacity: 0,
    })


    let THreeText = gsap.timeline();
    THreeText.to("#TextTwo", {
        y: -180,
        delay: 3.4,
        duration: 0.4,
        visibility: "visible ",
    })
    THreeText.to("#TextTwo", {
        duration: 0.3,
        visibility: "visible ",
    })
    THreeText.to("#TextTwo", {
        y: -350,
        duration: 0.5,
        opacity: 0,
    })
    gsap.from("#TextEvent", {
        delay: 4.8,
        y: 180,
        opacity: 0,
    })

}

function A() {
    let Atext = gsap.timeline();
    Atext.to("#Atwo", {
        // y: 80
        scale: 1,
        delay: 2.5


    })
    Atext.to("#Atwo", {
        y: 200,
        delay: 0.6,
        duration: 1,
        // opacity: 0,
    })
    Atext.to("#Atwo", {
        y: 0,
        delay: 1,
        // opacity: 0,
    })

    let AtextSecond = gsap.timeline();
    AtextSecond.to("#aOne", {
        y: -120,
        visibility: "hidden",
        delay: 0,
        opacity: 0,
        delay: 2.5
    })
    AtextSecond.to("#aOne", {
        y: 0,
        visibility: "visible",
        delay: 0.7,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
    })
    AtextSecond.to("#aOne", {
        y: -220,
        duration: 0.5,
        delay: 0.8,
        opacity: 0,
    })
}

function M() {
    let Atext = gsap.timeline();
    Atext.to("#Ntwo", {
        // y: 80
        scale: 1,
        delay: 3.5,

    })
    Atext.to("#Ntwo", {
        y: 200,
        delay: 0.6,
        duration: 1,

        // opacity: 0,
    })
    Atext.to("#Ntwo", {
        y: 0,
        delay: 1,

        // opacity: 0,
    })

    let AtextSecond = gsap.timeline();
    AtextSecond.to("#nOne", {
        y: -120,
        visibility: "hidden",
        opacity: 0,
        delay: 3.5,
    })
    AtextSecond.to("#nOne", {
        y: 0,
        visibility: "visible",
        delay: 0.7,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
    })
    AtextSecond.to("#nOne", {
        y: -220,
        duration: 0.5,
        delay: 0.8,
        opacity: 0,
    })
    gsap.from("#YText", {
        scale: 0,
        duration: 1.5,
        transform: "rotateY(180deg)",
        delay: 5

    })
    let SvgImg = gsap.timeline();

    // Stroke animation
    SvgImg.to("#bolt-path", {
        duration: 4,
        delay: 0.5,
        strokeDashoffset: 0,
        ease: "linear",
        visibility: "visible"
    });

    // Fill animation, starts after the stroke animation completes
    SvgImg.to("#bolt-path", {
        duration: 1,
        fill: "green",
        stroke: "#c5ba9a",
        ease: "linear",
        visibility: "visible"
    }, "-=3");
    SvgImg.to(".SvgGrenn", {
            duration: 1,
            transform: "rotateY(90deg)",
            ease: "none",
            visibility: "visible"
        })
        // SvgImg.from(".SvgGrenn", {
        //     y: -220,
        //     duration: 1,
        //     ease: "bounce.out",
        //     delay: 4,
        //     visibility: "visible"

    // })
    // SvgImg.to(".SvgGrenn", {
    //     duration: 1,
    //     transform: "rotateY(90deg)",
    //     ease: "none",
    //     visibility: "visible"
    // })
    SvgImg.from("#TtextFont", {
        duration: 1,
        transform: "rotateY(90deg)",
        ease: "none"
    })

    gsap.from("#Htext", {
        duration: 2.5,
        y: -220,
        ease: "elastic.out(1,0.3)",
        delay: 7,
    })

}

function letsThreeFont() {
    gsap.from("#TopIText", {
        opacity: 0,
        delay: 5
    })
    let repeFont = gsap.timeline({ repeat: -1 });
    repeFont.to("#TopIText", {
        duration: 1.5,
        rotateX: -720,
        delay: 5
    })
    repeFont.to("#TopIText", {
        duration: 4,
    })
    repeFont.to("#TopIText", {
        duration: 1.5,
        delay: 0,
        rotateX: 180
    })
    repeFont.to("#TopIText", {
        duration: 4,
    })
    repeFont.to("#TopIText", {
        duration: 1.5,
        delay: 0,
        rotateX: 0
    })


    gsap.from("#seconNText", {
        opacity: 0,
        x: -250,
        delay: 6,
        duration: 2.5,
        ease: "elastic.out(1,0.3)",
    })
    gsap.from("#seconGText", {
        opacity: 0,
        rotate: 180,
        delay: 6.5,
        duration: 3,
        ease: "elastic.out(1,0.3)",

    })
}

function imgNimsen() {
    let imgSvg = gsap.timeline({ repeat: -1 });
    imgSvg.from(".Htextimg", {
        x: 40,
        y: 60,
        rotate: 40,
        delay: 8,
        visibility: "visible",
        opacity: 0,
    })
    imgSvg.to(".Htextimg", {
        duration: 4,
        visibility: " visible"
    })
    imgSvg.to(".Htextimg", {
        x: 40,
        y: 60,
        rotate: 40,
        visibility: " visible"
    })
    imgSvg.to(".Htextimg", {
        duration: 4,
        visibility: " visible"
    })
    imgSvg.to(".Htextimg", {
        x: 70,
        y: 0,
        rotate: 360,
        visibility: " visible"

    })
    imgSvg.to(".Htextimg", {
        duration: 4,
        visibility: " visible"
    })
    imgSvg.to(".Htextimg", {
        x: 40,
        y: 60,
        rotate: 40,
        visibility: " visible"

    })
    imgSvg.to(".Htextimg", {
        duration: 4,
        visibility: " visible"
    })

}


function buttonsvg() {
    let butoncursr = document.querySelector(".bitton-get");

    // Flag to prevent multiple animations from running simultaneously
    let isAnimating = false;

    // Function to get a random value within a specified range
    function getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    }

    butoncursr.addEventListener("mouseover", (event) => {
        if (event && !isAnimating) {
            // Set the flag to true to prevent overlapping animations
            isAnimating = true;

            // Function to reset the flag
            function resetAnimation() {
                isAnimating = false;
            }

            // Animation for #TwobutText
            gsap.timeline()
                .to("#TwobutText", {
                    x: getRandomValue(10, 30), // move to a random position
                    duration: 0.5,
                })
                .to("#TwobutText", {
                    duration: 0.5
                })
                .to("#TwobutText", {
                    x: 0, // move back to the original position
                    duration: 0.5,
                })

            // Animation for #butText
          
                gsap.timeline()
                    .to("#butText", {
                        x: getRandomValue(-30, -10), // move to a random position
                        duration: 0.5,
                    })
                    .to("#butText", {
                        duration: 0.5
                    })
                    .to("#butText", {
                        x: 0, // move back to the original position
                        duration: 0.5,
                    })
          

            // Animation for #firstBtnSvg
       

                let svone = gsap.timeline()
                svone.to("#firstBtnSvg", {
                        visibility: "visible",
                        y: getRandomValue(-150, -50),
                        x: getRandomValue(-80, 30),
                        duration: 1,
                        scale: getRandomValue(1, 2),
                        rotate: getRandomValue(-360, -180),
                        onStart: function() {
                            gsap.set("#firstBtnSvg", { css: { zIndex: 1 } });
                        }
                    })
                    svone.to("#firstBtnSvg", {
                        visibility: "visible",
                        y: 0,
                        x: getRandomValue(-80, 20),
                        ease: "power4.out",
                        duration: 0.8,
                        scale: 0,
                        rotate: 0,
                        onStart: function() {
                            gsap.set("#firstBtnSvg", { css: { zIndex: -1 } });
                        }
                    })
                    svone.to("#firstBtnSvg", {
                        x:0,
                        duration: 0.8,
                    })
            

            // Animation for #TwoBtnSvg
            let svtwo = gsap.timeline()
            
                 svtwo.to("#TwoBtnSvg", {
                        visibility: "visible",
                        y: getRandomValue(-200, -100),
                        x: getRandomValue(-30, 30),
                        duration: 1,
                        scale: getRandomValue(1, 1.5),
                        rotate: getRandomValue(-360, -200),
                        onStart: function() {
                            gsap.set("#TwoBtnSvg", { css: { zIndex: 1 } });
                        }
                    })
                    svtwo.to("#TwoBtnSvg", {
                        visibility: "visible",
                        y: 0,
                        x: getRandomValue(-60, 60),
                        duration: 2.5,
                        ease: "power4.out",
                        scale: 0,
                        rotate: 0,
                        onStart: function() {
                            gsap.set("#TwoBtnSvg", { css: { zIndex: -1 } });
                        }
                    })
                    svtwo.to("#TwoBtnSvg", {
                        x:0,
                        duration: 0.8,
                    })
          

            // Animation for #threeBtnSvg
            let svthree = gsap.timeline()


            svthree.to("#threeBtnSvg", {
                        visibility: "visible",
                        y: getRandomValue(-120, -80),
                        x: getRandomValue(-30, 30),
                        duration: 1,
                        scale: getRandomValue(1, 2),
                        rotate: getRandomValue(-360, -180),
                        onStart: function() {
                            gsap.set("#threeBtnSvg", { css: { zIndex: 1 } });
                        }
                    })
                    svthree.to("#threeBtnSvg", {
                        visibility: "visible",
                        y: 0,
                        x: getRandomValue(-40, 40),
                        duration: 2.5,
                        ease: "power4.out",
                        scale: 0,
                        rotate: 0,
                        onStart: function() {
                            gsap.set("#threeBtnSvg", { css: { zIndex: -1 } });
                        }
                    })
                    svthree.to("#threeBtnSvg", {
                        x:0,
                        duration: 0.8,
                    })
           

            // Animation for #fourBtnSvg
            let svfour = gsap.timeline()

            svfour.to("#fourBtnSvg", {
                        visibility: "visible",
                        y: getRandomValue(-150, -100),
                        x: getRandomValue(-50, 50),
                        duration: 1,
                        scale: getRandomValue(1, 2),
                        rotate: getRandomValue(-360, -180),
                        onStart: function() {
                            gsap.set("#fourBtnSvg", { css: { zIndex: 1 } });
                        }
                    })
                    svfour.to("#fourBtnSvg", {
                        visibility: "visible",
                        y: 0,
                        x: getRandomValue(-50, 50),
                        duration: 2.5,
                        ease: "power4.out",
                        scale: 0,
                        rotate: 0,
                        onStart: function() {
                            gsap.set("#fourBtnSvg", { css: { zIndex: -1 } });
                        }
                    })
                    svfour.to("#fourBtnSvg", {
                        x:0,
                        duration: 0.8,
                    })
           

            // Reset the animation flag
            .add(() => {
                resetAnimation();
            });
        }
    });
}






function boldFont() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Split text into spans
    let bouldText = document.querySelectorAll("#bold-one, #bold-two, #round-Font, #bottom-text");

    bouldText.forEach(element => {
        let h2text = element.textContent;
        let splittedText = h2text.split("");
        let clutter = "";

        splittedText.forEach(elem => {
            clutter += `<span>${elem}</span>`;
        });

        element.innerHTML = clutter;
    });

    // GSAP timeline with ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    let boldSize = gsap.timeline({
        scrollTrigger: {
            trigger: "#bold-one",
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top 60%", // Animation starts when the top of #bold-one is 60% from the top of the viewport
            end: "top 0%", // Animation ends when the top of #bold-one is 0% from the top of the viewport
        }
    });

    boldSize
        .to("#bold-one span", {
            color: "#06ff06e0",
            duration: 0.5,
            stagger: 0.2,
        ease: "none"
        })
        .to("#round-Font span", {
            color: "#06ff06e0",
            duration: 0.5,
            stagger: 0.2,
            delay: 1,
            ease: "none"
        })
        .from("#bottom-text span", {
            duration: 1,
            stagger: 0.2,
            delay: 1,
            y: 100,
            opacity: 0,
            ease: "bounce.out",
        })
        .to("#bottom-text span", {
            color: "#06ff06e0",
            duration: 0.2,
            stagger: 0.2,
            delay: 0.1,
        });

    // Additional GSAP animations with ScrollTrigger
    gsap.to("#bottom-text span", {
        color: "#faebd7",
        delay: 14,
        duration: 0.2,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#bottom-text",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 30%",

        }
    });

    gsap.to("#bold-one span", {
        color: "#faebd7",
        delay: 1,
        duration: 0.2,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#bold-one",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 30%",

        }
    });

    gsap.to("#round-Font span", {
        color: "#faebd7",
        duration: 1,
        stagger: 0.2,
        delay: 6,
        rotateX: 360,
        scrollTrigger: {
            trigger: "#round-Font",
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 30%",

        }
    });
}








function buttonAnimate() {
    let buttons = document.querySelectorAll(".text-button-font");

    buttons.forEach(button => {
        let hoverColor = button.querySelector(".hover-color");

        button.addEventListener("mouseover", () => {
            gsap.to(hoverColor, {
                scale: 2,
                duration: 0.5,
                ease: "power1.out"
            });
        });

        button.addEventListener("mousemove", function(eve) {
            // Get the bounding rectangle of the button
            const rect = button.getBoundingClientRect();


            const x = eve.clientX - rect.left;
            const y = eve.clientY - rect.top;

            gsap.to(hoverColor, {
                x: x,
                y: y,
                scale: 2,
                duration: 0.2,
                ease: "power1.out"
            });
        });

        button.addEventListener("mouseout", () => {
            gsap.to(hoverColor, {
                scale: 0,
                duration: 0.5,
                ease: "power1.out"
            });
        });
    });
}

function svgcolumanimse() {
    let part = document.querySelector("#home-tools-scroll-mask");
    let animseSvg = document.querySelector("#home-tools-scroll-ball");

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Create GSAP timeline
    const animTimeline = gsap.timeline({
        
        scrollTrigger: {
            trigger: "#home-tools-scroll-curve",
            scroller: "body", // Body as scroller
            // markers: true, // Show start and end markers
            start: "top 30%", // Start point for animation
            end: "top 30%", // End point for animation

        }
    });
    const partscoll = gsap.timeline({
        scrollTrigger: {
            trigger: "#home-tools-scroll-curve",
            scroller: "body", // Body as scroller
            // markers: true, // Show start and end markers
            start: "top 30%", // Start point for animation
            end: "top 30%", // End point for animation

        }
    });
    // Animate strokeDasharray and strokeDashoffset using TweenMax within the timeline
    partscoll.fromTo(part, 0, {
        strokeDasharray: "0, 0"
    }, {
        strokeDasharray: "530.2728px, 449.412px"
    });

    partscoll.fromTo(part, 2.3, {
        strokeDashoffset: "0"
    }, {
        strokeDashoffset: "-449.112"
    });

    // Animate transform attribute using GSAP within the same timeline
    animTimeline
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 0, 1)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 2, -83)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 8, -98)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 16, -112)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 31, -130)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 49, -146)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 99, -161)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 142, -154)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 163, -143)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 180, -130)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 193, -114)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 202, -99)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 206, -81)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 210, -50)"
        },
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut"
    })
    .to(animseSvg, {
        attr: {
            transform: "matrix(1, 0, 0, 1, 210, 8)"
        },
        transformOrigin: "center",
        duration: 0.3,
        ease: "power1.inOut"
    });
}


function animseSvgtwo() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Create GSAP timeline
    let sVgwo = gsap.timeline({
        scrollTrigger: {
            trigger: "#home-tools-svg", // Element that triggers the scroll animation
            scroller: "body", // Scroller element
            // markers: true, // Show start and end markers
            start: "top 30%", // Animation starts when the top of the trigger element is 75% from the top of the viewport
            end: "top 25%", // Animation ends when the top of the trigger element is 25% from the top of the viewport


        }
    });

    // Add animation to change background color and border-radius
    sVgwo.to("#home-tools-svg", {
            backgroundColor: "#ff9321",
            borderRadius: "50%",
            duration: 1
        })
        .to("#home-tools-svg", {
            borderRadius: "0",
            backgroundColor: "transparent",
            duration: 1
        })
        .from(".circle-Animsen", {
            x: 50,
            y: -100,
            duration: 1,
            opacity: 0
        })

    sVgwo.to("#home-tools-svg-square-large", {
        fill: "url(#paint0_radial_1655_45341)",
        duration: 0.5,
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1
    });
}

function TextAnimnvg() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Animation for #home-tools-text-circle-wrapper
    gsap.to("#home-tools-text-circle-wrapper", {
        rotate: 180,
        transformOrigin: "0% 0%",

        scrollTrigger: {
            trigger: "#home-tools-text-circle-wrapper",
            scroller: "body", // Scrolls the whole body
            // markers: true, // Display markers for debugging
            start: "top 60%",
            end: "top 70%",
        }
    });

    // Animation for #home-tools-text-te
    gsap.to("#home-tools-text-te", {
        rotateX: 360,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
            trigger: "#home-tools-text-te",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 70%",

        }
    });

    // Animation for #home-tools-text-square
    gsap.to("#home-tools-text-square", {
        rotateX: 360,
        delay: 1.1,
        duration: 1,
        scrollTrigger: {
            trigger: "#home-tools-text-square",
            scroller: "body",
            // markers: true,
            start: "top 30%",
            end: "top 70%",

        }
    });

    // GSAP timeline for additional animations
    let TextSvg = gsap.timeline({
        scrollTrigger: {
            trigger: "#home-tools-text-square-wrapper",
            scroller: "body",
            // markers: true,
            start: "top 30%",
            end: "top 70%",

        }
    });

    TextSvg.to("#home-tools-text-square-wrapper", {
            rotate: 180,
            transformOrigin: "100% 100%"
        })
        .to("#home-tools-text-xt", {
            rotateX: 360,
            duration: 1,
            delay: 0.6
        })
        .to("#home-tools-text-square", {
            rotate: 90,
            duration: 1
        });
}



function uiSquar() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Animation for .ui-square-one
    gsap.from(".ui-square-one", {
        x: 140,
        y: 140,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".ui-square-one",
            scroller: "body",
            // markers: true, // Show start and end markers
            start: "top 50%", // Animation starts when the top of the trigger element is 80% from the top of the viewport
            end: "top 50%", // Animation ends when the top of the trigger element is 50% from the top of the viewport

        }
    });

    // Timeline for .ui-square-two
    let uiTwo = gsap.timeline({
        scrollTrigger: {
            trigger: ".ui-square-two",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 50%",

        }
    });

    uiTwo.from(".ui-square-two", {
            x: 0, // Translate 0 pixels along the X axis
            y: 140,
            delay: 0.5
        })
        .to(".ui-square-two", {
            x: -140, // Translate 140 pixels along the X axis
            y: 0,
            delay: 0.5
        });

    // Animation for .ui-square-three
    gsap.from(".ui-square-three", {
        x: -140, // Translate 140 pixels along the X axis
        y: 140,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".ui-square-three",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 70%",

        }
    });

    // Timeline for .ui-square-four
    let uifour = gsap.timeline({
        scrollTrigger: {
            trigger: ".ui-square-four",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 70%",

        }
    });

    uifour.from(".ui-square-four", {
            x: 140, // Translate 140 pixels along the X axis
            y: 0,
            delay: 0.5
        })
        .to(".ui-square-four", {
            x: 0, // Translate 0 pixels along the X axis
            y: 140,
            delay: 0.5
        });

    // Timeline for .ui-square-six
    let uisix = gsap.timeline({
        scrollTrigger: {
            trigger: ".ui-square-six",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 70%",

        }
    });

    uisix.from(".ui-square-six", {
            x: -140, // Translate 140 pixels along the X axis
            y: 0,
            delay: 0.5
        })
        .to(".ui-square-six", {
            x: 0, // Translate 0 pixels along the X axis
            y: -140,
            delay: 0.5
        });

    // Animation for .ui-square-sive
    gsap.from(".ui-square-sive", {
        x: 140, // Translate 140 pixels along the X axis
        y: -140,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".ui-square-sive",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 70%",

        }
    });

    // Timeline for .ui-square-eight
    let uieight = gsap.timeline({
        scrollTrigger: {
            trigger: ".ui-square-eight",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 70%",

        }
    });

    uieight.from(".ui-square-eight", {
            x: 0, // Translate 0 pixels along the X axis
            y: -140,
            delay: 0.5
        })
        .to(".ui-square-eight", {
            x: 140, // Translate 140 pixels along the X axis
            y: 0,
            delay: 0.5
        });

    // Animation for .ui-square-nine
    gsap.from(".ui-square-nine", {
        x: -140, // Translate 140 pixels along the X axis
        y: -140,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".ui-square-nine",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 70%",

        }
    });
}

function animateBrandLeft() {
    // Create a GSAP timeline with repeat set to -1 for infinite looping
    let branleft = gsap.timeline({ repeat: -1 });
    
    // Duration and delay for animations
    let siped = { duration: 0.5 };
    let time = { delay: 1.5 };

    // Animate the first .brand-left svg element
    branleft.from(".brand-left svg:first-of-type", {
        x: -150,
        ...siped
    })
    .to(".brand-left svg:first-of-type", {
        x: 0,
        y: -100,
        ...siped,
        ...time
    });

    branleft.from(".brand-left svg:nth-of-type(2)", {
        x: -150,
        ...siped
    })
    .to(".brand-left svg:nth-of-type(2)", {
        x: 0,
        y: -100,
        ...siped,
        ...time
    });

    branleft.from(".brand-left svg:nth-of-type(3)", {
        x: -150,
        ...siped
    })
    .to(".brand-left svg:nth-of-type(3)", {
        x: 0,
        y: -100,
        ...siped,
        ...time
    });

    let branlright = gsap.timeline({ repeat: -1 });
    branlright.from(".brand-right svg:first-of-type", {
        y: -150,
        ...siped
    })
    .to(".brand-right svg:first-of-type", {
        y: 0,
        x: -150,
        ...siped,
        ...time
    });

    branlright.from(".brand-right svg:nth-of-type(2)", {
        y: 150,
        ...siped
    })
    .to(".brand-right svg:nth-of-type(2)", {
        x: 150,
        y: 0,
        ...siped,
        ...time
    });

    branlright.from(".brand-right svg:nth-of-type(3)", {
        x: 150,
        ...siped
    })
    .to(".brand-right svg:nth-of-type(3)", {
        x: 0,
        y: -100,
        ...siped,
        ...time
    });

    let branlTop = gsap.timeline({ repeat: -1 });
    branlTop.from(".brand-top svg:first-of-type", {
        y: 150,
        ...siped
    })
    .to(".brand-top svg:first-of-type", {
        y: 0,
        x: 150,
        ...siped,
        ...time
    });

    branlTop.from(".brand-top svg:nth-of-type(2)", {
        y: -150,
        ...siped
    })
    .to(".brand-top svg:nth-of-type(2)", {
        x: 0,
        y: 150,
        ...siped,
        ...time
    });

    branlTop.from(".brand-top svg:nth-of-type(3)", {
        x: -150,
        ...siped
    })
    .to(".brand-top svg:nth-of-type(3)", {
        x: 0,
        y: 100,
        ...siped,
        ...time
    });

    let branlbottom = gsap.timeline({ repeat: -1 });
    branlbottom.from(".brand-bottom svg:first-of-type", {
        x: 150,
        ...siped
    })
    .to(".brand-bottom svg:first-of-type", {
        y: 0,
        x: -250,
        ...siped,
        ...time
    });

    branlbottom.from(".brand-bottom svg:nth-of-type(2)", {
        y: 150,
        ...siped
    })
    .to(".brand-bottom svg:nth-of-type(2)", {
        x: 0,
        y: -200,
        ...siped,
        ...time
    });

    branlbottom.from(".brand-bottom svg:nth-of-type(3)", {
        x: 200,
        ...siped
    })
    .to(".brand-bottom svg:nth-of-type(3)", {
        y: 0,
        x: -230,
        ...siped,
        ...time
    });

    let branlford = gsap.timeline({ repeat: -1 });
    branlford.from(".brand-ford svg:first-of-type", {
        y: -150,
        ...siped
    })
    .to(".brand-ford svg:first-of-type", {
        y: 150,
        x: 0,
        ...siped,
        ...time
    });

    branlford.from(".brand-ford svg:nth-of-type(2)", {
        y: -150,
        ...siped
    })
    .to(".brand-ford svg:nth-of-type(2)", {
        x: 0,
        y: 200,
        ...siped,
        ...time
    });

    branlford.from(".brand-ford svg:nth-of-type(3)", {
        x: -200,
        ...siped
    })
    .to(".brand-ford svg:nth-of-type(3)", {
        y: 200,
        x: 0,
        ...siped,
        ...time
    });

    let branlmicrosoft = gsap.timeline({ repeat: -1 });
    branlmicrosoft.from(".brand-microsoft svg:first-of-type", {
        x: 150,
        ...siped
    })
    .to(".brand-microsoft svg:first-of-type", {
        y: 0,
        x: -250,
        ...siped,
        ...time
    });

    branlmicrosoft.from(".brand-microsoft svg:nth-of-type(2)", {
        y: 180,
        ...siped
    })
    .to(".brand-microsoft svg:nth-of-type(2)", {
        x: 0,
        y: -200,
        ...siped,
        ...time
    });
}



// Call the function to execute the animation







function sollingleft() {


    gsap.from(".Anything", {
        rotateX: -90,
        duration: 2,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: "#home-animate",
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top 50%",
            end: "top -250%",

        }
    })

    let SvgScoll = gsap.timeline({
        scrollTrigger: {
            trigger: "#home-animate",
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top 50%",
            end: "top -250%",

        }
    });
    SvgScoll.from("#scrolSvg2", {
        x: 500,
        duration: 1,
        opacity: 0,
        rotate: 360
    })
    SvgScoll.from("#scrolSvg1", {
        delay: 0.2,
        x: 50,
        y: -300,
        duration: 1.3,
        opacity: 0,
        scale: 0

    })
    SvgScoll.from("#scrolSvg3", {
        x: 200,
        y: 200,
        duration: 1,
        opacity: 0,
        rotate: 360
    })
    SvgScoll.from("#scrolSvg4", {
        x: -200,
        y: -200,
        duration: 1,
        opacity: 0,
        rotate: 360
    });
    // Select all elements with the specified classes


}
// gsap.to("#conten", {
//     transform: "translateX(-610%)",
//     scrollTrigger: {
//         trigger: "#conten",
//         scroller: "body",
//         // markers: true, // Uncomment for debugging
//         start: "top 20%",
//         end: "top -1000%",
//         scrub: 1,
//         pin: true, //conten in full show in second in conten in scoller

//     }

// });
let elements = document.querySelectorAll(".home-animate__personality, .text-cuter-animse");

// Loop through each selected element
elements.forEach(element => {
    // Get the text content of the element
    let textcount = element.textContent;

    // Split the text into individual characters
    let splittedText = textcount.split("");

    // Wrap each character in a <div> and join them back into a string
    let clutter = splittedText.map(char => `<div class="sparat-text">${char}</div>`).join("");

    // Update the element's innerHTML with the new content
    element.innerHTML = clutter;
});




function scollingtext() {
    gsap.from(".larg-text", {
        y: -500,
        duration: 1,
        rotate: -40,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: ".home-animate__text-group ",
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -10%",
            end: "top -250%",
        }

    })
    gsap.from(".samll-text", {
        y: -500,
        duration: 1,
        rotate: -20,
        delay: 0.4,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: ".home-animate__text-group ",
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -10%",
            end: "top -250%",
        }
    })
    gsap.from(".samll-text-easing", {
        y: -500,
        duration: 1,
        rotate: 80,
        delay: 0.9,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: ".home-animate__text-group ",
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -10%",
            end: "top -250%",
        }
    })


    //personality font animsean start
    // gsap.from(".scrolling-text:first-of-type", {
    //     y: 120,
    //     opacity: 0,
    //     duration: 0.6,
    //     scrollTrigger: {
    //         trigger: ".home-animate__text-group ",
    //         scroller: "body",
    //         markers: true, // Uncomment for debugging
    //         start: "top -30%",
    //         end: "top -250%",
    //     }

    // })
    const triggerSettings = {
        trigger: ".animate__personality",
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -60%",
        end: "top -250%",
    };

    gsap.from(".sparat-text:nth-of-type(2)", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: triggerSettings
    });
    gsap.from(".sparat-text:nth-of-type(3)", {
        delay: 0.1,
        y: -120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: triggerSettings
    });
    gsap.from(".sparat-text:nth-of-type(4)", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: triggerSettings
    });
    gsap.from(".sparat-text:nth-of-type(5)", {
        delay: 0.3,
        y: -120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: triggerSettings
    });
    gsap.from(".sparat-text:nth-of-type(6)", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        scrollTrigger: triggerSettings
    });
    gsap.from(".sparat-text:nth-of-type(7)", {
        delay: 0.5,
        y: -120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: triggerSettings
    });
    gsap.from(".sparat-text:nth-of-type(8)", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        scrollTrigger: triggerSettings
    });
    gsap.from(".sparat-text:nth-of-type(9)", {
        delay: 0.7,
        y: -120,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: triggerSettings
    });
    gsap.from(".sparat-text:nth-of-type(10)", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        scrollTrigger: triggerSettings
    });
    gsap.from(".sparat-text:nth-of-type(11)", {
        delay: 0.9,
        y: -120,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: triggerSettings
    });
    gsap.from(".sparat-text:nth-of-type(12)", {
        delay: 1,
        y: 120,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: triggerSettings
    });


    //personality font animsean end

    //personality svg animsen

    gsap.from(".yoyanimsen", {
        delay: 1.2,
        y: 120,
        opacity: 0,
        duration: 0.5,
        scale: 0.8,
        scrollTrigger: triggerSettings
    })
    let yoySvg = gsap.timeline({ repeat: -1 })


    yoySvg.to(".yoyanimsen", {
        delay: 3,
        duration: 0.9,
        scale: 1,
        rotate: 70,
        ease: "bounce.out",
    })
    yoySvg.to(".yoyanimsen", {
        delay: 2,
        duration: 0.9,
        scale: 1,
        rotate: 0,
        ease: "bounce.out",
        scale: 0.8
    })
    gsap.from(".home-animate-circle ", {
        delay: 1,
        y: -120,
        opacity: 0,
        duration: 0.9,
        scale: 0,
        rotate: 360,
        scrollTrigger: {
            trigger: ".animate__personality",
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -80%",
            end: "top -250%",
        }

    })
    gsap.from(".text-animse-scoller-one", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".text-animse-scoller-one", // Trigger for this specific element
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -80%", // Start when the top of the trigger hits 80% of the viewport height
            end: "top -250%", // End when the top of the trigger hits 20% of the viewport height
        }
    });
    gsap.from(".text-animse-scoller-two", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".text-animse-scoller-one", // Trigger for this specific element
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -85%", // Start when the top of the trigger hits 80% of the viewport height
            end: "top -250%", // End when the top of the trigger hits 20% of the viewport height
        }
    });
    gsap.from(".text-animse-scoller-three", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".text-animse-scoller-one", // Trigger for this specific element
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -120%", // Start when the top of the trigger hits 80% of the viewport height
            end: "top -250%", // End when the top of the trigger hits 20% of the viewport height
        }
    });
    gsap.from(".text-animse-scoller-four", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".text-animse-scoller-one", // Trigger for this specific element
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -140%", // Start when the top of the trigger hits 80% of the viewport height
            end: "top -250%", // End when the top of the trigger hits 20% of the viewport height
        }
    });
    gsap.from(".text-animse-scoller-five", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".text-animse-scoller-one", // Trigger for this specific element
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -150%", // Start when the top of the trigger hits 80% of the viewport height
            end: "top -250%", // End when the top of the trigger hits 20% of the viewport height
        }
    });

    gsap.from(".text-animse-scoller-six", {
        y: 120,
        opacity: 0,
        scale: 3,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".text-animse-scoller-one", // Trigger for this specific element
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -180%", // Start when the top of the trigger hits 80% of the viewport height
            end: "top -250%", // End when the top of the trigger hits 20% of the viewport height
        }
    });


    gsap.from(".text-animse-scoller-siven", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".text-animse-scoller-one", // Trigger for this specific element
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -200%", // Start when the top of the trigger hits 80% of the viewport height
            end: "top -250%", // End when the top of the trigger hits 20% of the viewport height
        }
    });

    gsap.from(".text-animse-scoller-eight", {
        y: 120,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: ".text-animse-scoller-one", // Trigger for this specific element
            scroller: "body",
            // markers: true, // Uncomment for debugging
            start: "top -220%", // Start when the top of the trigger hits 80% of the viewport height
            end: "top -250%", // End when the top of the trigger hits 20% of the viewport height
        }
    });
}

function scollintextTwo(){
gsap.to(".home-animate-asterisk", {
    x: 450,
    scrollTrigger: {
        trigger: ".homse-super-animse", // Element that triggers the scroll animation
        scroller: "body", // Scroller element
        // markers: true, // Show start and end markers
        start: "top -280%",
        end: "top -281%",
        scrub: 10

    }
})
gsap.from(".home-animate-text-super", {
    y: -250,
    duration: 0.8,
    opacity: 0,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".homse-super-animse", // Element that triggers the scroll animation
        scroller: "body", // Scroller element
        // markers: true, // Show start and end markers
        start: "top -275%",
        end: "top -300%",
    }
})
gsap.from(".font-animse-box", {
    y: -250,
    duration: 0.8,
    opacity: 0,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".homse-super-animse", // Element that triggers the scroll animation
        scroller: "body", // Scroller element
        // markers: true, // Show start and end markers
        start: "top -260%",
        end: "top -300%",
    }
})



let svhAnimse = gsap.timeline({ repeat: -1, delay: 0.6 })

svhAnimse.to(".home-animate-asterisk", {
    rotate: 360,
    duration: 1,
    delay: 0.6,

})
svhAnimse.to(".home-animate-asterisk", {
    rotate: 720,
    duration: 1,
    delay: 0.8

})
svhAnimse.to(".home-animate-asterisk", {
    rotate: 1080,
    duration: 1,
    delay: 0.8
})
svhAnimse.to(".home-animate-asterisk", {
    scale: 1,
    duration: 0.5,
    delay: 0.8
})
svhAnimse.to(".home-animate-asterisk", {
    scale: 0.9,
    duration: 0.5,
})





gsap.from(".eases-text-one", {
    y: 120,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".eases-text-one", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -285%", // Start when the top of the trigger hits 80% of the viewport height
        end: "top -400%", // End when the top of the trigger hits 20% of the viewport height
    }
})
gsap.from(".eases-text-two", {
    y: 120,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".eases-text-two", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -288%", // Start when the top of the trigger hits 80% of the viewport height
        end: "top -400%", // End when the top of the trigger hits 20% of the viewport height
    }
})

gsap.from(".eases-text-three", {
    y: 120,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".eases-text-three", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -295%", // Start when the top of the trigger hits 80% of the viewport height
        end: "top -400%", // End when the top of the trigger hits 20% of the viewport height
    }
})
gsap.from(".eases-text-four", {
    y: 120,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".eases-text-four", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -325%", // Start when the top of the trigger hits 80% of the viewport height
        end: "top -400%", // End when the top of the trigger hits 20% of the viewport height
    }
})

gsap.from(".eases-text-five", {
    y: 120,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".eases-text-five", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -350%", // Start when the top of the trigger hits 80% of the viewport height
        end: "top -500%", // End when the top of the trigger hits 20% of the viewport height
    }
})

gsap.from(".eases-text-six", {
    y: 120,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".eases-text-six", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -380%", // Start when the top of the trigger hits 80% of the viewport height
        end: "top -500%", // End when the top of the trigger hits 20% of the viewport height
    }
})

gsap.from(".eases-text-siven", {
    y: 120,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".eases-text-siven", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -420%", // Start when the top of the trigger hits 80% of the viewport height
        end: "top -500%", // End when the top of the trigger hits 20% of the viewport height
    }
})
}

// GSAP animation with ScrollTrigger

const triggerSettingsuptodwon = {
    trigger: ".eases-text-eight", // Trigger for this specific element
    scroller: "body",
    // markers: true, // Uncomment for debugging
    start: "top -480%", // Start when the top of the trigger hits 80% of the viewport height
    end: "top -600%",
};
gsap.from(".eases-text-eight .sparat-text:first-of-type", {
    rotateX: 90,
    opacity: 0,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    transformOrigin: "100% 100%",
    delay: 0.4,
    scrollTrigger: triggerSettingsuptodwon
});

gsap.from(".eases-text-eight .sparat-text:nth-of-type(2)", {
    rotateX: 90,
    opacity: 0,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    transformOrigin: "100% 100%",
    delay: 0.6,
    scrollTrigger: triggerSettingsuptodwon
});

gsap.from(".eases-text-eight .sparat-text:nth-of-type(3)", {
    rotateX: 90,
    opacity: 0,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    transformOrigin: "100% 100%",
    delay: 0.8,
    scrollTrigger: triggerSettingsuptodwon
});

gsap.from(".eases-text-eight .sparat-text:nth-of-type(4)", {
    rotateX: 90,
    opacity: 0,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    transformOrigin: "100% 100%",
    delay: 1,
    scrollTrigger: triggerSettingsuptodwon
});

gsap.from(".eases-text-eight .sparat-text:nth-of-type(5)", {
    rotateX: 90,
    opacity: 0,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    transformOrigin: "100% 100%",
    delay: 1.2,
    scrollTrigger: triggerSettingsuptodwon
});

gsap.from(".eases-text-eight .sparat-text:nth-of-type(6)", {
    rotateX: 90,
    opacity: 0,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    transformOrigin: "100% 100%",
    delay: 1.4,
    scrollTrigger: triggerSettingsuptodwon
});

gsap.from(".eases-text-eight .sparat-text:nth-of-type(7)", {
    rotateX: 90,
    opacity: 0,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    transformOrigin: "100% 100%",
    delay: 1.6,
    scrollTrigger: triggerSettingsuptodwon
});
const boxtriggersetting = {
    trigger: ".elament-box", // Trigger for this specific element
    scroller: "body",
    // markers: true, // Uncomment for debugging
    start: "top -580%", // Start when the top of the trigger hits 80% of the viewport height
    end: "top -600%",
};

gsap.from(".uper-box", {
    rotate: -90,
    y: -200,
    ease: "bounce.out",
    opacity: 0,
    duration: 1.5,
    scrollTrigger: boxtriggersetting

});
gsap.from(".left-box", {
    x: -1000,
    opacity: 0,
    duration: 1.5,
    delay: 2,
    scrollTrigger: boxtriggersetting

});
gsap.from(".lock-svg-img", {
    x: -150,
    ease: "bounce.out",
    opacity: 0,
    duration: 1,
    delay: 3,
    scrollTrigger: boxtriggersetting

});
// let animsetext = gsap.timeline()
// animsetext.to(".animse-box-lock", {
//     y: 160,
//     ease: "bounce.out",
//     opacity: 1,
//     duration: 2,
//     delay: 2,
//     scrollTrigger: boxtriggersetting
// });

gsap.to(".animse-box-lock", {
    x: 800,
    opacity: 1,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: ".animse-box-lock", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -550%",
        end: "top -750%",
        scrub: 0.8
    }
});


gsap.from(".home-end-text", {
    y: -150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".home-end-text", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -730%",
        end: "top -1000%",
    }
});

gsap.from(".home-end-text2", {
    y: -150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".home-end-text2", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -752%",
        end: "top -1000%",
    }
});


gsap.from(".routad-svg-img", {
    rotate: -360,
    y: -150,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".routad-svg-img", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -770%",
        end: "top -1000%",
    }
});

let startsvg = "M188 3 C74.39 3 116.99 146 3 146 "

let endsvg = "M188 33.0001C188 160 2.99953 161 2.99955 33.0001 "

gsap.to("#home-animate__icon--curve-path ", {
    attr: { d: endsvg },
    duration: 0.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".svg-log-animse", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -350%",
        end: "top -430%",
        scrub: 3
    }
})

gsap.to("#curved-line-toggle-one", {
    rotate: -90,
    x: -24,
    y: 20,
    duration: 1.3,
    transformOrigin: "100% 0%",
    scrollTrigger: {
        trigger: ".svg-log-animse", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -350%",
        end: "top -430%",
        scrub: 3
    }
})


gsap.to("#curved-line-toggle-two", {
    rotate: 90,
    x: 6,
    y: -138,
    duration: 1.3,
    transformOrigin: "0% 100%",
    scrollTrigger: {
        trigger: ".svg-log-animse", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -350%",
        end: "top -430%",
        scrub: 3
    }
})
gsap.to(".svg-log-animse", {
    x: 1500,
    duration: 1,
    scrollTrigger: {
        trigger: ".svg-log-animse", // Trigger for this specific element
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top -350%",
        end: "top -450%",
        scrub: 2
    }

})
let roundSvg = gsap.timeline({ repeat: -1 });
roundSvg.to(".routad-svg-img svg", {
    rotate: 90,
    duration: 0.5,
})
roundSvg.to(".routad-svg-img svg", {
    duration: 1
})
roundSvg.to(".routad-svg-img svg", {
    rotate: 180,
    duration: 0.5,
})
roundSvg.to(".routad-svg-img svg", {
    duration: 1
})
roundSvg.to(".routad-svg-img svg", {
    rotate: 270,
    duration: 0.5,
})
roundSvg.to(".routad-svg-img svg", {
    duration: 1
})
roundSvg.to(".routad-svg-img svg", {
    rotate: 360,
    duration: 0.5,
})
roundSvg.to(".routad-svg-img svg", {
    duration: 1
})


gsap.to(".snap-two", {
        visibility: "hidden",
    })
    // Define the first timeline
let it = gsap.timeline({ repeat: -1 });

// Add animations to the first timeline
it.from(".snap-one", {
        rotate: -60,
        opacity: 0,
        duration: 0.5,
        visibility: "inherit",
    })
    .to(".snap-one", {
        duration: 1,
        visibility: "inherit" // Ensure visibility persists during the transition
    });

// Define the second timeline
let it2 = gsap.timeline({ repeat: -1 });

// Add animations to the second timeline
it2.to(".snap-two", {
        opacity: 0,
        duration: 0.5,
        visibility: "inherit",
    })
    .to(".snap-two", {
        opacity: 1,
        duration: 0.5,
        visibility: "inherit",
    })
    .to(".snap-two", {
        opacity: 0,
        duration: 0.5,
        visibility: "inherit",
        rotate: 60,
    });

// Create a master timeline to sequence `it` and `it2`
let masterTimeline = gsap.timeline({ repeat: -1 });

// Add the `it` and `it2` timelines to the master timeline
masterTimeline.add(it).add(it2, "+=0.5"); // Adjust the delay between timelines as needed



document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.showcase__wrap, .right-btn'); // Target elements for click

    let clickCount = 0;

    // Toggle video playback based on the element's active state
    const toggleVideoPlayback = () => {
        document.querySelectorAll('.showcase__item').forEach((item, index) => {
            const video = item.querySelector('.showcase__video');
            if (video) {
                if (item.classList.contains('active')) {
                    video.play(); // Play video if the item has the 'active' class
                } else {
                    video.pause(); // Pause video if the item does not have the 'active' class
                }
            }
        });
    };

    // Initial setup for the slider
    const initialTimeline = gsap.timeline();
    initialTimeline.to(".showcase__item:first-of-type", { scale: 0.9 })
        .to(".showcase__item:nth-of-type(3)", { scale: 0.9 }, 0)
        .to(".showcase__item:nth-of-type(5)", { x: -4340, visibility: "hidden" }, 0);

    // Click event listener for the elements
    elements.forEach(element => {
        element.addEventListener('click', (event) => {
            clickCount = (clickCount % 5) + 1;
            const timeline = gsap.timeline();
            const isLeftClick = event.clientX < window.innerWidth / 2;

            if (isLeftClick) {
                handleLeftClick(timeline);
            } else {
                handleRightClick(timeline);
            }

            timeline.eventCallback("onComplete", () => {
                // Remove 'active' class from all elements
                document.querySelectorAll('.showcase__item, .body-r, .body-s').forEach(item => item.classList.remove('active'));

                // Add 'active' class to elements with scale 1.1 and the corresponding body elements
                document.querySelectorAll('.showcase__item').forEach((item, index) => {
                    const scale = gsap.getProperty(item, 'scale');
                    if (scale === 1.1) {
                        item.classList.add('active');
                        document.querySelectorAll('.body-r')[index].classList.add('active');
                        document.querySelectorAll('.body-s')[index].classList.add('active');
                    }
                });

                // Toggle video playback based on the active state
                toggleVideoPlayback();
            });
        });
    });

    function handleLeftClick(timeline) {
        switch (clickCount) {
            case 1:
                timeline
                    .to(".showcase__item:nth-of-type(1)", { x: "0%", scale: 0.9, visibility: "inherit" })
                    .to(".showcase__item:nth-of-type(2)", { x: "0%", scale: 1.1, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(3)", { x: "0%", visibility: "inherit", scale: 0.9 }, 0)
                    .to(".showcase__item:nth-of-type(4)", { x: "0%", visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(5)", { x: "-500%", visibility: "hidden" }, 0); // Example percentage
                break;
            case 2:
                timeline
                    .to(".showcase__item:nth-of-type(1)", { x: "100%", scale: 1.1, visibility: "inherit" })
                    .to(".showcase__item:nth-of-type(2)", { x: "100%", visibility: "inherit", scale: 0.9 }, 0)
                    .to(".showcase__item:nth-of-type(3)", { x: "100%", visibility: "hidden" }, 0)
                    .to(".showcase__item:nth-of-type(4)", { x: "-400%", visibility: "hidden" }, 0) // Example percentage
                    .to(".showcase__item:nth-of-type(5)", { x: "-400%", scale: 0.9, visibility: "inherit" }, 0);
                break;
            case 3:
                timeline
                    .to(".showcase__item:nth-of-type(1)", { x: "200%", visibility: "inherit", scale: 0.9 })
                    .to(".showcase__item:nth-of-type(2)", { x: "200%", visibility: "hidden" }, 0)
                    .to(".showcase__item:nth-of-type(3)", { x: "-300%", visibility: "hidden" }, 0) // Example percentage
                    .to(".showcase__item:nth-of-type(4)", { x: "-300%", scale: 0.9, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(5)", { x: "-300%", scale: 1.1, visibility: "inherit" }, 0);
                break;
            case 4:
                timeline
                    .to(".showcase__item:nth-of-type(1)", { x: "300%", visibility: "hidden" })
                    .to(".showcase__item:nth-of-type(2)", { x: "-200%", visibility: "hidden" }, 0) // Example percentage
                    .to(".showcase__item:nth-of-type(3)", { x: "-200%", scale: 0.9, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(4)", { x: "-200%", scale: 1.1, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(5)", { x: "-200%", visibility: "inherit", scale: 0.9 }, 0);
                break;
            case 5:
                timeline
                    .to(".showcase__item:nth-of-type(1)", { x: "-100%", visibility: "hidden" }) // Example percentage
                    .to(".showcase__item:nth-of-type(2)", { x: "-100%", scale: 0.9, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(3)", { x: "-100%", scale: 1.1, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(4)", { x: "-100%", visibility: "inherit", scale: 0.9 }, 0)
                    .to(".showcase__item:nth-of-type(5)", { x: "-200%", visibility: "hidden" }, 0);
                break;
            default:
                // console.warn("Unexpected clickCount value:", clickCount);
                break;
        }
    }


    function handleRightClick(timeline) {
        switch (clickCount) {
            case 1:
                timeline.to(".showcase__item:first-of-type", { x: "-100%", visibility: "hidden" })
                    .to(".showcase__item:nth-of-type(2)", { x: "-100%", scale: 0.9, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(3)", { x: "-100%", scale: 1.1, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(4)", { x: "-100%", visibility: "inherit", scale: 0.9 }, 0)
                    .to(".showcase__item:nth-of-type(5)", { x: "-100%", visibility: "hidden" }, 0);
                break;
            case 2:
                timeline.to(".showcase__item:first-of-type", { x: "300%", visibility: "hidden" })
                    .to(".showcase__item:nth-of-type(2)", { x: "-200%", visibility: "hidden" }, 0)
                    .to(".showcase__item:nth-of-type(3)", { x: "-200%", scale: 0.9, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(4)", { x: "-200%", scale: 1.1, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(5)", { x: "-200%", visibility: "inherit", scale: 0.9 }, 0);
                break;
            case 3:
                timeline.to(".showcase__item:first-of-type", { x: "200%", visibility: "inherit", scale: 0.9 })
                    .to(".showcase__item:nth-of-type(2)", { x: "200%", visibility: "hidden" }, 0)
                    .to(".showcase__item:nth-of-type(3)", { x: "-300%", visibility: "hidden" }, 0)
                    .to(".showcase__item:nth-of-type(4)", { x: "-300%", scale: 0.9, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(5)", { x: "-300%", scale: 1.1, visibility: "inherit" }, 0);
                break;
            case 4:
                timeline.to(".showcase__item:first-of-type", { x: "100%", scale: 1.1, visibility: "inherit" })
                    .to(".showcase__item:nth-of-type(2)", { x: "100%", visibility: "inherit", scale: 0.9 }, 0)
                    .to(".showcase__item:nth-of-type(3)", { x: "100%", visibility: "hidden" }, 0)
                    .to(".showcase__item:nth-of-type(4)", { x: "-400%", visibility: "hidden" }, 0)
                    .to(".showcase__item:nth-of-type(5)", { x: "-400%", scale: 0.9, visibility: "inherit" }, 0);
                break;
            case 5:
                timeline.to(".showcase__item:first-of-type", { x: "0%", scale: 0.9, visibility: "inherit" })
                    .to(".showcase__item:nth-of-type(2)", { x: "0%", scale: 1.1, visibility: "inherit" }, 0)
                    .to(".showcase__item:nth-of-type(3)", { x: "0%", visibility: "inherit", scale: 0.9 }, 0)
                    .to(".showcase__item:nth-of-type(4)", { x: "0%", visibility: "hidden" }, 0)
                    .to(".showcase__item:nth-of-type(5)", { x: "500%", visibility: "hidden" }, 0);
                break;
        }
    }

});





gsap.to("#conten", {
    transform: "translateX(-610%)",
    scrollTrigger: {
        trigger: "#conten",
        scroller: "body",
        // markers: true, // Uncomment for debugging
        start: "top 20%",
        end: "top -1000%",
        scrub: 2,
        pin: true, //conten in full show in second in conten in scoller
    }
});


// Call the function to apply the animation
buttonAnimate();
svgcolumanimse();
imgNimsen()
letsThreeFont()
M()
A()
fontTE()
svgmia()
startTag()
boldFont()
animseSvgtwo()
TextAnimnvg()
uiSquar()
animateBrandLeft();
sollingleft()

buttonsvg()
buttonsvg()



let windosize = window.innerWidth

if(windosize > 0 === windosize <786){
   
}else{
    scollingtext()
    scollintextTwo()

}