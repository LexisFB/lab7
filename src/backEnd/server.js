const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');

//Cross-origin resource sharing (CORS) is a browser mechanism
//that allows a web page to use assets and data from other pages 
//or domains. Most sites need to use resources and images to run their scripts.

const cors = require('cors');  
    app.use(cors());
    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// 
const mongoose = require('mongoose');

main().catch(err => console.log(err));

//connection to the database
async function main() {
  await mongoose.connect('mongodb+srv://webadmin:DataRep2022@datarep.wmalsu7.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//Creating/defining schema for our database
const bookSchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  cover:   String,
});

//To use our schema definition, we need to convert our bookSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
const bookModel= mongoose.model('book', bookSchema);

// parse app/x-ww-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//listening for post method
app.post('/api/books', (req, res) =>{
    console.log(req.body);
    bookModel.create({
        title:req.body.title,
        author:req.body.author,
        cover:req.body.cover
    })
    res.send('Books added');
})


app.get('/', (req, res) => { //req reserver word for request, res stands for respond 
  res.send('Hello World!')  // when web client send a get request the server will resport with this hello world. 
})

//requesting all the books on the database using the .find function for the model we created.
app.get('/api/books', (req, res) =>{
     bookModel.find((err, data )=>{
        console.log(data);
        res.json(data);
    })
})

//filtering books by ID
app.get('/api/book/:id',(req,res) => {
    console.log(req.params.id);
    bookModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    } )

})

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html' )
})

app.get('/name', (req, res) => {
    res.send(`Hello  ${req.query.fName + " " +req.query.lName }`)
})

app.get('/hello/:name', (req, res) =>{
    console.log(req.params.name);
    res.send(`Hello ${req.params.name}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
