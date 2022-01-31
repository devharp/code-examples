let SESSIONS_TABLE = require('./sessionManager').getSessionsTable();
const HarpError = require('./HarpError');

function sessionHandler(req, res) {
    let status = false;
    try {
        if (req.headers.cookie === undefined || req.headers.cookie === null) {
            throw new HarpError.CookieNotDefinedError('Cookie not available');
        }

        const token = JSON.parse(req.headers.cookie);
        if (!token.session || !token.node) {
            throw new HarpError.WrongCookieError('Cookie has been changed');
        }
        // console.log('here');

        if (!validateUser(token.session, token.node)) {
            throw new HarpError.NodeValidationFailed('Session or Node id not available');
        }


        status = true;
    } catch (error) {
        switch (error.name) {
            case 'SyntaxError':
                console.log('SyntaxError');
                break;
            case 'TypeError':
                console.log('TypeError');
                break;
            case 'CookieNotDefinedError':
                console.log('CookieNotDefinedError');
                break;
            case 'WrongCookieError':
                console.log('WrongCookieError');
                break;
            case 'NodeValidationFailed':
                console.log('NodeValidationFailed');
                break;
            default:
                console.log(error);
                break;
        }
    }

    // console.log('redirecting');
    return status;
}


function validateUser(sessionid, nodeid) {
    for (let i = 0; i < SESSIONS_TABLE.length; i++) {
        if (SESSIONS_TABLE[i].id === sessionid) {
            const session = SESSIONS_TABLE[i];
            for (let j = 0; j < session.nodes.length; j++) {
                if (session.nodes[j].id === nodeid) {
                    return true;
                }
            }
        }
    }
    return false;
}



module.exports = { sessionHandler }