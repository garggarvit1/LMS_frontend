import axios from "axios";
import { useEffect, useState } from "react";
import { MdSystemUpdateAlt, MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CourseTable = () => {
    const navigate=useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios.get("http://localhost:3001/courses").then((res) => {
        setData(res.data.courses);
      });
    };
    fetch();
  }, []);

  async function handleDelete(id){
    try{
        await axios.delete(`http://localhost:3001/api/deleteCourse/${id}`)
        .then((res)=>{
            console.log(res);
            alert(res.data.message)})
        window.location.reload();
    }
    catch(err){
        console.log(err);
        alert("Failed to delete course");
    }
  }

//   console.log(data);
  return (
    <div>
      <div className="font-sans bg-gray-200 flex justify-center items-center h-screen">
        <table className="w-[93%] h-5/6 mt-4 bg-white rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr>
              <th className="bg-[#4E73DF] text-white py-2 px-4">Course Name</th>
              <th className="bg-[#4E73DF] text-white py-2 px-4">Category</th>
              <th className="bg-[#4E73DF] text-white py-2 px-4">Price</th>
              <th className="bg-[#4E73DF] text-white py-2 px-4">Details</th>
             

              <th className="bg-[#4E73DF] text-white py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data &&
              data.map((courses, i) => {
                // console.log(courses);
                return (
                    <tr key={i} className="hover:bg-gray-300">
                      <td className="border px-4 py-2">{courses.course}</td>
                      <td className="border px-4 py-2">{courses.category}</td>
                      <td className="border px-4 py-2">${courses.price}</td>
                      <td className="border px-4 py-2">8 weeks</td>
                      <td className="border px-2 py-1">
                        <button className="px-2" onClick={()=>{navigate(`/user/dashboard/update/${courses._id}`)}} ><MdSystemUpdateAlt /></button>
                        <button onClick={() => handleDelete(courses._id)}><MdDeleteForever/></button>
                      </td>
                    </tr>
                  );
              })
            ) : (
              <div className="">No datafound</div>
            )}

            {/* <tr className="hover:bg-gray-300">
            <td className="border px-4 py-2">Data Science</td>
            <td className="border px-4 py-2">Introduction to data analysis and machine learning</td>
            <td className="border px-4 py-2">$249.99</td>
            <td className="border px-4 py-2">10 weeks</td>
          </tr>
          <tr className="hover:bg-gray-300">
            <td className="border px-4 py-2">Graphic Design</td>
            <td className="border px-4 py-2">Explore creative design principles</td>
            <td className="border px-4 py-2">$179.99</td>
            <td className="border px-4 py-2">6 weeks</td>
          </tr>
          <tr className="hover:bg-gray-300">
            <td className="border px-4 py-2">Mobile App Development</td>
            <td className="border px-4 py-2">Build cross-platform mobile applications</td>
            <td className="border px-4 py-2">$299.99</td>
            <td className="border px-4 py-2">12 weeks</td>
          </tr>
          <tr className="hover:bg-gray-300">
            <td className="border px-4 py-2">Photography Basics</td>
            <td className="border px-4 py-2">Master the fundamentals of photography</td>
            <td className="border px-4 py-2">$149.99</td>
            <td className="border px-4 py-2">4 weeks</td>
          </tr>
          <tr className="hover:bg-gray-300">
            <td className="border px-4 py-2">Python Programming</td>
            <td className="border px-4 py-2">Learn the basics of Python programming</td>
            <td className="border px-4 py-2">$199.99</td>
            <td className="border px-4 py-2">8 weeks</td> 
          </tr>*/}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
