
type Variants = "primary"|"secondary"
export interface ButtonProps{
    variant : Variants;
    size? : "sm" | "md" | "lg";
    text:string;
    startIcon?: any;
    endIcon?: any;
    onClick?:() => void;

}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}
const defaultStyles = "rounded-md p-4 flex "

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}


export const Button = ( props: ButtonProps)=>{
    //@ts-ignore

    
    return <button className={`${variantStyles[props.variant]}  ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div>{props.startIcon}</div>:null}{props.text}{props.endIcon}</button>
}