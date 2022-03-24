import React, {useState} from 'react';
import Slider from '../components/UI/Slider/Slider';




function MainPage() {
    return (  
        <div className='content'>
            <div className='block'>
                <div className='block__column'>
                    <div className='block__item'>
                        <p className='main-page'>There once was a dream... a dream called Rome.</p>
                            <Slider/>
                    </div>
                </div>
                <div className='block__column'>
                    <div className='the-greatest-generals'>
                        <ul>The greatest generals:</ul>
                            <li><a target='_blank' rel="noopener" className='generals' href='https://en.wikipedia.org/wiki/Belisarius'>Flavius Belisarius</a></li>
                            <li><a target='_blank' rel="noopener" className='generals' href='https://en.wikipedia.org/wiki/Flavius_Aetius' >Flavius Aetius</a></li>
                            <li><a target='_blank' rel="noopener" className='generals' href='https://en.wikipedia.org/wiki/Aegidius'>Aegidius Afranius Syagrius</a></li>
                            <li><a target='_blank' rel="noopener" className='generals' href='https://en.wikipedia.org/wiki/Stilicho'>Flavius Stilicho</a></li>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default MainPage;