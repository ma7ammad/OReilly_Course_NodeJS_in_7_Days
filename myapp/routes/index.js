var express = require('express');
var router = express.Router();

const {loans} = require("../mappers");

// Mo: out-commenting /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });

router.get('/books', function(req, res, next) {
  const {books} = req.app.locals.data;

  res.send(books);
});

router.get('/users', function(req, res, next) {
  const {users} = req.app.locals.data;

  res.send(users);
});

// router.get('/loans', function(req, res, next) {
//   const {loans} = req.app.locals.data;

//   res.send(loans);
// });

router.get('/loans', (req, res, next) => {
  const {
    books: booksArr, 
    loans: loansArr, 
    users: usersArr
  } = req.app.locals.data;

  const mappedLoans = loans(loansArr, booksArr, usersArr);  //loans.map(({bookId, userId}) => {
    // const book = books.find(book => book.id === bookId);
    
    // const user = users.find(user => user.id === userId);

    // return {
    //   book,
    //   user
    // };

        // const borrowedBook =  {
    //   title: book.title
    // };

    // const borrowingUser =  {
    //   name: user.name
    // };

    // return {
    //   borrowedBook,
    //   borrowingUser
    // };
  // });

  res.send(mappedLoans);
});

router.post("/books/:title", (req, res, next) => {
  const {title} = req.params;
  const {books} = req.app.locals.data;

  const nextId = books.length;

  books.push({
    id: nextId,
    title
  });
  
  res.send(books);
});

module.exports = router;
