import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Books from "../Books/Books";
import "./Library.css";
import Profile from "../StudentsProfile/Profile";
import Question from "../Question/Question";

const Library = () => {
  //load data
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const [subjects, setSubjects] = useState([]);
  const getReadingTime = (book) => {
    setSubjects([...subjects, book]);
  };
  return (
    <div>
      <div className="main_section ml-5 pb-36">
        <div className="libary_info mt-10 ">
          <div className="libary_name mb-10">
            <h1 className="text-2xl font-bold text-primary ml-5">
              <FontAwesomeIcon icon={faBookOpen} /> Engnieering-Libary
            </h1>
            <h1 className="text-2xl mt-5 ml-5">Read Yours Subject</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:grid-cols-2 ml-5 mr-5">
            {books.map((book) => {
              return (
                <Books
                  book={book}
                  key={book.id}
                  getReadingTime={getReadingTime}
                />
              );
            })}
          </div>
        </div>
        <div className="student_section ">
          <Profile subjects={subjects} />
        </div>
        <div className="question_part mt-10 mr-5">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default Library;
