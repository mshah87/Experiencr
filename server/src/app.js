var express = require('express');
var app = express();
const google = require('googleapis').google

const googlecreds = require('../../server/google-search.json')

async function robot(){
    const response = await google.customsearch('v1').cse.list({
        key: googlecreds.apiKey,
        cx: googlecreds.searchEngineId,
        q: "microsoft intern blog",
        num: 2
    })
    console.dir(response,{depth:null})
    process.exit(0)
}

robot()

module.exports = robot

// var server = app.listen(8080, function () {
//     robot()
//     console.log('Node server is running..');
// });

