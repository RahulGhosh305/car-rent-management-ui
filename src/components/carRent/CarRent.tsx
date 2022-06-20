import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import CarInfo from './CarInfo';

interface carObject {
    color: string;
    name: string;
    rentPrice: string;
    seat: number;
}

const CarRent = () => {
    const [cars, setCars] = useState<carObject[]>([])
    // console.log(cars);

    useEffect(() => {
        fetch("http://localhost:3333/car-rent")
            .then(res => res.json())
            .then(data => {
                // console.log(data.data);
                setCars(data.data)
            })
    }, [])
    return (
        <div className='container'>
            <Navbar />
            <div className="row">
                <h4 className='display-4'>Rent A Car!</h4>
                {
                    cars.map(singleCar => < CarInfo car={singleCar} key={Math.random()} />)
                }
            </div>
        </div>
    );
};

export default CarRent;