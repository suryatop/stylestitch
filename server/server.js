// server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Create the express app
const app = express();
const PORT = 5001;

// Enable CORS
app.use(cors());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, 'src', 'Component', 'Assets', 'your_closet');
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Image upload endpoint
app.post('/upload', upload.single('image'), (req, res) => {
  console.log('Request body:', req.body);
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  console.log('Image received:', req.file);
  console.log('Image name:', req.body.name);
  res.status(200).send('Image uploaded successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
