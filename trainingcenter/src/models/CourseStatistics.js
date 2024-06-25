const sql = require('mssql');

class CourseStatistics {
    static async recordStatistics(userId, courseId, timeSpent, attempts) {
        const pool = await sql.connect(/* your database connection config */);
        await pool.request()
            .input('userId', sql.Int, userId)
            .input('courseId', sql.Int, courseId)
            .input('timeSpent', sql.Int, timeSpent)
            .input('attempts', sql.Int, attempts)
            .input('firstOpen', sql.DateTime, new Date())
            .input('isCompleted', sql.Int, 0)
            .query('INSERT INTO [Login].[dbo].[CourseStatistics] (UserID, CourseID, TimeSpent, Attempts, FirstOpen, IsCompleted) VALUES (@userId, @courseId, @timeSpent, @attempts, @firstOpen, @isCompleted)');
    }

    static async findByUser(userId) {
        const pool = await sql.connect(/* your database connection config */);
        const result = await pool.request()
            .input('userId', sql.Int, userId)
            .query(`
                SELECT 
                    cs.StatID,
                    cs.UserID,
                    cs.CourseID,
                    cs.TimeSpent,
                    cs.Attempts,
                    cs.FirstOpen,
                    cs.IsCompleted,
                    c.CourseName,
                    c.Description,
                    c.EndDate
                FROM [Login].[dbo].[CourseStatistics] cs
                JOIN [Login].[dbo].[Courses] c ON cs.CourseID = c.CourseID
                WHERE cs.UserID = @userId
            `);
        return result.recordset; // Vracia všetky štatistiky pre daného užívateľa
    }
}

module.exports = CourseStatistics;
