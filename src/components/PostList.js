import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchPostsAndUsers} from "../actions";
import UserHeader from "./UserHeader";

const PostList = ({posts, fetchPostsAndUsers}) => {
    useEffect(() => {
        fetchPostsAndUsers();
    }, [fetchPostsAndUsers]);

    return <div className="container">
        <h3>Post list</h3>
        <ul className="list-group">
            {posts.map(post => {
                return <li className="list-group-item" key={post.id}>
                    <h5>Title: {post.title}</h5>
                    <div className="list-inline-item">{post.body}</div>
                    <UserHeader userId={post.userId}/>
                </li>
            })}
        </ul>
    </div>
};

const mapStateToProps = state => {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);
