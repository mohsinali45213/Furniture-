const tl = gsap.timeline()

tl.from("nav h2,nav ul li,nav .icons",{
  y:-30,
  duration:0.5,
  opacity:0,
  stagger:0.1
})

tl.from(".container h1,.container h3,.container p,.container .button",{
  x:-700,
  opacity:0,
  duration:0.5,
  stagger:0.1
})

tl.from(".container img",{
  x:700,
  rotate:90,
  opacity:0,
  duration:0.5,
  stagger:0.1
},"-=0.7")

tl.to(".container img",{
  y:-20,
  duration:1,
  ease:"ease",
  repeat:-1,
  yoyo:true
})

tl.from(".cart.one",{
  x:-800,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".cart.one",
    start:"top 80%",
    end:"top 50%",
    scrub:2
  }
},"anim1")

tl.from(".cart.two",{
  x:800,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".cart.two",
    start:"top 80%",
    end:"top 50%",
    scrub:1
  }
},"anim1")

tl.from(".title",{
  y:150,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    trigger:".title",
    start:"top 95%",
    end:"top 60%",
    scrub:1
  }
})

tl.from(".cart-container2 .cart",{
  y:-30,
  opacity:0,
  duration:1,
  stagger:0.5,
  scrollTrigger:{
    trigger:".cart-container2 .cart",
    start:"top 80%",
    end:"top 60%",
    scrub:1,
  }
})

tl.from(".pro-nav",{
  opacity:0,
  duration:2,
  y:-30,
  scrollTrigger:{
    trigger:".pro-nav",
    start:"top 90%",
    end:"top 70%",
    scrub:1,
  }
})

tl.from(".pro-container .cart",{
  opacity:0,
  duration:2,
  y:100,
  stagger:2,  
  scrollTrigger:{
    trigger:".pro-container",
    start:"top 60%",
    end:"top 0%",
    scrub:1,
  }
})
tl.from(".sale",{
  opacity:0,
  duration:2,
  y:100,
  stagger:2,  
  scrollTrigger:{
    trigger:".sale",
    start:"top 100%",
    end:"top 70%",
    scrub:1,
  }
})