var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
app.set('port', 3000);
app.use(express.static(path.join(__dirname)));
app.get('/getPosts', function(req, res){
    fs.readFile('data/posts.json','utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
        res.send(data);
    });

});
app.listen(3000, function () {
    console.log('app.listening(3000)')
});