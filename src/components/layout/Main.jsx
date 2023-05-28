import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../banner/Banner';

const Main = () => {
    return (
        <>
        <Header></Header>
        <Banner></Banner>
        <Outlet></Outlet>
            
        </>
    );
};

export default Main;