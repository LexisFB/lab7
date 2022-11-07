import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';


export class Create extends React.Component {
    
    constructor(){  //Binding events with  methods.
        super();
        this.handleSubmit =  this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);

        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }

    handleSubmit(e){  //method that run when the submit buttom is clicked.
        e.preventDefault();
        console.log(`button clicked! 
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);
        
        const book = {
            title: this.state.title,
            cover: this.state.cover,
            author: this.state.author
        }

        axios.post('http://localhost:4000/api/books',book).then().catch();

        this.setState ({
            title:'',
            cover:'',
            author:''
        })
        
    }
    
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }
    
    
    render(){
        return (
            <div>
           
           <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeBookTitle}
                        />
                </div>

                <div className="form-group">
                        <label>Add Book cover: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.cover}
                        onChange={this.onChangeBookCover}
                        />
                </div>

                <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.author}
                        onChange={this.onChangeBookAuthor}
                        />
                </div>


                <input type="submit" value="Add book" />
            </form>
                
             
            </div>
          );

    }
  
}


