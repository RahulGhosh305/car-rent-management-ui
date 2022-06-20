// interface IProps {
//     color: string;
//     name: string;
//     rentPrice: string;
//     seat: number;
// }
const CarInfo = (car: any) => {
    // console.log(car.car.name);
    return (
        <div className="col-md-4 mt-3 mx-auto">
            <div className="card text-dark bg-light mb-3">
                <div className="card-header">Rent Car Earn Money!!!</div>
                <div className="card-body">
                    <h4 className="card-title pb-2">Car: {car.car.name}</h4>
                    <p className="card-text">Color: {car.car.color}</p>
                    <p className="card-text">Rent Price: {car.car.rentPrice}</p>
                    <p className="card-text">Seat: {car.car.seat} Seater</p>
                </div>
            </div>
        </div>
    );
};

export default CarInfo;