
import express from 'express';

const app = express();
const PORT = 4000;

// Creating the first end-point
// Now, whenever we go to the browser, we will get this response
app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

// To know that our server is running
app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
