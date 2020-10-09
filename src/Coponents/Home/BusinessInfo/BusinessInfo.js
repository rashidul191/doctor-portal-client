import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary',
    },

    {
        title: 'Visit our location',
        description: 'Brooklyn, Ny 10036, United States',
        icon: faMapMarkerAlt,
        background: 'dark',
    },

    {
        title: 'Contact us now',
        description: '+124562594',
        icon: faPhone,
        background: 'primary',
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;