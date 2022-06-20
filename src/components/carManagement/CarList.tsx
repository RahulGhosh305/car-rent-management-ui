import { useNavigate } from "react-router-dom";

const CarList = (car: any) => {
    // console.log(car);

    // Delect Car Handler
    const handleDelete = (id: string): void => {
        // console.log(id);
        fetch(`http://localhost:3333/car-rent/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Delete Successfully")
            })
    }

    // Handle Car Update
    const navigate = useNavigate()
    const handleUpdate = (id: string) => {
        navigate(`/carManagement/${id}`);
    }

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <h5>{car.car.name}</h5>
                <span>
                    <button onClick={() => handleDelete(car.car._id)} className="btn btn-danger me-2">Delete</button>
                    <button onClick={() => handleUpdate(car.car._id)} className="btn btn-info">Edit</button>
                </span>
            </div>
        </li>
    );
};

export default CarList;