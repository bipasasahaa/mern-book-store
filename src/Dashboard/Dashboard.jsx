import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Dashboard = () => {
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Dashboard</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* Card 1 */}
                <div className='bg-white rounded shadow-md p-4'>
                    <h3 className='text-xl font-bold mb-2'>Total Users</h3>
                    <p className='text-gray-600'>1000</p>
                </div>

                {/* Card 2 */}
                <div className='bg-white rounded shadow-md p-4'>
                    <h3 className='text-xl font-bold mb-2'>Total Books</h3>
                    <p className='text-gray-600'>500</p>
                </div>

                {/* Card 3 */}
                <div className='bg-white rounded shadow-md p-4'>
                    <h3 className='text-xl font-bold mb-2'>Revenue</h3>
                    <p className='text-gray-600'>$10,000</p>
                </div>
            </div>

            {/* Quick Links */}
            <div className='mt-8'>
                <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
                <ul className='flex flex-col gap-2'>
                    <li>
                        <Link to='/admin/dashboard/upload' className='text-blue-600 hover:underline'>
                            Upload Book
                        </Link>
                    </li>
                    <li>
                        <Link to='/admin/dashboard/manage' className='text-blue-600 hover:underline'>
                            Manage Books
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
