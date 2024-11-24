import {recentlyBought} from "@/app/data/recently-bought";
import {Carousel} from "@/app/components/carousel";

export const RecentlyBoughtCarousel = () => {
	return (
		<div>
			<Carousel title="Recently Bought" products={recentlyBought}></Carousel>
		</div>
	)
}