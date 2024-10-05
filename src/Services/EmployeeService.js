import axios from "axios";

const Employee_SAPI_Url = "http://e-manager-server-production.up.railway.app";

class EmployeeService {
  // Save a new employee
  saveEmployee(employee) {
    return axios.post(Employee_SAPI_Url, employee)
      .catch(error => {
        console.error("Error saving employee:", error.response ? error.response.data : error.message);
        throw error; // Re-throw to allow handling in the component
      });
  }

  // Get all employees
  getEmployees() {
    return axios.get(Employee_SAPI_Url)
      .catch(error => {
        console.error("Error fetching employees:", error.response ? error.response.data : error.message);
        throw error;
      });
  }

  // Get an employee by ID
  getEmployeeById(id) {
    return axios.get(`${Employee_SAPI_Url}/${id}`)
      .catch(error => {
        console.error(`Error fetching employee with ID ${id}:`, error.response ? error.response.data : error.message);
        throw error; // Re-throw the error to allow further handling
      });
  }

  // Delete an employee by ID
  deleteEmployeeById(id) {
    return axios.delete(`${Employee_SAPI_Url}/${id}`)
      .catch(error => {
        console.error(`Error deleting employee with ID ${id}:`, error.response ? error.response.data : error.message);
        throw error;
      });
  }

  
    // Other methods...
  
    editEmployee(employee, pid) {
      return axios.put(`${Employee_SAPI_Url}/${pid}`, employee, { // Use backticks here
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
  


export default new EmployeeService();
