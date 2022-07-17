import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingPlaceholder from '../../shared/LoadingPlaceholder';

function SingleCartView() {
	const { id } = useParams();

	const [cart, setCart] = useState([]);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState([]);

	useEffect(() => {
		// retrieve cart details
		axios
			.get(`https://dummyjson.com/carts/${id}`)
			.then((res) => {
				setCart(res.data);
				setProducts(res.data.products);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	useEffect(() => {
		if (cart.userId) {
			// call function conditionally
			axios
				.get(`https://dummyjson.com/users/${cart.userId}`)
				.then((res) => {
					setUser(res.data);
				})
				.catch((err) => console.error(err));
		}
	}, [cart]);

	return (
		<div>
			{loading && <LoadingPlaceholder />}
			{cart && (
				<div className='mx-3 mt-3 shadow p-2 border overflow-x-hidden'>
					{/* sdetails */}
					<div className='flex flex-col md:flex-row justify-between items-center py-2 space-y-2'>
						{/* total discount */}
						<span className='text-lg font-semibold text-slate-600 flex items-center gap-2'>
							Total discount{' '}
							<strong className='text-gray-200 bg-indigo-800 rounded text-xs p-1'>
								{cart.discountedTotal}
							</strong>
						</span>

						{/* total products */}
						<span className='text-lg font-semibold text-slate-600 flex items-center gap-2'>
							Total products{' '}
							<strong className='text-gray-200 bg-indigo-800 rounded text-xs p-1'>
								{cart.totalProducts}
							</strong>
						</span>

						{/* total totalQuantity */}
						<span className='text-lg font-semibold text-slate-600 flex items-center gap-2'>
							Total Quantity{' '}
							<strong className='text-gray-200 bg-indigo-800 p-1 text-xs rounded'>
								{cart.totalQuantity}
							</strong>
						</span>

						{/* total */}
						<span className='text-lg font-semibold text-slate-600 flex items-center gap-2'>
							Total{' '}
							<strong className='text-gray-200 bg-indigo-800 p-1 text-xs rounded'>
								{cart.total}
							</strong>
						</span>

						<span className='flex space-x-2 items-center'>
							<div>
								<img  src={user.image} className='rounded-full h-12 w-12 border shadow-sm' />
							</div>
							<div className='flex flex-col'>
								<b className='font-bold text-slate-600'>
									{user.firstName} {user.lastName}
								</b>
								<span className='text-slate-500'>{user.email}</span>
							</div>
						</span>
					</div>
					<hr />
					<div className='my-3 overflow-x-auto'>
						<h1 className='text-slate-500 font-light'>
							Cart details
						</h1>
						{/* all products into carts */}
						<table className='border text-slate-700 w-full'>
							<thead>
								<tr className='border text-left'>
									<th className='border px-4'>Product id</th>
									<th className='border px-4'>Title</th>
									<th className='border px-4'>Quantity</th>
									<th className='border px-4'>Discount %</th>
									<th className='border px-4'>
										Discount price
									</th>
									<th className='border px-4'>Price</th>
								</tr>
							</thead>
							<tbody>
								{products.map((product) => (
									<tr key={product.id} className='border'>
										<td className='border px-4'>
											{product.id}
										</td>
										<td className='border px-4'>
											{product.title}
										</td>
										<td className='border px-4'>
											{product.quantity}
										</td>
										<td className='border px-4'>
											{product.discountPercentage}%
										</td>
										<td className='border px-4'>
											{product.discountedPrice}
										</td>
										<td className='border px-4'>
											{product.price}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
}

export default SingleCartView;
