import { useState } from 'react';
import { createEmployee } from '../services/EmployeeService';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({}); // Error state for form validation

    const navigate = useNavigate();

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastName = (e) => setLastName(e.target.value);

    const handleEmail = (e) => setEmail(e.target.value);

    // Form validation function
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

    const handleSave = () => {
        // Call validation function
        if (!validateForm()) {
            toast.error('Please correct the errors in the form.');
            return;  // Stop form submission if validation fails
        }

        const employee = { firstName, lastName, email };
        createEmployee(employee)
            .then((response) => {
                console.log(response.data)
                toast.success('Employee added successfully');
                navigate('/employees', { state: { success: true } });
            })
            .catch((error) => {
                toast.error('Failed to add employee');
                console.error('Error adding employee:', error);
            });
    };

    return (
        <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
            <ToastContainer />
            <div className="text-center mb-16">
                <h4 className="text-gray-800 text-base font-semibold mt-6">Add Employee</h4>
            </div>

            <form>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">First Name</label>
                        <input
                            name="firstName"
                            value={firstName}
                            onChange={handleFirstName}
                            type="text"
                            className={`w-full bg-gray-100 text-gray-800 text-sm px-4 py-3.5 rounded-md transition-all
                             focus:bg-transparent outline-blue-500 ${
                                errors.firstName
                                    ? 'border border-red-500 focus:border-red-600 focus:ring-red-600'
                                    : 'border border-gray-300'
                            }`}
                            placeholder="Enter first name"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
                        <input
                            name="lastName"
                            type="text"
                            className={`w-full bg-gray-100 text-gray-800 text-sm px-4 py-3.5 rounded-md transition-all
                            focus:bg-transparent outline-blue-500 ${
                                errors.lastName
                                    ? 'border border-red-500 focus:border-red-600 focus:ring-red-600'
                                    : 'border border-gray-300'
                            }`}
                            value={lastName}
                            onChange={handleLastName}
                            placeholder="Enter last name"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Email</label>
                        <input
                            name="email"
                            type="text"
                            className={`w-full bg-gray-100 text-gray-800 text-sm px-4 py-3.5 rounded-md transition-all
                            focus:bg-transparent outline-blue-500 ${
                                errors.email
                                    ? 'border border-red-500 focus:border-red-600 focus:ring-red-600'
                                    : 'border border-gray-300'
                            }`}
                            value={email}
                            onChange={handleEmail}
                            placeholder="Enter email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
                        <input
                            name="number"
                            type="number"
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Enter mobile number"
                        />
                    </div>
                </div>

                <div className="!mt-12">
                    <button
                        type="button"
                        onClick={handleSave}
                        className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;
