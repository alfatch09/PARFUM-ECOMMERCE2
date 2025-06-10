import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserManager = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul className="list-group">
        {users.map(user => (
          <li key={user._id} className="list-group-item">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManager;