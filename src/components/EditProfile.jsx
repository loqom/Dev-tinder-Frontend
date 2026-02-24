import React, { useState } from 'react'
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constants';

const EditProfile = ({user}) => {
    const [firstName,setFirstName] =useState(user.firstName);
    const [lastName,setLastName] =useState(user.lastName);
    const [age,setAge] =useState(user.age);
    const [gender,setGender] =useState(user.gender);
    const [about,setAbout] =useState(user.about);
    const [photoLink,setphotoLink] =useState(user.photoLink);
    const [error,setError]=useState("");

    const saveProfile=async()=>{
        try{
            const res=await axios.post(
                BASE_URL+"/profile/edit",
                {
                    firstName,
                    lastName,
                    photoLink,
                    age,
                    gender,
                    about,
                },
                { withCredentials:true}
            );
        }catch(err){
            setError(err.message);
        }
    };

  return (
        <div className="flex justify-center my-10">
            <div className="flex justify-center mx-10">

                <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-96 border p-8">
                    <legend className="fieldset-legend text-lg">Profile</legend>

                    <label className="label">First Name</label>
                    <input type="firstName" value={firstName} className="input input-bordered w-full" onChange={(e)=>setFirstName(e.target.value)} />

                    <label className="label">Last Name</label>
                    <input type="lastName" value={lastName} className="input input-bordered w-full" onChange={(e)=>setLastName(e.target.value)} />

                    <label className="label">Age</label>
                    <input type="Age" value={age} className="input input-bordered w-full" onChange={(e)=>setAge(e.target.value)} />

                    <label className="label mt-2">Gender</label>
                    <input type="gender" value={gender} className="input input-bordered w-full" onChange={(e)=>setGender(e.target.value)} />

                    <label className="label mt-2">Phtot Link</label>
                    <input type="photoLink" value={photoLink} className="input input-bordered w-full" onChange={(e)=>setphotoLink(e.target.value)} />

                    <p className="text-red-500">{error}</p>
                    <button className="btn btn-neutral btn-lg mt-4 w-full">Save Profile</button>
                </fieldset>


            </div>
            <UserCard user={{firstName,lastName,photoLink,age,gender,about}}/>
        </div>
    )
}

export default EditProfile;