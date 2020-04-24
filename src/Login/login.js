import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "./login.css"

class Login extends Component {
    state = {
        userName: '',
        password: '',
        error: false
    }

    componentDidMount() {
        console.log("in login")
        let isuser = sessionStorage.getItem("user");
        if (isuser) {
            this.props.history.push("/home")
        }
    }

    handleClick = () => {
        if (this.state.userName && this.state.password &&
            this.state.userName.trim()!='' && this.state.password.trim()!='') {
            sessionStorage.setItem("user", this.state.userName);
            this.props.history.push("/home");
        } else {
            this.setState({ error: true })
        }
    }

    render() {
        let errormsg = "";
        if (this.state.error) {
            errormsg = "Please Enter Username and Password";
        }
        return (
            <div className="topdiv">
                <div style={{ margin: "1em" }}>
                    <div className="row">
                        <label style={{ width: '45%' }}>Username: </label>
                        <InputText value={this.state.userName}
                            onChange={(e) => this.setState({ userName: e.target.value })} />
                    </div>
                </div>
                <div style={{ margin: "1em" }}>
                    <div className="row">
                        <label style={{ width: '45%' }}>Password: </label>
                        <InputText value={this.state.password} type="password"
                            onChange={(e) => this.setState({ password: e.target.value })} /><br />
                    </div>
                </div>

                <div className="btn">
                    <Button label="Login" onClick={this.handleClick} /><br />
                    <p style={{ color: "red" }}>{errormsg}</p>
                </div>

                
            </div>
        )
    }
}

export default Login