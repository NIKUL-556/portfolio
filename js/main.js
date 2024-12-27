/*==================== AUTO TYPING =======================*/

var typed = new Typed('.auto-typed', {
  strings: ["Front-End Developer", "Back-End Developer", "Full Stack Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

/*==================== skills content  ====================*/

const skillsHeader = document.querySelectorAll('.FEQ')

skillsHeader.forEach(item => {

  const listItem = item.querySelector('.skills-list')
  const icon = item.querySelector('.skills-arrow')

  item.addEventListener('click', () => {
    icon.classList.toggle('open')
    listItem.classList.toggle('open')

  })

});

/*==================== PORTFOLIO SWIPER ====================*/

let swiperPortfolio = new Swiper(".portfolio-container ", {
  cssMode: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  observer: true,  
  observeParents: true,
});


/*==================== QUALIFICATION TABS =================*/

const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification-active');
    });

    target.classList.add('qualification-active');

    tabs.forEach(tab => {
      tab.classList.remove('qualification-active');
    })
    tab.classList.add('qualification-active');
  })
})

/*========================== NAVBAR =======================*/

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  navbar.classList.toggle('active')
}
window.onscroll = () => {
  navbar.classList.remove('active')
}

/*==================== DARK LIGHT THEME ===================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*======================= GSAP ANIMATION ========================*/

/*========= CURSOR ANIMATION ========*/

let main = document.querySelector(".main")

  main.addEventListener("mousemove",(dets)=>{
    gsap.to("#cursor", {
        x: dets.x,
        y: dets.y,
        duration:1,  
    })
})

let logo = document.querySelector("header")

logo.addEventListener("mouseenter",()=>{
  gsap.to("#cursor",{
      scale:3,
      duration:0.5,
     
  })
})

logo.addEventListener("mouseleave",()=>{
  gsap.to("#cursor",{
      scale:1,
  })
})

/*========= MAGNET ANIMATION ========*/

Shery.makeMagnet(".logo,li", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

/*============ SCROLL HIDE ==========*/

let body = document.querySelector("body");
let mainpage = document.querySelector(".main");


window.onload = function(){
 setTimeout(function () { 
    body.classList.remove('scroll')
    mainpage.classList.remove('main')
    ScrollTrigger.refresh()
  },3500)
}


/*========= PAGE-1 ========*/

function page1() {
  var tl = gsap.timeline()

  function breakText() {
    var h1 = document.querySelector(".cover h1")
    var h1text = h1.textContent

    var splittedtext = h1text.split("")

    var clutter = ""

    splittedtext.forEach(elem => {
        clutter += `<span class>${elem}</span>`
    });

    h1.innerHTML = clutter
}

breakText()

gsap.from("h1 span",{
  y:100,
  duration:1,
  opacity:0,
  delay:0.5,
  stagger:0.2
})

tl.to(".cover",{
    opacity:0,
    duration:3,
    delay:2,
    y:-900,
})
  
tl.from(".logo",{
    opacity:0,
    duration:0.5,
    y:-30,   
})

tl.from("li, .bx-moon, .bx-menu ",{
  opacity:0,
  duration:0.4,
  y:-30,
  stagger:0.2,
})

tl.from(".anititale,.aniname,.anip,.anibtn,.scroll-down,.home-text",{
  opacity:0,
  duration:0.4,
  y:300,
  stagger:0.2,
})

tl.from(".social",{
  opacity:0,
  x:-200,
  duration:1
},"anim")

tl.from(".home-img",{
  opacity:0,
  x:200,
  duration:1
},"anim")
}
page1()

/*==== NAME SCROLLING ======*/

// function namesrolling(){
//   var tll = gsap.timeline()

//   tll.to(".name-scrolling h1", {
//     transform: "translateX(calc(-100% - 2vw - 4px))",
//     scrollTrigger: {
//       trigger: ".name-scrolling h1",
//       scroller: "body",
//       start:"top 90%",
//       scrub: 0.7,
//     }
//   })
// }
// namesrolling()

/*========= PAGE-2 ========*/

function page2() {
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:".about",
      scoller:"body",
      start:"top 50%",
      end:"bottom 100%",
      scrub:2,
    }
  })
  

  tl2.from(".about-heading",{
    y:-50,
    opacity:0,
    duration:0.8,
    
  })
  
  
  tl2.from(".about-img",{
    x:-200,
    opacity:0,
    duration:0.8,
  },"anim")
  
  tl2.from(".about-data",{
    x:170,
    opacity:0,
    duration:0.8,
  },"anim")
  
  tl2.from(".about-buttons",{
    x:100,
    opacity:0,
    duration:0.8,
  },"anim")
  
  tl2.from(".about-info",{
    x:100,
    opacity:0,
    duration:0.8,
  },"anim")
  
  tl2.from(".about-info-title",{
    y:10,
    opacity:0,
    duration:0.1,
  })

}
page2()

/*========= PAGE-3 ========*/

function page3() {
  var tl3 = gsap.timeline({
    scrollTrigger:{
      trigger:".skills-section",
      scoller:"body",
      // markers:true,
      start:"top 50%",
      end:"bottom 100%",
      scrub:3,
    }
  })
   
  tl3.from(".skill-heading",{
    y:-50,
    opacity:0,
    duration:0.8,
  })
   
  tl3.from(".skills-container",{
    opacity:0,
    scale:1.2,
    duration:4,
    delay:7
  },"-=5")
   
  tl3.from(".skills-bar",{
    x:-300,
    opacity:0,
    duration:1,
  })
   
  tl3.from(".skills-number",{
    x:30,
    opacity:0,
    duration:0.5,
  })
}
page3()

/*========= PAGE-4 ========*/

function page4() {
  var tl4 = gsap.timeline({
    scrollTrigger:{
      trigger:"#portfolio",
      scoller:"body",
      start:"top 80%",
      end:"bottom 90%",
      scrub:3,
    }
  })
  
     
  tl4.from(".portfolio-heading",{
    y:-50,
    opacity:0,
    duration:0.8,
  })
  
  tl4.from(".portfolio-img",{
    x:-50,
    opacity:0,
    duration:0.8,
  },"animi")

  tl4.from(".portfolio-data ",{
    x:50,
    opacity:0,
    duration:0.8,
  },"animi")
}
page4()

/*========= PAGE-5 ========*/

function page5() {
  var tl5 = gsap.timeline({
    scrollTrigger:{
      trigger:"#qualification",
      scoller:"body",
      start:"top 70%",
      end:"bottom 100%",
      scrub:3,
    }
  })
  
       
  tl5.from(".Qualifications-heading",{
    y:-50,
    opacity:0,
    duration:0.8,
  })    
  
       
  tl5.from(".qualification-subtitle,.qualification-calendar",{
    y:-50,
    opacity:0,
    duration:0.8,
  })    
   
}
page5()