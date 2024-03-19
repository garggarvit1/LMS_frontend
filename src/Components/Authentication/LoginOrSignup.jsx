import React, { useState } from 'react';
import './LoginOrSignup.css';
import { user_icon,password_icon,email_icon } from '../../assets';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Home from '../../Home'
import { useToast } from '@chakra-ui/react'
import { useUser } from './UserProvide';//

const LoginOrSignup = () => {
    const [action,setAction]=useState("Sign Up");
    const [data,setData]=useState({
        username:"",
        email:"",
        password:"",
    });
    const { setUserData } = useUser();///  
    const toast = useToast()
    const change=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value});
    }

    const navigate=useNavigate();
    const handleSignUp = ()=>{

        if(action=="Sign Up"){
            axios.post("https://lms-backend-t9s0.onrender.com/create",data)
            .then((res)=>{
                toast({
                    title: 'Account created.',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  });
                  setData({
                    username:"",
                    email:"",
                    password:"",
                  })
                console.log(res);
            })
            .catch((err)=>{
                console.log(err.response);
                toast({
                    title:err.response.data ,
                    description: "We've don't created your account ",
                    status: 'success',
                    duration: 8000,
                    isClosable: true,
                  })
                  
                console.log(err)})
        }
        else{
            setAction("Sign Up");
        }
    };

    const handleLogin = ()=>{
        
        if(action=="Login"){
            axios.post("https://lms-backend-t9s0.onrender.com/login",data)
            
            .then((res)=>{
                console.log(res);

                // alert("User Login");
                // <Home username={data.username}/>
               
                const requestdata=JSON.parse(res.config.data);
                // console.log(requestdata);
                const {username}  = requestdata;
                // console.log({username});
                localStorage.setItem("username",username);
                localStorage.setItem("type",res.data.type);
                setUserData({ username});
                toast({
                    title: 'Login Successfully.',
                    description: "You logged Successfully",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                  })
                if(res.data.type === "user")
                {
                    setTimeout(()=>{
                    navigate('/user/home');
                    },1000);
                }
                else{
                    setTimeout(()=>{
                        navigate('/user/dashboard');
                        },1000);
                }
                // if(res.data== "Login Succesful") navigate(`/Home?page=${data.username}`);
                // console.log(res);
                // alert(res.data);
            })
            .catch((err)=>{
                alert(err);
                console.log(err);
            })
            
        }
        else{
            setAction("Login")
        }
    };

  return (
    <div className='login'>
    <div className='container1'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Username' name='username' value={data.username} onChange={change}/>
            </div>
            
           { action==="Login"?<div></div>:
            <div className='input'>
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' name='email' value={data.email} onChange={change} />
            </div>}
            <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' name='password' value={data.password} onChange={change}/>
            </div>
        </div>
        {/* {action==="Login"?<div className='forgot-password'>Forgot Password? <span>Click Here!</span></div>:<div></div>} */}
        
        <div className="submit-container">
            <div className={action==="Login" ?"submit gray":"submit"} onClick={handleSignUp}>Sign Up</div>
            <div className={action==="Sign Up" ? "submit gray" :"submit"} onClick={handleLogin}>Login</div>
        </div>
    </div>
    </div>
  )
}

export default LoginOrSignup