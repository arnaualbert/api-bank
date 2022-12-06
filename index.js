const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path'); 
const app = express()
const port = process.env.PORT || 5000;
app.use('/', express.static(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// MySQL
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'bank'
})
   
// we get the data of the database
app.get('/api/datos', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)
        connection.query('SELECT * from accounts', (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

            // if(err) throw err
            console.log('The data from beer table are: \n', rows)
        })
    })
})


// we send the data to the database
app.post('/api/mod', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { dni, full_name, account_type, amount, client_type,entry_date} = req.body

        connection.query(`UPDATE accounts SET full_name = "${full_name}", account_type = "${account_type}", amount = ${amount}, client_type = "${client_type}", entry_date = "${entry_date}" WHERE dni = "${dni}";` , (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Client with the dni: ${dni} has been modified.`)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})


// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
app.listen(3000, ()=>{
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000')
})
