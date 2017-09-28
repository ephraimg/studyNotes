var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'


// Finding an entry:
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

Kitten.find({ name: /^fluff/ }, callback);


////////////////////////////////
// case with methods:

// NOTE: methods must be added to the schema 
// before compiling it with mongoose.model()

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

// Saving an entry:
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

// Updating an entry:
var query = { name: 'borne' };
Model.update(query, { name: 'jason bourne' }, options, callback)
  // is sent as
Model.update(query, { $set: { name: 'jason bourne' }}, options, callback)
  // if overwrite option is false. If overwrite is true, sent without the $set wrapper.
