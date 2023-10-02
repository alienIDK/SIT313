import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import cors from 'cors'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const API_KEY = 'secret';
const DOMAIN = 'secret';

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });

app.get('/', (req, res) => {
    const user = {
        username: 'Deakimn',
        password: '121113',
    };
    res.json(user); 
});

app.post('/', (req, res) => {
    const { first_name, last_name, email } = req.body;

    console.log(first_name, last_name, email);

    const messageData = {
        from: 'Excited User <mailgun@your-domain.com>', 
        to: email,
        subject: 'Welcome to our Newsletter',
        text: `Hello ${first_name} ${last_name},\n\nThank you for subscribing to our newsletter!`,
    };

    client.messages
        .create(DOMAIN, messageData)
        .then((response) => {
            console.log(response);
            res.json({ message: 'Email sent successfully' }); // Send JSON response
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Email sending failed' }); // Send JSON response with an error status
        });
});

app.listen(3010, function () {
    console.log('Server is running on port 3010');
});
