import mysql from 'mysql2/promise'

// create a connection pool (recommended)
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'RafikiPets',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})
