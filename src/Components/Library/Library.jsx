import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookOpen} from '@fortawesome/free-solid-svg-icons'
import Books from '../Books/Books';

const Library = () => {
    //load data
    const [books , setBooks]= useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='container mx-auto'>
            <div className="libary_info">
                <div className="libary_name">
                   <h1><FontAwesomeIcon icon={faBookOpen} /> Engnieering-Libary</h1>
                   <h1>Read Yours Subject</h1>
                   </div>
            </div>
            <div className="book_section">
              {
                books.map(book =>{
                    return(
                        <Books book={book} key={book.id}/>
                    )
                })
              }
            </div>
            <div className="student_section"></div>
        </div>
    );
};

export default Library;