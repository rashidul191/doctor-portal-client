import React from 'react';
import './AppointmentHome.css';
import doctor from '../../../images/5790-removebg.png';

const AppointmentHome = () => {
    return (
        <section className="appointment-container">
            <div className=" mb-5 appointment-style" >
                <div className="row style-appointment container md-5">
                    <div className="col-md-5">
                        <img className="img-fluid" src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 mt-5">
                        <h5 style ={{color:'#1CC7C1'}}>APPOINTMENT</h5>
                        <h1 className="text-white">Make an appointment <br/>Today</h1>
                        <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error odit tenetur, libero molestiae dolorum, culpa ipsa laudantium nobis neque veniam deserunt obcaecati repellendus fuga officia vitae dolorem repudiandae nulla. Dicta!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHome;