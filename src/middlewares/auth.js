const { ErrorHandler } = require('../helpers/ErrorHandler');
const { get } = require('lodash');

const auth = (req,res,next) => {
    try {
        const apitoken = get(req, "headers.x-api-token", "");
        if (!apitoken || apitoken !== process.env.API_TOKEN)
            throw new ErrorHandler(401, "UNAUTHORIZED");
        next();
    } catch (e) {
        next(e);
    }
}

module.exports = {
    auth
}