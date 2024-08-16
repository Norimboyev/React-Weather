import {
    createSlice
} from "@reduxjs/toolkit";
const initialState = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        toggleTheme(state) {
            let current = state.theme == 'light' ? 'dark' : 'light'
            state.theme = current
            localStorage.theme = current
        },
        initTheme(state) {
            let theme = localStorage.theme
            if (theme) {
                state.theme = theme
            }
        }
    },

});

export const {
    toggleTheme,
    initTheme
} = themeSlice.actions

export default themeSlice.reducer;