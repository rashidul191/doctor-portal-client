import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        closeModal();
    }

    // const [modalIsOpen, setIsOpen] = React.useState(false);
    // function openModal() {
    //     setIsOpen(true);
    // }

    // function closeModal() {
    //     setIsOpen(false);
    // }
    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h5 className="text-brand text-center">{appointmentOn}</h5>
                <p className="text-secondary text-center"><small> ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input class="form-control" type="text" name="name" ref={register({ required: true })} placeholder="Your Name" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input class="form-control" type="text" name="phone" ref={register({ required: true })} placeholder="Phone Number" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input class="form-control" type="text" name="email" ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input class="form-control" type="text" name="date" ref={register({ required: true })} placeholder="mm/dd/yy" />
                        {errors.date && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <select class="form-control form-control-sm" name="gender" ref={register({ required: true })} placeholder="Gender">
                                {/* <option disabled={true} value="Not set">Select Gender</option> */}
                                <option value="Not set" >Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-4">
                            <input class="form-control custom-select" type="text" name="age" ref={register({ required: true })} placeholder="Age" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input class="form-control custom-select" type="text" name="weight" ref={register({ required: true })} placeholder="Weight" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <div className=" d-flex justify-content-end">
                        <button className="btn btn-brand text-white" type="submit">SEND</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;