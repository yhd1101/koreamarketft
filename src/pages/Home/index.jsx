import React from 'react';
import Main from "../../components/Home/Main";
import Intro from "../../components/Home/Intro";
import IntroRarity from "../../components/Home/IntroRarity";
import FAQ from "../../components/Home/FAQ";

const index = () => {
    return (
       <>
           <Main/>
           <Intro/>
           <IntroRarity/>
           <FAQ/>
       </>
    );
};

export default index;