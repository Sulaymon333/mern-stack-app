import React, { Component } from 'react';
import axios from 'axios';

class Delete extends Component {
    state = {
        student: null
    };
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(this.props);
        const apiUrl = `/api/v1.0/students/${id}/delete`;
        axios.get(apiUrl).then(res => {
            console.log(res);
            this.setState({ student: res.data });
        });
    }
    render() {
        const id = this.props.match.params.id;
        return (
            <div className="card">
                <h1>Are you sure you want to delete the student</h1>
                <button className="primary" onClick={() => this.props.history.push(`/students/${id}`)}>
                    No
                </button>
                <button className="danger" onClick={() => this.props.history.push('/students')}>
                    Yes
                </button>
            </div>
        );
    }
}

export default Delete;
