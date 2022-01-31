class CookieNotDefinedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CookieNotDefinedError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}
class WrongCookieError extends Error {
    constructor(message) {
        super(message);
        this.name = 'WrongCookieError';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}

class NodeValidationFailed extends Error{
    constructor(message){
        super(message);
        this.name = 'NodeValidationFailed';
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {CookieNotDefinedError, WrongCookieError, NodeValidationFailed}