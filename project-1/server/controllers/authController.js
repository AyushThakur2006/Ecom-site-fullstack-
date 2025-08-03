const {hashpassword,comparepassword}=require('../helpers/auth')
const user= require('../models/user')


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
    return res.json({       
     error: 'name is required'
})
}
//check if password is good
if(!password || password.length<6)
    return res.json({
 error: 'password is required and should be atleast 6 characters long'
    })


//check email
const exist=await user.findOne({email})
if(exist)
{
    return res.json({
        error:'email is already taken'
    })
}
const hashedpassword = await hashpassword(password)
const newUser = await user.create({ 
     name,
     email, 
     password:hashedpassword ,
    });
return res.json(newUser);
} catch (error) {
console.log(error);
}
}


//login


module.exports={
    test,registerUser
}