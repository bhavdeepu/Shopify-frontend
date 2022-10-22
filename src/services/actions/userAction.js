import {APIALL} from '../../api-service';
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  IS_USER_LOGIN,

  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,

} from "../types";


const fetchUserDetails = (token) => async (dispatch) => {

    if (token)
    {
      try
      {
        dispatch({ type: USER_LIST_REQUEST })
        const data = await APIALL.currentUser(token); 
        dispatch({ type: USER_LIST_SUCCESS, payload: data.data })
      }
      catch(error)
      {
        dispatch({ type: USER_LIST_FAIL, payload: error.message })
      }
    }
    else{
      dispatch({ type: IS_USER_LOGIN})
    }
};

const fetchUserLogin = (data) => async (dispatch) => {

try
      {
        dispatch({ type: USER_LOGIN_REQUEST })
        const data = await APIALL.loginUser(data)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data.data })
        localStorage.setItem('userInfo', JSON.stringify(data)
      }
      catch(error)
      {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.message })
      }

}


export { fetchUserDetails, fetchUserLogin }