import {Button} from "@/app/components/button";

export const Header = () => {
	return (
		<div className="w-full h-16 bg-blue-900 flex items-center justify-between px-4">
			<h1 className="text-2xl">Mini Marketplace</h1>
			<Button>Login</Button>
		</div>
	)
}