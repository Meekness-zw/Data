'use client';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [companies, setCompanies] = useState<{ name: string; registrationNumber: string; address: string }[]>([]);
  const [employees, setEmployees] = useState<{ name: string; role: string; department: string }[]>([]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedCompanies = localStorage.getItem('companies');
    const storedEmployees = localStorage.getItem('employees');

    if (storedCompanies) {
      setCompanies(JSON.parse(storedCompanies));
    }

    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-4 bg-white shadow-xl rounded-lg border border-gray-300">
          <h2 className="text-xl font-medium text-gray-700">Total Companies</h2>
          <p className="text-3xl font-bold text-gray-900">{companies.length}</p>
        </div>
        <div className="p-4 bg-white shadow-xl rounded-lg border border-gray-300">
          <h2 className="text-xl font-medium text-gray-700">Total Employees</h2>
          <p className="text-3xl font-bold text-gray-900">{employees.length}</p>
        </div>
        <div className="p-4 bg-white shadow-xl rounded-lg border border-gray-300">
          <h2 className="text-xl font-medium text-gray-700">Avg Employees per Company</h2>
          <p className="text-3xl font-bold text-gray-900">
            {companies.length ? (employees.length / companies.length).toFixed(2) : 0}
          </p>
        </div>
      </div>

      {/* Companies List */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Saved Companies</h2>
      {companies.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-300 mb-6">
          <ul>
            {companies.map((company, index) => (
              <li key={index} className="mb-2 text-gray-700">
                <strong>Name:</strong> {company.name}, <strong>Registration:</strong> {company.registrationNumber}, <strong>Address:</strong> {company.address}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-700">No companies saved yet.</p>
      )}

      {/* Employees List */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Saved Employees</h2>
      {employees.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-300 mb-6">
          <ul>
            {employees.map((employee, index) => (
              <li key={index} className="mb-2 text-gray-700">
                <strong>Name:</strong> {employee.name}, <strong>Role:</strong> {employee.role}, <strong>Department:</strong> {employee.department}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-700">No employees saved yet.</p>
      )}

      {/* Add Employee and Company */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Companies and Employees</h2>
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <a href="/company">Add Company</a>
        </button>
        <button className="bg-green-600 text-white p-3 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          <a href="/employee">Add Employee</a>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
