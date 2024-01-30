const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'gmail'
  auth: {
    user: 'elperez750@gmail.com',
    pass: 'californiA!15091908',
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.post('/contact', (req, res) => {
  const mailOptions = {
    from: req.body.email, // sender address
    to: 'your-email@example.com', // list of receivers
    subject: `Message from ${req.body.name}`, // Subject line
    text: req.body.message, // plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later',
      });
    } else {
      res.send({
        success: true,
        message: 'Thanks for contacting us. We will get back to you shortly',
      });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
