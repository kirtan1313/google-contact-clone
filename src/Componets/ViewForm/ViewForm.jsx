
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './ViewForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAsync, EditDataAsync, GetDataAsync } from '../Service/GoogleAction/googleAction';
import { useNavigate } from 'react-router';

function ViewForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { books, isEdit } = useSelector(state => state.googleReducer)

    const handleEdit = (id) => {

        dispatch(EditDataAsync(id))

    }
    const handleDelet = (id) => {
        dispatch(DeleteAsync(id))
    }

    useEffect(() => {
        dispatch(GetDataAsync());
    }, [])

    useEffect(() => {
        if (isEdit) {
            navigate('/edit')
        }
    }, [isEdit])
    return (
        <>
            <Container fluid className='pt-3'>
                <Row>
                    <table class="table table-hover">
                        <thead>
                            <tr className='table-dark'>
                                <th className='border border-dark text-center'>Avtar</th>
                                <th className='border border-dark text-center'>Name</th>
                                <th className='border border-dark text-center'>Phone Number</th>
                                <th className='border border-dark text-center'>Email</th>
                                <th className='border border-dark text-center'>Address</th>
                                <th className='border border-dark text-center'>Note</th>
                                <th className='border border-dark text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((data) => {

                                    return (
                                        <tr >
                                            <td className='border border-dark text-center col-2'><img src={data.avatar} alt="" className='img-view'/></td>
                                            <td className='border border-dark text-center col-2'>{data.fname}</td>
                                            <td className='border border-dark text-center col-2'> {data.Pnumber}</td>
                                            <td className='border border-dark text-center col-2'>{data.email}</td>
                                            <td className='border border-dark text-center col-2'>{data.address}</td>
                                            <td className='border border-dark text-center col-2'>{data.note}</td>
                                            <td className='d-flex justify-content-center gap-3 py-3 border-dark'>
                                                <button type='submit' className='btn btn-success' onClick={() => handleEdit(data.id)}>Edit</button>
                                                <button className='btn btn-danger' onClick={() => handleDelet(data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </Row>
            </Container>
        </>
    );
}

export default ViewForm;

