import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployee } from "../services/EmployeeService";
const UpdateEmployee = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
     
    const {id} = useParams();

 
   useEffect(() =>{
    if(id){
        getEmployee(id).then((response) =>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        }).catch(error =>{
            console.error(error);
        })
    }
   }, [id])

  return (
   <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
       <form>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">First Name</label>
              <input name="firstName" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
              <input name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Last Name" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"  />
            </div>

            <div className="!mt-12">
            <button type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
           Update
            </button>
          </div>
          </div>

          
           </form>
      </div>
    </div>
  )
}

export default UpdateEmployee
