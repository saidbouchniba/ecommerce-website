import { FINALEREGISTER, GETCURRENT, LOGIN, LOGOUT, REGISTER } from "./Actiontype"

const initialState = { msg: "", user: null }

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case REGISTER:
            return { ...state, msg: payload.msg }
        case FINALEREGISTER:
            localStorage.setItem("token", payload.token)
            return { ...state, user: payload.user }
        case GETCURRENT:
            return { ...state, user: payload.user }
        case LOGOUT:
            return { ...state, user: null }
        case LOGIN:
            localStorage.setItem("token", payload.token)
            return { ...state, user: payload.user }
        default:
            return state
    }
}