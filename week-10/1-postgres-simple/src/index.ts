import { Client } from 'pg';
import { DB_URL } from './config';

// Connection string for the PostgreSQL database
const connectionString = "postgresql://postgres:3725@localhost:5432/db1";

                    //`postgresql://user:password@host:port/database`



// Create a new client instance
const client = new Client({
    connectionString: connectionString,
});

// Connect to the database


async function createUserTable(){

        await client.connect()

        console.log(`Db connected`);
        

        const result = await client.query(`
            CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

            `)

            console.log(result);


            
    }

    async function InsertTable() {
        try {
            await client.connect();
            console.log('Db connected');
    
            // Using parameterized queries to prevent SQL injection
            const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
            const values =  ['cybernaut', 'contact@cyb3rnaut.com', '123456'];
            const result = await client.query(query, values );
    
            console.log('Insertion successful:', result);
        } catch (err) {
            console.error('Insertion Error:', err);
        } finally {
            await client.end();
            console.log('Db connection closed');
        }
    }
    
  
    
//createUserTable();

InsertTable();