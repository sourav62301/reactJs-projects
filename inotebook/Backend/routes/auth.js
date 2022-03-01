const express = require('express');
const User = require('../models/User'); 
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');


const router = express.Router();
const { body, validationResult } = require('express-validator');
const { findOne } = require('../models/User');



const JWT_SECRET = "Souravisagoodb$oy";


// ROUTE 1 ----> :   Create a User using: POST "/api/auth/createuser". Doesn't require Auth || No Login required

router.post('/createuser', [
    body('name','Enter a valid Name').isLength({ min: 3 }),
    body('email', ' Enter a valid Email').isEmail(),
    body('passward', 'Passward must be atleast 6 characters long').isLength({ min: 6 }),
] , async (req, res)=>{

  let success = false;
  
  // If there are Errors, return BAD Request and the Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    // Check whether the user with this email exists already

  try {

    let user = await User.findOne({email : req.body.email});
    if(user){
      return res.status(400).json({success, error : "Sorry a user with this email already exists"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.passward, salt)

    // Create a new User
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        passward: secPass,
      })
      
      // .then(user => res.json(user))
      // .catch(err =>{ console.log(err)
      // res.json({error : "Please Enter a Unique Value", message: err.message})});


    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    // res.send(req.body);

    const data = {
      user : {
        id: user.id
      }
    }

    const authToken = jwt.sign(data, JWT_SECRET);
    // console.log(jwtData);

    // res.json(user)
    success = true
    res.json({success, authToken})

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }


})



// ROUTE 2 ---->  :  Authenticate a User using: POST "/api/auth/login" No Login required

router.post('/login', [
  body('email', ' Enter a valid Email').isEmail(),
  body('passward', 'Passward can not be blank').exists(),
] , async (req, res)=>{

  let success = false;

  // If there are Errors, return BAD Request and the Errors

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, passward} = req.body;
  try {
    let user = await User.findOne({email});
    if(!user){
      // success = false;
      return res.status(400).json({success, error:"Please try to login with correct credentials"});
    }
    const passwardCompare = await bcrypt.compare(passward, user.passward);
    if(!passwardCompare){
      // success = false
      return res.status(400).json({success, error:"Please try to login with correct credentials"});
    }
    const data = {
      user : {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({success, authToken})
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }

})


// ROUTE 3 ---> :  Get logged in  User details : POST "/api/auth/getuser" -----> Login required

router.post('/getuser',fetchuser, async (req, res)=>{

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-passward");
    res.send(user)

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }

})




module.exports = router;