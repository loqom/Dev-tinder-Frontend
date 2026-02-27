import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [isLoginForm, setIsLoginForm] = useState(true);

    const handleSignIn = async () => {

        try {
            const res = await axios.post(BASE_URL + "/login", {
                email,
                password,
            },
                { withCredentials: true }
            );
            dispatch(addUser(res.data));
            return navigate("/");
        }
        catch (err) {
            setError(err?.response?.data || "something went wrong");
            console.error(err);
        }
    };

    const handleSignUp = async () => {
        try {
            const res = await axios.post(
                BASE_URL + "/signup",
                { firstName, lastName, email, password },
                { withCredentials: true }
            );
            dispatch(addUser(res.data.data));
            return navigate("/profile");
        } catch (err) {
            setError(err?.response?.data || "Something went wrong");
        }
    };

    return (
        <div className="flex justify-center my-10">

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-96 border p-8">
                <legend className="fieldset-legend text-lg">{isLoginForm ? "Login" : "Sign Up"}</legend>

                {!isLoginForm && (
                    <>
                        <label className="label">First Name</label>
                        <input type="firstName" value={firstName} className="input input-bordered w-full" onChange={(e) => setFirstName(e.target.value)} />

                        <label className="label">Last Name</label>
                        <input type="lastName" value={lastName} className="input input-bordered w-full" onChange={(e) => setLastName(e.target.value)} />

                    </>)}

                <label className="label">Email</label>
                <input type="email" value={email} className="input input-bordered w-full" onChange={(e) => setEmailId(e.target.value)} />

                <label className="label mt-2">Password</label>
                <input value={password} className="input input-bordered w-full" onChange={(e) => setPassword(e.target.value)} />
                <p className="text-red-500">{error}</p>
                <button className="btn btn-neutral btn-lg mt-4 w-full" onClick={isLoginForm ? handleSignIn : handleSignUp}>{isLoginForm ? "Login" : "Sign Up"}</button>
                <p
                    className="m-auto cursor-pointer py-2"
                    onClick={() => setIsLoginForm((value) => !value)}
                >
                    {isLoginForm
                        ? "New User? Signup Here"
                        : "Existing User? Login Here"}
                </p>

            </fieldset>


        </div>
    )
};
export default Login;