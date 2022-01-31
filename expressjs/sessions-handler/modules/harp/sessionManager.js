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
    },
    {
        id: '9796e0e8d95927d1bd52f4aaf7c03ce27d7b920804cdcb8488df78ddce7a21e4ccf03d1cdc6d252af92e526e1cb3f978ccd22aeb3e99c8c3aa771',
        nodes: [
            {
                id: 'e6393338cef3d5433165edb199ba805c2c5575c31893733b1b368db89112fdc1222c2a48b8edfc00c1ab8a789eb21e37554a308fb638ee94'
            }
        ]
    }
]
function sessionManager(){

}

function getSessionsTable(){
    return SESSIONS_TABLE;
}

module.exports = {sessionManager, getSessionsTable}