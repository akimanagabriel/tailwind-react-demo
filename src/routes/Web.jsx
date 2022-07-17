import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Carts from '../components/cart/Carts';
import SingleCartView from '../components/cart/SingleCartView';
import Home from '../components/Home';
import ProductsAll from '../components/products/ProductsAll';

function Web() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<ProductsAll />} />

				{/* cart routes */}
				<Route path='/carts' element={<Carts />} />
				<Route path='/carts/:id' element={<SingleCartView />} />

				{/* not found */}
				<Route
					path='*'
					element={
						<div className='p-[100px]'>
							<h1>404</h1>
							<h1>PAGE NOT FOUND</h1>
						</div>
					}
				/>
			</Routes>
		</>
	);
}

export default Web;
