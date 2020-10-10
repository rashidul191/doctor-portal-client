import React from 'react';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import Exceptional from '../Exceptional/Exceptional';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import AppointmentHome from '../AppointmentHome/AppointmentHome';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointmentHome></AppointmentHome>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <OurDoctors></OurDoctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;