const { books } = require("../data");
const jsonResponse = require("../middleware/response");

const getAllAvailableBooks = (req, res) => {
    try {
        res.status(200).json(jsonResponse(books, 200, 'success'));
    } catch (e) {
        console.error(e);
        res.status(500).json(jsonResponse(null, 500, 'Internal Server Error'));
    }
};


const createNewBook = (req, res) => {
    try {
        const { body } = req;
    
        if (body.title === '' || body.author === '') {
            res.status(400).json(jsonResponse(null, 400, 'Title and Author must be filled'))
        }
    
        const newBook = {
            book_id: books.length +1,
            ...body,
            copiesSold: 0
        }
    
        books.push(newBook);
        res.status(200).json(jsonResponse(newBook, 200, 'success'))    
    } catch (e) {
        console.error(e);
        res.status(500).json(jsonResponse(null, 500, 'Internal Server Error'));
    }
};

const updateBook = (req, res) => {
    try {
        const { params, body } = req;
    
        const obj = books.find((e) => +e.book_id === +params.id);
    
        if (!obj) {
            res.status(400).json(jsonResponse(null, 400, `Book with the ${id} ID not found`))
        }
    
        obj.author = body.author ?? obj.author;
        obj.title = body.title ?? obj.title;
    
        const checkUpdated = books.find((e) => +e.book_id === +params.id);
    
        res.status(200).json(jsonResponse(checkUpdated, 200, 'success'))    
    } catch (e) {
        console.error(e);
        res.status(500).json(jsonResponse(null, 500, 'Internal Server Error'));
    }
}

const purchaseBook = (req, res) => {
    try {
        const { params } = req;
        
        const obj = books.find((e) => +e.book_id === +params.id);
    
        if (!obj) {
            return false;
        }
    
        obj.copiesSold++;
    
    
        const checkUpdated = books.find((e) => +e.book_id === +params.id);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
 
}



module.exports = {
    getAllAvailableBooks,
    createNewBook,
    updateBook,
    purchaseBook
}