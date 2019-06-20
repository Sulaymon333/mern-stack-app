import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <NavLink className="navbar-brand" to="/">
                <span className="badge badge-pill badge-dark p-2 font-weight-bolder" style={{ fontSize: '18px' }}>
                    MERN App
                </span>
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto font-weight-bold">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/students">
                            Students
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add-student">
                            Add Student
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
