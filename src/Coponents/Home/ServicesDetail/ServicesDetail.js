import React from 'react';

const ServicesDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={service.img} alt="" />
            <h6 className="mt-4 mb-4">{service.title}</h6>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServicesDetail;