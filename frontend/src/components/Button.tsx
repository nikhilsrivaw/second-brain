import type { ReactElement } from "react";

type Variants = "primary" | "secondary"
export interface ButtonProps {
    variant: Variants;
    size?: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullwidth?:boolean;
    Loading?:boolean

}

const variantStyles = {
    "primary": "bg-purple-600 text-white cursor-pointer",
    "secondary": "bg-purple-300 text-purple-600"
}
const defaultStyles = "rounded-md px-4 py-2 font-light flex items-center "

// const sizeStyles = {
//     "sm": "py-1 px-2 text-sm rounded-sm",
//     "md": "py-2 px-4 text-md rounded-md",
//     "lg": "py-4 px-8 text-xl rounded-xl"
// }


export function Button({ variant, text, startIcon , onClick,fullwidth , Loading }: ButtonProps) {
    //@ts-ignore
    return <button onClick={onClick} className={variantStyles[variant] + " " + defaultStyles + `${fullwidth ? " w-full flex justify-center items-center" : ""}${Loading? "opacity-45":""} `}
    disabled={Loading}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}



    </button>





}