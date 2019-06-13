import React from 'react';
import axios from 'axios';

const Delete = props => {
    const deleteStudent = id => {
        const url = `/api/v1.0/students/${id}`;
        axios
            .delete(url)
            .then(response => console.log(response))
            .catch(error => console.log(error));

        props.history.push('/students');
    };

    console.log(props.match.params.id);
    return (
        <div className="card my-5">
            <p className="text-center m-5">Are you sure you want to delete the student?</p>
            <div className="row mb-3 justify-content-center">
                <button className="btn btn-primary col-1 mx-4" onClick={() => props.history.push(`/students`)}>
                    No
                </button>
                <button className="btn btn-danger col-1" onClick={() => deleteStudent(props.match.params.id)}>
                    Yes
                </button>
            </div>
        </div>
    );
};

export default Delete;
