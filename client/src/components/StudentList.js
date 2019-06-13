import React, { Component } from 'react';
import Student from './Student';
import axios from 'axios';

class StudentList extends Component {
    state = {
        students: []
    };
    componentDidMount() {
        const apiUrl = '/api/v1.0/students';
        axios.get(apiUrl).then(response => {
            this.setState({
                students: response.data
            });
        });
        // fetch(apiUrl)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         this.setState({ students: data });
        //     });
    }

    renderStudentList = () => {
        const students = this.state.students;
        return students.map(student => {
            return <Student key={student._id} student={student} />;
        });
    };
    render() {
        return (
            <div>
                <h3>
                    Number of students: <span className="badge badge-success">{this.state.students.length}</span>
                </h3>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderStudentList()}</tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;
