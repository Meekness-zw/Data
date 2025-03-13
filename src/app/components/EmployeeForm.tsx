const EmployeeForm = () => (
  <form className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Add Employee</h2>
    <input type="text" placeholder="Name of Employee" className="border p-2 w-full mb-2" />
    <input type="text" placeholder="Employee ID Number" className="border p-2 w-full mb-2" />
    <input type="text" placeholder="Department" className="border p-2 w-full mb-2" />
    <input type="text" placeholder="Role" className="border p-2 w-full mb-2" />
    <input type="date" placeholder="Date Started in Role" className="border p-2 w-full mb-2" />
    <input type="date" placeholder="Date Left Role" className="border p-2 w-full mb-2" />
    <textarea placeholder="Duties in Role" className="border p-2 w-full mb-2"></textarea>
    <button className="bg-green-700 text-white p-2 rounded-lg">Submit</button>
  </form>
);
export default EmployeeForm;