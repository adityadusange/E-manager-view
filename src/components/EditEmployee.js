import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

const EditEmployee = () => {
  const { pid } = useParams(); // Retrieve the employee ID from URL params
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`Employee ID (pid): ${pid}`); // Use backticks for template literals
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployeeById(pid); // Use pid directly
        setEmployee(response.data); // Set employee data
      } catch (error) {
        console.log(`Error fetching employee with ID: ${pid}`, error); // Log error with correct ID
      }
      setLoading(false);
    };
    fetchData();
  }, [pid]);
  
  

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value }); // Update state with new values
  };

  // Edit employee when the form is submitted
  const editEmployee = (e) => {
    e.preventDefault(); // Prevent default form submission
    EmployeeService.editEmployee(employee, pid) // Pass the employee object and ID
      .then((response) => {
        console.log("Employee updated successfully", response.data);
        navigate("/"); // Navigate back to the employee list
      })
      .catch((error) => {
        console.log("Error updating employee", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div
      className="flex items-center justify-center"
      style={{
        marginLeft: 300,
        paddingTop: 50,
        marginRight: 300,
        borderRadius: 200,
      }}
    >
      <div className="container bg-transparent rounded-lg shadow-lg p-8">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">
          Update Employee Information
        </h2>

        <form onSubmit={editEmployee}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              onChange={handleChange}
              value={employee.name}
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={employee.email}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="tel"
              onChange={handleChange}
              value={employee.phone}
              placeholder="Enter your phone"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" // Use type="submit" to trigger form submission
            >
              Submit
            </button>

            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => navigate("/")} // Navigate back without submitting
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
