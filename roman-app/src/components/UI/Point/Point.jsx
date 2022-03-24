import React from 'react';
import classes from './Point.module.css'

function Point({onClick}) {
    return ( 
        <div>
            <div onClick={onClick} className={classes.slider__point}></div>
        </div>
     );
}

export default Point;