// Create an Express application
import express from 'express';

// Middleware for parsing request bodies
import bodyParser from 'body-parser';

// Middleware for logging HTTP requests
import morgan from 'morgan';

// Module for working with file and directory paths
import path from 'path';

// Module for working with file URLs
import { fileURLToPath } from 'url';

// Package for generating UUIDs
import { v4 as uuidv4 } from 'uuid';

// Get the current file path
const __filename = fileURLToPath(import.meta.url);

// Get the current directory path
const __dirname = path.dirname(__filename);

// Create an instance of the Express application
const app = express();

// Set the port number
const PORT = process.env.PORT || 3000;

// In-memory storage for mapping short codes to original URLs
const urlMap = new Map();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes

// Route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for shortening URLs
app.post('/shorten', (req, res) => {
    // Extract the original URL from the request body
    const originalUrl = req.body.originalUrl;
    
    // Generate a unique short code using uuid
    const shortCode = uuidv4();
    
    // Store the mapping of short code to original URL
    urlMap.set(shortCode, originalUrl);
    
    // Construct the shortened URL
    const shortenedUrl = `http://localhost:${PORT}/${shortCode}`;
    
    // Send the shortened URL to the client
    res.send(`Your URL has been shortened: ${shortenedUrl}`);
});

// Route for redirecting to the original URL
app.get('/:shortCode', (req, res) => {
    // Extract the short code from the request parameters
    const shortCode = req.params.shortCode;
    
    // Check if the short code exists in the URL map
    if (urlMap.has(shortCode)) {
        // If the short code exists, redirect to the original URL
        const originalUrl = urlMap.get(shortCode);
        res.redirect(originalUrl);
    } else {
        // If the short code does not exist, send a 404 error
        res.status(404).send('Shortened URL not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
