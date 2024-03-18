
const sql = require('mssql');

class UserCourse {
    static async countForUser(userId) {
        const pool = await sql.connect(/* your database connection config */);
        const result = await pool.request()
            .input('userId', sql.Int, userId)
            .query('SELECT COUNT(*) as CourseCount FROM [Login].[dbo].[UserCourses] WHERE UserID = @userId');
        return result.recordset[0].CourseCount;
    }
}

module.exports = UserCourse;