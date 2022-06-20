import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import CarList from './CarList';
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
    name: string;
    rentPrice: string;
    color: string;
    seat: number;
};

interface carObject {
    color: string;
    name: string;
    rentPrice: string;
    seat: number;
}

const resolver: Resolver<any> = async (values) => {
    return {
        values: values.name ? values : {},
        errors: !values.name
            ? {
                firstName: {
                    type: 'required',
                    message: 'This is required.',
                },
            }
            : {},
    };
};

const CarManagement = () => {
    const [cars, setCars] = useState<carObject[]>([])
    // console.log(cars);
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });

    // POST Data 
    const onSubmit = handleSubmit((data) => {
        // console.log(data)
        fetch(`http://localhost:3333/car-rent/`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(res => {
                alert("Successfully Save")
            })
    })

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
                <div className="col-md-6">
                    <h5>Car Rent Management</h5>
                    <ul className="list-group list-group-flush">
                        {
                            cars.map(singleCar => < CarList car={singleCar} key={Math.random()} />)
                        }
                    </ul>
                </div>

                <div className="col-md-6">
                    <h5> Add New Rent Car</h5>
                    <form onSubmit={onSubmit}>
                        <div className="mb-1">
                            <input {...register("name")} placeholder="Car Name" />
                            {errors?.name && <p>{errors.name.message}</p>}
                        </div>
                        <div className="mb-1">
                            <input {...register("color")} placeholder="Color" />
                            {errors?.color && <p>{errors.color.message}</p>}
                        </div>
                        <div className="mb-1">
                            <input {...register("rentPrice")} placeholder="Rent Price" />
                            {errors?.rentPrice && <p>{errors.rentPrice.message}</p>}
                        </div>
                        <div className="mb-1">
                            <input {...register("seat")} placeholder="Seat" />
                            {errors?.seat && <p>{errors.seat.message}</p>}
                        </div>

                        <input className="mt-1" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CarManagement;