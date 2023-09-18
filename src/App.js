import './App.css';

//* rcc snippet fpr genreal class based component.
import React, { Component } from 'react'
import { Navbar } from './components/Navbar.js';
// @ts-ignore
import News from './components/News.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
BUISFEAUIPBGYIPFEBcaui
                    <Navbar />                    
                    <Switch>
                        <Route path="/"><News pageSize={5} country='in' category='general' /></Route>
                        <Route path="/"><News pageSize={5} country='in' category='general' /></Route>
                        <Route path="/"><News pageSize={5} country='in' category='general' /></Route>
                        <Route path="/"><News pageSize={5} country='in' category='general' /></Route>
                    </Switch>

                </Router>

            </div>

        )
    }
}



