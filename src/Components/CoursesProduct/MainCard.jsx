import StarRating from '../StarRating';
import { useNavigate } from 'react-router-dom';

const MainCard = ({courses }) => {
    const navigate=useNavigate();
    return (
        <div className='bg-white drop-shadow-md lg:max-w-[300px] md:max-w-[280px] max-w-[270px] overflow-hidden rounded-2xl mr-2 my-4 box-content'>
            <img src={courses.image}
                className='h-40 w-full object-cover'
            />
            <div className='p-5 border border-b'>
                <h1 className='py-2 truncate'>{courses.course}</h1>
                <StarRating rating={courses.rating} />
            </div>
            <div className='flex items-center justify-between pr-6'>
                <h3 className='p-5 text-xl'>₹{courses.price}</h3>
                <button onClick={()=>{
                    navigate(`/user/watch/${courses._id}`)
                    console.log("iunini");
                }} className='w-[100px] text-[#F0FBF7] text-xl  h-[40px] bg-teal-500 rounded '>Buy</button>
            </div>
            <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
                {courses.category}
            </div>
        </div>
    )
}

export default MainCard