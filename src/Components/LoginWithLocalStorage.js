import React,{useRef} from "react";
import { Navigate } from "react-router-dom";
import './LoginWithLocalStorage.css';
import Home from "./Home";
import { useNavigate } from "react-router-dom";


const LoginWithLocalStorage=()=>{

    const navigate = useNavigate();
    const email = useRef()
    const password=useRef()

    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");
    

    const handleSubmit=()=>{
        if(email.current.value=="abc@gmail.com" && password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345");
        
            // redirect to /home route 
            navigate("/home");
            
        }
    }

    return(
        <div className="login">
            <h1>Login Page!!</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Email Id"ref={email}/>
            </div>
            <div>
                <input type="password"  placeholder="Password" ref={password}/>
            </div>
            <button>Login</button>
           </form>
        </div>
    );
}

export default LoginWithLocalStorage;