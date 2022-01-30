let SESSIONS_TABLE = [
    {
        id: 'dd92b7e444c42d8f2c23d01244c098d9f12f76292e54d3a732eaaf490608ad958b36fdca25a6c4038bdd1a84f2a40381bf56cff5ed9c1de42f1',
        nodes: [
            {
                id: '15a613081af9ec08f4aabd6fb99e359117267f837211a1dd6392d71a3e32b67a19c2fc7d44f4adf77d562cd02bd68780753feb6e29b67c8967c'
            },
            {
                id: '61ebb0746618ae1dd8e62caacc53e1ee53c1164968b81c1a65af64870f841fe936d2d2d66fea9b19a74bc4fe1db6b827484ff34ef3d1387a92d690'
            }
        ]
    },
    {
        id: '1a62e7b732524e2eeaa82378ba2251b1c9f1011cbb71e8d7faa5829a1387de7164324a5df41d2b5a18239976b7d816df05b13ebf2b4a19866c7f',
        nodes: [
            {
                id: '15a613081af9ec08f4d7bd6fb99e359117267f837211a1dd6392d71aff32b67a19c2fc7d44f4adf77d562cd02bd68780753feb6e29b67c8967c'
            },
            {
                id: '61ebb0746618ae1dd8e62c8bcc53e1ee53c1164968b81c1aa5af64870f841fe936d2d2d66fea9b19a74bc4fe1db6b827484ff34ef3d1387a92d690'
            }
        ]
    }
]

function sessionHandler(req, res) {
    // console.log('here');
    let status = false;
    try {
        if (req.headers.cookie === undefined) {
            throw new CookieNotDefinedError('Cookie not available');
        }

        const token = JSON.parse(req.headers.cookie);
        if (!token.session || !token.node) {
            throw new WrongCookieError('Cookie has been changed');
        }
        console.log('Node\'s session exists: ' + validateUser(token.session, token.node));
        
        
        status = true;
        return status;
    } catch (error) {
        switch (error.name) {
            case 'SyntaxError':
                // console.log('SyntaxError');
                break;
            case 'CookieNotDefinedError':
                // console.log('CookieNotDefinedError');
                break;
            case 'WrongCookieError':
                // console.log('WrongCookieError');
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

module.exports = { sessionHandler }