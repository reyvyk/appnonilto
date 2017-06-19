const Express = require('express')
const MongoClient = require('mongodb').MongoClient;

const app = Express()

const port = process.env.PORT || 3000

let myDB;

app.get('/', (req, res) => {
  res.send('Ta funcionando KRALHO!!!')
})

app.get('/noticias', (req, res, next) => {
  let collection = myDB.collection('pages');

  collection.find({})
    .toArray((err, docs) => {
      // Se der erro passa o erro pra frente
      if (err) return next(err)

      // envia os a resposta para o usuário
      res.send(docs)
    })
})


MongoClient.connect(url, (err, db) => {
  if (err) return console.log('Deu ruim!!!')

  myDB = db

  app.listen(port, () => {
    console.log('Ta funcionando KRALHO!!!')
  })
})