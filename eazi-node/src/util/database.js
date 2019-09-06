const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb://localhost/eazi4u_testDB')
    .then(client => {
      console.log('Connected to DB!');
      _db = client.db();
      callback();
    }).catch(err => console.log(err));
}

const getDb = () => {
  if (_db)
    return _db;
  throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;