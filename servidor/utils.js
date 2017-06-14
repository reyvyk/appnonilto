
module.exports.inserir = function insert(db, collectionName, dados, calback) {

	let collection = db.collection(collectionName);	
	collection.insert(dados, calback);

};
