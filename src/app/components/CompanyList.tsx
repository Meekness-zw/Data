const CompanyList = () => {
  const companies = [{ name: "Tech Corp", registration: "12345", address: "Harare" }];
  return (
    <ul className="list-none p-0">
      {companies.map((comp, index) => (
        <li key={index} className="bg-white p-4 shadow-md mb-2">{comp.name} - {comp.registration} - {comp.address}</li>
      ))}
    </ul>
  );
};
export default CompanyList;