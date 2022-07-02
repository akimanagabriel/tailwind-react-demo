import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import ProductsAll from '../components/products/ProductsAll';

function Web() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<ProductsAll/>} />

                {/* not found */}
                <Route path='*' element={<div className='p-[100px]'><h1>404</h1><h1>PAGE NOT FOUND</h1></div>} />
            </Routes>
        </>
    )
}

export default Web
