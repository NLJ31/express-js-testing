const { customerBookMapping, customers, books } = require("../data");
const jsonResponse = require("../middleware/response");
const { purchaseBook } = require("./booksController");
const { userPurchase } = require("./userController");

const addNewMapping = (req, res) => {

    try {
        const { params, body } = req;
        
        const date = new Date();
    
        const customer = customerBookMapping.find((e) => +e.customer_id === +params.id);
        
        if (!user) {
            return res.status(400).json(jsonResponse(null, 400, 'User Doesnt Exist'));
        }
        
        let newBooks = body.map((e) => {
            req.params.id = e;
            const book = purchaseBook(req, res);
            
            if (!book) {
                return res.status(400).json(jsonResponse(null, 400, 'Book Doesnt Exist'));
            }
            
            return {
                book_id: +e,
                date_purchased: date
            }
        });
        
        const user = userPurchase(req, res);

        if (customer && body.length > 0) {
            customer.books_purchased.push(...newBooks);
        } else {
            const newUserPurchase = {
                customer_id: +params.id,
                books_purchased: newBooks
            }
    
            customerBookMapping.push(newUserPurchase);
        }

        return res.status(200).json(jsonResponse(customerBookMapping, 200, 'success'))  
    } catch (e) {
        console.error(e);
       return  res.status(500).json(jsonResponse(null, 500, 'Internal Server Error'));
    }    
}

module.exports = addNewMapping