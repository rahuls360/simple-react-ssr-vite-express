import { useState } from "react";

const Products = ({ data }) => {
	console.log("data", data);
	return (
		<section>
			<h3>Products</h3>
			{data.map(
				({
					title,
					description,
					price,
					rating,
					thumbnail,
					category,
					stock,
					brand,
				}) => (
					<div className="product">
						<div className="left">
							<img src={thumbnail} alt={title} width={50} height={50} />
						</div>
						<div className="right">
							<h4>{title}</h4>
							<p>description</p>
							<p>Brand: {brand}</p>
							<p>Price: ${price}</p>
						</div>
					</div>
				)
			)}
		</section>
	);
};

export default Products;
