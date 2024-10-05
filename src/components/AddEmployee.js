import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log("Employee saved successfully", response.data);
        navigate("/")
      })
      .catch((error) => {
        console.log("Error saving employee", error);
      });
  };

  const navigate = useNavigate();

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
          User Information
        </h2>

        <form onSubmit={saveEmployee}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
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
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
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
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="phone"
            >
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
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={saveEmployee}
            >
              Submit
            </button>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="reset"
            >
              Clear
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
