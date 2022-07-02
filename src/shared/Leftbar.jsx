import React, { useState } from 'react';
import { menuCollection } from './menuCollection';
import { NavLink } from 'react-router-dom';


function Leftbar() {

    // close state
    const [close, setClose] = useState(true);

    // handle close
    const handleClose = () => setClose(!close);


    return (
        <>
            <div className={`h-screen ${close ? 'w-[50px]' : 'w-[210px]'} px-3 pt-3 bg-slate-900 duration-500 sticky`}>

                {/* nav header */}
                <div className="flex space-x-2 items-center justify-between">
                    {/* logo */}
                    {!close &&
                        <>
                            <div className='logo'>
                                <i className='fas fa-user-tie text-white text-2xl'></i>
                            </div>
                            {/* site name */}
                            <div className={`${close ? 'hidden ' : ' block '}text-white text-xl font-[900]`}>
                                <span className='text-white'>LEIR</span><span className='text-yellow-500'>BAG.</span>
                            </div>
                        </>
                    }


                    {/* humberg menu */}
                    <div className="relative text-white text-xl cursor-pointer" onClick={handleClose}>
                        <i className={`fa ${close ? 'fa-bars' : 'fa-times'} `}></i>
                    </div>
                </div>

                {!close && <h1 className="text-lg duration-700 pt-5 py-3 text-slate-300">Main menus</h1>}
                {/* leftbar menus */}

                <ul className='mt-5'>
                    {menuCollection[0].sidebar.map((menu, index) => {
                        return (
                            <li key={index} className='my-4'>
                                <NavLink to={menu.url} className={`text-slate-300 hover:text-slate-100 hover:font-bold`}>
                                    <span><i className={`fa fa-${menu.icon} mr-2 text-xl`}></i></span>
                                    <span className={`${close ? 'hidden' : ''}`}>{menu.title}</span>
                                </NavLink>
                            </li>


                        );
                    })}
                </ul>




            </div>
        </>
    )
}

export default Leftbar
