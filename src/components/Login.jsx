import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const navigate=useNavigate();
    const [email,setEmailId] =useState("Prakhar@gmail.com");
    const [password,setPassword] =useState("Prakhar@124");
    const [error,setError]=useState("");
    const dispatch=useDispatch();
    const handlSignIn=async()=>{
        
        try{
            const res=await axios.post(BASE_URL+"/login",{
                email,
                password,
            },
            {withCredentials:true}
            );
            dispatch(addUser(res.data));
            return navigate("/");            
        }
        catch(err){
            setError(err?.response?.data || "something went wrong");
            console.error(err);
        }
    };
    return (
        <div className="flex justify-center my-40">

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-96 border p-8">
                <legend className="fieldset-legend text-lg">Login</legend>

                <label className="label">Email</label>
                <input type="email" value={email} className="input input-bordered w-full" onChange={(e)=>setEmailId(e.target.value)} />

                <label className="label mt-2">Password</label>
                <input type="password" value={password} className="input input-bordered w-full" onChange={(e)=>setPassword(e.target.value)} />
                <p className="text-red-500">{error}</p>
                <button className="btn btn-neutral btn-lg mt-4 w-full" onClick={handlSignIn}>Login</button>
            </fieldset>


        </div>
    )
};
export default Login;