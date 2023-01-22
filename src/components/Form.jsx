import React, { useState } from "react";

const Form = (props) => {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    console.log(useState())

    return (
        <>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) }/>
          </div>
          <div>
            <label htmlFor="lastName:">Last Name:</label>
            <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value) }/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={ (e) => setEmail(e.target.value) }/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) }/>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) }/>
          </div>
          <h1>Your form data</h1>
          <p>First Name: { firstName }</p>
          <p>Last Name: { lastName }</p>
          <p>Email: { email }</p>
          <p>Password: { password }</p>
          <p>Confirm Password: { confirmPassword }</p>
        </>
    );
}
 
export default Form;