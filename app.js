const express = require('express');
const app = express();
const port = 3000;

// Parsing form data 

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

 // Serve the contact form HTML file 
app.get('/', (req, res) => { 

    res.sendFile(__dirname + '/contact.html'); 

}); 

 app.post('/submit-form', (req, res) => { 
    const { name, email, message } = req.body; // access form data 

    // Code to send the form data to the form data to the terminal
    console.log(`Received message from ${name} (${email}): ${message}`); 


    // Validation to the client indicating success 
    res.send('Your message has been received successfully!'); 

}); 

// Code to start the server 
app.listen(port, () => { 

    console.log(`Server running on http://localhost:${port}`); 

}); 