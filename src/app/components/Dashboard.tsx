'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await axios.get('/api/companies');
      setCompanies(response.data);
    };

    const fetchEmployees = async () => {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
    };

    fetchCompanies();
    fetchEmployees();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <h2 className="text-2xl font-semibold mb-4">Companies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => alert(JSON.stringify(company))}
          >
            <h3 className="text-xl font-medium">{company.name}</h3>
            {/* Display more company info here */}
            <p className="text-sm text-gray-600">Registration No: {company.registrationNumber}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Employees</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees.map((employee, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => alert(JSON.stringify(employee))}
          >
            <h3 className="text-xl font-medium">{employee.name}</h3>
            {/* Display more employee info here */}
            <p className="text-sm text-gray-600">Role: {employee.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
