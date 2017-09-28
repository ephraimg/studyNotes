// You can stream any response to a file stream.
request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'));

// You can also stream a file to a PUT or POST request.
fs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'));
request.get('http://google.com/img.png').pipe(request.put('http://mysite.com/img.png'));


// Request emits a "response" event when a response is received. 
// The response argument will be an instance of http.IncomingMessage.
// Also has "error" event

request
  .get('http://google.com/img.png')
  .on('error', function(err) {
      console.log(err)
    })
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) // 'image/png'
  })
  .pipe(request.put('http://mysite.com/img.png'))

// Install npm request-promise separately
// (Uses Bluebird Promises)
var rp = require('request-promise');
rp('http://www.google.com')


// Function that creates a new cookie.
request.cookie('key1=value1')