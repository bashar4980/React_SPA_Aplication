import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="user ">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="img/profile.jpg" alt="profile" />
          </div>
        </div>
        <h1 className="card-title">Bashar Ahmed</h1>
      </div>
      <div className="user_info shadow-inner shadow-indigo-500/40  rounded-sm mt-10 p-4">
        <div className="weight">
          <h1 className="text-lg font-bold">75kg</h1>
          <p className="font-semibold"> Weight</p>
        </div>
        <div className="height">
          <h1 className="text-lg font-bold">5.8</h1>
          <p className="font-semibold">Height</p>
        </div>
        <div className="age">
          <h1 className="text-lg font-bold">24yrs</h1>
          <p className="font-semibold">Age</p>
        </div>
      </div>
      {/* Add A break time */}
      <div className="break_section ">
        <h1 className="text-xl font-bold mt-5">Add A Break(min)</h1>
        <div className="grid grid-cols-3 gap-4 shadow-inner shadow-indigo-500/40  rounded-sm mt-10 p-4">
          <button className="btn w-8 btn-outline">10</button>
          <button className="btn btn-outline w-8">10</button>
          <button className="btn w-8 btn-outline">10</button>
          <button className="btn w-8 btn-outline">10</button>
          <button className="btn w-8 btn-outline">10</button>
          <button className="btn w-8 btn-outline">25</button>
        </div>
      </div>
      {/* Reading time */}
    </div>
  );
};

export default Profile;
