const MongoClient = require('mongoose');

exports.startDbConnection = async function () {
  console.clear()
  // console.log("in Connection");

  const uri = "mongodb+srv://admin:jumpyAn!mal3@marstech.gcblu.mongodb.net/MarsTech?retryWrites=true&w=majority";
  
  await MongoClient.connect(uri, { useNewUrlParser: true , useUnifiedTopology : true} , (err,client)=>{
    // console.log("Connection Successfully")
    console.log(err);
    return client;
  });  
}

exports.closeDbConnection = function (connection) {
  connection.close((err) => {
    if (err) {return console.log(`Database Connection Closing Failed :: ${err.message}`) }
    console.log("Database Connection Closed");
  })
}