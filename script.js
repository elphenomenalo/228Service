let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let submenu1 = document.getElementById("submenu1");
let submenu2 = document.getElementById("submenu2");

menu1.addEventListener("click", ()=>{
    if(submenu1.classList.toggle("active")){
        submenu2.classList.remove("active");
    };
})
menu2.addEventListener("click", ()=>{
    if(submenu2.classList.toggle("active")){
        submenu1.classList.remove("active")
    };
})

// SLIDE1

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

  // Slide2
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // AUTHENTIFICATION

  let login = document.getElementById("login");
  let register = document.getElementById("register");
  let form1 = document.getElementById("form1");
  let form2 = document.getElementById("form2");
  let close = document.getElementById("close");

  login.addEventListener("click", (e)=>{
    e.preventDefault();
    form1.classList.toggle("active");
    form2.classList.toggle("active");
  })
  register.addEventListener("click", (e)=>{
    e.preventDefault();
    form1.classList.toggle("active");
    form2.classList.toggle("active");
  })

  let active = document.querySelector(".active");
  let active2 = document.querySelector(".active2");
  let auth = document.getElementById("auth");


  active.addEventListener("click", (e)=>{
    e.preventDefault();
    auth.classList.toggle("active");
  })

  close.addEventListener("click", ()=>{
    auth.style.display = "none";
  })



