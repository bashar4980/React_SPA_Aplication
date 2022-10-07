import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookOpen , faStopwatch} from '@fortawesome/free-solid-svg-icons';
import './Books.css'

const Books = ({ book , getReadingTime}) => {
  const {picture , Subject , Time} = book
  return (
    <div className="card w-80 h-auto bg-base-100 shadow-xl">
      <figure>
        <img src={picture}alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><FontAwesomeIcon icon={faBookOpen} />{Subject}</h2>
        <h2 className="card-title"><FontAwesomeIcon icon={faStopwatch} /> {Time}h</h2>
        <div className="card-actions mt-5">
          <button className="btn btn-block btn-primary" onClick={()=>getReadingTime(book)}>Start Reading</button>
        </div>
      </div>
    </div>
  );
};

export default Books;
