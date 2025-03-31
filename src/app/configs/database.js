import mysql from 'mysql2'

const database = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
})

database.connect(err => {
    if (err) {
        console.error(" -> Erro ao conectar no MySQL: " + err)
        return
    }
    console.log(" -> Sucesso ao conectar-se ao MySQL.")
})

export default database