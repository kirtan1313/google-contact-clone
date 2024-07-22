import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataAsync, updateImg, uploadImg } from '../Service/GoogleAction/googleAction';
import { useNavigate } from 'react-router';

function EditForm() {
    const { book } = useSelector(state => state.googleReducer);
    const [editGData, seteditGData] = useState(book || {});
    // const [isUpdate, setIsUpdate] = useState(false);
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!book) {
            navigate('/home');
        }
    }, [book, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        seteditGData({ ...editGData, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("update data", e);
        dispatch(updateDataAsync(editGData));
        navigate('/home');
        // setIsUpdate(true);
    };


    const handleImg = async (e) => {
        const file = e.target.files[0];
        // setUploading(true);
        console.log("fhljksdiuwe", file)
        try {
            const url = await dispatch(updateImg(file));
            seteditGData(prevContact => ({ ...prevContact, avatar: url }));
        } catch (error) {
            console.log('Error uploading image:', error);
        }
        setUploading(false);
    };



    if (!book) return null;

    return (
        <>
            <div class="container">
                <form id="entry-form" onSubmit={handleUpdate}>
                    <h1>Google Contacts Clone App Update</h1>

                    <div className="mb-3">
                        <label htmlFor="avatar" className="form-label">Avatar</label>
                        <input type="file" className="form-control" name='avatar' aria-describedby="avatarHelp" onChange={handleImg} />
                        <div id="avatarHelp" className="form-text">Upload an image for your avatar.</div>
                    </div>
                    <label for="first-name"> Name</label>
                    <fieldset>
                        <input name="fname" type="text" id="fName" onChange={handleChange} value={editGData.fname} />
                    </fieldset>
                    <label for="last-name">Phone Number</label>
                    <fieldset>
                        <input name="Pnumber" type="number" id="lName" onChange={handleChange} value={editGData.Pnumber} />
                    </fieldset>
                    <label for="email-address">Email </label>
                    <fieldset>
                        <input name="email" type="text" id="eAddress" onChange={handleChange} value={editGData.email} />
                    </fieldset>
                    <label for="business-description">Address</label>
                    <fieldset>
                        <input name="address" type="text" id="busDescription" onChange={handleChange} value={editGData.address} />
                    </fieldset>
                    <label for="explain">Note</label>
                    <fieldset>
                        <textarea name="note" id="explain" maxlength="2000" onChange={handleChange} value={editGData.note}></textarea>
                    </fieldset>
                    <input class="button" type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default EditForm;
