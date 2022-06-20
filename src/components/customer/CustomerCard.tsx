import perosn from '../../assets/person.jpg'

const CustomerCard = (customer: any) => {
    // console.log(customer.customer.name);
    const handleDelete = (id: string): void => {
        // console.log(id);
        fetch(`http://localhost:3333/customer/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                alert("Customer Delete Succsssfully")
            })
    }
    return (
        <div className="col-md-4">
            <div className="card" >
                <div className='text-center'>
                    <img src={perosn} className="card-img-top w-50" alt="..." height={200} />
                </div>
                <div className="card-body">
                    <p className="card-text">Name : {customer.customer.name}</p>
                    <p className="card-text">Phone : {customer.customer.phone}</p>
                    <p className="card-text">Email: {customer.customer.email}</p>
                    <p className="card-text">Address: {customer.customer.address}</p>
                    <p className="card-text">Selected Car: {customer.customer.selectedCar}</p>
                </div>
                <div className='m-2 d-flex justify-content-between'>
                    <button onClick={() => handleDelete(customer.customer._id)} className='btn btn-danger'>Del</button>
                    <button className="btn btn-info">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;