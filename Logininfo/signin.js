import { async } from "@firebase/util";
import { useState,useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const Signin = () => {
    const [regEmail,setRegEmail] = useState("");
    const [regPassword,setPassword] = useState("");
    const [logEmail,setLogEmail] = useState("");
    const [logPassword,setLogPassword] = useState("");

    const register= async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                regEmail,
                regPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    const login= async () => {
    
    }
    
    const logout= async () => {
    
    }
  
    
    return ( 
        <div className="Signin">
            <div className="register">
                <input type="text" placeholder="@Email" onChange={(event) => {setRegEmail(event.target.value)}}></input>
                <input type="password" placeholder="@password" onChange={(event) => {setPassword(event.target.value)}}></input>
                <button onClick={register}>Sign in</button>
            </div>

            <div className="login">
                <input type="text" placeholder="@Email" onChange={(event) => {setLogEmail(event.target.value)}}></input>
                <input type="password" placeholder="@password" onChange={(event) => {setLogPassword(event.target.value)}}></input>
                <button onClick={login}>Log in</button>
            </div>
        </div>
        
     );
}
 
export default Signin;