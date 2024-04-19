const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password:'root',
    database: 'nodedb'
}

async function executeSQL(sql){
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection(config)
    const res = await connection.query(sql)
    connection.end()
    return res[0]
}
executeSQL(`CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`)
executeSQL(`INSERT INTO people(name) values('Ricardo')`)
executeSQL(`INSERT INTO people(name) values('Wesley')`)


app.get('/', async (req,res) => {
    
    const results =  await executeSQL(`SELECT name FROM people`)
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results.length ? results.map(item => `<li>${item.name}</li>`).join('') : ''}
      </ol>
    `)
})

app.listen(port, ()=> {
    console.log('Rodando na porta '+ port)
})