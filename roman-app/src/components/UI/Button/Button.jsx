import React from 'react';
import classes from './Button.module.css'

function Button({children, classOption, ...props}) {
    return ( 
        <button {...props} className={[classes.button, classOption].join(' ')}>
            {children}
        </button>
     );
}

export default Button;