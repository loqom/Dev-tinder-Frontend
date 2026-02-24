const UserCard = ({user}) => {
  const {firstName,lastName,age,gender,photoLink,about,skills}=user;
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
          <button className="btn btn-primary w-32">Ignore</button>
          <button className="btn btn-secondary w-32">Interested</button>
        </div>
      </div>
    </div>
  );

};

export default UserCard;