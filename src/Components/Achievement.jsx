import React from 'react';
import { achievement } from '../assets';
import { PiGraduationCapLight} from 'react-icons/pi';
import {IoVideocamOutline,IoPeopleOutline  } from 'react-icons/io5';


const Achievement = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 mx-8 max-w-[600px]'>
                <div className='flex flex-col justify-center mx-4'>
                    <h1 className='md:leading-[72px] text-3xl font-bold'>
                        Our <span className='text-[#20B486]'>Achievement</span>
                    </h1>
                    <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>

                    <div className='grid grid-cols-2 py-14 '>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                                <PiGraduationCapLight
                                    size={30}
                                    color='#1A906B' 
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>300</h1>
                                <p className='text-[#6D737A]'>Instructor</p>
                            </div>
                        </div>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#ECE7DF ] rounded-xl'>
                                <IoVideocamOutline
                                    size={30}
                                    color='#FFC27A' 
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>10,000+</h1>
                                <p className='text-[#6D737A]'>Video</p>
                            </div>
                        </div>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                                <PiGraduationCapLight
                                    size={30}
                                    color='#ED4459' 
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>20,000+</h1>
                                <p className='text-[#6D737A]'>Student</p>
                            </div>
                        </div>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                                <IoPeopleOutline
                                    size={30}
                                    color='#0075FD' 
                                />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>1,00,000+</h1>
                                <p className='text-[#6D737A]'>User's</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='m-auto md:order-last order-first sm:py-6' src={achievement} />
            </div>
        </div>
    )
}

export default Achievement