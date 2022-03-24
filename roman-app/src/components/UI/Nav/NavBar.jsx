import React from 'react';
import classes from './NavBar.module.css'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'


function NavBar() {
    return ( 
        <nav>
            <div className={classes.div__nav}>
                <div className={classes.logo}><Link className={classes.logo__link} to={'/'}>Rome</Link></div>
                <ul className={classes.nav}>
                    <li><Link className={classes.link} to={'/dolorem'}>Dolorem</Link></li>
                    <li><Link className={classes.link} to={'/history'}>History</Link></li>
                    <li><a className={classes.link} target='_blank' href='https://www.youtube.com/c/Dovahhatty'>Unbiased History</a></li>
                    <li><Link className={classes.link} to='fivegoodemperors'>Five good Emperors</Link></li>
                </ul>
                <div className={classes.menu__icon}>
                </div>
            </div>
        </nav>
     );
}

export default NavBar;