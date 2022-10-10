import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; //Importing boostrap css
import { Cnav } from './components/nav'; // Importing Component Nav 

class App extends React.Component { // Creating Class with HTML to export and render on a different component

  render(){

    return (
      <div className="App">
      <Cnav></Cnav>
     

      </div>
    );
  }
  
}

export default App;
