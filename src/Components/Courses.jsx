import React, { useEffect, useState } from 'react';
import Card from './Card';
import Slider from "react-slick";
import CoursesData from '../data/CoursesData'
import axios from 'axios';
import MainCard from './CoursesProduct/MainCard';

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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

  const [data,setData]=useState();
  const [filteredData, setFilteredData] = useState([]);

  // const handleSearch = async (query) => {
  //     // Implement your search logic here
  //     // For example, filter courses based on the search query
  //     if (!query) {
  //         setFilteredData(data); // Reset to show all courses if the search query is empty
  //       } else {
  //         // Filter courses based on the category
  //         const filteredCourses = filteredData.filter((course) =>
  //           course.category.toLowerCase().includes(query.toLowerCase())
  //         );
  //         setFilteredData(filteredCourses);
  //     }
  // }

  useEffect(()=>{
      const fetch=async()=>{
          await axios.get('https://lms-backend-t9s0.onrender.com/courses')
          .then((res)=>{
              setData(res.data.courses);
              setFilteredData(res.data.courses);
          });
      };
      fetch();
  },[])

  return (
    <div className='w-full bg-[#E9F8F3B2] py-32 md:pl-[50px]'>
      <div className='md:max-w-[1480px] m-auto mx-6 max-w-[600px]'>
        <h1 className='text-3xl py-3 font-bold '>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
        <p className='text-[#6D737A]'>Various version have evolved over the years, sometimes by accident.</p>
        <Slider {...settings}>
          {filteredData?(filteredData && filteredData.map((courses,i)=>(
  <div key={i} className='md:mr-8 mr-4 '>
      <MainCard courses={courses} />
  </div>))
  ):
  (<div className=''>Loading...</div>)}
        </Slider>
      </div>
    </div>
  )
}

// {CoursesData.map( (course,i) =>(
//   <div key={i}>
//     <Card course={course} />
//   </div>))}





export default Courses;