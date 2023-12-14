import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isLogin: false,
    IdToken: localStorage.getItem('idToken'),
    showForgotModal: false,
    isLoginPage : false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            localStorage.setItem('idToken',action.payload);
            state.isLogin = true;
            state.IdToken = action.payload
        },
        logout(state) {
            localStorage.removeItem('idToken')
             state.isLogin = false;
             state.IdToken = null
        },
        loginPage(state) {
            state.isLoginPage = true
        },
        signupPage(state) {
            state.isLoginPage = false
        },
        showForgotPasswordModal(state) {
            state.showForgotModal = true
        },
        hideForgotPasswordModal(state) {
            state.showForgotModal = false
        }
    }
})
export const authActions = authSlice.actions
export default authSlice