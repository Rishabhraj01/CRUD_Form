import React from "react";
import "./UserTable.css";
import { useDispatch, useSelector } from "react-redux";
import { userdetailActions } from "../store/userDetailsSlice";
import { updateActions } from "../store/updateSlice";

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userdetail.submittedData);
  const updater = useSelector((state) => state.update.updateWindow);

  const handleDelete = (id) => {
    dispatch(userdetailActions.deleteUser(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateActions.updater(true));
    dispatch(userdetailActions.updateForm(id));
  };

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Age</th>
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td className="button-div">
              <button
                onClick={() => handleUpdate(user.id)}
                type="button"
                className="btn btn-success"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
