import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <ul>
        Users!
        <li>{users ? users.map((user) => <p>{user.username}</p>) : <p></p>}</li>
        <li>{<p>{users.length}</p>}</li>
      </ul>
    </div>
  );
}

export default Users;
