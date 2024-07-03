// carousel page
let currentIndex = 0;
const interval = 7000; // 7 seconds

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel img');
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + '%'; //Calculate the value.. slide ta koto ta move hobe

  carousel.style.transform = 'translateX('+translateValue+')';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, interval);



// Why choose us page
gsap.from("#one",{
    x:65,
    // delay:1,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#one",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        // end:"top 60%",
        toggleActions:'restart pause none none'
    }
})
gsap.from("#two",{
    x:-65,
    // delay:1,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#two",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        // end:"top 60%"
        toggleActions:'restart pause none none'
    }
})
gsap.from("#three",{
    x:65,
    delay:.3,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#three",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        // end:"top 60%"
        toggleActions:'restart pause none none'
    }
})
gsap.from("#four",{
    x:-65,
    delay:.3,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#four",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        // end:"top 60%"
        toggleActions:'restart pause none none'
    }
})




// 4 tabs animation gsap
gsap.from("#tabs",{
    x:200,
    // delay:1,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#tabs",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        // end:"top 20%",
        toggleActions:'restart pause none none',
    }
})




// make a move page
gsap.from("#move-pge p",{
    y:200,
    // delay:1,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrub:4,
    scrollTrigger:{
        trigger:"#move-pge p",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        // end:"top 20%",
        toggleActions:'restart pause none none',
    }
})


// Card Carousel.... Marketing page




// spoken english page
gsap.from("#man-img",{
    y: 90,
    // delay:1,
    duration:1,
    opacity:0,
    scrub:4,
    scrollTrigger:{
        trigger:"#man-img",
        scroller:"body",
        // markers:true,
        start:"top 99%",
        // end:"top 20%",
        toggleActions:'restart pause none none',
    }
})

gsap.from("#first-h1",{
    y:70,
    duration:.7,
    opacity:0,
    scrub:4,
    scrollTrigger:{
        trigger:"#first-h1",
        scroller:"body",
        // markers:true,
        start:"top 99%",
        // end:"top 20%",
        toggleActions:'restart pause none none',
    }
})
gsap.from("#first-h4",{
    y:70,
    duration:.7,
    opacity:0,
    scrub:4,
    scrollTrigger:{
        trigger:"#first-h4",
        scroller:"body",
        // markers:true,
        start:"top 99%",
        // end:"top 20%",
        toggleActions:'restart pause none none',
    }
})
gsap.from("#second-h1",{
    y:70,
    duration:.7,
    opacity:0,
    scrub:4,
    scrollTrigger:{
        trigger:"#second-h1",
        scroller:"body",
        // markers:true,
        start:"top 99%",
        // end:"top 20%",
        toggleActions:'restart pause none none',
    }
})

gsap.from("#right-div p",{
    y:70,
    delay:.3,
    duration:1.2,
    opacity:0,
    scrub:4,
    scrollTrigger:{
        trigger:"#right-div p",
        scroller:"body",
        // markers:true,
        start:"top 99%",
        // end:"top 20%",
        toggleActions:'restart pause none none',
    }
})

gsap.from("#right-div button",{
    y:70,
    duration:.7,
    opacity:0,
    scrub:4,
    scrollTrigger:{
        trigger:"#right-div button",
        scroller:"body",
        // markers:true,
        start:"top 99%",
        // end:"top 20%",
        toggleActions:'restart pause none none',
    }
})


// 4000+ happy placed students
gsap.from("#happy-h1",{
    x:65,
    // delay:1,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#happy-h1",
        scroller:"body",
        // markers:true,
        start:"top 99%",
        // end:"top 60%",
        toggleActions:'restart pause none none'
    }
})
gsap.from("#student",{
    x:-65,
    // delay:1,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#student",
        scroller:"body",
        // markers:true,
        start:"top 99%",
        // end:"top 60%",
        toggleActions:'restart pause none none'
    }
})


// count js
function count1(){
    var a = 0;
    setInterval(function(){
        a = a+Math.floor(Math.random()*6);
        if(a<25){
            document.querySelector(".count-span1").innerHTML = a
        }
        else{
            a = 25
            document.querySelector(".count-span1").innerHTML = a
        }
    },500)
}
count1()

function count2(){
    var a = 0;
    setInterval(function(){
        a = a+Math.floor(Math.random()*50);
        if(a<350){
            document.querySelector(".count-span2").innerHTML = a
        }
        else{
            a = 350
            document.querySelector(".count-span2").innerHTML = a
        }
    },500)
}
count2()

function count3(){
    var a = 0;
    setInterval(function(){
        a = a+Math.floor(Math.random()*3);
        if(a<12){
            document.querySelector(".count-span3").innerHTML = a
        }
        else{
            a = 12
            document.querySelector(".count-span3").innerHTML = a
        }
    },500)
}
count3()

function count4(){
    var a = 0;
    setInterval(function(){
        a = a+Math.floor(Math.random()*1000);
        if(a<4000){
            document.querySelector(".count-span4").innerHTML = a
        }
        else{
            a = 4000
            document.querySelector(".count-span4").innerHTML = a
        }
    },500)
}
count4()
