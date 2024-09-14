const { users, posts, comments } = require("../data/metadata");


const resolvers = {
    Query: {
        users: () => {
            return users;
        },
        posts: () => posts,
    },
    User: {
        posts: (user) => posts.filter(post => post.userId === user.id),
        comments: (user) => comments.filter(comment => comment.userId === user.id)
    },
    Post: {
        user: (post) => users.find(user => post.userId === user.id),
        comments: (post) => comments.find(comment => comment.postId === post.id)
    },
    Comment: {
        user: (comment) => users.find(user => comment.userId === user.id),
        post: (comment) => posts.find(post => comment.postId === post.id)
    }
}

//console.log(resolver.Query.users);

users.forEach(user => {
    user.posts = posts.filter(post => post.userId === user.id);
});

module.exports.resolvers = {
    //users: users,
    //posts: posts,
    resolvers
}