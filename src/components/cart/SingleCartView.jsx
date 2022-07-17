import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingPlaceholder from '../../shared/LoadingPlaceholder';

function SingleCartView() {
	const { id } = useParams();

	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`https://dummyjson.com/carts/${id}`)
			.then((res) => {
				setCart(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	console.log(cart);

	return (
		<div>
			{loading && <LoadingPlaceholder />}
			{cart && (
				<div className='mx-3 mt-3 shadow p-2 border'>
					
					{/* sdetails */}
					<div className='flex flex-col md:flex-row justify-around'>
						{/* total discount */}
						<span className='text-lg font-semibold text-slate-600'>
							Total discount{' '}
							<strong className='text-gray-200 bg-indigo-800 px-3 py-1'>
								{cart.discountedTotal}
							</strong>
						</span>

						{/* total products */}
						<span className='text-lg font-semibold text-slate-600'>
							Total products{' '}
							<strong className='text-gray-200 bg-indigo-800 px-3 py-1'>
								{cart.totalProducts}
							</strong>
						</span>

						{/* total totalQuantity */}
						<span className='text-lg font-semibold text-slate-600'>
							Total Quantity{' '}
							<strong className='text-gray-200 bg-indigo-800 px-3 py-1'>
								{cart.totalQuantity}
							</strong>
						</span>

						{/* total */}
						<span className='text-lg font-semibold text-slate-600'>
							Total{' '}
							<strong className='text-gray-200 bg-indigo-800 px-3 py-1'>
								{cart.total}
							</strong>
						</span>

						<span>
							By user is{' '}
							<b className='font-bold'>{cart.userId}</b>
						</span>
					</div>
				</div>
			)}
		</div>
	);
}

export default SingleCartView;
