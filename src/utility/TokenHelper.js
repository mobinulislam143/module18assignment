const jwt = require('jsonwebtoken')

exports.EncodeToken = (email, user_id) =>{
    let KEY = "125-myGf=she"
    let Expire = {expiresIn :"1d"};
    let PAYLOAD = {
        email:email,
        user_id:user_id
    }
    return jwt.sign(PAYLOAD,KEY,Expire)
}

exports.DecodeToken = (token) =>{
    try{
        let KEY = "125-myGf=she"
        jwt.verify(token,KEY)
    }catch(err){
        console.log(err)
    }
}