import React from 'react';
import './AppointmentHeader.css';
import chair from '../../../images/Mask Group 1.png';

const AppointmentHeader = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center appointmentHeader-container">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Appointment</h1>
               
               
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default AppointmentHeader;