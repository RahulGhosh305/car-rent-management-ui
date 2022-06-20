import Navbar from '../Navbar/Navbar';
import { useForm, Resolver } from 'react-hook-form';

type CustomerValues = {
    name: string;
    phone: string;
    email: string;
    address: string;
    selectedCar: string;
};

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

const CustomerManagement = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CustomerValues>({ resolver });
    const onSubmit = handleSubmit((data) => {
        // console.log(data)
        fetch("http://localhost:3333/customer/", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                alert("Successfully Added Customer Info")
            })
    });

    return (
        <div className='container'>
            <Navbar />
            <div className="row">
                <h5>Add New Customer</h5>
                <form onSubmit={onSubmit}>
                    <div className="mb-1">
                        <input {...register("name")} placeholder="Car Name" />
                        {errors?.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className="mb-1">
                        <input {...register("phone")} placeholder="Phone" />
                        {errors?.phone && <p>{errors.phone.message}</p>}
                    </div>
                    <div className="mb-1">
                        <input {...register("email")} placeholder="Email" />
                        {errors?.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="mb-1">
                        <input {...register("address")} placeholder="Address" />
                        {errors?.address && <p>{errors.address.message}</p>}
                    </div>
                    <div className="mb-1">
                        <input {...register("selectedCar")} placeholder="Select Car" />
                        {errors?.selectedCar && <p>{errors.selectedCar.message}</p>}
                    </div>

                    <input className="mt-1" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default CustomerManagement;