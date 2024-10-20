import multer from 'multer'


  const storage = multer.diskStorage(
       function (req, file,cb){
        cb(null,file.originalName)
       }
  )

  export const upload = multer({storage:storage})