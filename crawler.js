let MongoClient = require('mongodb').MongoClient;
let request = require('request');
let cheerio = require('cheerio');
let utils = require('./utils');


let apitec = "https://api.tecmundo.com.br/api/v2/news/latest-news/noticias?top=500";
let url = 'mongodb://127.0.0.1:27017/crawler';

MongoClient.connect(url, (err, db) => {
	if(err) return console.log('ERRO : ' + err);
	
	request(apitec, (err, res, body) => {
		if(err) return console.log(err);

		let resapitec = JSON.parse(body);
		

		for(let i in resapitec.data) {
			let link = resapitec.data[i].Social.Url;
			
			request(link,(err, res, body) => {
				if(err) return console.log('Erro' + err);

				let $ = cheerio.load(body);
				let conteudo = $('body').text();
				let titulo = $('.article-title').text();
				let text = $('.article-text').text();

				let pagina = {
					link : link,
					titulo : titulo,
					conteudo : conteudo,
				}
				
				utils.inserir(db, 'pages', pagina, afterInsert);		

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