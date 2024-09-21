import React, { useState } from "react";
const Signup = () => {
  const [user, setUser] = useState({});
  function input(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newUser = { [name]: value };
    setUser({ ...user, ...newUser });
  }
  function registr(e) {
    e.preventDefault();
    console.log(user);
    
  }
  return (
    <>
      <form
        action=""
        method="post"
        onSubmit={(e) => registr(e)}
        className="col-6 mx-auto p-5 shadow my-5"
      >
        <h2 className="text-center ">Register Form</h2>
        <div className="mt-4">
          <input
            type="text"
            onChange={(e) => input(e)}
            className="form-control"
            name="username"
            placeholder="Username"
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            onChange={(e) => input(e)}
            className="form-control"
            name="password"
            placeholder="Create Password"
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            onChange={(e) => input(e)}
            className="form-control"
            name="confirm-password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            onChange={(e) => input(e)}
            className="form-control"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            onChange={(e) => input(e)}
            className="form-control"
            name="mobile"
            placeholder="Mobile"
          />
        </div>
        
        <button className="btn btn-outline-success my-4">Signup</button>
      </form>
    </>
  );

};



export default Signup;
