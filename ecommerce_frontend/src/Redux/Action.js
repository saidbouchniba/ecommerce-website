import { FINALEREGISTER, GETCURRENT, LOGIN, LOGOUT, REGISTER } from "./Actiontype";
import axios from "axios"
export const register = (data) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:5000/users/confirmation", data)
        console.log(res);
        dispatch({ type: REGISTER, payload: res.data })

    } catch (error) {
        console.log(error);

    }
}
export const registerconfirmation = (token, navigate) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:5000/users/register/" + token)
        console.log(res);
        dispatch({ type: FINALEREGISTER, payload: res.data })
        setTimeout(() => { navigate("/") }, 2000)
    } catch (error) {
        console.log(error);

    }
}
export const getcurrent = () => async (dispatch) => {
    const config = { headers: { token: localStorage.getItem("token") } }

    try {
        const res = await axios.get("http://localhost:5000/users/getcurrent", config)
        console.log(res);
        dispatch({ type: GETCURRENT, payload: res.data })
    } catch (error) {
        console.log(error);

    }
}
export const logout=()=>{
    localStorage.removeItem("token")
    return {type:LOGOUT}
}
export const login = (data,navigate) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:5000/users/signin", data)
        console.log(res);
        dispatch({ type: LOGIN, payload: res.data })
        setTimeout(() => { navigate("/") }, 2000)
    } catch (error) {
        console.log(error);

    }
}




