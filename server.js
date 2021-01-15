const express = require('express');

const path = require('path');
const port = process.env.PORT || 8083;
const app = express();
const fs = require('fs');


// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
//app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
   res.sendFile(path.join('index.html'));
   
});
app.listen(port);