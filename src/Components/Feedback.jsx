import React from 'react';
import Card from './Card';
import Slider from "react-slick";
import CoursesData from '../data/CoursesData'
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-full bg-white py-32 md:pl-[50px]'>
      <div className='md:max-w-[1480px] m-auto mx-6 max-w-[600px]'>
        <h1 className='text-3xl py-3 font-bold '>Student <span className='text-[#20B486]'>Feedback</span></h1>
        <p className='text-[#6D737A]'>Various version have evolved over the years, sometimes by accident.</p>
        <Slider {...settings}>
          <FeedbackCard/>
          <FeedbackCard/>
          <FeedbackCard/>
        </Slider>
      </div>
    </div>
  )
}

export default Feedback;