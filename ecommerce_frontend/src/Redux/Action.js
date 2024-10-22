import { ALERTERROR, CLEARERROR, FINALEREGISTER, GETCURRENT, GETPRODUCTS, LOGIN, LOGOUT, REGISTER } from "./Actiontype";
import axios from "axios"
export const alerterror=(msg)=>(dispatch)=>{
const id = Math.random()
dispatch({type:ALERTERROR,payload:{id,msg}})
setTimeout(() => {
    dispatch({type:CLEARERROR,payload:id})
}, 3000);
}
export const register = (data) => async (dispatch) => {
    try {
        const res = await axios.post("https://ecommerce-website-xgub.onrender.com/users/confirmation", data)
        console.log(res);
        dispatch({ type: REGISTER, payload: res.data })

    } catch (error) {
        console.log(error);
        error.response.data.errors.forEach(el => {
            dispatch(alerterror(el.msg))
        });
    }
}
export const registerconfirmation = (token, navigate) => async (dispatch) => {
    try {
        const res = await axios.post("https://ecommerce-website-xgub.onrender.com/users/register/" + token)
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
        const res = await axios.get("https://ecommerce-website-xgub.onrender.com/users/getcurrent", config)
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
        const res = await axios.post("https://ecommerce-website-xgub.onrender.com/users/signin", data)
        console.log(res);
        dispatch({ type: LOGIN, payload: res.data })
        setTimeout(() => { navigate("/") }, 2000)
    } catch (error) {
        console.log(error);
error.response.data.errors.forEach(el => {
    dispatch(alerterror(el.msg))
});
    }
}
export const getproducts = () => async (dispatch) => {

    try {
        const res = await axios.get("https://ecommerce-website-xgub.onrender.com/api/allshirt")
        console.log(res);
        dispatch({ type: GETPRODUCTS, payload: res.data })
    } catch (error) {
        console.log(error);

    }
}
export const updateuser = (data) => async (dispatch) => {
    const config = { headers: { token: localStorage.getItem("token") } }

    try {
        const res = await axios.put("https://ecommerce-website-xgub.onrender.com/users/update",data,config)
        console.log(res);
        dispatch(getcurrent())
    } catch (error) {
        console.log(error);

    }
}
export const newshirt= (data) => async (dispatch) => {
    const config = { headers: { token: localStorage.getItem("token") } }

    try {
        const res = await axios.post("https://ecommerce-website-xgub.onrender.com/api/add",data,config)
        console.log(res);
        dispatch(getproducts())
    } catch (error) {
        console.log(error);

    }
}
export const deleteshirt= (id) => async (dispatch) => {
    const config = { headers: { token: localStorage.getItem("token") } }

    try {
        const res = await axios.delete("https://ecommerce-website-xgub.onrender.com/api/deleteshirt/"+id,config)
        console.log(res);
        dispatch(getproducts())
    } catch (error) {
        console.log(error);

    }
}
export const editshirt= (id,data) => async (dispatch) => {
    const config = { headers: { token: localStorage.getItem("token") } }

    try {
        const res = await axios.put("https://ecommerce-website-xgub.onrender.com/api/update/"+id,data)
        console.log(res);
        dispatch(getproducts())
    } catch (error) {
        console.log(error);

    }
}






