const express = require("express");
const { graphqlHTTP } = require("express-graphql"); //exposing the graphql endpoint
const { schema } = require("./schemas/authors-books");
const { resolver } = require("./resolvers/queries");

const app = express();
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}))

app.listen("4000", () => {
    console.log("Running GraphQL");
})
