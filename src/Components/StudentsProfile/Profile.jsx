import React from "react";
import "./Profile.css";

const Profile = ({subjects}) => {
  let totalTime = 0 ;
  for(const subject of subjects){
    totalTime = totalTime + subject.Time 
  }
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
      <div className="user_info shadow-inner shadow-indigo-500/40  rounded-sm mt-5  p-4">
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
        <h1 className="text-xl font-bold mt-2">Add A Break(min)</h1>
        <div className="grid grid-cols-3 gap-2 shadow-inner shadow-indigo-500/40  rounded-sm mt-5 p-4">
          <button className="btn w-8 btn-outline">10</button>
          <button className="btn btn-outline w-8">10</button>
          <button className="btn w-8 btn-outline">10</button>
          <button className="btn w-8 btn-outline">10</button>
          <button className="btn w-8 btn-outline">10</button>
          <button className="btn w-8 btn-outline">25</button>
        </div>
      </div>
      {/* Reading time */}
      
      <div className="reading_info">
        <h1  className="text-xl font-bold mt-5">Reading Time Information</h1>
        <div className="reading_des">
          <div className="reading_time font-bold shadow-inner shadow-indigo-500/40  rounded-sm p-1 mt-5">
            <h1 className="pt-3">Reading time</h1>
            <p className="pt-3">{totalTime}h</p>
          </div>
          <div className="break_time shadow-inner font-bold shadow-indigo-500/40  rounded-sm mt-5 p-1">
            <h1 className="pt-3 ">Break time</h1>
            <p className="pt-3 ">2h</p>
          </div>
          <button className="btn btn-block btn-primary mt-5">Activity Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
