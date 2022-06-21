import React from 'react';
import { Link } from "react-router-dom";






const Header = () => {
    return (
        <header className='w-full mx-auto md:px-32 md:py-5 relative h-fit bg-slate-600'>
            <h1 className='heading text-center md:text-4xl text-3xl pt-56 md:pt-28 text-white'>Let's Sell Youre <br /> Products ToGether</h1>
            <div className="text-center divide-x divide-slate-500 text-white shadow-2xl shadow-slate-900 p-3 px-4 rounded-full  w-fit mx-auto mt-4">
                <input type="text" placeholder='Search Here...' id='search-box' className="text-base mx-2 outline-none bg-transparent" />
                <label htmlFor="search-box absolute" ><i className="fa-solid text-slate-800 px-2 fa-magnifying-glass"></i></label>
            </div>
            <div className=" text-white text-center w-1/2 mx-auto md:w-max mt-5 rounded-full shadow-2xl shadow-slate-900 p-3 hover:text-slate-400 ease-in-out duration-300">
                <Link to="#" className='p-3'>Get Started</Link>
            </div>
            <img className='md:pb-10 mt-24 md:mt-0' src="./img/hero.svg" alt="" />
        </header>
    );
}

export default Header;