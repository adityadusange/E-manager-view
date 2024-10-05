import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

const Body = () => {
  const [employees, setEmployees] = useState([]); // Initialized as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        console.log(response.data); // Log the response data
        if (Array.isArray(response.data)) {
          setEmployees(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
          setEmployees([]); // Set to an empty array if data is not an array
        }
      } catch (error) {
        console.log(error);
        setEmployees([]); // Set to an empty array in case of error
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id)
      .then(() => {
        setEmployees((prevEmployees) => {
          return prevEmployees.filter((employee) => employee.id !== id);
        });
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });
  };

  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/edit-employee/${id}`);
  };

  return (
    <div
      className="items-center justify-center"
      style={{
        marginLeft: 300,
        paddingTop: 50,
        marginRight: 300,
        borderRadius: 200,
        marginBottom: 100,
      }}
    >
      <div className="container justify-center">
        <div className="mb-4 flex justify-end">
          <button
            className="bg-white text-black font-bold py-2 px-4 rounded shadow-lg hover:bg-transparent"
            onClick={() => navigate('/addemployee')}
          >
            Add Employee
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-transparent rounded-lg shadow-lg">
            <thead>
              <tr className="bg-white text-black">
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {employees.map((Employee) => (
                  <tr
                    key={Employee.id}
                    className="border-b border-gray-200 text-black hover:bg-blue-50 hover:text-black"
                  >
                    <td className="px-4 py-2">{Employee.id}</td>
                    <td className="px-4 py-2">{Employee.name}</td>
                    <td className="px-4 py-2">{Employee.phone}</td>
                    <td className="px-4 py-2">{Employee.email}</td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-1 px-3 rounded mr-2"
                        onClick={(e) => editEmployee(e, Employee.id)}
                      >
                        Modify
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-gray-800 font-bold py-1 px-3 rounded"
                        onClick={(e) => deleteEmployee(e, Employee.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Body;
