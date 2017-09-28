const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}/`);
});


// to parse application/json (or use other settings)
const bodyParser = require('body-parser');
app.use(bodyParser.json()) // puts middleware in place
 
app.use(function (req, res) {
  console.log(req.body); // body available!
  //console.log(req.body.property);
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body))
})


// It's recommended to use bodyParser route-by-route

// create application/json parser 
var jsonParser = bodyParser.json()
 
// POST /api/users might, say, get JSON bodies to create users
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // do something with req.body like create a user
})