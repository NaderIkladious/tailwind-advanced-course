import {mostBought} from "@/app/data/recently-bought";
import {Carousel} from "@/app/components/carousel";

export const MostBoughtCarousel = () => {
	return (
		<div className="app:[&>h4]:border-b-4 app:[&>h4]:border-blue-800 app:[&_.tag]:bg-zinc-800 app:[&_.tag]:text-white">
			<Carousel title="Most Bought" products={mostBought}></Carousel>
		</div>
	)
}