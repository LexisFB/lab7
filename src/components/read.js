import { render } from '@testing-library/react';
import React from 'react';
import { Books } from './books';
import CardGroup from 'react-bootstrap/CardGroup';


export class Read extends React.Component {

    state = {  //State is a plain JavaScript object used by React to represent an information about the component’s current situation.
        books:[
            {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],"categories": []
            },
            {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
        ]
    };

    render(){
        return (
            <div>
                
               <h1> Read Component</h1>
               <CardGroup>
                <Books books={this.state.books}> </Books>  {/* Send the object from the parent component to the child component. */}
                </CardGroup>

            </div>
          );

    }
  
}


