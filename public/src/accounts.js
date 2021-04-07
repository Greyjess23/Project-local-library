function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() >
  accountB.name.last.toLowerCase() ? 1 : -1)
}
function getTotalNumberOfBorrows(account, books) {
  const userID = account.id;
  let borrowsTotal = 0;
  for (book in books){
    const currentBook = books[book];
    borrowsTotal += currentBook.borrows.reduce ((acc, borrow ) => {
    return acc + (borrow.id === userID);
  },0)
}
return borrowsTotal;
}
function getBooksPossessedByAccount(account, books, authors) {
  const userId = account.id;
  let booksPossessed = [];
  for (book in books) {
    const currentBook = books[book];
    let found = currentBook.borrows.find((borrow) =>
    borrow.id === userId && !borrow.returned)
    if(found)
      booksPossessed.push(currentBook);
  }
  booksPossessed = booksPossessed.map((booksPossessed) => {
    for (authorObj in authors)
    {
      const author = authors[authorObj];
      if(author.id === booksPossessed.authorId)
        booksPossessed.author = author;
    }
    return booksPossessed;
  })
  return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
