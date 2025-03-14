'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const EmployeeForm = () => {
  const [newEmployee, setNewEmployee] = useState({ name: '', role: '', department: '' });
  const router = useRouter();

  const addEmployee = () => {
    if (newEmployee.name && newEmployee.role) {
      // Get the existing employees from localStorage
      const storedEmployees = localStorage.getItem('employees');
      let employees = storedEmployees ? JSON.parse(storedEmployees) : [];

      // Add the new employee to the list
      employees.push(newEmployee);

      // Save the updated list back to localStorage
      localStorage.setItem('employees', JSON.stringify(employees));

      setNewEmployee({ name: '', role: '', department: '' });
      router.push('/'); 
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Add New Employee</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <input
          type="text"
          placeholder="Employee Name"
          className="border-2 border-gray-300 p-3 w-full mb-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          className="border-2 border-gray-300 p-3 w-full mb-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newEmployee.role}
          onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
        />
        <input
          type="text"
          placeholder="Department"
          className="border-2 border-gray-300 p-3 w-full mb-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newEmployee.department}
          onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
        />
        <button
          onClick={addEmployee}
          className="bg-green-600 text-white p-3 w-full rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default EmployeeForm;
