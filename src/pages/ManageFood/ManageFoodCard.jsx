import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageFoodCard = ({ details }) => {
    const { _id, food_id, DonorName, DonorEmail, DonorImage, requesterEmail, requesterName, Location, Notes, Donate, FoodImage, FoodName, FoodQuantity, ExpiredDay, Status, requesterImage, requestDate, Details, Description } = details || {};

    const handleConfirm = (_id, food_id) => {
        const updatedStatus = 0;
        const updated = {
            DonorName, food_id, updatedStatus, requesterEmail, requesterName, Location, Notes, Donate, FoodImage, FoodName, FoodQuantity, ExpiredDay, requesterImage, requestDate, Details
        };
        const updatedFood = {
            FoodName, FoodImage, Location, FoodQuantity, ExpiredDay, updatedStatus, Description, Details, DonorEmail, DonorName, DonorImage
        }
        fetch(`https://meal-connect-server.vercel.app/api/v1/requested/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updated)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Confirmed!',
                        'You confirmed the food request.',
                        'success'
                    )
                }

            })
        fetch(`https://meal-connect-server.vercel.app/api/v1/service/${food_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedFood)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    window.location.reload();
                }

            })


    }
    return (
        <tr class="bg-white border hover:bg-gray-50 ">
            <th scope="row" class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                <Link to={`https://meal-connect-server.vercel.app/food_details/${food_id}`}><img className="w10 h-10 object-cover rounded-lg" src={requesterImage} alt="" /></Link>
            </th>
            <td class="px-3 py-2">
                {Status ? ('Available') : ('Confirmed')}
            </td>
            <td class="px-3 py-2">
                {ExpiredDay}
            </td>
            <td class="px-3 py-2 ">
                {requesterEmail}
            </td>
            <td class="px-3 py-2 ">
                {Donate}
            </td>
            <td class="px-3 py-2 ">
                {requestDate}
            </td>
            <td class="px-3 py-2">
                {Status ? (<button onClick={() => { handleConfirm(_id, food_id) }} className="btn">Confirm</button>) : ('Already Confirmed')}
            </td>
        </tr>
    );
};

export default ManageFoodCard;