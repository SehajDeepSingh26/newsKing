import './App.css';

//* rcc snippet fpr genreal class based component.
import React, { Component } from 'react'
import { Navbar } from './components/Navbar.js';
import News from './components/News.js';

export default class App extends Component {
  render() {
    return (   
        <div>
            <Navbar/>
            <News/>

        </div>   

    )
  }
}



