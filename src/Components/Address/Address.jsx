import React from 'react';
import {AiOutlineCalendar,AiOutlinePhone} from "react-icons/ai"
import {FaLocationArrow} from "react-icons/fa"

const Address = () => {
    return (
        <div className='bg-[#151515] px-10 py-16 rounded-lg mt-20 text-white'>
            <div className='flex flex-col lg:flex-row justify-center lg:items-center gap-10 lg:gap-32'>
                <div className='flex items-center gap-3'>
                    <AiOutlineCalendar className='text-5xl'></AiOutlineCalendar>
                    <div>
                        <h2 className="text-lg font-bold">We are open monday-friday</h2>
                        <p className="text-xl font-semibold">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <AiOutlinePhone className='text-5xl'></AiOutlinePhone>
                    <div>
                        <h2 className="text-lg font-bold">Have a question?</h2>
                        <p className="text-xl font-semibold">+2546 251 2658</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <FaLocationArrow className='text-5xl'></FaLocationArrow>
                    <div>
                        <h2 className="text-lg font-bold">Need a repair? our address</h2>
                        <p className="text-xl font-semibold">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;