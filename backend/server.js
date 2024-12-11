const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow requests only from this origin
    methods: ['GET', 'POST'], // Specify allowed methods
    allowedHeaders: ['Content-Type'], // Specify allowed headers
  })
);

// POST endpoint to handle form data
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Nodemailer transport setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lokendralodhi082002@gmail.com',  // Replace with your email
      pass: 'yrsqeezaltxbjyem', // Replace with your email password (App Password is preferred)
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'lokendralodhi082002@gmail.com', // Replace with your email
    subject: `Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);  // Log the error
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
