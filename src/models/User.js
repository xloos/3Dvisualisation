const sql = require('mssql');

class User {
    static async findByUsername(username) {
        const pool = await sql.connect(/* your database connection config */);
        const result = await pool.request()
            .input('username', sql.NVarChar, username)
            .query('SELECT * FROM [Login].[dbo].[Users] WHERE Username = @username');
        
        return result.recordset[0]; // Returns the first user that matches the username
    }

    static async create(username, passwordHash) {
        const pool = await sql.connect(/* your database connection config */);
        await pool.request()
            .input('username', sql.NVarChar, username)
            .input('passwordHash', sql.NVarChar, passwordHash)
            .query('INSERT INTO [Login].[dbo].[Users] (Username, PasswordHash) VALUES (@username, @passwordHash)');
    }
}

module.exports = User;
