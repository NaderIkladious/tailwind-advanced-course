import Orders from "@/app/images/orders.webp";
import Catalog from "@/app/images/catalog.webp";

export const Navigation = () => {
	return (
		<ul className="grid grid-cols-2 mx-4 gap-4">
			<li>
				<a href="#" className="flex rounded border-neutral-400 border bg-white/50 overflow-hidden">
					<div className="w-full p-4 flex flex-col">
						<span className="text-zinc-600 text-2xl">My Orders</span>
						<span
							className="text-zinc-600 text-sm">You can check your previous order and status of pending orders.</span>
					</div>
					<img src={Orders.src} width="30%" alt=""/>
				</a>
			</li>
			<li>
				<a href="#" className="flex rounded border-neutral-400 border bg-white/50 overflow-hidden">
					<div className="w-full p-4 flex flex-col">
						<span className="text-zinc-600 text-2xl">My Catalog</span>
						<span
							className="text-zinc-600 text-sm">Here you can find all the assortments that are available to you.</span>
					</div>
					<img src={Catalog.src} width="30%" alt=""/>
				</a>
			</li>
		</ul>
	)
}