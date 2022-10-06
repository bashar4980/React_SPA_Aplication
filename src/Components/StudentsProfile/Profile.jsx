import React from "react";
import './Profile.css'

const Profile = () => {
  return (
    <div>
        <div className="user ">
        <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://placeimg.com/192/192/people" alt="profile" />
        </div>
      </div>
      <h1 className="card-title">Bashar Ahmed</h1>
        </div>
    </div>
  );
};

export default Profile;
