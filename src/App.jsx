import React from "react";
import {
  Achievement,
  CTA,
  Categories,
  Companies,
  Courses,
  Feedback,
  Footers,
  Hero,
  Navbar,
} from "./Components";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Home";
import MainCourse from "./Components/CoursesProduct/MainCourse";
import LoginOrSignup from "./Components/Authentication/LoginOrSignup";
import Dashboard from "./Components/Dashboard/Dashboard";
import MainPage from "./Components/Dashboard/MainPage";
import AddCourse from "./Components/Dashboard/AddCourse";
import { NestRouter } from "./NestRouter";
import { UserProvide } from "./Components/Authentication/UserProvide";

const App = () => {
  return (
    <div>
      <UserProvide>
        <Router>
          <Routes>
            <Route path="/" element={<LoginOrSignup />} />
            <Route path="/user/*" element={<NestRouter />} />
          </Routes>
        </Router>
      </UserProvide>
    </div>
  );
};

export default App;

{
  /* <NestRouter/> */
}
{
  /* <Route path="/home" element={<Home />} />
          <Route path="courses" element={<MainCourse />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route index element={<MainPage />} />
            <Route path="add" element={<AddCourse />} />
          </Route> */
}

{
  /* <MainCourse/> */
}
{
  /* <Home/> */
}
{
  /* <Dashboard/> */
}
