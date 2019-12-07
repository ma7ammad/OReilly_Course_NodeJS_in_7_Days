const loans = (loansArr = [], booksArr = [], usersArr = []) => {
  return loansArr.map(({bookId, userId}) => {
    const book = booksArr.find(book => book.id === bookId);
    // const borrowedBook =  {
    //   title: book.title
    // };
    
    const user = usersArr.find(user => user.id === userId);
    // const borrowingUser =  {
    //   name: user.name
    // };

    return {
      book,
      user
    };

  //   return {
  //     borrowedBook,
  //     borrowingUser
  //   };
  });
};

module.exports = {loans};