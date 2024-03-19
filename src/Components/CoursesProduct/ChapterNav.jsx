import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaRegPlayCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const ChapterNav = ({ onChapterClick }) => {
  const navigate=useNavigate();

  const [Data, setData] = useState({
    course: "",
    teacher: "",
    rating: "",
    category: "",
    image: "",
    price: "",
    videoUrl1: "",
    videoUrl2: "",
    videoUrl3: "",
    videoUrl4: "",
  });

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://lms-backend-t9s0.onrender.com/api/getCourse/${id}`
        );
        setData(response.data.course);
      } catch (err) {
        console.error("Error Fectching data:" + err);
      }
    };
    fetch();
  }, [id]);

  console.log(Data.videoUrl1)
  return (
    <div>
      <div className="border-b p-5">
        <h2 className="font-medium text-[20px]">Web Development</h2>
        <h2 className="text-gray-500 text-[14px] pl-1"> By {Data.teacher}</h2>
      </div>
      <div className="flex items-center gap-4 text-gray-500 text-[18px] px-5 p-4 cursor-pointer hover:bg-gray-100"
      onClick={() => onChapterClick(Data.videoUrl1)}
      >
        <FaRegPlayCircle color="gray"/>
        <h2>Introduction</h2>
      </div>
      <div 
      onClick={() => onChapterClick(Data.videoUrl2)}
      className="flex items-center gap-4 text-gray-500 text-[18px] px-5 p-4 cursor-pointer hover:bg-gray-100">
        <FaRegPlayCircle color="gray"/>
        <h2>Basic</h2>
      </div>
      <div 
      onClick={() => onChapterClick(Data.videoUrl3)}
      className="flex items-center gap-4 text-gray-500 text-[18px] px-5 p-4 cursor-pointer hover:bg-gray-100">
        <FaRegPlayCircle color="gray"/>
        <h2>Advanced</h2>
      </div>
      <div 
      onClick={() => onChapterClick(Data.videoUrl4)}
      className="flex items-center gap-4 text-gray-500 text-[18px] px-5 p-4 cursor-pointer hover:bg-gray-100">
        <FaRegPlayCircle color="gray"/>
        <h2>Last</h2>
      </div>

      <div>
            <div className='flex items-center justify-center pt-[15px]'>
                <div className='h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer'>
                    <FaChevronLeft color='white' onClick={()=>navigate(-1)}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ChapterNav;
