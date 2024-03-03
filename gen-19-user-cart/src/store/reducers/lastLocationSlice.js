import { createSlice } from "@reduxjs/toolkit";


const initialState = [""];

function getStoderLastUrl() {
    const lastUrl = localStorage.getItem('lastUrl');

    if (lastUrl) {
        return lastUrl;
    }
    return [...initialState];
}


const authSlice = createSlice({
    name: "authentication",
    initialState: getStoderLastUrl(),
    reducers: {
        setLastUrl(state, { payload }) {
            state.push(payload);
            console.log(payload);
            localStorage.setItem("lastUrl", state);
        },
    }
});

export const { setLastUrl } = authSlice.actions

export default authSlice.reducer;