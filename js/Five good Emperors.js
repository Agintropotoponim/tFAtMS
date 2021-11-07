const text1 = document.querySelector('#nerva').innerText
const text2 = document.querySelector('#traianus').innerText
const text3 = document.querySelector('#hadrian').innerText
const text4 = document.querySelector('#pius').innerText
const text5 = document.querySelector('#aurelius').innerText

function scrollToElement() {
    element = document.getElementById("temp")
    element.scrollIntoView(true);
    }

document.querySelector('#firstSpan').onclick = (text) =>{
    const temp = document.querySelector('#temp')
    temp.className ='info__block'
    if (temp.style.display === 'none'){
        temp.style.display = 'block'
        temp.innerText = text1
        scrollToElement()  
    } else{ temp.style.display = 'none'}
}
document.querySelector('#firstPhoto').onclick = (text) =>{
    const temp = document.querySelector('#temp')
    if (temp.style.display === 'none'){
        temp.style.display = 'block'
        temp.innerText = text1
        scrollToElement()  
    } else{ temp.style.display = 'none'}  
}

document.querySelector('#secondSpan').onclick = (text) =>{
    const temp = document.querySelector('#temp')
    temp.className ='info__block'
    if (temp.style.display === 'none'){
        temp.style.display = 'block'
        temp.innerText = text2
        scrollToElement()  
    } else{ temp.style.display = 'none'}
}
document.querySelector('#secondPhoto').onclick = (text) =>{
    const temp = document.querySelector('#temp')
    if (temp.style.display === 'none'){
        temp.style.display = 'block'
        temp.innerText = text2
        scrollToElement()  
    } else{ temp.style.display = 'none'}  
}

document.querySelector('#thirdSpan').onclick = (text) =>{
    const temp = document.querySelector('#temp')
    temp.className ='info__block'
    if (temp.style.display === 'none'){
        temp.style.display = 'block'
        temp.innerText = text3
        scrollToElement()  
    } else{ temp.style.display = 'none'}
}
document.querySelector('#thirdPhoto').onclick = (text) =>{
    const temp = document.querySelector('#temp')
    if (temp.style.display === 'none'){
        temp.style.display = 'block'
        temp.innerText = text3
        scrollToElement()  
    } else{ temp.style.display = 'none'} 
}

document.querySelector('#fourthSpan').onclick = (text) =>{
    const temp = document.querySelector('#temp')
    temp.className ='info__block'
    if (temp.style.display === 'none'){
        temp.style.display = 'block'
        temp.innerText = text4
        scrollToElement()  
    } else{ temp.style.display = 'none'}
}
document.querySelector('#fourthPhoto').onclick = (text) =>{
    const temp = document.querySelector('#temp')
    if (temp.style.display === 'none'){
        temp.style.display = 'block'
        temp.innerText = text4
        scrollToElement()  
    } else{ temp.style.display = 'none'} 
}

document.querySelector('#fifthSpan').onclick = (text) =>{
    const temp = document.querySelector('#temp')
    temp.className ='info__block'
    if (temp.style.display === 'none'){
        temp.style.display = 'block'
        temp.innerText = text5
        scrollToElement()  
    } else{ temp.style.display = 'none'}
}
document.querySelector('#fifthPhoto').onclick = (text) =>{
    const temp = document.querySelector('#temp')
    if (temp.style.display === 'none'){
        temp.style.display = 'block'
        temp.innerText = text5
        scrollToElement()  
    } else{ temp.style.display = 'none'} 
}