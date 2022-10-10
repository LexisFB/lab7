import { render } from '@testing-library/react';
import React from 'react';
import { Header } from './header';
import { Footer } from './footer';


export class Content extends React.Component {
    render(){
        return (
            <div>
              <Header></Header>
               <h1> Hello World!</h1>
        
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
              <Footer></Footer>
            </div>
            
          );

    }
  
}


