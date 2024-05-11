import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditUserForm = () => {
  const {id} = useParams();
  const api_url = `http://localhost:5000/edit/${id}`;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const getElementById = async () => {
    try{
      const response = await fetch(api_url);
      const data = await response.json();

      setUsername(data.username);
      setEmail(data.email);
      setPhone(data.phone);
    }
    catch(err){
      console.error(err.message);
    }
  }
  
  useEffect(() => {
    getElementById();
    // eslint-disable-next-line
  }, [])
  
  
  const onFormSubmit = async (e) => {
    e.preventDefault();
    try{
      const user = {username, email, phone};
      // eslint-disable-next-line 
      const response = await fetch(api_url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      // console.log(await response.json())

      window.location = "/";
    }
    catch(err){
      console.error(err.message);
    }
  }

  const handleDelete = async () => {
    try{
      // eslint-disable-next-line 
      const response = await fetch(api_url, {
        method: 'DELETE'
      });

      window.location = "/";
    }
    catch(err){
      console.error(err.message);
    }
  }

  return (
    <form
      onSubmit={onFormSubmit}
    >
      <h2>Edit User</h2>
      <label>Name:</label>
      <input type="text" name="name" value={username} onChange={e => setUsername(e.target.value)} />
      <label>Email:</label>
      <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <label>Mobile Number:</label>
      <input type="text" name="mobileNumber" value={phone} onChange={e => setPhone(e.target.value)} />
      <button>Update</button>
      <button className='deleteButton' onClick={handleDelete}>Delete</button>
    </form>
);
};

export default EditUserForm;
