const {hashpassword,comparepassword}=require('../helpers/auth')
const user= require('../models/user')
const jwt = require('jsonwebtoken')

const test = (req, res)=>{
    res.json('test is working')
}

// register
const registerUser=async(req,res)=>{
try
{
const {name,email,password}=req.body;

//check if name is there
if(!name)
{
    return res.status(400).json({       
     error: 'name is required'
})
}
//check if password is good
if(!password || password.length<6)
    return res.status(400).json({
 error: 'password is required and should be atleast 6 characters long'
    })


//check email
const exist=await user.findOne({email})
if(exist)
{
    return res.status(409).json({
        error:'email is already taken'
    })
}
const hashedpassword = await hashpassword(password)
const newUser = await user.create({ 
     name,
     email, 
     password:hashedpassword ,
    });
return res.status(201).json({ message: 'User registered successfully' });
} catch (error) {
console.log(error);
}
}


//login
const loginUser=async(req,res)=>{
try
{
const {email,password}=req.body

//check if the user existes
const existinguser=await user.findOne({email});
 if(!existinguser)
 {
    return res.json({
        error:'user not found'
    })
 }

//check if the password matches
const match = await comparepassword(password,existinguser.password)
if(!match)
{
return res.json({error:'Email/password Incorrect'});
}
jwt.sign(
    { email: existinguser.email, id: existinguser._id, name: existinguser.name },
    process.env.JWT_SECRET,
    {},
    (err, token) => {
        if (err) {
            return res.status(500).json({ error: 'Token generation failed' });
        }
        res.cookie('token', token).json(existinguser);
    }
);
}
catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong during login' });
}
}

const getprofile=(req,res)=>{
const token = req.cookies
if(token)
{
    jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
        if(err) throw err
        res.json(user)
    })
}
else
{
    res.json(null)
}
}

module.exports={
    test,
    registerUser,
    loginUser,
    getprofile
}