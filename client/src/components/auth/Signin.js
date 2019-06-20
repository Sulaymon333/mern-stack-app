import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Signin extends Component {
    state = {
        email: '',
        password: ''
    };
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        console.log(this.state);
        this.props.loginUser(this.state, this.props.history);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Sign In
                </button>{' '}
                <NavLink to="/signup" className="btn btn-secondary">
                    Sign Up
                </NavLink>
            </form>
        );
    }
}

export default Signin;
