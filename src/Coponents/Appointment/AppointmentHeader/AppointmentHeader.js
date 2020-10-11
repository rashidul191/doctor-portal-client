import React from 'react';
import './AppointmentHeader.css';
import chair from '../../../images/Mask Group 1.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center appointmentHeader-container">
            <div className="col-md-4 offset-md-1">
                <h1 className="mb-5" style={{ color: '#3A4256' }}>Appointment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default AppointmentHeader;