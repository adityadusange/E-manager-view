import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService';
import { useState } from 'react';
const Body = () => {






    const [employees,setEmployees]=useState( null);
    const [loading ,setLoading]=useState(true);
    useEffect(()=>{
      const fetchData =async () => {
        setLoading(true);
        try{
          const response= await EmployeeService.getEmployees();
          setEmployees(response.data);
        }
        catch(error){
          console.log(error);
        }
        setLoading(false);
        
        
      }
      fetchData();
    },[])
    
    const deleteEmployee = (e, id) => {
      e.preventDefault(); // Prevent default form submission behavior
      EmployeeService.deleteEmployeeById(id)
        .then(() => {
          if(employees){
            setEmployees((prevElement) => {
              return prevElement.filter((employee) => employee.id !== id);
            });
          }
          
        })
        .catch((error) => {
          console.error("Error deleting employee:", error);
        });
    };
    
    const naviagate=useNavigate();

    const editEmployee = (e, id) => {
      e.preventDefault();
      naviagate(`/edit-employee/${id}`); // Use backticks for template literals
  };
  
  return (
    <div className="items-center justify-center" style={{ marginLeft: 300, paddingTop: 50, marginRight: 300, borderRadius: 200 ,marginBottom:100}}>
    <div className="container justify-center">
      {/* Add Employee Button */}
      <div className="mb-4 flex justify-end">
        <button className="bg-white  text-black font-bold py-2 px-4 rounded shadow-lg hover:bg-transperent" onClick={()=> naviagate('/addemployee')}>
          Add Employee
        </button>
      </div>
  
      {/* Table */}
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
          {!loading && (<tbody>
            {employees.map((Employee)=>(
            <><tr className="border-b border-gray-200 text-black hover:bg-blue-50 hover:text-black">
                <td className="px-4 py-2">{Employee.id}</td>
                <td className="px-4 py-2">{Employee.name}</td>
                <td className="px-4 py-2">{Employee.phone}</td>
                <td className="px-4 py-2">{Employee.email}</td>
                <td className="px-4 py-2">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-1 px-3 rounded mr-2"
                  
                  onClick={(e,id)=> editEmployee(e,Employee.id)}
                  
                  >Modify</button>
                  <button className="bg-red-500 hover:bg-red-600 text-gray-800 font-bold py-1 px-3 rounded"
                  
                  onClick={(e,id)=> deleteEmployee(e,Employee.id)}
                  
                  >Delete</button>
                </td>
              </tr>
                </>))}
          </tbody>)}
          
        </table>
      </div>
    </div>
  </div>
  
  )
}

export default Body