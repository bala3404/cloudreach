var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello CloudReach" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Keep save" }');
});
app.get('/healthz', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;