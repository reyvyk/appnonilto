const MongoClient = require('mongodb').MongoClient;
const request = require('request');
const cheerio = require('cheerio');
const utils = require('./utils');

const apitec = "https://api.tecmundo.com.br/api/v2/news/latest-news/noticias?top=500";
const url = 'mongodb://127.0.0.1:27017/crawler';

MongoClient.connect(url, (err, db) => {
	if (err) return console.log('ERRO : ' + err);

	request(apitec, (err, res, body) => {
		if (err) return console.log(err);

		let resApitec = JSON.parse(body);

		for (let i in resApitec.data) {
			const noticia = Object.assign({}, resApitec.data[i]);

			request(noticia.Social.Url,(err, res, body) => {
				if (err) return console.log('Erro' + err);

				const $ = cheerio.load(body);
				noticia.conteudo = $('.article-text').text();

				utils.inserir(db, 'pages', noticia, afterInsert);
			});
		};
	});
});

function afterInsert(err, result) {
	if ( err ) {
		console.log('ERRO:'  + err);
	} else {
		console.log('Inserido');
	}
};