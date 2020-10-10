import React from 'react';
import fluoride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth (1).png';
import whitening from '../../../images/tooth.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const serviceData = [
    {
        title: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati natus, maiores id libero impedit suscipit.',
        img: fluoride
    },

    {
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati natus, maiores id libero impedit suscipit.',
        img: cavity
    },

    {
        title: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati natus, maiores id libero impedit suscipit.',
        img: whitening
    },
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">

                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;