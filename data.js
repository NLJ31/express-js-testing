let books = [
    {
        book_id: 1,
        title: "1984",
        author: "George Orwell",
        copiesSold: 0
    },
    {
        book_id: 2,
        title: "Crime & Punishment",
        author: "fyodor dostoevsky",
        copiesSold: 0
    },
    {
        book_id: 3,
        title: "The Brothers Karamazov",
        author: "fyodor dostoevsky",
        copiesSold: 0
    },
    {
        book_id: 4,
        title: "Ulysses",
        author: "James Joyce",
        copiesSold: 0
    },
    {
        book_id: 5,
        title: "War & Peace",
        author: "Leo Tolstoy",
        copiesSold: 0
    },
];

let customers = [
    {
        customer_id: 1,
        name: "Raskolnikov",
        booksPurchased: 0
    },
    {
        customer_id: 2,
        name: "Winston Smith",
        booksPurchased: 0
    },
    {
        customer_id: 3,
        name: "Oneheart",
        booksPurchased: 0
    }
];

let customerBookMapping = [

];

module.exports = {
    books,
    customerBookMapping,
    customers
}