import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingPlaceholder from '../../shared/LoadingPlaceholder';

function Carts() {
	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get('https://dummyjson.com/carts').then((res) => {
			setCart(res.data.carts);
			setLoading(false);
		});
	}, []);

	return (
		<div className='px-4 mt-3'>
			{!loading && (
				<h1 className='text-2xl text-indigo-500 flex'>
					Carts{' '}
					<span className='flex items-center justify-center bg-slate-600 ml-3 rounded-full h-5 w-5 p-3 text-sm text-white'>
						{cart.length}
					</span>{' '}
				</h1>
			)}

			{/* loading indicator */}

			{loading && <LoadingPlaceholder />}

			{/* display all data */}

			<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3'>
				{cart.map((data) => (
					<li
						key={data.id}
						className='shadow border rounded overflow-hidden'>
						<h1 className='text-xl text-indigo-500 bg-slate-200 py-1 px-2'>
							Cart number {data.id}
						</h1>
						<hr />

						<ul className='p-3'>
							{data.products.map((product) => (
								<li key={product.id} className='flex space-x-2'>
									<span>
										<i className='fa fa-check bg-transparent rounded-full text-indigo-300' />
									</span>
									<span>{product.title}</span>
								</li>
							))}
						</ul>

						<div className='my-4 text-center'>
							{/* <a href={`https://dummyjson.com/carts/${data.id}`}>data into cart </a> */}

							<Link to={`${data.id}`}>
								<button className='bg-indigo-800 text-slate-100 px-4 py-1 rounded hover:bg-indigo-900'>
									<span>View</span>
									<i
										className='fa fa-cart-plus'
										aria-hidden='true'></i>
								</button>
							</Link>
						</div>
					</li>
				))}
			</ul>

			<div className='mb-10'></div>
		</div>
	);
}

export default Carts;
