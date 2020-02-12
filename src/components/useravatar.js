import React from "react";
import { Popover, Avatar } from "antd";
import PropTypes from "prop-types";

class UserAvatar extends React.Component {

    render() {

        return (
            <Popover placement="bottomRight"
                content={
                    <span style={{ cursor: 'pointer' }}>Logout</span>}
                trigger="click">
                <Avatar className="avatar" icon="user" style={{
                    backgroundColor: '#87d068',
                    cursor: 'pointer'
                }}
                >
                    {this.context.userInfo['display']}
                </Avatar>
            </Popover>
        );
    }

}

UserAvatar.contextTypes = {
    userInfo: PropTypes.object
};

export default UserAvatar;