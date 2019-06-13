import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Student = props => {
    const deleteStudent = id => {
        const url = `/api/v1.0/students/${id}`;
        axios
            .delete(url)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };
    return (
        <tr>
            <td>{props.student.name}</td>
            <td>{props.student.country}</td>
            <td>{props.student.age}</td>
            <tr>
                <NavLink to={`/students/${props.student._id}`} className="btn btn-secondary mx-2 my-1">
                    Detail
                </NavLink>
                <NavLink to={`/edit/${props.student._id}`} className="btn btn-primary  mx-2 my-1">
                    Edit
                </NavLink>
                <NavLink to={`/students/delete/${props.student._id}`} className="btn btn-danger  mx-2 my-1">
                    Delete
                </NavLink>
                {/* <button onClick={() => deleteStudent(props.student._id)} className="btn btn-danger"> 
                    Delete
                </button>*/}
            </tr>
        </tr>
    );
};

export default Student;
