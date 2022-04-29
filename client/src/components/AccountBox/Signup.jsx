import React from "react";
import {Link, useHistory} from 'react-router-dom';
import { useContext, useState } from "react";
import {AuthContext} from '../../contexts/AuthContext'

const Signup = (props) => {

  const {registerUser} = useContext(AuthContext)

  const history = useHistory()

  const [registerForm, setRegisterForm] = useState({
    username:'',
    password:'',
    confirmPassword:''
  })
  
  const {username, password, confirmPassword} = registerForm

  const onChangeRegisterForm = event => setRegisterForm({...registerForm, [event.target.name]: event.target.value})

  const register = async event => {
		event.preventDefault()

		if (password !== confirmPassword) {
	
			return
		}

		try {
			const registerData = await registerUser(registerForm)
			if (registerData.success) {
          history.push('/');
			}
		} catch (error) {
			console.log(error)
		}
	}




  return (
    <>
      <form className="account__box__body" onSubmit={register}>
        <input
          type="text"
          placeholder="User name"
          name="username"
          value={username}
          required
          onChange={onChangeRegisterForm}
        />
        <p className="account__box__body__message"></p>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          required
          onChange={onChangeRegisterForm}
        />
        <p className="account__box__body__message"></p>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={onChangeRegisterForm}
        />
        <p className="account__box__body__message">{}</p>
      <div className="account__box__footer">
        <button type="submit">Sign up</button>
      </div>
      </form>
    </>
  );
};

export default Signup;
