import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import CustomerCard from './CustomerCard';

interface customerObject {
    _id: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    selectedCar: string;
}

const Customer = () => {
    const [customers, setCustomer] = useState<customerObject[]>([])
    // console.log(customer);
    useEffect(() => {
        fetch("http://localhost:3333/customer/")
            .then(res => res.json())
            .then(data => {
                // console.log(data.data)
                setCustomer(data.data)
            })
    }, [])
    return (
        <div className='container'>
            <Navbar />
            <div className="row">
                <h4 className='display-4'>Customers Details</h4>

                {
                    customers.map(singleCustomer => <CustomerCard customer={singleCustomer} key={Math.random()} />)
                }

            </div>
        </div>
    );
};

export default Customer;