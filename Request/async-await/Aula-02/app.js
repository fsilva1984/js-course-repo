

// MULTIPLOS REQUESTES


const multRequest = async () => {
    const user1 = fetch('https://jsonplaceholder.typicode.com/users');
    const user2 = fetch('https://jsonplaceholder.typicode.com/photos');
    const user3 = fetch('https://jsonplaceholder.typicode.com/posts');

    const users = await Promise.all([user1, user2, user3]);

    users.forEach(async (response, index) => {
        console.log(await response.json(), index);

    })
}
//multRequest();






















