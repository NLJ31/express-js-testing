const { books, customers, customerBookMapping } = require("../data");
const jsonResponse = require("../middleware/response");

const getAllData = (req, res) => {
    try {
        res.status(200).json(
            jsonResponse(
            {'books': books, 
                'customer': customers, 
                'customer_purchase': customerBookMapping
            }, 200, 'success')
        );

    } catch (e) {
        console.error(e);
        res.status(400).json(jsonResponse(null, 400, 'Internal Server Error'));
    }
}

module.exports = getAllData;