const CompanyForm = () => (
  <form className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Add Company</h2>
    <input type="text" placeholder="Company Name" className="border p-2 w-full mb-2" />
    <input type="date" placeholder="Date of Registration" className="border p-2 w-full mb-2" />
    <input type="text" placeholder="Company Registration Number" className="border p-2 w-full mb-2" />
    <input type="text" placeholder="Address" className="border p-2 w-full mb-2" />
    <input type="text" placeholder="Contact Person" className="border p-2 w-full mb-2" />
    <input type="text" placeholder="List of Departments" className="border p-2 w-full mb-2" />
    <input type="number" placeholder="Number of Employees" className="border p-2 w-full mb-2" />
    <input type="text" placeholder="Contact Phone" className="border p-2 w-full mb-2" />
    <input type="email" placeholder="Email Address" className="border p-2 w-full mb-2" />
    <button className="bg-green-700 text-white p-2 rounded-lg">Submit</button>
  </form>
);
export default CompanyForm;
