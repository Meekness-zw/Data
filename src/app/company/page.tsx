'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CompanyForm = () => {
  const [newCompany, setNewCompany] = useState({ name: '', registrationNumber: '', address: '' });
  const router = useRouter();

  const addCompany = () => {
    if (newCompany.name && newCompany.registrationNumber) {
      // Get the existing companies from localStorage
      const storedCompanies = localStorage.getItem('companies');
      let companies = storedCompanies ? JSON.parse(storedCompanies) : [];

      // Add the new company to the list
      companies.push(newCompany);

      // Save the updated list back to localStorage
      localStorage.setItem('companies', JSON.stringify(companies));

      
      setNewCompany({ name: '', registrationNumber: '', address: '' });
      router.push('/');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Add New Company</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <input
          type="text"
          placeholder="Company Name"
          className="border-2 border-gray-300 p-3 w-full mb-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newCompany.name}
          onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Registration Number"
          className="border-2 border-gray-300 p-3 w-full mb-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newCompany.registrationNumber}
          onChange={(e) => setNewCompany({ ...newCompany, registrationNumber: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          className="border-2 border-gray-300 p-3 w-full mb-4 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newCompany.address}
          onChange={(e) => setNewCompany({ ...newCompany, address: e.target.value })}
        />
        <button
          onClick={addCompany}
          className="bg-green-600 text-white p-3 w-full rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Company
        </button>
      </div>
    </div>
  );
};

export default CompanyForm;
