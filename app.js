const express = require("express");
const { graphqlHTTP } = require("express-graphql"); //exposing the graphql endpoint
const { buildSchema } = require("graphql");

const schema = buildSchema(
    ` type Query {
        welcome: String
    }`
);

const resolver = {
    welcome: () => {
        return "Welcome to grahphQL";
    }
}

const app = express();
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}))

app.listen("4000", () => {
    console.log("Running GraphQL");
})

