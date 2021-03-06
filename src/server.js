const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db")

//Configurar pasta publica
server.use(express.static("public"))

// habilitar o uso do req.body na nossa aplicação

server.use(express.urlencoded({extended: true}))

// utilizando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

// Configurar caminhos da minha aplicaçãoptimize
// pagina inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
  return res.render("index.html")
})

server.get("/create-point", (req, res) => {
  //req.query: Query Strings da nossa url
  return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
  //req.body: O corpo do nosso formulario
  // console.log(req.body)

  // Inserir dados no banco de dados
   const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  function afterInserData(err){
    if (err){
      console.log(err)
      return res.render("create-point.html", {error: true})
    }

    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html",{ saved: true})
  }
  db.run(query, values, afterInserData)

})

server.get("/search", (req, res) => {

  const search = req.query.search

  if(search == ""){
    // Pesquisa vazia
    return res.render("search-results.html", {total: 0})
  }



  // pegar os dados do banco de dados
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length
    // console.log("Aqui estão seus registros")
    // console.log(rows)
    // mostrar a pagina html com os dados do banco de dados
    return res.render("search-results.html", {places: rows, total})
  })
})

// Ligar o servidor
server.listen(3000) // porta utilizada 3000
