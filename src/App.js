import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Header/>

    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/addemployee' element={<AddEmployee/>}/>
      <Route path='/edit-Employee/:pid' element={<EditEmployee/>}/>
    </Routes>
    </Router>
  








    {/* <div className="min-h-screen flex items-center justify-center" style={{ background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(53,53,65,1) 35%, rgba(0,212,255,1) 100%)' }}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-2/5">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">User Details</h2>
        <div className="mb-4">
          <div className="text-gray-600">ID:</div>
          <div className="text-black">1</div>
        </div>
        <div className="mb-4">
          <div className="text-gray-600">Name:</div>
          <div className="text-black">John Doe</div>
        </div>
        <div className="mb-4">
          <div className="text-gray-600">Phone:</div>
          <div className="text-black">123-456-7890</div>
        </div>
        <div className="mb-4">
          <div className="text-gray-600">Email:</div>
          <div className="text-black">johndoe@example.com</div>
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Modify</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>
        </div>
      </div>
    </div> */}










 </>
 
  );
}

export default App;
