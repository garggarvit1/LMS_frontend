import  { useEffect, useState } from 'react';
import MainCard from './MainCard';
import CoursesData from '../../data/CoursesData'
import axios from 'axios';
import Search from '../Dashboard/SearchView';

const MainCourse = () => {
    const [data,setData]=useState();
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = async (query) => {
        // Implement your search logic here
        // For example, filter courses based on the search query
        if (!query) {
            setFilteredData(data); // Reset to show all courses if the search query is empty
          } else {
            // Filter courses based on the category
            const filteredCourses = filteredData.filter((course) =>
              course.category.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(filteredCourses);
        }
    }

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
    console.log(data);
    return (
        <div>
            <div className='w-full bg-[#E9F8F3B2] py-10 md:pl-[50px] pl-[25px]'>
                <Search onSearch={handleSearch}/>
                <div className='md:max-w-[1480px]  max-w-ful m-auto mx-6 max-w-[600px] h-[1480px]'>
                    <h1 className='text-3xl py-3 font-bold '>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
                    {/* <p className='text-[#6D737A]'>Various version have evolved over the years, sometimes by accident.</p> */}
                    <div className='flex flex-row flex-wrap md:max-w-[1480px] max-w-[680px] justify-items-auto py-8 h-[900px] justify-around'>
                        {filteredData?(filteredData && filteredData.map((courses,i)=>(
                        <div key={i} className='md:mr-8 mr-4 '>
                            <MainCard courses={courses} />
                        </div>))
                        ):
                        (<div className=''>Loading...</div>)}
                    {/* {CoursesData.map((course, i) => (
                        <div key={i} className='md:mr-8 mr-4 '>
                            <MainCard course={course} />
                        </div>))
                    } */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCourse;