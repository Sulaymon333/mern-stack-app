import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = props => {
    return (
        <div className="jumbotron text-center">
            <NavLink to="/students" className="text-center landing">
                {' '}
                <h2>Go to students page</h2>
            </NavLink>
        </div>
    );
};

export default LandingPage;
