import types from "./types/userTypes"

export const loadUser = res => ({
    type: types.LOAD_USER_SAGA,
    payload: { res }
})

export const setIsLoadingUser = () => ({
    type: types.IS_LOADING
})
