import React from 'react';
import Swal from 'sweetalert2';

const RequestedFoodsRow = ({ requested }) => {
    const { food_id, _id, DonorName, email, Location, notes, donate, ExpiredDay, Status, requestDate } = requested || {};

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
            <th scope="row" class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                <p>{DonorName}</p>
            </th>
            <td class="px-3 py-3">
                {Status ? 'Available' : 'Confirmed'}
            </td>
            <td class="px-3 py-3">
                {ExpiredDay} Days
            </td>
            <td class="px-3 py-3">
                {Location}
            </td>
            <td class="px-3 py-3">
                {requestDate}
            </td>
            <td class="px-3 py-3">
                {
                    donate ? (<p>${donate}</p>):( <p>$ 0</p> )
                }
            </td>
            <td class="px-3 py-3">
                {Status ? (<button onClick={() => { handleDelete(_id) }} className="btn">Cancel</button>):('Confirmed') }
            </td>
        </tr>
    );
};

export default RequestedFoodsRow;