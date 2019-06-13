import React, { Component } from 'react';
import axios from 'axios';

class StudentDetail extends Component {
    state = {
        student: null
    };
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(this.props);
        const apiUrl = `http://localhost:9000/api/v1.0/students/${id}`;
        axios.get(apiUrl).then(res => {
            console.log(res);
            this.setState({ student: res.data });
        });
    }
    render() {
        console.log(this.state.student);
        if (!this.state.student) {
            return <h1>Loading ... </h1>;
        }
        const { name, country, age, bio } = this.state.student;
        return (
            <div>
                <div className="jumbotron">
                    <h5 className="text-center">
                        <h3>{name}</h3>
                    </h5>
                </div>
                <div className="text-center card p-4">
                    <p>
                        <b>Country:</b> {country}
                    </p>
                    <p>
                        <b>Age:</b> {age}
                    </p>
                    <p>
                        <b>Bio:</b> {bio}
                    </p>
                </div>
            </div>
        );
    }
}

export default StudentDetail;
