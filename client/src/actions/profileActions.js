import axios from 'axios';
import {
    GET_PROFILE,
    PROFILE_LOADING,
    GET_ERRORS,
    CLEAR_CURRENT_PROFILE,
    SET_CURRENT_USER,
    GET_PROFILES
} from "./types";

// GET Current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get('/profile')
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: {}
            })
        );
};

// Profile Loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};

// Clear Profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};

// history: 화면 이동
export const createProfile = (profileData, history) => dispatch => {
    axios
        .post('/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Delete account & profile
export const deleteAccount = () => dispatch => {
    //window.confirm()
    if(window.confirm('Are you sure? This cannot be undone!!')) {
        axios
            .delete('/profile')
            .then(res =>
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            )
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
    }
};

// Add experience
export const addExperience = (expData, history) => dispatch => {
    axios
        .post('/profile/experience', expData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Add education
export const addEducation = (eduData, history) => dispatch => {
    axios
        .post('/profile/education', eduData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Delete Experience
export const deleteExperience = id => dispatch => {
    if(window.confirm('Are you sure? This cannot be undone!!')) {
        axios
            .delete(`/profile/experience/${id}`)
            .then(res =>
                dispatch({
                    type: GET_PROFILE,
                    payload: res.data
                })
            )
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
    }
};

// Delete Education
export const deleteEducation = id => dispatch => {
    if(window.confirm('Are you sure? This cannot be undone!!')) {
        axios
            .delete(`/profile/education/${id}`)
            .then(res =>
                dispatch({
                    type: GET_PROFILE,
                    payload: res.data
                })
            )
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
    }
};

// Get All profiles
export const getProfiles = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get('/profile/total')
        .then(res =>
            dispatch({
                type: GET_PROFILES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: null
            })
        )
};

// Get Profile by handle
export const getProfileByHandle = handle => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get(`/profile/handle/${handle}`)
        .then(res =>
            dispatch({
                type: GET_PROFILES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: null
            })
        );
};

// Get Profile by profile_id
export const getProfileById = id => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get(`/profile/${id}`)
        .then(res =>
            dispatch({
                type: GET_PROFILES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: null
            })
        );
};