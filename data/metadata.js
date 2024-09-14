module.exports.users = [
    { id: '1', name: 'Alice', email: 'alice@example.com' },
    { id: '2', name: 'Bob', email: 'bob@example.com' }
];

module.exports.posts = [
    { id: '1', title: 'Introduction to GraphQL', content: 'Content of the first post', userId: '1' },
    { id: '2', title: 'Advanced GraphQL', content: 'Content of the second post', userId: '2' }
];

module.exports.comments = [
    { id: '1', content: 'Great post!', userId: '2', postId: '1' },
    { id: '2', content: 'Very informative', userId: '1', postId: '2' }
];