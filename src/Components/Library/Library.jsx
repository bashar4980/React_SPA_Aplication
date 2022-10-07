import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookOpen} from '@fortawesome/free-solid-svg-icons'
import Books from '../Books/Books';
import './Library.css'
import Profile from '../StudentsProfile/Profile';
import Question from '../Question/Question';

const Library = () => {
    //load data
    const [books , setBooks]= useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    const [subjects , setSubjects]=useState([])
    const getReadingTime = (book)=>{
        setSubjects([...subjects , book])
    }
    return (
       <div>
         <div className='main_section container ml-auto '>
            <div className="libary_info mt-10 ">
                <div className="libary_name mb-10">
                   <h1 className='text-2xl font-bold text-primary'><FontAwesomeIcon icon={faBookOpen} />  Engnieering-Libary</h1>
                   <h1 className='text-2xl mt-5'>Read Yours Subject</h1>
                   </div>
      
            <div className="grid grid-cols-3 gap-6">
              {
                books.map(book =>{
                    return(
                        <Books book={book} key={book.id} getReadingTime={getReadingTime}/>
                    )
                })
              }
            </div>
             <div className="question_part mt-10 mr-10">
            <Question/>
        </div>
            </div>
            <div className="student_section">
                <Profile subjects={subjects}/>
            </div>
            
        </div>
       
       </div>
    );
};

export default Library;