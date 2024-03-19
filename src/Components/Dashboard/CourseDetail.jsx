import { useEffect, useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CourseDetail = () => {
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

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://lms-backend-t9s0.onrender.com/api/updateCourse/${id}`, Data)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate('/user/dashboard/coursetable')
      });
    setData({
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
  };

  return (
    <div style={{ minHeight: "97.5vh" }} >
      <div className="flex justify-center" >
        <Box
          display="flex"
          // flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
          flexWrap={"wrap"}
        >
          <FormControl m={110} mb={30}>
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Course Name:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              border={"1px solid"}
              borderRadius={6}
              borderColor={"#3C5EC1"}
              fontSize={17}
              mb={10}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Course Name:"
              type="text"
              name="course"
              // required
              value={Data.course}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Teacher Name:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Teacher Name:"
              type="text"
              name="teacher"
              value={Data.teacher}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Rating:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Teacher Name:"
              type="Number"
              name="rating"
              // required
              value={Data.rating}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Category:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Description:"
              type="text"
              name="category"
              // required
              value={Data.category}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Image:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Image Url:"
              type="Url"
              name="image"
              // required
              value={Data.image}
              onChange={change}
            />

            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Price:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              borderColor={"#3C5EC1"}
              fontSize={17}
              w={550}
              h={45}
              p={10}
              placeholder="Enter Price:"
              type="number"
              name="price"
              required
              value={Data.price}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Introduction Video:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              borderColor={"#3C5EC1"}
              fontSize={17}
              justifyContent={"center"}
              w={"550px"}
              h={45}
              p={10}
              type="Url"
              name="videoUrl1"
              required
              placeholder="Enter the Introduction video"
              value={Data.videoUrl1}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Basic Video:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Basic Video Url:"
              type="Url"
              name="videoUrl2"
              required
              value={Data.videoUrl2}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Advanced Video:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Advanced Video Url:"
              type="Url"
              name="videoUrl3"
              required
              value={Data.videoUrl3}
              onChange={change}
            />
            <FormLabel mb={6} ml={5} fontSize={25} textColor={"#3C5EC1"}>
              Last Video:
            </FormLabel>
            <Input
              bgColor={"white"}
              color={"grey"}
              mb={10}
              border={"1px solid"}
              borderRadius={6}
              fontSize={17}
              w={"550px"}
              h={45}
              p={10}
              placeholder="Enter Last Video Url:"
              type="Url"
              name="videoUrl4"
              required
              value={Data.videoUrl4}
              onChange={change}
            />
          </FormControl>
          <Button
            bgColor={"#3C5EC1"}
            borderRadius={8}
            borderColor={"white"}
            fontSize={23}
            w={150}
            h={50}
            variant="solid"
            onClick={submit}
          >
            Submit
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default CourseDetail;
