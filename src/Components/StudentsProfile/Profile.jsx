import React, { useEffect, useState } from "react";
import { getTime, saveData } from "../../utilities/Utilities";
import "./Profile.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = ({subjects}) => {
  const [breaktime , setBreaktime] = useState(0)
  let totalTime = 0 ;
  for(const subject of subjects){
    totalTime = totalTime + subject.Time 
  }
  const breakTime = [10,15,20,25,30,35];

  const getBreakTime= time =>{
    setBreaktime(time);
    saveData(time);
    
  }
  useEffect(()=>{
    const storeBreakTime = getTime();
   if(storeBreakTime){
    setBreaktime(storeBreakTime)
   }
  },[breaktime])
  const SuccessMessage = () =>{
    toast.success("Wow You finished your target!");
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
          <p  > Weight</p>
        </div>
        <div className="height">
          <h1 className="text-lg font-bold">5.8</h1>
          <p  >Height</p>
        </div>
        <div className="age">
          <h1 className="text-lg font-bold">24yrs</h1>
          <p  >Age</p>
        </div>
      </div>
      {/* Add A break time */}
      <div className="break_section ">
        <h1 className="text-xl font-bold mt-2">Add A Break(min)</h1>
        <div className="grid grid-cols-3 gap-2 shadow-inner shadow-indigo-500/40  rounded-sm mt-5 p-4">
      
          {
            breakTime.map(time => {
              return(
                <button onClick={()=>getBreakTime(time)} className="btn w-8 btn-outline" key={time} >{time}</button>
              )
            })
          }
          
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
            <p className="pt-3 ">{breaktime} min</p>
          </div>
          <button onClick={SuccessMessage} className="btn btn-block btn-primary mt-5">Activity Completed</button>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Profile;
