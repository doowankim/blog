import axios from 'axios';
import {
    GET_POST,
    POST_LOADING,
    GET_ERRORS,
    CLEAR_CURRENT_POST
} from "./types";

// GET Current post
export const getCurrentPost = () => dispatch => {
    dispatch(setPostLoading());
    axios
        .get('/posts/total')
        .then(res =>
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_POST,
                payload: {}
            })
        );
};

// Post Loading
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    };
};

// Clear Post
export const clearCurrentPost = () => {
    return {
        type: CLEAR_CURRENT_POST
    };
};

// history
export const createPost = (postData, history) => dispatch => {
    axios
        .post('/posts', postData)
        .then(res => history.push('/readBBS'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};