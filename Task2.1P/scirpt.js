import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import https from "https";
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const API_KEY = 'de3f68f1a34a94124399186309aea9c9-451410ff-2685c225';
const DOMAIN = 'sandbox8b5cc6eb46f94c46a77156317ea08cee.mailgun.org';

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    const firstname = req.body.first_name;
    const lastname = req.body.last_name;
    const email = req.body.email;

    console.log(firstname, lastname, email);

    var messageData = {
        from: "Excited User <mailgun@sandbox-123.mailgun.org>",
        to: email,
        fname: firstname,
        lname: lastname,
        subject: 'Hello',
        text: `${firstname} ${lastname}, how are you?`
    };

    client.messages.create(DOMAIN, messageData)
        .then((response) => {
            console.log(response);
            res.send("Email sent successfully");
        })
        .catch((error) => {
            console.error(error);
            res.send("Email sending failed");
        });
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
