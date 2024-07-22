import React, { useState } from 'react';
import './GoogleFormAdd.css';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AddBookAsync, uploadImg } from '../Service/GoogleAction/googleAction';

function GoogleFormAdd() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [uploading, setUploading] = useState(false)
    const [inputGoogle, setInputGoogle] = useState({
        id: '',
        avatar: '',
        fname: '',
        Pnumber: '',
        email: '',
        address: '',
        note: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputGoogle({ ...inputGoogle, [name]: value });
    };


    const handleImg = async (e) => {
        const file = e.target.files[0];
        console.log("fhljksdiuwe", file)
        try {
            const url = await dispatch(uploadImg(file));
            setInputGoogle(prevContact => ({ ...prevContact, avatar: url }));
        } catch (error) {
            console.log('Error uploading image:', error);
        }
        setUploading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddBookAsync(inputGoogle));
        navigate('/');
    };
    return (
        <>
            <Container>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <form id="entry-form" onSubmit={handleSubmit}>
                            <h1>Google Contacts Clone App</h1>

                            <div className="mb-3">
                                <label htmlFor="avatar" className="form-label">Avatar</label>
                                <input type="file" className="form-control" name='avatar' aria-describedby="avatarHelp" onChange={handleImg} />
                                <div id="avatarHelp" className="form-text">Upload an image for your avatar.</div>
                            </div>

                            <label htmlFor="fName">Name</label>
                            <fieldset>
                                <input name="fname" type="text" id="fName" onChange={handleChange} value={inputGoogle.fname} />
                            </fieldset>
                            <label htmlFor="Pnumber">Phone Number</label>
                            <fieldset>
                                <input name="Pnumber" type="number" id="Pnumber" onChange={handleChange} value={inputGoogle.Pnumber} />
                            </fieldset>
                            <label htmlFor="eAddress">Email</label>
                            <fieldset>
                                <input name="email" type="text" id="eAddress" onChange={handleChange} value={inputGoogle.email} />
                            </fieldset>
                            <label htmlFor="busDescription">Address</label>
                            <fieldset>
                                <input name="address" type="text" id="busDescription" onChange={handleChange} value={inputGoogle.address} />
                            </fieldset>
                            <label htmlFor="explain">Note</label>
                            <fieldset>
                                <textarea name="note" id="explain" maxLength="2000" onChange={handleChange} value={inputGoogle.note}></textarea>
                            </fieldset>
                            <input className="button" type="submit" value="Submit" />
                        </form>

                    </div>
                </div>
            </Container>
        </>
    );
}

export default GoogleFormAdd;
