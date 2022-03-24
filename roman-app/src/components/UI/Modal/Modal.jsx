import React from 'react';
import classes from './Modal.module.css'
import Button from '../Button/Button';

function Modal({active, setActive, children}) {
    return ( 
        <div className={active ? [classes.modal,classes.active].join(' ') : classes.modal} onClick={()=>setActive(false)}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
                <Button classOption={classes.button__flex} onClick={()=>setActive(false)} children={'Close'}/>
                <p>
                    {children}
                </p>
            </div>
        </div>
    );
}

export default Modal;