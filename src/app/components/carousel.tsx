import {Product} from "@/app/components/product";

export const Carousel = ({products, title}) => {
	return (
		<>
			<h4 className="text-xl text-zinc-800 mb-5">{title}</h4>
			<ul className="w-full flex gap-4 overflow-x-scroll">
				{products.map(product => (
					<li key={product.title}>
						<Product product={product}></Product>
					</li>
				))}
			</ul>
		</>
	)
}