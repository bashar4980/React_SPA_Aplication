import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookOpen , faStopwatch} from '@fortawesome/free-solid-svg-icons'

const Books = ({ book }) => {
  const {picture , Subject , Time} = book
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} style={{height:"auto"}} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><FontAwesomeIcon icon={faBookOpen} />{Subject}</h2>
        <h2 className="card-title"><FontAwesomeIcon icon={faStopwatch} /> {Time}h</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Books;
