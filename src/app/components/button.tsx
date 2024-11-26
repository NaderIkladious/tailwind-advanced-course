import {PropsWithChildren} from "react";
import {cls} from "@/app/utils/cls";

type Props = {

}
export const Button = ({ children }: PropsWithChildren<Props>) => {
	return (
		<button className={cls("bg-blue-500 py-1.5 px-4 text-lg hover:bg-blue-700 transition")}>
			{children}
		</button>
	)
}