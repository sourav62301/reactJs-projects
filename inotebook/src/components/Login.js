import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", passward: "" });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        passward: credentials.passward,
      }),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      // Save the auth token and redirect
      localStorage.setItem('token', json.authToken)
      props.showAlert('Logged in successfully', 'success')
      navigate('/');
    }
    else{
      props.showAlert('Invalid Credentials', 'danger')
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-2">
    <h2 className="mb-3">Login to continue to iNoteBook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputpassward1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passward"
            name="passward"
            value={credentials.passward}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
