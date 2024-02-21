import React from 'react';
import CategoryCard from './CategoryCard';
import { BsVectorPen, BsClipboardData } from 'react-icons/bs';
import { TiHtml5 } from 'react-icons/ti';
import { WiSunrise } from 'react-icons/wi';
import { AiOutlineCamera } from 'react-icons/ai';
import { FiMusic } from 'react-icons/fi';
import { PiChalkboardTeacher } from 'react-icons/pi';

const Categories = () => {
    return (
        <div className='w-full bg-[#F0FBF7] py-24'>
            <div className='md:max-w-[1480px] m-auto mx-8 max-w-[600px]'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>
                    Most <span className='text-[#20B486]'>Popular Categories</span>
                </h1>
                <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-12 gap-4'>
                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Design'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Marketing'} />
                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Business'} />
                    <CategoryCard icons={<WiSunrise size={30} />} title={'Lifestyle'} />
                    <CategoryCard icons={<AiOutlineCamera size={30} />} title={'Photography'} />
                    <CategoryCard icons={<FiMusic size={30} />} title={'Music'} />
                    <CategoryCard icons={<BsClipboardData size={30} />} title={'Data Science'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Health & Fitness'} />
                    <CategoryCard icons={<PiChalkboardTeacher size={30} />} title={'Teaching'} />

                </div>
            </div>
        </div>
    )
}

export default Categories;