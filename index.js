let express = require('express');
let app = express();

app.use(express.static('public'));
 
app.get('/index', function (req, res) {
   res.sendFile(__dirname + "/" + "public/main.htm");
})
 
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at //%s:%s", host, port)
})