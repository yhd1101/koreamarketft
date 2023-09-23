import 'react-lazy-load-image-component/src/effects/blur.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "./components/layout/Footer";

const App = () => {
    return (
        <>
            <Outlet />
            <Footer/>
        </>
    );
};

export default App;