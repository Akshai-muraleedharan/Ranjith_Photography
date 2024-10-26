
import { cloudinaryInstance } from "../config/cloudneryConfig.js"
import admin from "../model/adminModel.js"
import gallery from "../model/galleryModel.js"
import validator from 'email-validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
        // admin register

        export const adminRegister = async (req,res,next) => {
            try {
                
            // Data from client
            const {username,email,password} = req.body

            // data space reduce
            const  usernameTrim = username.trim()
            const  emailTrim = email.trim()
            const  passwordTrim = password.trim()
            const isEmail = validator.validate(emailTrim)

            // check email is validate
            if(!isEmail){
                return res.status(200).json({success:false,message:"email is not-valid"})
            }

            // to get admin length
             const adminExist = await admin.find()

            // one admin can register
            if(adminExist.length >= 1){
            return res.status(400).json({success:false,message:"only one admin can register"})
            }

            // salt round the password
             const salt = bcrypt.genSaltSync(10)

            //  hasedpassword 
             const hasedPassword =  bcrypt.hashSync(passwordTrim,salt)
            
            //  add data to mongodb
            const adminRegister = await new admin({
                username:usernameTrim,
                email:emailTrim,
                password:hasedPassword
            })
           
            //  save data to db
            await adminRegister.save()

        res.status(200).json({success:true,message:"Account create successfull"})
            
            } catch (error) {
                next(error)
            }
        }


        // admin login

        export const adminLogin = async(req,res,next) => {
            try {
                // data from client
                const {email,password} = req.body
                 // data space reduce
                const  emailTrim = email.trim()
                const  passwordTrim = password.trim()

                // check account 
                const userExist = await admin.findOne({email:emailTrim})

                 // check account exist
                if(!userExist){
                    return res.status(400).json({success:false,message:"email not exist"})
                }

                //  compare password
                const comparePassword = await bcrypt.compare(passwordTrim,userExist.password)
                
                 // check compare password
                if(!comparePassword){
                return  res.status(400).json({success:false,message:"invalid password"})
                }

              const token=  jwt.sign(userExist.email,process.env.JWT_SECRET_KEY)

                res.cookie('token',token,{
                    httpOnly: true,
                    sameSite: 'strict',
                    maxAge: 30 * 24 * 60 * 60 * 1000,
                  })
                res.status(200).json({success:true,message:"login successfully"})
            } catch (error) {
                next(error)
            }
        } 


        // get admin profile

        export const adminProfile = async (req,res,next) => {
            try {
                const adminEmail = req.admin

                const profile = await admin.findOne({email:adminEmail}).select("-password")
              
                res.status(200).json({success:true,message:"data fetched",data:profile})
            } catch (error) {
                next(error)
            }
        }

        // logout
        export const adminLogout =  (req,res,next) => {
          res.cookie("token","",{
            httyOnly: true,
            expires: new Date(0),
          })

          res.status(200).json({success:true,message:"logout successfully"})
        }


       // add photo to gallery
        export const addPhoto = async (req,res,next) => {
            try {
                // data from client
            const imageName = req.file.originalname
            const {imageType} = req.body
            
            const result =  await  cloudinaryInstance.uploader.upload(req.file.path,{ folder: "photography/gallery" })
                            .catch((err)=>{
                                throw err
                            })


            const saveImage = await gallery({
                imageName:imageName,
                publicId:result.public_id,
                imageType:imageType,
                ImageUrl:result.url

            })
            await saveImage.save()

            res.status(201).json({success:true,message:"image successfully updated"})
            } catch (error) {
            next(error) 
            }
        }


    export const deleteImage = async (req,res,next) => {
        
        try {

             const {imageID} = req.params

             const fetchImage = await gallery.findByIdAndDelete(imageID)

            

            const deleteResult = await cloudinaryInstance.uploader.destroy(fetchImage.publicId)
                                    .catch((err)=>{
                                        throw err
                                    })
            const result = deleteResult.result
         

            if(result === "ok"){
                res.status(200).json({success:true,message:"image delete successfully"})
            }
        } catch (error) {
            next(error) 
        }
    }