

export const handleError = (err,req,res,next) => {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || "internal server error"


    res.status(errStatus).json({success:false,message:errMsg,status:errStatus})
   
}