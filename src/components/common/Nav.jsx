import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Nav = () => {

    const [navState, setNavState] = useState(false)
    useEffect(() => {
        setNavState(false);
    }, [])


    return (
        <nav className='fixed md:sticky md:top-0 h-max w-full z-10 shadow border-b-2 border-slate-500 flex justify-around items-center mx-auto p-4 backdrop-blur text-white  bg-slate-700'>
            <div className="logo text-xl">
                <Link to='#'>ProCompany<i className="fa-brands fa-pagelines"></i></Link>
            </div>
            <div onClick={() => setNavState(!navState)} className='block text-xl md:hidden'>
                <i className="fa-solid fa-bars-staggered"></i>
            </div>
            <div className={navState ? 'bg-slate-800 transition shadow-2xl flex flex-col w-full text-center absolute top-full divide-y md:flex-row md:bg-transparent md:shadow-none md:w-max md:divide-none md:relative' : 'bg-slate-800 transition opacity-0 pointer-events-none shadow-2xl flex flex-col w-full text-center absolute top-full divide-y md:flex-row md:bg-transparent md:shadow-none md:w-max md:opacity-100 md:pointer-events-auto md:divide-none md:relative'}>
                <div className='flex flex-col md:flex-row divide-y border-b-2 border-slate-400 md:divide-none md:border-none'>
                    <Link onClick={() => setNavState(false)} to="/" className='py-5 md:p-3 tracking-wide hover:text-slate-400'>Home <i className="pb-1 fa-solid fa-house"></i></Link>
                    <Link onClick={() => setNavState(false)} to="/products" className='py-5 md:p-3 tracking-wide hover:text-slate-400'>Products <i className="pb-1 fa-solid fa-bag-shopping"></i></Link>
                    <Link onClick={() => setNavState(false)} to="/contact-us" className='py-5 md:p-3 tracking-wide hover:text-slate-400'>Contact Us <i className="pb-1 fa-solid fa-headset"></i></Link>
                    <Link onClick={() => setNavState(false)} to="/about-us" className='py-5 md:p-3 tracking-wide hover:text-slate-400'>About Us <i className="pb-1 fa-regular fa-circle-question"></i></Link>
                </div>
                <div className="md:hidden rounded-full shadow-xl shadow-slate-900 p-3 px-4 my-5 mx-auto">
                    <div>
                        <Link onClick={() => setNavState(false)} className='mx-1 hover:text-slate-400 ease-in-out duration-300' to="/register">Register</Link>
                        <span>/</span>
                        <Link onClick={() => setNavState(false)} className='mx-1 hover:text-slate-400 ease-in-out duration-300' to="/login">Login</Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:block rounded-full shadow-xl shadow-slate-900 p-3 ">
                <div>
                    <Link className='mx-1 hover:text-slate-400 ease-in-out duration-300' to="/register">Register</Link>
                    <span>/</span>
                    <Link className='mx-1 hover:text-slate-400 ease-in-out duration-300' to="/login">Login</Link>
                </div>
            </div>

        </nav>
    );
}

export default Nav;