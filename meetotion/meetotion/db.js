const MongoClient = require('mongodb').MongoClient;
const Long = require('mongodb').Long;
const config = require('./config');


var initFunctionsList = [];

var initFunctions = (cb) =>{
  console.log('Ading init functions');
  initFunctionsList.push(cb);
}

async function executeInitFunctions(){
  for(let cb of initFunctionsList){
    cb();
  }
}

var db = {};
var mongoDbUri = config.mongo.local;
if(process && process.env && process.env.environment == 'production') {
  mongoDbUri = config.mongo.production;
}

var settings = {
  reconnectTries : Number.MAX_VALUE,
  autoReconnect : true
};

MongoClient.connect(mongoDbUri, settings, function(err, dbref) {
  if (!err) {
    console.log("Mongodb connected. url:" + mongoDbUri);
    db.db = dbref.db(config.mongo.dbName);
    executeInitFunctions();
  }else{
    console.log(err);
  }
});

db.initFunctions = initFunctions;

module.exports = db;
