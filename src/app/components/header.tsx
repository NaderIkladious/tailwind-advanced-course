import {Button} from "@/app/components/button";

export const Header = () => {
	return (
		<div className="w-full h-16 bg-blue-900 flex items-center justify-between px-4 group-data-[traffic=app]/marketplace:hidden">
			<h1 className="text-2xl">Mini Marketplace</h1>
			<Button color='white' variant="pill">Login</Button>
		</div>
	)
}