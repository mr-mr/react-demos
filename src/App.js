import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

class App extends Component {
  render() {
    // const blocks = ['', '', '', '', '','', '', '', '', ''];
    // const listItems = blocks.map((blocks) => <div className='list-'>{blocks}</div>);
      // var rows = [];
      // for (var i=0; i < numrows; i++) {
      //     rows.push(<ObjectRow />);
      // }
    // var data = ['list-1'];
    // var listItems = data.map((value, index) => (
    //   <div
    //     key={value}
    //     className={this.props.active === index ? 'active' : ''}>
    //     {value}
    //   </div>
    // ));
    return (
      <div className='demo-container'>
          {_.times(22, i =>
              <div key={i} className={`list${i}`}>{i}.</div>
          )}
      </div>
    );
  }
}

export default App;


// class App extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <ol>
//                     {_.times(3, i =>
//                         <li key={i}>
//                             <Select onSelect={this.onSelect}>
//                                 <option value="1">bacon</option>
//                                 <option value="2">cheez</option>
//                             </Select>
//                         </li>
//                     )}
//                 </ol>
//             </div>
//         );
//     }
// }

// <div>{listItems}</div>
