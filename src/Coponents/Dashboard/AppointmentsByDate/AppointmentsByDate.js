import React from 'react';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
            <h6>appointments {appointments.length}</h6>
            {
                appointments.map(app => <li> {app.name} {app.email}</li> )
            }
        </div>
    );
};

export default AppointmentsByDate;