import React from "react";
import {connect} from "react-redux";

const UserHeader = ({user}) => {
    return <div className="list-group-item-success">User header: {user && user.name}</div>;
};

const mapStateToProps = (state, {userId}) => {
    return {user: state.users.find(user => user.id === userId)};
};

export default connect(mapStateToProps)(UserHeader);
