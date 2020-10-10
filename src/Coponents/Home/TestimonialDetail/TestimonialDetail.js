import React from 'react';
import './TestimonialDetail.css';
const TestimonialDetail = ({ testimonial }) => {
    return (
        <div className="col-md-4 mt-5 testimonial-style ">
            <p>{testimonial.description}</p>
            <div className="d-flex  mt-4">
                <div className="mr-3">
                    <img style={{height:'45px'}} src={testimonial.img} alt="" />
                </div>
                <div>
                    <h6 style={{ color: '#1CC7C1' }}>{testimonial.title}</h6>
                    <p>{testimonial.subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;