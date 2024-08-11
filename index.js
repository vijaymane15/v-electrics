
document.getElementById('download-btn').addEventListener('click', function() {
    // Create an anchor element
    var link = document.createElement('a');
    link.href = 'assests/VIJAY ELECTRICAL PROFILE.pdf'; // Replace 'path/to/your/profile.pdf' with the actual path to your PDF file
    link.download = 'Vijayelectricalsprofile.pdf'; // Set the desired filename for the downloaded file
    // Simulate a click event to trigger the download
    link.click();
});

// Add animation to the text

// var TrandingSlider = new Swiper('.tranding-slider', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     loop: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 100,
//       modifier: 2.5,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     }
//   });

document.querySelector("#show-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});

document.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('#apfc-panel .row div');
    var scrollPos = window.scrollY + window.innerHeight;
    
    elements.forEach(function (el) {
        if (scrollPos > el.offsetTop) {
            el.classList.add('appear');
        }
    });
});



const slide = document.querySelector(".slide");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = slide.querySelector(".cardi").offsetWidth;
const slideChildrens = [...slide.children];

let isDragging  = false, startX, startScrollLeft;
let cardPerView = Math.round(slide.offsetWidth/firstCardWidth);

slideChildrens.slice(-cardPerView).reverse().forEach(card=>{
    slide.insertAdjacentHTML("afterbegin",card.outerHTML);
});

slideChildrens.slice(0, cardPerView).forEach(card=>{
    slide.insertAdjacentHTML("beforeend",card.outerHTML);
});

arrowBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        slide.scrollLeft+=btn.id === "left" ? -firstCardWidth:firstCardWidth;
    })
})

const dragStart = (e)=>{
    isDragging = true;
    slide.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = slide.scrollLeft;
}

const dragging = (e)=>{
    if(!isDragging) return;
    slide.scrollLeft=startScrollLeft - (e.pageX - startX);
}

const dragStop = ()=>{
    isDragging = false;
    slide.classList.remove("dragging");
}

const infiniteScroll = ()=>{
    if(slide.scrollLeft===0){
        slide.classList.add("no-transition");
        slide.scrollLeft=slide.scrollWidth - (2*slide.offsetWidth);
        slide.classList.remove("no-transition");
    }
    else if(Math.ceil(slide.scrollLeft)===slide.scrollWidth-slide.offsetWidth){
        slide.classList.add("no-transition");
        slide.scrollLeft=slide.offsetWidth;
        slide.classList.remove("no-transition");
    }
}

slide.addEventListener("mousedown",dragStart);
slide.addEventListener("mousemove",dragging);
document.addEventListener("mouseup", dragStop);
slide.addEventListener("scroll", infiniteScroll);