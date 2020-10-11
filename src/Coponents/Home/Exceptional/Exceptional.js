import React from 'react';
import './Exceptional.css';
import TestTooth from '../../../images/TestTooth.png';

const Exceptional = () => {
    return (

        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="row style-exceptional">
                <div>
                    <div className="col-md-4 offset-md-1">
                        <img className="img-fluid img-size" src={TestTooth} alt="" />
                    </div>
                </div>

                <div className="col-md-6 mt-3">
                    <h3>Exceptional Dental <br />Care,on Your Terms</h3>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ipsam distinctio maxime perspiciatis quam eum est,  hic autem, veritatis corporis facilis  officia optio ratione architecto dolor iure, amet quos! Laborum, a?</p>
                    <button className="btn btn-brand text-white">Learn More </button>
                </div>
            </div>
        </main>
    );
};

export default Exceptional;