import { render } from '@testing-library/react';
import React from 'react';
import Card from 'react-bootstrap/Card'; //Importing card elements from react


export class BookItem extends React.Component {
    render(){

        return (
            <div>
                
                <Card className="mx-5" border="dark" style={{ width: '18EM' }}>
                <Card.Img variant="top" src={this.props.book.thumbnailUrl} />   {/* prints out the data of each individual item from the object array*/}
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                    {this.props.book.authors[0]}
                    </Card.Text>
                     
                </Card.Body>
                </Card>
            </div>
          );

    }
  
}


