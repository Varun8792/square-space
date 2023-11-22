var tl=gsap.timeline()

tl.from("#nav img,#nav h3,#nav h4 ,#nav button",{
   y:50,
   duration:1,
   delay:1,
   Stagger:0.5,
   opacity:0
   
})

tl.from("#left-img,#right-img",{
    x:-100,
    duration:1,
    delay:0.5,
    opacity:0
})

tl.from("#main h1",{
    x:-200
})

tl.from(" h1",{
    y:50,
    duration:1,
    opacity:0,
    Stagger:0.5
})

