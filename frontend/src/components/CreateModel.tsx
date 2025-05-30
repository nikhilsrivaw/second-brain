import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";


enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

//comtrooled component
export function CreateMdoel({ open, onClose }) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    function addContent() {
        const title = titleRef.current?.value;
        const title = titleRef.current?.value;


    }
    return <div>
        {open && <div className="w-screen h-screen bg-slate-200 fixed tope-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div className="cursor-pointer" onClick={onClose}>
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input refrence={titleRef} placeholder={"tittle"} />
                        <Input refrence={linkRef} placeholder={"link"} />


                    </div>
                    <div className="">
                        <h1>Type</h1>
                        <div className="flex">
                        <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : 'secondary' onclick={() => {
                            setType(ContentType.Youtube)
                        }}></Button>
                        <Button onclick={() => { setType(ContentType.Youtube) }} text="twitter" variant={type === ContentType.Youtube ? "primary" : 'secondary'}></Button>
                   

            <div className="flex justify-center">
                <Button onClick={addContent} variant="primary" text='submit' />
            </div>

        </span>
            </div>


        </div >}
    </div >

}


