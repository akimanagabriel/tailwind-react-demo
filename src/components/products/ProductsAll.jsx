import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://dummyjson.com/',
});

class ProductsAll extends React.Component {
	state = {
		products: [],
	};
	constructor() {
		super();
		api.get('/products').then((res) => {
			this.setState(res.data);
		});
	}

	render() {
		return (
			<>
				{/* page header */}
				<div className='p-5'>
					<div className='flex justify-between'>
						<div>
							<h1 className='font-bold text-slate-700'>
								All Products
							</h1>
						</div>
						<div className='mb-2'>
							<Link
								to={`/create_product`}
								className='text-indigo-600 px-3 py-1 rounded-full border border-indigo-600 hover:bg-indigo-600 hover:text-white'>
								+{' '}
								<span className='hidden sm:inline-block'>
									Product
								</span>
							</Link>
						</div>
					</div>
					<hr />
				</div>

				{/* page contents */}
				<div className='mx-5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
					{this.state.products.map((product) => {
						return (
							<div
								key={product.id}
								className={`relative border border-slate-200 p-4 rounded-lg shadow`}>
								<div className='flex flex-col'>
									<div>
										<h1 className='font-bold text-indigo-800'>
											{product.title}
										</h1>
										<p className='text-slate-900 mt-2'>
											{product.description}
										</p>
									</div>
								</div>

								<h1 className='absolute bottom-2 text-white bg-black rounded opacity-50 font-bold px-2 right-3 inline-flex self-end items-end'>
									${product.price}
								</h1>
							</div>
						);
					})}
				</div>
			</>
		);
	}
}

export default ProductsAll;
