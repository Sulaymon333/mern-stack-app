import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import StudentDetail from './components/StudentDetail';
import Delete from './components/Delete';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import PrivateRoute from './components/PrivateRoute';
import setAuthHeader from './shared/setAuthHeader';
import jwtDecode from 'jwt-decode';

if (localStorage.jwtToken) {
    setAuthHeader(localStorage.jwtToken);
    const currentUser = jwtDecode(localStorage.jwtToken);
    console.log('current user', currentUser);
}

class App extends Component {
    state = {
        auth: {
            isAuthenticated: false,
            currentUser: {}
        }
    };
    render() {
        const { auth } = this.state;
        return (
            <BrowserRouter>
                <div className="container">
                    <h1 className="text-center my-3">MERN Stack App</h1>
                    <Navbar />
                    <Switch>
                        <PrivateRoute auth={auth} path="/add-student" component={AddStudent} />
                        <PrivateRoute auth={auth} path="/edit/:id" component={EditStudent} />
                        <Route path="/students/delete/:id" component={Delete} />
                        <Route path="/students/:id" component={StudentDetail} />
                        <Route path="/students" component={StudentList} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/signin" component={Signin} />
                        <PrivateRoute auth={auth} path="/" component={LandingPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
