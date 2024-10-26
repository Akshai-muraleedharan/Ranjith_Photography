import jwt from 'jsonwebtoken'


    export const authAdmin = (req,res,next) => {
        try {
            const {token} = req.cookies
            

            if(!token){
                return res.status(400).json({success:false,message:"user has not token"})
            }

            const verifyToken = jwt.verify(token,process.env.JWT_SECRET_KEY)

            if(!verifyToken){
                res.status(400).json({success:false,message:"admin has not authenticated"})
            }
            req.admin = verifyToken;

            next()
        } catch (error) {
            next(error)
        }
    } 