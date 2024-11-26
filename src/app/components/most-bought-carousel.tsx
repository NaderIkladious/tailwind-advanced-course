import {mostBought} from "@/app/data/recently-bought";
import {Carousel} from "@/app/components/carousel";
import {cls} from "@/app/utils/cls";

export const MostBoughtCarousel = () => {
	return (
		<div className={cls(
			"app:[&>h4]:border-b-4 app:[&>h4]:border-blue-800",
			"app:[&_.tag]:bg-zinc-800 app:[&_.tag]:text-white",
			"app:[&_[data-slot=price]]:text-red-500 app:[&_[data-slot=button]]:bg-red-500 app:hover:[&_[data-slot=button]]:bg-red-600"
		)}>
			<Carousel title="Most Bought" products={mostBought}></Carousel>
		</div>
	)
}