/* eslint-disable no-unused-vars */
import React from 'react'; // Importez React depuis 'react', pas depuis "react"
import './App.css';

// Importez les icônes de React Icons
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Login = () => {
  return (
    <>
      <div className='relative min-h-screen flex'>
        <div className='flex flex-col sm:flex-row items-center md:items-start sm:justify-content sm:justify-center md:justify-start flex-auto bg-white'>
          <div className='w-[70vw] h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-blue-800 text-white bg-no-repeat bg-cover relative' style={{ backgroundImage: 'url(./)' }}>
            <div className='absolute bg-gradient-to-b from-indigo-600 to-blue-300 opacity-75 inset-0 z-0'></div>
            <div className='w-full z-10'>
              <div className='sm:text-4xl xl:text-7xl font-bold leading-tight mb-3'> CielUX </div>
              <div className='sm:text-lg xl:text-md text-gray-200 font-normal'>Here, You manage our jobs, folders, files,... </div>
            </div>
            <ul className="circles">
              {/* Placeholder circles */}
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className='md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-10 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white'>
            <div className='max-w-md w-full space-y-8'>
              <div className='text-center'>
                <h2 className='mt-6 text-3xl from-bold text-blue-500'>Hello Fellow, Welcome back!</h2>
                <p className='mt-2 text-sm text-blue-100'>Please Log In to your account</p>
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
              <div className="flex items-center justify-center space-x-2">
                <span className="h-px w-16 bg-gray-200"></span>
                <span className="text-gray-300 font-normal">or continue with</span>
                <span className="h-px w-16 bg-gray-200"></span>
              </div>   
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div className="relative">
                  <div className="absolute right-3 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                  <input className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="email" placeholder="" value="" />
                </div>
                <div className="mt-8 content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Password</label>
                  <input className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="" value="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-indigo-400 hover:text-blue-500">Forgot your password?</a>
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign in
                  </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <a href="#" className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
