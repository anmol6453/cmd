import React, { useState } from 'react';

const AddUserForm = () => {
    const api_url = "http://localhost:5000/add";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

    const onFormSubmit = async(e) => {
        e.preventDefault();
        try{
            const user = {username, email, phone, dob};
            const response = await fetch(api_url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            console.log(response);
            window.location = '/';
        }
        catch(err){
            console.error(err.message);
        }
    }

  return (
    <>
    <form
      onSubmit={onFormSubmit}
    >
      <h2>Add New User</h2>
      <label>Name:</label>
      <input type="text" name="name" value={username} onChange={e => setUsername(e.target.value)} />
      <label>Email:</label>
      <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <label>Mobile Number:</label>
      <input type="text" name="mobileNumber" value={phone} onChange={e => setPhone(e.target.value)} />
      <label>Date of Birth:</label>
      <input type="date" name="dob" value={dob} onChange={e => setDob(e.target.value)} />
      <button className='.addUserButton'>Add</button>
    </form>
    </>
  );
};

export default AddUserForm;
