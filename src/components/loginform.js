import React from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import PropTypes from 'prop-types'
import './../css/loginform.less'

const FormItem = Form.Item;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: false,
            loginErrorMsg: '',
            loading: false,
            login: false,
            userInfo: {}
        }
    }

    handleSubmit = (e) => {
        console.log("LoginForm@handleSubmit");
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);

                /* for test: login succeed then goto Home page. */
                this.context.setLoginInfo(true, 'username=admin&password=12345', 'aaa');
                this.props.history.push({ pathname: '/home' });
            }
        });
    };

    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                            placeholder="password" />
                    )}
                </FormItem>
                <FormItem style={{ marginBottom: 0, textAlign: "right" }}>
                    <Button style={{ marginRight: 10 }}>Sign up</Button>
                    <Button type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                        {
                            this.state.loading ?
                                'login...' :
                                this.state.login ? `welcome，${this.state.userInfo['userName']}` : 'Sign In'
                        }
                    </Button>
                </FormItem>
                {
                    this.state.loginError &&
                    <span style={{ color: '#f5222d' }}>{this.state.loginErrorMsg}</span>
                }
            </Form>
        )
    }
}

LoginForm.contextTypes = {
    setLoginInfo: PropTypes.func,
    loginType: PropTypes.number
};

export default withRouter(Form.create()(LoginForm));