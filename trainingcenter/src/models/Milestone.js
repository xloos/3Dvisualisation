const sql = require('mssql');

class Milestone {
    static async create(courseId, title, description, isCompleted) {
        const pool = await sql.connect();
        await pool.request()
            .input('courseId', sql.Int, courseId)
            .input('title', sql.NVarChar, title)
            .input('description', sql.NVarChar, description)
            .input('isCompleted', sql.Bit, isCompleted)
            .query('INSERT INTO [Login].[dbo].[Milestones] (CourseID, Title, Description, IsCompleted) VALUES (@courseId, @title, @description, @isCompleted)');
    }

    static async findAllForCourse(courseId) {
        const pool = await sql.connect();
        const result = await pool.request()
            .input('courseId', sql.Int, courseId)
            .query('SELECT * FROM [Login].[dbo].[Milestones] WHERE CourseID = @courseId');
        return result.recordset;
    }

    static async updateCompletionStatus(milestoneId, isCompleted) {
        const pool = await sql.connect();
        await pool.request()
            .input('milestoneId', sql.Int, milestoneId)
            .input('isCompleted', sql.Bit, isCompleted)
            .query('UPDATE [Login].[dbo].[Milestones] SET IsCompleted = @isCompleted WHERE MilestoneID = @milestoneId');
    }
}

module.exports = Milestone;