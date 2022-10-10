import { render } from '@testing-library/react';
import React from 'react';
import { BookItem } from './bookItem';


export class Books extends React.Component {
    render(){
       return  this.props.books.map( (book)=>{ //Go  through the object checking each of he items in the array.
            return <BookItem book={book}></BookItem>    
            }
           
        );

    }
  
}


