// Importar a dependencia do sqlite 3

const sqlite3 = require("sqlite3").verbose()


// iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto de banco de dados, para nossas operaçõel com comandos SQL
// db.serialize(() => {
  // Criar uma tabela
  // db.run(`
  //     CREATE TABLE IF NOT EXISTS places (
  //       id INTEGER PRIMARY KEY AUTOINCREMENT,
  //       image TEXT,
  //       name TEXT,
  //       address TEXT,
  //       address2 TEXT,
  //       state TEXT,
  //       city TEXT,
  //       items TEXT
  //     );
  //   `)
  // // Inserir dados na tabela
  // const query = `
  //   INSERT INTO places (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?,?,?,?,?,?,?);
  // `
  // const values = [
  //   "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  //   "Papersider",
  //   "Guilherme Gemballa, Jardim Américar",
  //   "N° 260",
  //   "Santa Catarina",
  //   "Rio do Sul",
  //   "Papéis e Papelão"
  // ]
  //
  // function afterInserData(err){
  //   if (err){
  //     return console.log(err)
  //   }
  //
  //   console.log("Cadastrado com sucesso")
  //   console.log(this)
  // }

  // db.run(query, values, afterInserData)
  // Consultar os dados da tabela
  // db.all(`SELECT * FROM places`,function(err,rows){
  //   if (err){
  //     return console.log(err)
  //   }
  //
  //   console.log("Aqui estão seus registros")
  //   console.log(rows)
  // })
  // Deletar um dado
  // db.run(`DELETE FROM places WHERE id = ?`, [1],function(err){
  //   if (err){
  //     return console.log(err)
  //   }
  //
  //   console.log("Registro deletado com sucesso!")
  // })


// })
