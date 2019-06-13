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

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <h1 className="text-center my-2">MERN Stack App</h1>
                    <Navbar />
                    <Switch>
                        <Route path="/add-student" component={AddStudent} />
                        <Route path="/edit/:id" component={EditStudent} />
                        <Route path="/students/delete/:id" component={Delete} />
                        <Route path="/students/:id" component={StudentDetail} />
                        <Route path="/students" component={StudentList} />
                        <Route path="/" component={LandingPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
