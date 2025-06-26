const express = require('express');
const app =express();
const PORT=3000;

const route = require('./routes/books');

app.use(express.json());


app.use('/books',route);

app.listen(PORT,()=>{
    console.log('Server running at port : 3000');
});