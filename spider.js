let request = require('request');
let cheerio = require('cheerio');

let link = "https://www.tecmundo.com.br/essential-phone/117581-empresa-criador-android-300-milhoes-investimentos.htm";

request(link, function(err, res, body) {
	if(err) return console.log(err);

	let $ = cheerio.load(body);

	let titulo = $('.article-title').text();
	let text = $('.article-text').text();
	console.log("Tilulo : "+ titulo + "\n" + "Conteudo : " + text);


});		

	
