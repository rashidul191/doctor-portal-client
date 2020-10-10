import React from 'react';
import './Testimonial.css';
import Ellipse1 from '../../../images/Ellipse 1.png';
import Ellipse2 from '../../../images/Ellipse 2.png';
import Ellipse3 from '../../../images/Ellipse 3.png';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';


const testimonialData = [
    {
        title: 'Winson Herry',
        subTitle: 'California',
        img: Ellipse1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ipsam distinctio maxime perspiciatis quam eum est,  hic autem, veritatis corporis facilis  officia optio ratione architecto dolor iure, amet quos! Laborum.',

    },

    {
        title: 'Winson Herry',
        subTitle: 'California',
        img: Ellipse2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ipsam distinctio maxime perspiciatis quam eum est,  hic autem, veritatis corporis facilis  officia optio ratione architecto dolor iure, amet quos! Laborum.',

    },

    {
        title: 'Winson Herry',
        subTitle: 'California',
        img: Ellipse3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ipsam distinctio maxime perspiciatis quam eum est,  hic autem, veritatis corporis facilis  officia optio ratione architecto dolor iure, amet quos! Laborum.',

    },
]
const Testimonial = () => {
    return (
        <section className="testimonial-container">
            <div className="container justify-content-center mt-5">
                <div>
                    <h5 style={{ color: '#1CC7C1' }}>TESTIMONIAL</h5>
                    <h1>What's Our Patients <br />Says</h1>
                </div>
                <div className="row">
                    {
                        testimonialData.map (testimonial => <TestimonialDetail testimonial={testimonial} ></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;