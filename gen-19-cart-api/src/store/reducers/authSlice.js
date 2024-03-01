import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: "",
    user: {
        id: "",
        email: "",
        role: "",
        username: ""
    }
};

function getStoredAuthState() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token) {
        return {
            token: token,
            user: JSON.parse(user)
        }
    }
    return { ...initialState };
}


const authSlice = createSlice({
    name: "authentication",
    initialState: getStoredAuthState(),
    reducers: {
        setToken(state, { payload }) {
            state.token = payload;
            localStorage.setItem("token", payload);
        },
        setUser(state, { payload }) {
            const { id, email, role, username } = payload;
            state.user.id = id;
            state.user.email = email;
            state.user.role = role;
            state.user.username = username;
            localStorage.setItem("user", JSON.stringify({ id, email, role, username }));
        },
        resetAuthData() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return { ...initialState };
        }
    }
});

export const { setToken, setUser, resetAuthData } = authSlice.actions

export default authSlice.reducer;