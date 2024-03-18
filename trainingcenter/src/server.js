const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const sql = require('mssql');
const users = require('./routes/users');
const courses = require('./routes/courses');
const milestonesRouter = require('./routes/milestones');
const statisticsRouter = require('./routes/statistics');
const userCoursesRouter = require('./routes/usercourses'); // Nový súbor pre routes

const app = express();
app.use(cookieParser()); // Použite cookie-parser middleware
const PORT = 3000;

// Database configuration
const dbConfig = {
    user: 'lolo', //foo pre notebook
    password: 'lolo',
    server: '192.168.0.15',  // If you have a different instance name, replace 'SQLEXPRESS' accordingly
    database: 'Login',
    options: {
        encrypt: true,  // Use true if you're on Azure
        port: 1433,
        trustServerCertificate: true
    }
};

// Connect to the database
sql.connect(dbConfig, err => {
    if (err) console.error("Error connecting to database:", err.message || err);
    else console.log("Connected to database.");
});


// Middleware
app.use(express.json());  // for parsing application/json
app.use(express.static(path.join(__dirname, '..', 'public')));  // Serve static files from the public directory

// Routes
app.use('/api/users', users);  // Prefix all routes in userRoutes with '/user'
app.use('/api/courses', courses);
app.use('/api/milestones', milestonesRouter);
app.use('/api/statistics', statisticsRouter);
app.use('/api/usercourses', userCoursesRouter); // Pridanie nového routeru

// Default route to serve your frontend app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
