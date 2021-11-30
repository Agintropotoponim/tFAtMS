const text1 = document.querySelector('#nerva').innerText;
const text2 = document.querySelector('#traianus').innerText;
const text3 = document.querySelector('#hadrian').innerText;
const text4 = document.querySelector('#pius').innerText;
const text5 = document.querySelector('#aurelius').innerText;
const emperors = document.querySelectorAll('#Emperor');

function scrollToElement() {
    element = document.getElementById("temp");
    element.scrollIntoView(true);
    }

function showHistoryBlock(n){
    for (let i=0; i<emperors.length;i++){
        if (n===emperors[i]) n=i;
    }
        if (n<2) b=text1;
        else if (n<4) b=text2;
        else if (n<6) b=text3;
        else if (n<8) b=text4;
        else b=text5;
    const temp = document.querySelector('#temp');
    temp.className ='info__block';
    if (temp.style.display === 'none'){
        temp.style.display = 'block';
        temp.innerText = b;
        scrollToElement();  
    } else{ temp.style.display = 'none'}
}

emperors.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        return showHistoryBlock(elem)});
    })

