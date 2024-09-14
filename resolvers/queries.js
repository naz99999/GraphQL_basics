const { books, authors } = require("../data/index");

authors.forEach(author => {
    author.books = books.filter(book => book.authorId === author.id);
});

books.forEach(book => {
    book.author = authors.find(author => book.authorId === author.id);
});

const book = ({ id }) => {
    return books.find(book => book.id === id);
}

const author = ({ id }) => {
    return authors.find(author => author.id === id);
}

module.exports.resolver = {
    books: books,
    authors: authors,
    book,
    author
}