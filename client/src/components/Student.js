import React from 'react';
import { NavLink } from 'react-router-dom';

const Student = props => {
    return (
        <tr>
            <td>{props.student.name}</td>
            <td>{props.student.country}</td>
            <td>{props.student.age}</td>
            <tr>
                <NavLink to={`/students/${props.student._id}`} className="btn btn-secondary mx-2">
                    Detail
                </NavLink>
                <NavLink to={`/students/${props.student._id}`} className="btn btn-primary  mx-2">
                    Edit
                </NavLink>
                <NavLink to={`/students/${props.student._id}/delete`} className="btn btn-danger  mx-2">
                    Delete
                </NavLink>
            </tr>
        </tr>
    );
};

export default Student;
