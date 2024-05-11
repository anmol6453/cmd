import './App.css';
import UserTable from './UserTable';
import EditUserForm from './EditUserForm';
import AddUserForm from './AddUserForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserTable />} />
        <Route path='/edit/:id' element={<EditUserForm />} />
        <Route path='/add' element={<AddUserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
