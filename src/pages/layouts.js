import React from "react";
import PropTypes from "prop-types";
import { Layout, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import "../css/layouts.css";
import Menus from "./page-menu";
import PageSider from './page-sider';
import logo from '../logo.svg';
import { ROUTES } from "../config/routes.config";
import _ from "lodash";

const routes = _.clone(ROUTES);

class Layouts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: ""
        }
    }

    updateActive = (key) => {
        let index = _.findIndex(routes, route => route.key === key);
        this.setState({ current: routes[index]['text'] });
    };

    render() {

        const { Header, Content, Footer } = Layout;

        return (
            <Router>
                <Layout className="layout">
                    <Header>
                        <div>
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                        <Menus
                            updateActive={this.updateActive}
                        />
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Index</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.current}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{ padding: '24px 0', background: '#fff', height: '80vh' }}>
                            <PageSider />
                            <Content style={{ padding: '0 24px', minHeight: 280, height: '100%' }}>
                                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                                    {routes.map((route) => <Route exact key={route.key} path={route.link} component={route.component} />)}
                                </div>
                            </Content>
                        </Layout>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Kevin Lee.</Footer>
                </Layout>
            </Router>
        );
    }

}

Layouts.contextTypes = {
    login: PropTypes.bool,
    userInfo: PropTypes.object,
    setLoginInfo: PropTypes.func
};

export default Layouts;