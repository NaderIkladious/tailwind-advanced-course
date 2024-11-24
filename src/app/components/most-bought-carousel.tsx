import {mostBought} from "@/app/data/recently-bought";
import {Carousel} from "@/app/components/carousel";

export const MostBoughtCarousel = () => {
	return (
		<div className="">
			<Carousel title="Most Bought" products={mostBought}></Carousel>
		</div>
	)
}