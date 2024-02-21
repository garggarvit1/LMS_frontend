import {
    BrowserRouter as Router,
    Routes,
    Route,
   
  } from "react-router-dom";
import Home from './Home';
import MainCourse from './Components/CoursesProduct/MainCourse';
import Dashboard from './Components/Dashboard/Dashboard';
import MainPage from './Components/Dashboard/MainPage';
import AddCourse from './Components/Dashboard/AddCourse';
import { Navbar } from './Components';
import Pages from './Components/CoursesProduct/Pages';
import CourseTable from './Components/Dashboard/CourseTable';
import CourseDetail from './Components/Dashboard/CourseDetail';
import Contact from './Components/Contact/Contact';

export const NestRouter = () => {
  return (
    <div>
      
        <Navbar/>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<MainCourse />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route index element={<MainPage />} />
            <Route path="add" element={<AddCourse />} />
            <Route path='coursetable' element={<CourseTable/>}/>
            <Route path='update/:id' element={<CourseDetail/>}/>
          </Route>
          <Route path='watch/:id' element={<Pages/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
     
    </div>
  )
}
