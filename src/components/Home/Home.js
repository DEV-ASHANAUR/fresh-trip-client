import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ServiceArea from '../ServiceArea/ServiceArea';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServiceArea></ServiceArea>
            <Contact></Contact>
        </div>
    );
};

export default Home;