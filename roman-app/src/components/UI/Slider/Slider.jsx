import React, {useState} from 'react';
import photo1 from '../../../img/photo4.jpg'
import photo2 from '../../../img/Roman_Empire.png'
import photo3 from '../../../img/photo1.jpg'
import photo4 from '../../../img/photo2.jpg'
import photo5 from '../../../img/photo3.jpg'
import classes from './Slider.module.css'
import Point from '../Point/Point';


function Slider() {

    const images = [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5
    ];


    const [photo, setPhoto] = useState(images[0])

    return ( 
        <div className={classes.contentbox}>
            <img src={photo} className={classes.roman__image} alt="roman image" />
            <div className={classes.slider__block}>
                <Point onClick={()=>{
                    setPhoto(images[0])
                }}/>
                <Point onClick={()=>{
                    setPhoto(images[1])
                }}/>
                <Point onClick={()=>{
                    setPhoto(images[2])
                }}/>
                <Point onClick={()=>{
                    setPhoto(images[3])
                }}/>
                <Point onClick={()=>{
                    setPhoto(images[4])
                }}/>
            </div>
        </div>
     );
}

export default Slider;

