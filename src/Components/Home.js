import React from 'react';

import Banner from './Banner';

import NewCustomer from './NewCustomer';

import Offer from './Offer';

import Footer from './Footer';

const Home = () => {
    return (
        <>
            {/* Child Component Instances */}
            <Banner/>
            <NewCustomer/>
            <Offer/>
            <Footer/>
        </>
    )
}
export default Home;