import React from "react";

function FormComponent() {
  return (
    <div className="mt-14">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
            Fullname
          </label>
          <input placeholder="Jack" type="text"id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        {/* email */}
        <div className="mb-5">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
            Email
          </label>
          <input placeholder="jack@gmail.com" type="text"id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        {/* phone number */}
        <div className="mb-5">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
           Phone number
          </label>
          <input type="text"id="small-input" placeholder="+91 9947583726" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>


        {/* SELECT OPTION */}
        {/* <div className="mb-5">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose you want</label>
            <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            
                <option defaultValue="US">Marriage</option>
                <option defaultValue="CA">Birthday</option>
                <option defaultValue="DE">model shoot</option>
            </select>
            </div> */}

            {/* budget */}
            {/* <div className="mb-5">
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
           Enter your budget
          </label>
          <input type="number" placeholder="₹5000" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div> */}

        <div className="mb-5">
            

            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>


        </div>

        <button type="button" className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button> 
      </form>
      
    </div>
  );
}

export default FormComponent;
