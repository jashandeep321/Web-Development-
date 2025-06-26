const express = require('express');
const router =express.Router();


let books=[
    {id:1,title:'The Devil Wears Prada' ,author:'Lauren Weisberger'},
    {id:2, title:'Harry Potter', author:'J. K. Rowling'},
    {id:3, title:'War and Peace',author:'Leo Tolstoy'}
];

router.get('/',(req,res)=>{
    res.json(books);
});

router.post('/',(req,res)=>{
    const newBook=req.body;
    newBook.id=books.length+1;
    books.push(newBook);
    res.status(200).json(newBook);
});
router.put('/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    const updateddata=req.body;

    const book=books.find(book=>book.id === bookId);
    if(book){
        book.title=updateddata.title;
        book.author=updateddata.author;
        res.json(book);
    }
    else{
        res.status(404).json({message:"Book not found"})
    }
});

router.delete('/:id', (req,res)=>{
    const bookId=parseInt(req.params.id);
    books=books.filter(books=>books.id !=bookId);
    res.json({message:"Book deleted Successfully"});
});

module.exports =router;