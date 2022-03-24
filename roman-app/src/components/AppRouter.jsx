import React from 'react';
import MainPage from '../pages/MainPage';
import {Route, Routes} from 'react-router-dom'
import Dolorem from '../pages/Dolorem';
import History from '../pages/History';
import FiveGoodEmperors from '../pages/FiveGoodEmperors';
import Slider from './UI/Slider/Slider';

function AppRouter() {
    return ( 
        <Routes>
            <Route element={<MainPage><Slider/></MainPage>} path='/'/>
            <Route element={<Dolorem/>} path='/dolorem'/>
            <Route element={<History/>} path='history'/>
            <Route element={<FiveGoodEmperors/>} path='fivegoodemperors'/>
        </Routes>
     );
}

export default AppRouter;