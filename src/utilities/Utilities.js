const saveData = (breakTime)=>{
    localStorage.setItem("Break_time" , breakTime);
}
const getTime = ()=>{
    const storeTime = localStorage.getItem("Break_time");
     return storeTime;
}

export {saveData , getTime}