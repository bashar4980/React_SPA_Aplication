import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookOpen} from '@fortawesome/free-solid-svg-icons'
import Books from '../Books/Books';
import './Library.css'
import Profile from '../StudentsProfile/Profile';

const Library = () => {
    //load data
    const [books , setBooks]= useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='main_section container ml-auto grid grid-cols-6'>
            <div className="libary_info mt-10 col-span-5">
                <div className="libary_name mb-10">
                   <h1 className='text-2xl font-bold text-primary'><FontAwesomeIcon icon={faBookOpen} />  Engnieering-Libary</h1>
                   <h1 className='text-2xl mt-5'>Read Yours Subject</h1>
                   </div>
      
            <div className="grid grid-cols-3 gap-6">
              {
                books.map(book =>{
                    return(
                        <Books book={book} key={book.id}/>
                    )
                })
              }
            </div>
            </div>
            <div className="student_section ">
                <Profile/>
            </div>
        </div>
    );
};

export default Library;