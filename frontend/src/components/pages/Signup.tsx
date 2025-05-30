import { useRef } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export function Signup() {
    const usernamerRef = useRef<HTMLInputElement>();
    const PasswordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    function signup() {

        const username = usernamerRef.current?.value;
        const password = PasswordRef.current?.value;
        axios.post(BACKEND_URL + "/api/v1/signup", {

            username,
            password

        })
        navigate("/signin")
        alert("You have signed up")


    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8 ">
            <Input refrence={usernamerRef} placeholder="Username" />
            <Input refrence={PasswordRef} placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button Loading={true} onClick={signup} variant="primary" text="signup" fullwidth={true} />
            </div>

        </div>
    </div>
}