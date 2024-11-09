import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { formData } from "../../Config/userApi";

function FormComponent() {
  const[errorData,setErrorData] = useState('')
  const[errorMessage,setErrorMessage] = useState('')
  const [loading,setLoading] = useState(false)
  const { register, handleSubmit } = useForm();
 

  const onSubmit = async (data) => { 
    try {
      setLoading(true)
     const response =await formData(data)
     console.log(response)
     setErrorData(response.message.split(' ')[0].slice(1,-1).trim())
     setErrorMessage(response.message.split(' ').splice(1).join(' '))
     setLoading(false)


    response.success === true ? toast.success("Data added successfully") : ""
    } catch (error) {
      setLoading(false)
      console.error( error.response?.data || error.message);
    }
  }

  if(errorData&&errorMessage){
    setTimeout(()=>{
      setErrorData('')
      setErrorMessage('')
    },3000)
  }


  return (
    <div className="mt-14">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
            Fullname
          </label>
          <input {...register("fullname")} placeholder="Jack" type="text"id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <p className="text-end text-xs h-1 text-red-500">{errorData === "fullname" ? errorMessage : '' }</p>
        </div>
        

        {/* email */}
        <div className="mb-5">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
            Email
          </label>
          <input placeholder="jack@gmail.com" {...register("email")} type="text"id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <p className="text-end text-xs h-1 text-red-500">{errorData === "email" ? errorMessage : '' }</p>
        </div>

        {/* phone number */}
        <div className="mb-5">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
           Phone number
          </label>
          <input type="text"id="small-input" {...register("phoneNumber")} placeholder="+91 9947583726" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <p className="text-end text-xs h-1 text-red-500">{errorData === "phoneNumber" ? errorMessage : '' }</p>
        </div>


       

        <div className="mb-5">
            

            <textarea id="message" rows="4" {...register("message")} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

            <p className="text-end text-xs h-1 text-red-500">{errorData === "message" ? errorMessage : '' }</p>
        </div>

 
        <button type="submit" className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{loading ? "loading..." : "Submit" }</button> 
     <Toaster/>
      </form>
      
    </div>
  );
}

export default FormComponent;
 