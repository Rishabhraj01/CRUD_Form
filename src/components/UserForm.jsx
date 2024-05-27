import React from "react";
import "./UserForm.css";
import { useDispatch, useSelector } from "react-redux";
import { userdetailActions } from "../store/userDetailsSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userdetail.formData);

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(userDetail.password)) {
      alert(
        "Password must contain uppercase letters, lowercase letters, numbers, and special characters."
      );
      return;
    }
    dispatch(userdetailActions.submitForm());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(userdetailActions.setField({ field: name, value }));
  };

  const handleReset = () => {
    dispatch(userdetailActions.resetForm(true));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={userDetail.firstname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={userDetail.lastname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userDetail.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={userDetail.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userDetail.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={userDetail.age}
          onChange={handleChange}
        />
      </div>
      <div className="button-div">
        <button type="submit" className="btn btn-primary button">
          Create User
        </button>

        <button
          onClick={handleReset}
          type="button"
          className="btn btn-secondary button"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default UserForm;
