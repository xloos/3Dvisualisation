const sql = require('mssql');

class CourseStatistics {
    static async recordStatistics(userId, courseId, timeSpent, attempts) {
        const pool = await sql.connect(/* your database connection config */);
        await pool.request()
            .input('userId', sql.Int, userId)
            .input('courseId', sql.Int, courseId)
            .input('timeSpent', sql.Int, timeSpent)
            .input('attempts', sql.Int, attempts)
            .query('INSERT INTO [Login].[dbo].[CourseStatistics] (UserID, CourseID, TimeSpent, Attempts) VALUES (@userId, @courseId, @timeSpent, @attempts)');
    }

    static async findByUserAndCourse(userId, courseId) {
        const pool = await sql.connect(/* your database connection config */);
        const result = await pool.request()
            .input('userId', sql.Int, userId)
            .input('courseId', sql.Int, courseId)
            .query('SELECT * FROM [Login].[dbo].[CourseStatistics] WHERE UserID = @userId AND CourseID = @courseId');
        return result.recordset[0]; // Predpokladáme, že pre každú dvojicu používateľ-kurz bude len jeden záznam
    }
}

module.exports = CourseStatistics;