import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctors = () => {

    const [doctorsInfo, setDoctorsInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newDoctorInfo = { ...doctorsInfo };
        newDoctorInfo[e.target.name] = e.target.value;
        setDoctorsInfo(newDoctorInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', doctorsInfo.name);
        formData.append('email', doctorsInfo.email);

        fetch('http://localhost:5000/addADoctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section>
            <div className="container-fluid row container-style">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h5>Add Doctors</h5>

                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
                        </div>
                        <div class="form-group form-check">
                            <label for="exampleInputPassword1">Upload Images</label> <br />
                            <input onChange={handleFileChange} type="file" class="" placeholder="Photo" />
                        </div>
                        <button type="submit" class="btn btn-brand text-white">Submit</button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddDoctors;