let menuicon= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle( 'fa-xmark');
    navbar.classList.toggle('active')
};

let sections= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100);

    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });
 ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .education-row',{origin: 'bottom'});
 ScrollReveal().reveal('.about-img, .skill-left, .contactinfo',{origin: 'left'});
 ScrollReveal().reveal('.about-content, .skill-right, .contactform',{origin: 'right'});




 function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Read More";
    }
}







const circles= document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points="";
    var rotate= 360 / dots;

    for(let i=0;i<dots;i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML=points;
    const pointsMarked= elem.querySelectorAll('.points');
    for(let i=0;i<percent;i++){
        pointsMarked[i].classList.add('marked');

    }

})

const slides=document.querySelectorAll(".slide-img");
var counter=1;
slides.forEach(
    (slide,index) =>{
    slide.style.left = `${index * 100}%` 
    }
)
const goPrev = () =>{
    counter--
   slideleft()  
}

const goNext = () =>{
        slideImage() 
       counter++
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            if(counter<slides.length){
            slide.style.transform = `translateX(-${counter * 100}%)`
            }
            else{
            slide.style.transform = `translateX(0px)`
            counter=0;
            }
        }
    )
}
const slideleft = () =>{
    slides.forEach(
        (slide)=>{
            if(counter>-1){
                slide.style.transform = `translateX(-${counter * 100}%)`
            }
            else{
                slide.style.transform=`translateX(${slides.length-1 * 100}%)`
                counter = slides.length-1;
            }
        }
    )
}

// const dots= document.querySelector('.dots');
// for(let i=0; i<slides.length; i++){
//     const div= document.createElement('div');
//     div.className= 'dot';
//     dots.appendChild(div);
// };

// const dotbtn = document.querySelectorAll('.dot');
// dotbtn[0].style.backgroundColor= '#a619e7';

// dotbtn.forEach((dot,i) => {
//     dot.addEventListener('click', () =>{
//         slides.style.transform = `translateX(-${i * 100}%)`;
//         counter = i+1;
        // slide.style.transform = `translateX(-${counter * 100}%)`
        // slidebtn()
        // slideImage()
//     });
// });
// const slidebtn = () =>{
//     slides.forEach(
//         (slide)=>{
//                 slide.style.transform = `translateX(-${i * 100}%)`
//         }
//     )
// }
            
