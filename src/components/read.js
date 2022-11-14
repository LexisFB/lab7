import { render } from '@testing-library/react';
import React from 'react';
import { Books } from './books';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';  //Is the https client 


export class Read extends React.Component {

    componentDidMount() { // (lifecycle method) method runs after the component output has been rendered to the DOM.

        axios.get("http://localhost:4000/api/books")
            .then((response) => {  //Gets the reponse from the link above and retrieves the data.
                this.setState({ books: response.data }) //Saves the data in the books var using the setState function
            })
            .catch((error)=>{
                console.log("error");
            })
    }


    state = {  //State is a plain JavaScript object used by React to represent an information about the component’s current situation.
        books: []
    };

    render() {
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


