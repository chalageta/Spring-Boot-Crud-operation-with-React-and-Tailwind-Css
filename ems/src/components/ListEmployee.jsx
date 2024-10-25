import { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; // Import the icons

const ListEmployee = () => {

  
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true); 
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5); 
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const location = useLocation();
 const navigator = useNavigate();

   useEffect(() => {
    if (location.state) {
      if (location.state.success === 'added') {
        toast.success('Employee added successfully');
      } else if (location.state.success === 'updated') {
        toast.success('Employee updated successfully');
      }
    }
  }, [location.state]);

  useEffect(() => {
   getAllEmployees();
  }, []);

  const getAllEmployees = () =>{
 listEmployees()
      .then((response) => {
        setEmployees(response.data);
        setFilteredEmployees(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error fetching employees!");
        setLoading(false);
      });
  }

  useEffect(() => {
    const filtered = employees.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEmployees(filtered);
    setPage(1); 
  }, [searchQuery, employees]);

  const totalPages = Math.ceil(filteredEmployees.length / pageSize);

  // Handle page change
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Get the employees for the current page
  const paginatedEmployees = filteredEmployees.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
  }

  const removeEmployee = (id) =>{
    console.log(id);

    deleteEmployee(id).then(() =>{
toast.success("employee deleted successfully");
getAllEmployees();
    }).catch(error =>{
      console.log(error)
    })
    
  }

   const removeSelectedEmployees = () => {
  // Create an array of promises for deleting employees
  const deletePromises = selectedEmployees.map(id => deleteEmployee(id));

  // Wait for all delete operations to complete
  Promise.all(deletePromises)
    .then(() => {
      // Show a single success message after all deletions are done
      toast.warning("Selected employees deleted successfully");
      getAllEmployees(); // Refresh the employee list
    })
    .catch(error => {
      console.error(error);
      toast.error("Error deleting selected employees");
    })
    .finally(() => {
          setSelectedEmployees([]);
    });
};


  const handleCheckboxChange = (id) => {
    setSelectedEmployees(prev => 
      prev.includes(id) ? prev.filter(empId => empId !== id) : [...prev, id]
    );
  }
  return (
    <div className='container'>
      <ToastContainer />
     <div className='flex justify-between items-center mb-4'>
  <h1 className='text-center text-2xl font-bold'>List Of Employees</h1>
  <br />
  <NavLink to='/add-employee'>
    <button className='bg-green-500 text-white px-4 py-2 rounded-md shadow-md mt-1 hover:bg-green-600 hover:scale-105 transition transform duration-200 ease-in-out'>
      Add Employee
    </button>
  </NavLink>
</div>



 {loading ? (
        <div className="flex justify-center items-center">
          <button type="button" className="bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center justify-center cursor-not-allowed opacity-50" disabled>
            <svg className="motion-reduce:hidden animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            Loading...
          </button>
        </div>
      ) : (
      <div className="overflow-x-auto font-[sans-serif]">
       <div className="flex justify-end mb-4">
  <input
    type="text"
    placeholder="Search employees by name or email"
    className="form-control w-1/3"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>

<div className="mb-4 flex justify-end">
  <button
    className={`cursor-pointer px-4 py-2 rounded-md transition ${selectedEmployees.length === 0 ? 'bg-red-300 text-gray-500 cursor-not-allowed' : 'bg-red-500 text-white hover:bg-red-600'}`}
    onClick={removeSelectedEmployees}
    disabled={selectedEmployees.length === 0}
  >
    Delete Selected
  </button>
</div>

        <table className="min-w-full bg-white">
          <thead className="bg-gray-700 whitespace-nowrap">
            <tr>
              <th className="pl-4 w-8">
              <input id="checkbox" type="checkbox"
                    onChange={() => {
                      if (selectedEmployees.length === paginatedEmployees.length) {
                        setSelectedEmployees([]);
                      } else {
                        setSelectedEmployees(paginatedEmployees.map(emp => emp.id));
                      }
                    }}
                    checked={selectedEmployees.length === paginatedEmployees.length} className="hidden peer" />
              <label htmlFor="checkbox"
                className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                  <path
                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                    data-name="7-Check" data-original="#000000" />
                </svg>
              </label>
            </th>
           
                  <th className="p-4 text-left text-sm font-medium text-white">
                Name
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Email
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Role
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Joined At
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {paginatedEmployees.map((employee, index) => (
              <tr key={index} className="even:bg-blue-50">
                <td className="pl-4 w-8">
              <input  id={`checkbox-${employee.id}`}
         type="checkbox"
                      checked={selectedEmployees.includes(employee.id)}
                      onChange={() => handleCheckboxChange(employee.id)}
                  className="hidden peer" />
              <label htmlFor={`checkbox-${employee.id}`}
                className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                  <path
                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                    data-name="7-Check" data-original="#000000" />
                </svg>
              </label>
            </td>
             <td className="p-4 text-sm">
                  {employee.firstName} {employee.lastName}
                </td>
                <td className="p-4 text-sm">{employee.email}</td>
                <td className="p-4 text-sm">Admin</td>
                <td className="p-4 text-sm">2022-05-15</td>
                <td className="p-4">
                                <button className="mr-4" title="Edit">
                  <AiFillEdit className="w-10 text-blue-500 hover:text-blue-700" onClick={() => updateEmployee(employee.id)} />
                </button>
                <button className="mr-4" title="Delete" onClick={() => removeEmployee(employee.id)}>
                  <AiFillDelete className="w-10 text-red-500 hover:text-red-700" />
                </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="md:flex m-4 justify-between items-center">
          <p className="text-sm text-gray-500">Showing {page} to {Math.min(page * pageSize, filteredEmployees.length)} of {filteredEmployees.length} entries</p>
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Stack>
        </div>
      </div>
      )}
    </div>
  );
};

export default ListEmployee;
