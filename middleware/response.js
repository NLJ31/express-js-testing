let jsonResponse = (data, status, message) => {
    return {
        status: status,
        message: message,
        data: data
    }
}

module.exports = jsonResponse;