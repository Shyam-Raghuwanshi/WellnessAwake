
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;
const Mentor = require("./schema/mentor");
const User = require("./schema/user");
const connectDb = require("./db");
// const jwt = require("jsonwebtoken")
const secretKey = process.env.SECRETKEY;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'fitness/')))

// Define your route to handle form data
connectDb()

// making jwt token
// const generateToken = (number, email, password, res) => {
//     // const payload = {
//     //     number: number,
//     //     email: email,
//     //     password: password
//     // };
//     const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });

//     // res.cookie('token', token, { httpOnly: true });
// }

app.post('/signupUser', async (req, res) => {

    try {
        const { name, number, email, password } = req.body;
        // generateToken(number, email, password, res)

        const newUser = new User({
            name: name,
            number: number,
            email: email,
            password: password
        })
        await newUser.save()
        
        res.sendFile(path.join(__dirname, '../fitness/thanks.html'));

    } catch (error) {
        res.send("Sorry! Some error occured try again");
    }


});
app.post('/signupMentor', async (req, res) => {


    try {
        const { name, number, email, password, mentorType } = req.body;
        // generateToken(number, email, password);
        const newMentor = new Mentor({
            name: name,
            number: number,
            email: email,
            password: password,
            mentorType: mentorType
        })

        await newMentor.save()
        res.sendFile(path.join(__dirname, '../fitness/thanks.html'));
    } catch (error) {
        res.send("Sorry! Some error occured try again");
    }

});
// Start the server and listen on a port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
