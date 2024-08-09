const express = require('express');
const https = require('https');
const fs = require('fs'); // Pridanie pre čítanie súborov certifikátu
const cookieParser = require('cookie-parser');
const path = require('path');
const sql = require('mssql');
const users = require('./routes/users');
const courses = require('./routes/courses');
const milestonesRouter = require('./routes/milestones');
const statisticsRouter = require('./routes/statistics');
const userCoursesRouter = require('./routes/usercourses');

const app = express();
app.use(cookieParser()); // Použite cookie-parser middleware
const PORT = 3000;

// SSL Certifikáty
const privateKey = fs.readFileSync(path.join(__dirname, 'keys', 'key.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'keys', 'cert.pem'), 'utf8');


const credentials = { key: privateKey, cert: certificate };

// Database configuration
const dbConfig = {
    user: 'lolo', //foo pre notebook
    password: 'lolo',
    server: '192.168.0.23',
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


// Zmena na HTTPS
https.createServer(credentials, app).listen(PORT, () => {
    console.log(`HTTPS server is running on https://localhost:${PORT}`);
});
