const EmployeeList = () => {
  const employees = [{ name: "John Doe", department: "IT", role: "Developer" }];
  return (
    <ul className="list-none p-0">
      {employees.map((emp, index) => (
        <li key={index} className="bg-white p-4 shadow-md mb-2">{emp.name} - {emp.department} - {emp.role}</li>
      ))}
    </ul>
  );
};
export default EmployeeList;