import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as storeLogin} from "../store/authSlice"
import {Button,Input,Logo} from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"


function Login() {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('');

    const login = async(data) =>{
        setError("")
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser()

                if(userData){
                    dispath(storeLogin(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div 
    className='flex item-center justify-center w-full'
    >
        <div className={`am-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="100%"/>
                </span>
            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>sign in to your account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Don&apos;t have any accoount?&nbsp;

                <Link
                to="/signup"
                className='font-medium transition-all duration-200 hover:underline '
                >
                    Sign Up
                </Link>
            </p>
            {error && <p
            className='text-red-500 mt-8 text-center'>{error}</p>}
            <form 
            onSubmit={handleSubmit(login)}
            className='mt-8'>
                <div className='space-y-5'>
                    <Input
                    label="Email: "
                    placeholder = "Enter your email" 
                    type="email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(value) || "Enter a valid email address",
                        }
                    })}/>

                    {/* password input fild */}
                    <Input 
                    label="Password: "
                    placeholder= "Password"
                    type ="password"
                    {...register("password",{
                        required: true,
                        // validate: {
                        //     matchPatern: (value)=> /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) || "Enter strong password",
                        // }
                    })}/>

                    {/* login button  */}
                    <Button 
                     type ="submit" 
                     className = ' w-full'
                    > Sign in</Button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login