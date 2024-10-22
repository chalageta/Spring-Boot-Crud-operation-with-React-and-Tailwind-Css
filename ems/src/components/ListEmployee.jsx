import { useEffect, useState } from 'react';
import { listEmployees } from '../services/EmployeeService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; // Import the icons

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5); // Set the number of employees per page
  const location = useLocation();
 const navigator = useNavigate();

  // Fetch employees and handle the toast notification on add
  useEffect(() => {
    if (location.state && location.state.success) {
      toast.success("Employee added successfully");
    }
  }, [location.state]);

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
        setFilteredEmployees(response.data); // Set filteredEmployees initially to all employees
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error fetching employees!");
      });
  }, []);

  // Handle search query change and filter employees
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

{/* Search input field (now placed between "Add Employee" and "List of Employees") */}
<div className="flex justify-end mb-4">
  <input
    type="text"
    placeholder="Search employees by name or email"
    className="form-control w-1/3"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>


      <div className="overflow-x-auto font-[sans-serif]">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-700 whitespace-nowrap">
            <tr>
              <th className="pl-4 w-8"></th>
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
                <td className="pl-4 w-8"></td>
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
  <button className="mr-4" title="Delete">
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
    </div>
  );
};

export default ListEmployee;
