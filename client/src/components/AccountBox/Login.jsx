import React from "react";
import { useState, useContext } from "react";
import {AuthContext} from '../../contexts/AuthContext'

const Login = (props) => {

  const {loginUser} = useContext(AuthContext)

  const [loginForm, setLoginForm] = useState({
    username:'',
    password:''
  })
  
  const {username, password} = loginForm

  const onChangeLoginForm = event => setLoginForm({...loginForm, [event.target.name]: event.target.value})

  const login = async event =>{
    event.preventDefault()
    try{
        const loginData = await loginUser(loginForm)
        console.log(loginData)

    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={login}>
          <div className="account__box__body">
            <input
              type="text"
              placeholder="User name"
              name="username"
              value={username}
              required
              onChange={onChangeLoginForm}
            />
            <p className="account__box__body__message"></p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              required
              onChange={onChangeLoginForm}
            />
            <p className="account__box__body__message"></p>
          </div>
          <div className="account__box__footer">
            <button type="submit">Log In</button>
            <a href="#a">Forgotten password?</a>
          </div>
      </form>
    </>
  );
};

export default Login;
