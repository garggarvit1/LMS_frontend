import React, { useEffect, useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";
import {profile} from "../assets"
import { useLocation } from "react-router-dom";
import {useUser } from './Authentication/UserProvide'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, settoggle] = useState(false);
  const { userData } = useUser();
  const username=localStorage.getItem("username");
  console.log(username+"   user");

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  }

  const handleClick = () => settoggle(!toggle);
  const [open,setopen]=useState(false);
    const showDropDown=()=>{
        setopen(!open);
    }

  // const location=useLocation();
  // const queryparms=new URLSearchParams(location.search);
  // console.log(queryparms);
  // const user=queryparms.get("page");

  
    
  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="  md:max-w-[1480px] px-4 max-w-[600px]  w-full m-auto h-full flex justify-between items-center">
        <img src={logo} className="h-[25px]" />
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <a href={"/user/home"}>Home</a>
            <a href="/user/courses">Course</a>
            <a href="/user/contact">Contact Us</a>
            <a href="/user/dashboard">Platform</a>
          </ul>
        </div>

        {/* <div className="hidden md:flex items-center">
          <a href="/sign-in">
            <button className="flex justify-between items-center bg-transparent px-6 gap-2">
              <img src={lock} />
              Login
            </button>
          </a>
          <button className="bg-[#20B486] text-white rounded-md px-8 py-3 font-bold">
            Sign Up For Free
          </button>
          {/* <UserButton/> *}
        </div> */}
        <div className="flex items-center gap-[10px] relative">
            <p className="text-[14px]">{username}</p>
            <div onClick={showDropDown}>
              <img
                src={profile}
                alt=""
                className="w-[40px] h-[35px] border rounded-full object-cover cursor-pointer"
              />
            </div>
            {open && (
              <div className="bg-white border h-[120px] w-[150px] absolute bottom-[-130px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]">
                <p className="cursor-pointer hover:text-[blue] font-semibold ">
                  Profile
                </p>
                <p className="cursor-pointer hover:text-[blue] font-semibold ">
                  Settings
                </p>
                <p className="cursor-pointer hover:text-[blue] font-semibold " onClick={handleLogout}>
                  Log out
                </p>
              </div>
            )}
          </div>

        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>
      <div
        className={
          toggle ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden" : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">Course</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Platform</li>
          <div className='flex flex-col my-4 gap-4'>
          <button className='border border-[#20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4 rounded '>
            <img src={lock} />
            Login
          </button>
          <button className='bg-[#20B486] text-white rounded-md px-8 py-5 font-bold'>Sign Up For Free</button>
          </div>

          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
