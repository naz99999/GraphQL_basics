const { buildSchema } = require("graphql");
//the "!" denotes a mandatory field in the schema
const schema = buildSchema(`
    type User {
        id : ID!
        name : String
        email : String
        posts : [Post]
        comments : [Comment]
    }
    
    type Post {
        id : ID!
        title : String
        content : String
        user : User!
        comments : [Comment]
    }

    type Comment {
        id : ID!
        content : String
        user : User!
        post : Post!
    }

    type Query {
        user(id:ID!) : User
        post(id:ID!) : Post
        comment(id:ID!) : Comment
        users : [User]
        posts : [Post]
        comments : [Comment]
    }
`);

module.exports = { schema };