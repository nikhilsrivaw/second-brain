import axios from "axios";
import { Button } from "../Button";
import { Input } from "../Input";
import { BACKEND_URL } from "../../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Signin(){
     const usernamerRef = useRef<HTMLInputElement>();
    const PasswordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    function signin(){
        
        const username = usernamerRef.current?.value;
        const password = PasswordRef.current?.value;
        const response = axios.post(BACKEND_URL + "/api/v1/signup" , {
            
                username,
                password
            
        })
        navigate("/dashboard")
        const jwt = response.data.token;
        localStorage.setItem("token" , jwt);

       

        
    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8 ">
            <Input refrence = {usernamerRef} placeholder = "Username"/>
            <Input refrence = {PasswordRef} placeholder = "Password"/>
            <div className="flex justify-center pt-4">
            <Button onClick={signin} Loading={true} variant = "primary" text="signin" fullwidth={true}/>
            </div>

        </div>
    </div>
}