import React from 'react'
import CompanyList from "../../app/components/CompanyList";
import CompanyForm from "../../app/components/CompanyForm";

function page() {
  return (
    <div>
    <h2 className="text-xl font-semibold mb-4">Companies</h2>
      <CompanyForm />
      <CompanyList />
    </div>
  )
}

export default page