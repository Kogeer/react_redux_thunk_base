import jsonPlaceholder from "../apis/jsonPlaceholder";
// import {memoize} from "lodash";
import {map, uniq} from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('About to fetch posts!');
    await dispatch(fetchPosts());
    const uniqueUserIds = uniq(map(getState().posts, 'userId'));

    uniqueUserIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = (id) => async dispatch =>  {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data});
};

// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });
