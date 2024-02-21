import { useEffect, useState } from 'react';
import ChapterNav from './ChapterNav'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Pages = () => {

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
          `http://localhost:3001/api/getCourse/${id}`
        );
        setData(response.data.course);
      } catch (err) {
        console.error("Error Fectching data:" + err);
      }
    };
    fetch();
  }, [id]);

  console.log(Data.videoUrl1);

  const [currentChapter, setCurrentChapter] = useState(Data.videoUrl1);
  console.log("bgyug"+currentChapter);
  

  const handleChapterClick = (chapter) => {
    setCurrentChapter(chapter);
  };
  return (
    <div className='flex '>
        <div className="basis-[22%] h-[100vh] border-r-[1px]">
           <ChapterNav onChapterClick={handleChapterClick}/>
        </div>
        <div className='basis-[84%] h-[100vh] overflow-scroll'>
        <iframe
          style={{ width: '100%', height: '90%', border: 'none' }}
          src={currentChapter} title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
    </div>
  )
}

export default Pages