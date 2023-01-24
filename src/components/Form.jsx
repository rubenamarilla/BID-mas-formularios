import React, { useState } from "react";

const Form = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	
	const [errorFN, setErrorFN] = useState("");
    const handlefirstName = (e) => {
		setFirstName(e.target.value);
		if( e.target.value.length === 1 ) {
			setErrorFN("There must be 2 characters or longer!");
			} else {
				setErrorFN('');
			}
	}

	const [errorLN, setErrorLN] = useState("");
    const handleLastName = (e) => {
		setLastName(e.target.value);
		if( e.target.value.length >= 1 && e.target.value.length < 2 ) {
			setErrorLN("There must be 2 characters or longer!");
			} else {
				setErrorLN('');
			}
	}

	const [errorE, setErrorE] = useState("");
	const handleEmail = (e) => {
		setEmail(e.target.value);
		if(e.target.value.length >= 1 && e.target.value.length < 5 ) {
			setErrorE("There must be 5 characters or longer!");
			} else {
				setErrorE('');
			}
    }

	const [errorP, setErrorP] = useState("")
	const handlePassword = (e) => {
		setPassword(e.target.value);
		if(e.target.value.length >= 1 && e.target.value.length < 8 ) {
			setErrorP("There must be 8 characters or longer!");
			} else {
				setErrorP('');
			}
    }

	const [errorCP, setErrorCP] = useState("")
	const handleConfirmPassword = (e) => {
		console.log(password);
		setConfirmPassword(e.target.value);
		if( password === e.target.value) {
			setErrorCP('');
		} else if (e.target.value.length === 0) {
			setErrorCP("");
		}else {
			setErrorCP("The passwords are not similar!");
		}
    }
	
	return (
		<>
			<div>
				<label htmlFor="firstName">First Name:</label>
				<input type="text" name="firstName" onChange={ handlefirstName }/>
				{
					errorFN ?
						<p style={{color:'red'}}>{ errorFN }</p> :
					''
				}
			</div>
			<div>
				<label htmlFor="lastName:">Last Name:</label>
				<input type="text" name="lastName" onChange={ handleLastName }/>
				{
					errorLN ?
						<p style={{color:'red'}}>{ errorLN }</p> :
					''
				}
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input type="email" name="email" onChange={ handleEmail }/>
				{
					errorE ?
						<p style={{color:'red'}}>{ errorE }</p> :
					''
				}
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input type="password" name="password" onChange={ handlePassword }/>
				{
					errorP ?
						<p style={{color:'red'}}>{ errorP }</p> :
					''
				}
			</div>
			<div>
				<label htmlFor="confirmPassword">Confirm Password:</label>
				<input type="password" name="confirmPassword" onChange={ handleConfirmPassword }/>
				{
					errorCP ?
						<p style={{color:'red'}}>{ errorCP }</p> :
					''
				}
			</div>
		</>
	);
}

export default Form;