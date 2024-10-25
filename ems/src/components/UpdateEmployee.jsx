import { useEffect, useState, } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployee, updateEmployee } from "../services/EmployeeService";
import { toast, ToastContainer } from "react-toastify";
const UpdateEmployee = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
     const [errors, setErrors] = useState({}); // Error state for form validation
     
    const {id} = useParams();

 const navigator = useNavigate();
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

    const validateForm = () => {
        const errors = {};

        if (!firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }

        setErrors(errors); // Set validation errors
        return Object.keys(errors).length === 0; // Return true if no errors
    };

const  updateEmployeeData = () => {
  if(!validateForm()){
    toast.error('Please correct the errors in the form.');
    return;
  }
const employee = {firstName, lastName, email}

if(id){
  updateEmployee(id, employee).then((response) =>{
    console.log(response.data);
           
    navigator('/employees', {state: {success: 'updated'}})
    .catch((error) =>{
      toast.error('failed to updating employee');
      console.error('Error updating employee:', error)
    })
  });
}
};
  return (
   <div className="flex flex-col justify-center font-[sans-serif]  p-4">
    <ToastContainer />
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
       <form>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">First Name</label>
              <input name="firstName" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
              <input name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter Last Name" />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}
               type="email" placeholder="Enter email" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"  />
               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
              <div className="!mt-4">
                    <button
                        type="button"
               
                        className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                   onClick={updateEmployeeData} >
                        Submit
                    </button>
                </div>
          </div>

          
           </form>
      </div>
    </div>
  )
}

export default UpdateEmployee
