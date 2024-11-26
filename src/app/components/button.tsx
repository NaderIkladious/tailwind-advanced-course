import {PropsWithChildren} from "react";
import {cls} from "@/app/utils/cls";

type Props = {
	variant?: 'pill' | 'rounded' | 'square',
	color?: 'blue' | 'white'
}
export const Button = ({
 variant = 'rounded',
 color= 'blue',
 children
}: PropsWithChildren<Props>) => {
	return (
		<button
			data-slot='button'
			data-variant={variant}
			data-color={color}
			className={cls(
				" py-1.5 px-4 text-lg transition",
				'data-[variant=pill]:rounded-full data-[variant=rounded]:rounded-md',
				'data-[color=blue]:bg-blue-500 hover:data-[color=blue]:bg-blue-700',
				'data-[color=white]:bg-white hover:data-[color=white]:bg-blue-50 data-[color=white]:text-blue-900'
			)}
		>
			{children}
		</button>
	)
}