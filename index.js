
import express from 'express';
import routes from './src/routes/crmRoute';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';



// To run express server
const app = express();
const PORT = 4000;


// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
});

// body parser setup for json back and forth between db and server
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// To run our routes inside of our app
routes(app);

// Creating the first end-point
// Now, whenever we go to the browser, we will get this response
app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

// To know that our server is running
app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

// serving static files
app.use(express.static('public'))
