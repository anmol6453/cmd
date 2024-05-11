import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import User from './User';

const UserTable = () => {
    const api_url = "http://localhost:5000";
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const getUsers = async () => {
        try{
            const response = await fetch(api_url);
            const data = await response.json();

            setUsers(data);
        }
        catch(err){
            console.error(err.message);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    // console.log(users)
      
  return (
    <div>
        <h2>Users Information</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>D.O.B</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User  key={user.userid} user={user} />)}
            </tbody>
        </table>
        <button onClick={() => navigate('/add')}>Add User</button>
    </div>
  );
};

export default UserTable;


