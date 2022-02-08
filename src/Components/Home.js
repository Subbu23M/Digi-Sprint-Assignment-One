import React from 'react';

// import NavBar from './NavBar';

import Banner from './Banner';

import NewCustomer from './NewCustomer';

import Offer from './Offer';

import Footer from './Footer';

const Home = () => {
    return (
        <>
            {/* Child Component Instances */}
            {/* <NavBar/> */}
            <Banner/>
            <NewCustomer/>
            <Offer/>
            <Footer/>
        </>
    )
}
export default Home;