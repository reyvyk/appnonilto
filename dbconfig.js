let MongoClient = require('mongodb').MongoClient;

let url = "mongodb://127.0.0.1:27017/crawler";

MongoClient.connect(url, (err, db) => {
 	if(err) return console.log(err);

 	console.log("Conectado com Sucesso");

	db.close();
});

export 