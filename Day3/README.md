# 📚 Book Management REST API  
A simple RESTful API built as a Day 3 backend project to practice Node.js, Express, and handling CRUD operations using in-memory storage (no database).

## ✅ Features  
- View all books (GET `/books`)  
- Add a new book (POST `/books`)  
- Update an existing book by ID (PUT `/books/:id`)  
- Delete a book by ID (DELETE `/books/:id`)  
- Organized route using Express Router  
- JSON-based request/response structure  

## 💻 Tech Used  
- Node.js  
- Express.js  
- REST API principles  
- Postman (for testing)  
- JavaScript 

## ▶️ How to Run  
1. Clone this repo or download the files  
2. Navigate to the project folder in your terminal  
3. Install dependencies:  
   ```bash
   npm install
4. Start the server:
   ```bash
   node server.js
5. Use Postman to test endpoints:

   GET → http://localhost:3000/books

   POST → http://localhost:3000/books

   PUT → http://localhost:3000/books/:id

   DELETE → http://localhost:3000/books/:id