import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

//react icons
import { FaStar } from "react-icons/fa6";

import { Avatar } from "flowbite-react";

import proPic from "../assets/profile.jpg";

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-14'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'> Our Customers </h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                I have been using this book store app for several months now, and I must say it has exceeded my expectations in every way. The user interface is intuitive and easy to navigate, making it a breeze to find and purchase books. The search function is robust, allowing me to quickly locate specific titles or browse through various genres
                                </p>
                                <Avatar
                                    alt=" avatar of jess"
                                    img={proPic}
                                    rounded
                                    className='w-10 mb-4'
                                />
                                <h5 className=' text-lg font-medium '> Aria Montgomery </h5>
                                <p className='text-base'> Fullstack Developer </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                One of the standout features of this app is its extensive catalog. It offers a wide range of books across different categories, from bestsellers to niche interests. I appreciate the recommendations based on my reading history, which has introduced me to new authors and genres I might not have discovered otherwise.
                                </p>
                                <Avatar
                                    alt=" avatar of jess"
                                    img={proPic}
                                    rounded
                                    className='w-10 mb-4'
                                />
                                <h5 className=' text-lg font-medium '> Spencer Hastings </h5>
                                <p className='text-base'> Software Tester </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                The purchasing process is seamless, with multiple payment options and speedy delivery. I've never encountered any issues with orders or transactions. The app also keeps track of my purchases and allows me to manage my digital library with ease.
                                </p>
                                <Avatar
                                    alt=" avatar of jess"
                                    img={proPic}
                                    rounded
                                    className='w-10 mb-4'
                                />
                                <h5 className=' text-lg font-medium '> Hanna Marin </h5>
                                <p className='text-base'> SDE </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                Another aspect I love about this app is the community aspect. It has forums and discussion boards where users can share their thoughts on books, exchange recommendations, and engage in literary discussions. It adds a social dimension to the reading experience, which I find enriching.
                                </p>
                                <Avatar
                                    alt=" avatar of jess"
                                    img={proPic}
                                    rounded
                                    className='w-10 mb-4'
                                />
                                <h5 className=' text-lg font-medium '> Alison DiLaurentis </h5>
                                <p className='text-base'> Backend Developer  </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                Overall, I highly recommend this book store app to any avid reader. It combines a user-friendly interface, a vast selection of books, efficient purchasing options, and a vibrant community, making it a must-have for book enthusiasts like myself.
                                </p>
                                <Avatar
                                    alt=" avatar of jess"
                                    img={proPic}
                                    rounded
                                    className='w-10 mb-4'
                                />
                                <h5 className=' text-lg font-medium '> Emily Woods </h5>
                                <p className='text-base'> Web Developer  </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Review