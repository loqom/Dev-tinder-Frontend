import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
  const {_id,firstName,lastName,age,gender,photoLink,about,skills}=user;
  const dispatch=useDispatch()
  const hadleSendRequest=async(status,userId)=>{
    try{
      const res=await axios.post(BASE_URL+"/send/"+status+"/"+userId,
      {},
      {withCredentials:true}
    );
    dispatch(removeUserFromFeed(userId));
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
            alt="User Photo"
            src={photoLink}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName+" "+lastName}</h2>
        {age && gender && <p>{age+","+gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-32" onClick={()=>hadleSendRequest("ignored",_id)}>Ignore</button>
          <button className="btn btn-secondary w-32" onClick={()=>hadleSendRequest("interested",_id)}>Interested</button>
        </div>
      </div>
    </div>
  );

};

export default UserCard;