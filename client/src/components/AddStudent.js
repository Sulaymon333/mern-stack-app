import React, { Component } from 'react';
import axios from 'axios';

class AddStudent extends Component {
    initialState = {
        name: '',
        country: '',
        age: '',
        bio: ''
    };
    state = this.initialState;

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        axios
            .post('/api/v1.0/students', this.state)
            .then(response => this.props.history.push('/students'))
            .catch(error => console.log(error));
        this.setState(this.initialState);
    };

    render() {
        return (
            <div>
                <h1>Add student</h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="country">Country</label>
                        <input
                            type="text"
                            name="country"
                            class="form-control"
                            placeholder="Enter Country"
                            value={this.state.country}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                            type="number"
                            name="age"
                            class="form-control"
                            placeholder="Enter age"
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div class="form-group">
                        <label for="bio">Bio</label>
                        <textarea name="bio" class="form-control" value={this.state.bio} onChange={this.handleChange} />
                    </div>
                    <button class="btn btn-primary" type="submit">
                        Add Student
                    </button>
                </form>
            </div>
        );
    }
}

export default AddStudent;
