import React, { useState } from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const ServiceData = ({ service, myservices, setMyservices }) => {

 

    //handleDelete
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this service!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    //delete api
                    fetch(`http://localhost:5000/myservices/${id}`, {
                        method: "DELETE",

                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Your service has been deleted!", {
                                    icon: "success",
                                });
                            }
                        })
                    const remainingService = myservices.filter(service => service._id !== id)
                    setMyservices(remainingService)
                }
            });


    }

    //handleUpdate
    const handleUpdate = (id) => {
        //patch api
        fetch(`http://localhost:5000/myservices/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirmed" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('service has confirmed')
                }
                const remainConfirmService = myservices.filter(service => service._id !== id)
                const confirmService = myservices.find(service => service._id === id)
                confirmService.status = "confirmed"
                const newService = [confirmService, ...remainConfirmService]
                setMyservices(newService)
            })
    }

    return (

        <tr>
            <th>
                <button style={{display:service?.status && 'none'}} onClick={() => handleDelete(service._id)} className="btn btn-circle btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td className='flex justify-center items-center'><img src={service.img} alt={`${service.title} image`} className='w-32 rounded-lg h-full object-cover' /></td>
            <td>{service.title}</td>
            <td>{service.price} $</td>
            <td>{service.date} </td>
            <td>
                {
                    service?.status === "confirmed" ? <p className=' bg-green-600 p-2 rounded-lg
                    w-24 mx-auto disabled text-white'>{service.status}</p> : <button className='btn bg-red-500 text-white btn-sm' onClick={() => handleUpdate(service._id)}>please confirm</button>
                }
            </td>
        </tr>

    );
};

export default ServiceData;