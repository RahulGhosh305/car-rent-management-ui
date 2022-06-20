import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
    name: string;
    rentPrice: string;
    color: string;
    seat: number;
};

interface carObject {
    name: string;
    rentPrice: string;
    color: string;
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

const CarEdit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });

    const onSubmit = handleSubmit((data) => {
        // console.log(data)
        fetch(`http://localhost:3333/car-rent/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(res => {
                alert("Successfully Update")
            })
    })

    const [car, setCar] = useState<carObject>({
        name: "",
        rentPrice: "",
        color: "",
        seat: 0
    })
    let { id } = useParams();
    // console.log(id);
    // Get Single Car by ID
    useEffect(() => {
        fetch(`http://localhost:3333/car-rent/${id}`)
            .then(res => res.json())
            .then(data => setCar(data.data))
    }, [])
    // console.log(car);

    return (
        <div className='container'>
            <Navbar />
            <div className="row">

                <div className="col-md-4">
                    <h5>Updateing Data</h5>
                    <p>Name: {car.name}</p>
                    <p>Car Color: {car.color}</p>
                    <p>Car Seat: {car.seat}</p>
                    <p>Car Rent: {car.rentPrice}</p>
                </div>

                <div className="col-md-8">
                    <h5>Update Form</h5>
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

export default CarEdit;