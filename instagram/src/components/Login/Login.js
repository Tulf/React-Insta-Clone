import React, { Component } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import "./Login.css";
import styled from 'styled-components'

const LoginForm = styled.form`
width: 500px;
background: orange;
border-radius: 6px;
margin: 10px auto;
padding: 10px 25px;
`



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    //notice both input fields use the name field for password and username and are both calling the same function
    //changing the state allows us to reuse function handlers.
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <LoginForm>
        <FormGroup className = "one">
          <Input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        <div className = "button row">
          <Button  className="butt" onClick={this.handleLoginSubmit}>
            Log In
          </Button>
        </div>
        </FormGroup>
      </LoginForm>
    );
  }
}

export default Login;
