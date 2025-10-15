class ExpressError extends Error {
    constructor(statusCode = 500, message = "Something went wrong") {
        super(message); // pass the message to Error
        this.statusCode = statusCode;
        // Keep a proper name for stack traces
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ExpressError;
