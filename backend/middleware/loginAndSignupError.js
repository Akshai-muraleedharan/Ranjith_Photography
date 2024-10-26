




const checkError = (req,res,next) =>{
    const {username,email,password} = req.body
   
 
   
    if(username.trim() === "" || !username.trim()){
        return res.status(400).json({success:false,input:"username",message:"username is required"})
    }

    if(email.trim() === "" || !email.trim()){
        return res.status(400).json({success:false,input:"email",message:"email is required"})
    }


    
    if(password.trim() === "" || !password.trim()){
        return res.status(400).json({success:false,input:"password",message:"password is required"})
    }else if(password.length <= 6){
        return res.status(400).json({success:false,input:"password",message:"password minimum six character"})
    }

    next() 
}


export default checkError