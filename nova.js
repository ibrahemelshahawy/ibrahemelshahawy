function changeCss () {
    var bodyElement = document.querySelector("body");
    var navElement = document.querySelector("nav");
    this.scrollY > 100 ? navElement.classList.add("navAfterscroll"): navElement.classList.remove("navAfterscroll");
  }
  window.addEventListener("scroll", changeCss , false);


  let openList1 = document.querySelector(".Dropdown");

  openList1.addEventListener("mousemove" , function (){
    let list1 = document.querySelector(".Dropdown_list");
    let list2 = document.querySelector(".Dropdown4");

    list1.style.display= 'block';
    list1.style.transition= '.5s';


    
    

  })



  openList1.addEventListener("mouseout" , function (){
    let list1 = document.querySelector(".Dropdown_list");
    let list2 = document.querySelector(".Dropdown4");

    list1.style.display= 'none';
    list1.style.transition= '.5s';

    list2.style.display= "none" ;

    
    

  })




 const slides = document.querySelectorAll('.text-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'inline-block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);



let menuBtn = document.querySelector(".menu_btn");

menuBtn.addEventListener("click" , function (){
  let mainSideMenu = document.querySelector(".main_side_list");

  mainSideMenu.style.right = '0%';
  mainSideMenu.style.position = 'fixed';

})


let closeBtn = document.querySelector(".close_btn")

closeBtn.addEventListener("click" , function (){
  let mainSideMenu = document.querySelector(".main_side_list");

  mainSideMenu.style.right = '-100%';
})





let open_close_MainSideList = document.querySelector(".drop_link_btn");
let list = document.querySelector(".Dropdown_list_from_side");


open_close_MainSideList.addEventListener("click" , function () {
  let check = document.querySelector(".side_list1");
// console.log(check)
  if(check){
    list.style.display= 'none';
    list.classList.remove("side_list1")
    list.style.transition = '1s';

  } else {
    list.style.display = 'block';
    list.style.transition = '1s';

    list.classList.add("side_list1")

  }
})



ScrollReveal({ reset: true });

ScrollReveal().reveal('.intro_panner_text', {delay:100, origin:"left", position:"relative", distance: '80px' });
ScrollReveal().reveal('.why_choose_us', { delay: 300, origin:"left", position:"relative", distance: '80px'  });
ScrollReveal().reveal('.our_services', { delay: 300, origin:"left", position:"relative", distance: '80px'  });
ScrollReveal().reveal('.call-to-action', { delay: 300,  origin:"left", position:"relative", distance: '80px'  });
ScrollReveal().reveal('.Powerful_Features', { delay: 300, origin:"left", position:"relative", distance: '80px' });
ScrollReveal().reveal('.section_header', { delay: 300, origin:"right", position:"relative", distance: '80px' });
ScrollReveal().reveal('.section_header', { delay: 300, origin:"right", position:"relative", distance: '80px' });
ScrollReveal().reveal('.iphone_model', { delay: 300, origin:"right", position:"relative", distance: '80px' });
ScrollReveal().reveal('.blog', { delay: 300, origin:"left", position:"relative", distance: '80px' });
ScrollReveal().reveal('.footer', { delay: 300, origin:"bottom", position:"relative", distance: '80px' });
ScrollReveal().reveal('.text_btns', { delay: 200, origin:"bottom", position:"relative", distance: '80px' });







