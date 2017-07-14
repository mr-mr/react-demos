import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    // const blocks = ['', '', '', '', '','', '', '', '', ''];
    // const listItems = blocks.map((blocks) => <div className='list-'>{blocks}</div>);
    var data = ['Michael Jackson', 'Bob Dylan', 'Kendrick Lama'];
    var listItems = data.map((value, index) => (
      <li
        key={value}
        className={this.props.active === index ? 'active' : ''}>
        {value}
      </li>
    ));
    return (
      <div className='demo-container'>
        <div>{listItems}</div>
      </div>
    );
  }
}

export default App;
