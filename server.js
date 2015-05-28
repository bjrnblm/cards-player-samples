'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('cards example server listening on:', port);
});
app.use(express.static('.'));