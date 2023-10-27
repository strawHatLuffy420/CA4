const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 80;

// Database configuration
const pool = new Pool({
  user: 'dbuser',
  host: 'database', // This is the name of the database service defined in docker-compose.yml
  database: 'dbname',
  password: 'dbpassword',
  port: 5432, // Default PostgreSQL port
});

app.get('/', (req, res) => {
  // Query the database
  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).send('Error');
    } else {
      console.log('Database response:', result.rows[0]);
      res.send('Hello, Docker Compose! Database response: ' + result.rows[0].now);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
