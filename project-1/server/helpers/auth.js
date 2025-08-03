const bcrypt = require('bcrypt')
const hashpassword=(password)=>{
    return new Promise((resolve,reject)=>
    {
          bcrypt.genSalt(12, function(err, salt) {
            if(err)
            {
                reject(err)
            }
        bcrypt.hash(password, salt, function(err, hash) {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(hash)
            }
        });  
    })
    });
}
const comparepassword=(password,hashed)=>{
    return bcrypt.compare(password,hashed)
}
module.exports={
    hashpassword,
    comparepassword
}