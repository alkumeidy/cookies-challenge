var express = require('express')

var cookieParser = require('cookie-parser')
const app = express();
const port = 8080;

app.use(cookieParser())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login', function(req, res) {

  // define cookie attributes
  var opts = {
    httpOnly: true,
    sameSite: 'strict',
  };

  // add a cookie to the response
  res.cookie('name', 'Peter', opts);
  let str = ("User has logged in.")
  res.send(str);

})

app.get('/hello', (req, res) => {
  let str = (`Welcome ${req.cookies.name}!`)
  res.send(str);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))