import {Button} from "@/app/components/button";

type Props = {
	product: {
		title: string,
		description: string,
		attributes: string[]
		price: string;
		image: string
	}
}
export const Product = ({product}: Props) => {
	return (
		<div className="group/tile border flex flex-col items-stretch rounded-md overflow-hidden border-neutral-200 w-[300px] cursor-pointer">
			<div className="h-[200px] overflow-hidden">
				<img src={product.image} className="h-[200px] group-hover/tile:scale-125 transition"/>
			</div>
			<div className="px-4 my-5">
				<p className="text-zinc-900 text-lg group-hover/tile:text-blue-600">{product.title}</p>
				<ul className="flex gap-2 flex-wrap mt-4">
					{product.attributes.map(item => (
						<li className="tag text-zinc-800 border border-zinc-800 rounded px-2" key={item}>{item}</li>
					))}
				</ul>
				<p className="text-zinc-900 text-sm/6 mt-4">{product.description}</p>
				<div className="flex justify-between items-center mt-4">
					<p className="text-blue-500 text-2xl">{product.price}</p>
					<Button variant="rounded">Add To Cart</Button>
				</div>
			</div>
		</div>
	)
}