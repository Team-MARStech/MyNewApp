require('dotenv/config')
const {MongoClient} = require('mongodb');
const uri = process.env.DB_CONNECTION;
const myClient = new MongoClient(uri ,  { useNewUrlParser: true, useUnifiedTopology: true });

exports.client = myClient.connect();



exports.closeDbConnection = function () {
  myClient.close();
}