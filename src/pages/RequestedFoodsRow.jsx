import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const RequestedFoodsRow = ({ requested }) => {
    const { food_id, _id, DonorName, email, Location, notes, donate, ExpiredDate, Status, requestDate } = requested || {};

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FF6C22',
            cancelButtonColor: '#2e355a',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://meal-connect-server.vercel.app/api/v1/requested/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Food has been deleted.',
                                'success'
                            )
                            window.location.href = '/requested-foods';
                        }
                    })
            }
        })
    }
    return (
        <tr class="bg-white border-b  hover:bg-gray-50 ">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <Link to={`http://localhost:5173/food_details/${food_id}`}><a>{DonorName}</a></Link>
            </th>
            <td class="px-6 py-4">
                {Status ? 'Available':'Confirmed'}
            </td>
            <td class="px-6 py-4">
                {ExpiredDate}
            </td>
            <td class="px-6 py-4">
                {donate}
            </td>
            <td class="px-6 py-4">
                {Status && <button onClick={() => { handleDelete(_id) }} className="btn">X</button>}
            </td>
        </tr>
    );
};

export default RequestedFoodsRow;