const { buildSchema } = require("graphql");
//the "!" denotes a mandatory field in the schema
const schema = buildSchema(`
    type Book {
        id : ID!
        name : String
        author : Author
    }
    
    type Author {
        id : ID!
        name : String
        books : [Book]
    }

    type Query {
        book(id:ID!) : Book
        author(id:ID!) : Author
        books : [Book]
        authors : [Author]
    }
`);

module.exports = { schema };