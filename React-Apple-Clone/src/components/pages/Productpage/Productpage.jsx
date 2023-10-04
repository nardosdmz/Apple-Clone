import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Four04 from "../Four04/Four04";

function ProductPage() {
	const [products, setProducts] = useState([]);
	// console.log(useParams());
	const { productID } = useParams();
	// console.log(productID);// after yetetsafewn capture yaregal(/iphone11, iphonese..)
	// const = props.match.params.pid;
	// async function singleIphone() {
	// 	try {
	// 		const { data } = await axios("http://localhost:4321/products");
	// 		// console.log(data);
	// 		const singleProduct = data.filter((x) => x.product_url === productID);
	// 		setProducts(singleProduct);
	// 	} catch (error) {
	// 		console.log(error.message);
	// 	}
	// }

	useEffect(() => {
		// singleIphone();
		fetch("http://localhost:4321/products")
			.then((res) => res.json())
			.then((products) => {
				// const productList = products.products;
				// console.log(productList);
				const singleProduct = products.filter(
					(x) => x.product_url === productID
				);
				setProducts(singleProduct);
			});
	}, [productID]);
	if (products.length) {
		return (
			<div>
				<section className="internal-page-wrapper top-100">
					<div className="container">
						{products?.map((product) => {
							const {
								product_url: id,
								product_name: title,
								product_img: img,
								product_brief_description: Brief,
								starting_price: StartPrice,
								price_range: PriceRange,
								product_description: details,
							} = product;

							return (
								<div key={id} className="bottom-100">
									<div className="row justify-content-center text-center bottom-50">
										<div className="col-12 mt-5 pt-4">
											<div className="title-wraper bold">{title}</div>
											<div className="brief-description">{Brief}</div>
										</div>
									</div>

									<div className="row justify-content-center text-center product-holder h-100">
										<div className={`col-sm-12 col-md-6 my-auto`}>
											<div className="starting-price">
												{`Starting at ${StartPrice}`}
											</div>
											<div className="monthly-price">{PriceRange}</div>
											<div className="product-details">{details}</div>
										</div>

										<div className={`col-sm-12 col-md-6`}>
											<div className="prodict-image">
												<img src={img} alt={title} />
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		);
	} else {
		return <Four04 />;
	}
}

export default ProductPage;
