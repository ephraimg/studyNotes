// useful add-on package
const express = require('express');

// set-up express instance to use
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on ${port}/`);
});

// Serving static files, use middleware.
// If multiple folders, use multiple instances of the middleware.

app.use(express.static('public'))
//http://localhost:3000/images/kitten.jpg

// Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.

// The path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:

// app.use('/static', express.static(path.join(__dirname, 'public')))


// routing format: app.METHOD(PATH, HANDLER)
// e.g.

// Respond with Hello World! on the homepage:
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Respond to POST request on the root route (/), the application’s home page:
app.post('/', function (req, res) {
  res.send('Got a POST request')
})

// Respond to a PUT request to the /user route:
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

// Respond to a DELETE request to the /user route:
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

