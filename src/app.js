import React, { Component } from 'react';
import PropTypes from "prop-types";
import './app.css';
import "./css/main.less";
import Layouts from "./pages/layouts";
import PageLogin from "./pages/page-login";
import { LocaleProvider, message } from "antd";

class App extends Component {

    constructor(props) {
        console.log("App.js@constructor");
        console.log(props);
        super(props);
        this.state = {
            login: false,
            userInfo: {},
            token: ''
        }
    }

    componentDidMount() {
        console.log("App.js@componentDidMount");
        console.log(this.state.token);
        console.log(this.state.userInfo);
    }

    getChildContext() {
        return {
            login: this.state.login,
            userInfo: this.state.userInfo,
            token: this.state.token,
            setLoginInfo: this.setLoginInfo
        };
    }

    setLoginInfo = (login, userInfo, token) => {
        console.log('App.js@setLoginInfo');
        console.log(login);
        console.log(userInfo);
        console.log(token);
        localStorage.setItem("markerToken", token);
        this.setState(
            {
                login: login,
                userInfo: userInfo,
                token: token
            }
        );
    };

    render() {
        console.log("App.js@render");
        console.log(this.state.login);
        return (
            <LocaleProvider>
            {
                this.state.login?
                <Layouts
                    setLoginInfo={this.setLoginInfo}
                />
                :
                <PageLogin
                    setLoginInfo={this.setLoginInfo}
                />
            }
            </LocaleProvider>

        );
    }
}

App.childContextTypes = {
    login: PropTypes.bool,
    userInfo: PropTypes.object,
    setLoginInfo: PropTypes.func,
    token: PropTypes.string
};


export default App;
