import React from 'react'
import { useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const navigate = useNavigate();
    const onHandleClick = ({userid}) => navigate(`/edit/${userid}`);

    const changeDate = (isoDateString) => {
      const date = new Date(isoDateString);

      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);

      const formattedDateString = `${day}-${month}-${year}`;
      return formattedDateString;
    }

  return (
    <tr>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{changeDate(user.dob)}</td>
        <td>
            <button onClick={() => onHandleClick(user)}>Edit</button>
        </td>
    </tr>
  )
}

export default User