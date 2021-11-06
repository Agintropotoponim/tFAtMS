let images = [
    '../img/photo4.jpg',
    '../img/Roman_Empire.png', 
    '../img/photo1.jpg', 
    '../img/photo2.jpg',
    '../img/photo3.jpg'
];
let num = 0;
const next = () => {
    let slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.className='roman__image'
    slider.src = images[num];
}
const prev = () => {
    let slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

setInterval(next,7500)