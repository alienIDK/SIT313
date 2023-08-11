const express = require("express")
const bodyParser = require("body-parser")
const { Console } = require("console")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
const https = require("https")

/* 
equire("dotenv").config();
const sgMail = require("@sendgrid/mail"); 
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendMail = async (msg) => { 
    try {
        await sgMail.send(msg);
        console.log("Message sent successfully !!!"); 
    } 
    catch (error) {
        
        console.error(error); 
        
        if (error.response) {
            console.error(error.response.body);
        }
    } 
}
*/

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})


app.post('/' , (req,res)=>{
    const firstname = req.body.first_name
    const lastname = req.body.last_name
    const email = req.body.email

    res.send("<h1>Something happen</h1>")


    responseMessage:[
        {
        to_email : email,
        from_email: "ongm@deakin.edu.au",
        status: "subscribed",
        merge_fields: {
            FNAME : firstname,
            lNAME : lastname
        },
        message: "<h1>Thank you Subcribbing </h1> "
    }
    ]
    
    
   
    

    
})
app.listen(3000, function(){
console.log("Server is running on port 3000")
})


// API KEY GENERATES: 5ad60bbbaf2c40ca2363d33fcfadbfc9-us21
