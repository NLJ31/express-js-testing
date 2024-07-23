const { customers, books } = require("../data");
const jsonResponse = require("../middleware/response");

const getAllUsers = (req, res) => {
    try {
        return res.status(200).json(jsonResponse(customers, 200, 'success'));
    } catch (e) {
        console.error(e);
        return res.status(500).json(jsonResponse(null, 500, 'Internal Server Error'));
    }
}

const createNewUser = (req, res) => {
    try {
        const { body } = req;

        if (body.name === '') {
            return res.status(400).json(jsonResponse(null, 400, 'Name must be filled'))
        }

        const newUser = {
            customer_id: customers.length +1,
            ...body,
            booksPurchased: 0
        };

        customers.push(newUser);
        return res.status(200).json(jsonResponse(newUser, 200, 'success'));
    } catch (e) {
        console.error(e);
        return res.status(500).json(jsonResponse(null, 500, 'Internal Server Error'));
    }
}

const userPurchase = (req, res) => {
    try {
        const { paramsm, body } = req;
        
        const obj = customers.find((e) => +e.customer_id === +params.id);
        
        if (!obj) {
            return false;
        }

        obj.booksPurchased+=body.length;

        const checkUpdated = books.find((e) => +e.book_id === +params.id);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    
    }
}


module.exports = {
    userPurchase,
    createNewUser,
    getAllUsers
}