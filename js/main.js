let images = [
    '../img/photo4.jpg',
    '../img/Roman_Empire.png', 
    '../img/photo1.jpg', 
    '../img/photo2.jpg',
    '../img/photo3.jpg'
];

const sliderPoint = document.querySelectorAll('.slider__point');
let num = 0;
sliderPoint[0].style.background = '#9b2d30';
const slideShow = () => {
    let slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.className='roman__image';
    slider.src = images[num];
    for (let i=0; i<sliderPoint.length;i++){
        sliderPoint[i].style.background = '#36393E';
    }
    sliderPoint[num].style.background = '#9b2d30';
}

setInterval(slideShow, 7500);

function f(n){
    for (let i=0; i<sliderPoint.length;i++){
        sliderPoint[i].style.background = '#36393E';
        if (n===sliderPoint[i]) n=i;
    }
    sliderPoint[n].style.background = '#9b2d30';
    let slider = document.getElementById('slider');
    slider.src = images[n];
    num=n;  
}

sliderPoint.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        return f(elem)});
    })
