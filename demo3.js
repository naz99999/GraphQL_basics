const express = require("express");
const { graphqlHTTP } = require("express-graphql"); //exposing the graphql endpoint
const { schema } = require("./schemas/posts-comments");
const { resolvers } = require("./resolvers/meta-queries");

const app = express();
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen("4000", () => {
    console.log("Running GraphQL");
})
