/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './App.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState  ('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e) =>{
      setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div className='relative min-h-screen flex'>
            <div className='flex flex-col sm:flex-row items-center md:items-start sm:justify-content sm:justify-center md:justify-start flex-auto bg-white'>
                <div className='w-[70vw] h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-blue-800 text-white bg-no-repeat bg-cover relative'>
                    <div className='absolute bg-gradient-to-b from-indigo-600 to-blue-300 opacity-75 inset-0 z-0'></div>
                    <div className='w-full z-10'>
                        <div className='sm:text-4xl xl:text-7xl font-bold leading-tight mb-3'> CielUX </div>
                        <div className='sm:text-lg xl:text-md text-gray-200 font-medium'>Fill in your personal details and start managing your files, docs, ... with us</div>
                    </div>
                     <ul className="circles">
                       {/* Placeholder circles */}
                        {[...Array(13)].map((_, index) => (
                        <li key={index}></li>
                       ))}
                     </ul>
                </div>
                <div className='md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-10 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white'>
                    <div className='max-w-md w-full space-y-8'>
                        <div className='text-center'>
                            <h2 className='mt-6 text-3xl from-bold text-blue-700'>Hello Fellow, Welcome !</h2>
                            <p className='mt-2 text-sm text-blue-300'>Please, Create an acount</p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="h-px w-16 bg-gray-200"></span>
                            <span className="text-gray-300 font-normal">or continue with</span>
                            <span className="h-px w-16 bg-gray-200"></span>
                        </div>
                        <div className="flex flex-row justify-center items-center space-x-3">
                            {/* Utilisez les icônes de React Icons */}
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                <FaFacebook className="w-4 h-4 text-white" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                <FaTwitter className="w-4 h-4" />
                            </a>
                            <a href="https://in.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg text-white bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                <FaLinkedin className="w-4 h-4" />
                            </a>
                        </div>

                        <form className="mt-8 space-y-6 flex flex-col" action="#" method="POST">
                            <input type="hidden" name="remember" value="true" />
                            <div className="relative">
                                {email.includes('@') && (
                                    <div className="absolute bottom-2 right-3 mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                )}
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide block">Email</label>
                                <input className="w-full bg-gray-300 text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="email" placeholder="" value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Username</label>
                                <input className="w-full bg-gray-300 content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="" value={username} onChange={handleUsernameChange} />
                            </div>
                            <div className="mt-8 content-center relative">
    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Password</label>
    <input className="w-full bg-gray-300 content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="" value={password} onChange={handlePasswordChange} />
    {/* Ajouter le SVG de la croix rouge si les mots de passe ne correspondent pas */}
    {password !== confirmPassword && (
        <div className="absolute top-0 right-0 mt-4 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    )}
    {/* Ajouter l'icône de l'œil pour afficher le mot de passe */}
    <div className="absolute top-0 right-0 mt-8 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 2a7 7 0 00-7 7c0 1.568.515 3.019 1.386 4.202M17.764 16.5A7.96 7.96 0 0019 13c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 1.713.538 3.295 1.452 4.612M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
        </svg>
    </div>
</div>

                            <div className="mt-8 content-center relative">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Confirm your Password</label>
                                <input className="w-full  bg-gray-300 content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                                {/* Ajouter le SVG de la croix rouge si les mots de passe ne correspondent pas */}
                                {password !== confirmPassword && (
                                    <div className="absolute bottom-2 right-3 mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Sign Up
                                </button>
                            </div>
                            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                <span>You already have an account?</span>
                                <a href="#" className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Log In</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
