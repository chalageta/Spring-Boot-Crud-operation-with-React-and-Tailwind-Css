import {useEffect, useState} from 'react';
import {listEmployees} from '../services/EmployeeService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() =>{
listEmployees().then((tola) =>{
    setEmployees(tola.data)
} ).catch(error =>{
    console.error(error);
    toast.error("error fetching employees!")
});

    },[])
   
  return (
    <div className='container '>
        <ToastContainer />
      <h1 className='text-center'>List Of Employees</h1>
      
     <table className='table table-striped border'>
        <thead>
            <tr>
                <th className='col'>Id</th>
                <th className='col'>First Name</th>
                <th className='col'>Last Name</th>
                <th className='col'>Email</th>
                <th>Action</th>
            </tr>
             </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
  <div className="flex items-center space-x-2">
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 hover:scale-105 transition transform duration-200 ease-in-out">
      Edit
    </button>
    <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 hover:scale-105 transition transform duration-200 ease-in-out">
      Delete
    </button>
  </div>
</td>

                            
                        </tr>
                    )
                }
            </tbody>
       
     </table>
    </div>
  )
}

export default ListEmployee
