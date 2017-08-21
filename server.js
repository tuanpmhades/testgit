var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/public')); // Tạo đường dẫn đến folder chứa CSS + JS + Image + Fonts
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('*', function(req, res) {
  res.render('layout/index');
});

app.listen(3000, function() {
  console.log('Server is running...');
});
