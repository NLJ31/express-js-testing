const jsonResponse = require("./response");

const checkParams = (req, res, next) => {
    const id = req.params.id;

    if (Number.isNaN(id)) {
        return res.status(400).json(jsonResponse(null, 400, 'Id must be an integer'));
    }

    next();
}

module.exports = checkParams;