function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }
      return acc;
    },
    [[], []]
  );
}
function getBorrowersForBook(book, accounts) {
    let index = 0;
    let bookBorrowers = book.borrows.map( (borrow) => {
      index++;
      let accountBorrowing = accounts.find ((account)=>
         account.id === borrow.id);
        accountBorrowing.returned = borrow.returned;
      if(index <11)
        return accountBorrowing;
      else
        return undefined;
    });
    bookBorrowers = bookBorrowers.filter((bookBorrower)=>
                    bookBorrower !== undefined);
    return bookBorrowers;
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
