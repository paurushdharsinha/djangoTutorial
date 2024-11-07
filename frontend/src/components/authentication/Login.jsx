import { useState } from "react";
import React from 'react'
import Input from './Input'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../store/authSlice'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('authToken', data.token)
            // onLogin(data.token); // Call the onLogin prop with the received token
            console.log('Login Successful:', data);
            dispatch(login(data))
            navigate("/")
        } else {
            const errorData = await response.json();
            console.error('Login Failed:', errorData);
        }
    };

    return (
        <div className='bg-[#f7f7f7] pt-36 pb-16'>
            <div className='flex items-center justify-center w-full py-10'>
                <div className={`mx-auto w-full max-w-lg bg-[#F1F1F2] rounded-xl p-10 border border-black/10`}>
                    <h2 className="text-center text-2xl font-bold leading-tight text-black">Sign in to your account</h2>
                    <form
                        onSubmit={handleLogin} 
                        className='mt-8'>
                        <div className='space-y-5'>
                            <Input
                                label="Username : "
                                placeholder="Enter your username"
                                type="text"
                                value={username}
                                onChange={(e) => {setUsername(e.target.value)}}
                                required
                            />
                            <Input
                                label="Password : "
                                placeholder="Enter your password"
                                type="password"
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                required
                            />
                            <button type="submit" className="w-full px-4 py-2 rounded-lg bg-[#18BED4] hover:bg-[#15a8bc]">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <p className="mt-2 text-center text-base text-black/60">
                        {/* &apos; and &nbsp; are HTML Character Entities */}
                        Don&apos;t have any account?&nbsp;
                        <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login