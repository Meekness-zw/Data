import React from 'react'
import EmployeeList from "../../app/components/EmployeeList";
import EmployeeForm from "../../app/components/EmployeeForm";

function page() {
  return (
    <div>
    <h2 className="text-xl font-semibold mb-4">Employees</h2>
      <EmployeeForm />
      <EmployeeList />
    </div>
  )
}

export default page