const sql = require('mssql');

class Course {
    static async create(name, description, url, courseType, estimatedTime, endDate) {
        const pool = await sql.connect(/* your database connection config */);
        await pool.request()
            .input('name', sql.NVarChar, name)
            .input('description', sql.NVarChar, description)
            .input('url', sql.NVarChar, url)
            .input('courseType', sql.NVarChar, courseType)
            .input('estimatedTime', sql.NVarChar, estimatedTime)
            .input('endDate', sql.Date, endDate)
            .query('INSERT INTO [Login].[dbo].[Courses] (CourseName, Description, CourseURL, CourseType, EstimatedTime, EndDate) VALUES (@name, @description, @url, @courseType, @estimatedTime, @endDate)');
    }

    static async findAll() {
        const pool = await sql.connect(/* your database connection config */);
        const result = await pool.request()
            .query('SELECT * FROM [Login].[dbo].[Courses]');
        return result.recordset;
    }
}

module.exports = Course;