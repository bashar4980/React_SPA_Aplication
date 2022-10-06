import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookOpen} from '@fortawesome/free-solid-svg-icons'

const Library = () => {
    return (
        <div className='container mx-auto'>
            <div className="libary_info">
                <div className="libary_name">
                   <h1><FontAwesomeIcon icon={faBookOpen} /> Engnieering-Libary</h1>
                   <h1>Read Yours Subject</h1>
                   </div>
            </div>
            <div className="boos_section"></div>
            <div className="student_section"></div>
        </div>
    );
};

export default Library;