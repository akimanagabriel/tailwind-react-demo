import React from 'react'
import { menuCollection } from './menuCollection';
import { NavLink } from 'react-router-dom';

function Navbar() {


    return (
        <div>

            <div className="flex justify-between pl-2 md:px-9 py-2 bg-slate-800 w-full">

                <div className="text-slate-300 hidden md:block">APIs</div>

                {/* center menu */}
                <div>
                    <ol className='space-x-2 md:space-x-5 flex'>
                        {menuCollection[0].navbar.map((menu, index) => {
                            return (
                                <li key={index} className='text-white'>
                                    <NavLink to={menu.url}>{menu.title}</NavLink>
                                </li>
                            )
                        })}
                    </ol>
                </div>

                <div className="hidden sm:block text-slate-300">
                    <button className='px-3 py-1 border-0 outline-0 ring-0 bg-slate-50 rounded-full text-indigo-900 tracking-normal hover:bg-indigo-700 hover:text-white'>Get Started</button>
                </div>

            </div>


        </div>
    )
}

export default Navbar
