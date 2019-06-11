import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = props => {
    return (
        <div className="jumbotron">
            <NavLink to="/students">Go to students page</NavLink>
        </div>
    );
};

export default LandingPage;
