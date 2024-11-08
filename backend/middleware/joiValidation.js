import Joi from 'joi'


export const checkForm = async (req, res, next) => {
    try {
        const { fullname, email, phoneNumber } = req.body;

        // Define the Joi validation schema
        const contactSchema = Joi.object({
            fullname: Joi.string().min(3).max(50).required(),
            email: Joi.string().email().required(),
            phoneNumber: Joi.string().length(10).required() ,
                message:Joi.string().min(3).max(50)
        });

        // Validate the incoming request body
        const { error } = contactSchema.validate(req.body);

        // If there's a validation error, pass it to the next middleware (error handler)
        if (error) {
            return res.status(400).json({ 
                success: false,
                message: error.details.map(err => err.message).join(', '), // Combine all error messages
            });
        }

        
        next();
    } catch (err) {
        
        next(err);
    }
};

