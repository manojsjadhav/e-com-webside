import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const initialobj = {
    fullname: "",
    email: "",
    password: "",
    gender: "",
    birthdate: "",
    technology: "javascript",
    about: "",
    condition: "",
    color: "",
  };
  const [userInfo, setUserInfo] = useState(initialobj);
  const [user, setUser] = useState([]);
  const changeHandler = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setUser(userInfo);
    setUserInfo(initialobj);
  };
  console.log(user);
  return (
    <form className="register-page">
      <h1>Sign Up</h1>
      <div>
        <label>Fullname</label>
        <input
          type="text"
          name="fullname"
          value={userInfo.fullname}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={userInfo.password} 
          onChange={changeHandler} 
        />
      </div>
      <div>
        <label>BirthDate</label>
        <input
          type="date"
          name="birthdate"
          value={userInfo.birthdate}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Gender : </label>
        <input
          type="radio"
          value="male"
          name="gender"
          checked={userInfo.gender === "male"}
          onChange={changeHandler}
        />
        <span>Male</span>
        <input
          type="radio"
          value="female"
          name="gender"
          checked={userInfo.gender === "female"}
          onChange={changeHandler}
        />
        <span>Female</span>
        <input
          type="radio"
          value="other"
          name="gender"
          checked={userInfo.gender === "other"}
          onChange={changeHandler}
        />
        <span>Other</span>
      </div>
      <div>
        <label>Technology</label>
        <select
          name="technology"
          value={userInfo.technology}
          onChange={changeHandler}
        >
          <option value="Javascript">Javascript</option>
          <option value="Java">Java</option>
          <option value="Dotnet">Dotnet</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
        </select>
        <div>
          <label>About</label>
          <textarea
            name="about"
            value={userInfo.about}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="condition"
            value={userInfo.condition}
            onChange={changeHandler}
          />
          <p> I accepted the terms and conditions</p>
        </div>
        <div>
          <label>color</label>
          <input
            type="color"
            name="color"
            value={userInfo.color}
            onChange={changeHandler}
          />
        </div>
        <button onClick={submitHandler}>Register</button>
        <div>
          Already hava an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
