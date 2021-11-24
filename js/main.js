let images = [
    '../img/photo4.jpg',
    '../img/Roman_Empire.png', 
    '../img/photo1.jpg', 
    '../img/photo2.jpg',
    '../img/photo3.jpg'
];

const sliderPoint = document.querySelectorAll('.slider__point')
let num = 0;
sliderPoint[0].style.background = '#9b2d30'
const slideShow = () => {
    let slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.className='roman__image'
    slider.src = images[num];
    for (let i=0; i<sliderPoint.length;i++){
        sliderPoint[i].style.background = '#36393E'
    }
    sliderPoint[num].style.background = '#9b2d30'
}


setInterval(slideShow, 7500);

sliderPoint[0].onclick = () =>{
    for (let i=0; i<sliderPoint.length;i++){
        sliderPoint[i].style.background = '#36393E';
    }
    sliderPoint[0].style.background = '#9b2d30';
    let slider = document.getElementById('slider');
    slider.src = images[0];
    num=0;
}
sliderPoint[1].onclick = () =>{
    for (let i=0; i<sliderPoint.length;i++){
        sliderPoint[i].style.background = '#36393E';
    }
    sliderPoint[1].style.background = '#9b2d30';
    let slider = document.getElementById('slider');
    slider.src = images[1];
    num=1;    
}
sliderPoint[2].onclick = () =>{
    for (let i=0; i<sliderPoint.length;i++){
        sliderPoint[i].style.background = '#36393E';
    }
    sliderPoint[2].style.background = '#9b2d30';
    let slider = document.getElementById('slider');
    slider.src = images[2];
    num=2; 
}
sliderPoint[3].onclick = () =>{
    for (let i=0; i<sliderPoint.length;i++){
        sliderPoint[i].style.background = '#36393E';
    }
    sliderPoint[3].style.background = '#9b2d30';
    let slider = document.getElementById('slider');
    slider.src = images[3]; 
    num=3;    
}
sliderPoint[4].onclick = () =>{
    for (let i=0; i<sliderPoint.length;i++){
        sliderPoint[i].style.background = '#36393E';
    }
    sliderPoint[4].style.background = '#9b2d30';
    let slider = document.getElementById('slider');
    slider.src = images[4];
    num=4;     
}


