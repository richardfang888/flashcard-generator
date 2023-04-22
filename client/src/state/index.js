import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    studySets: [],
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setStudySets: (state, action) => {
            state.studySets = action.payload.studySets
        },
        setStudySet: (state, action) => {
            const updatedStudySet = state.studySets.map((studySet) => {
                if (studySet.id === action.payload.studySet_id) return action.payload.studySet
                return studySet
            })
            state.studySets = updatedStudySet
        },
    }
})

export const { setMode, setFriends, setLogin, setLogout, setStudySet, setStudySets } = authSlice.actions
export default authSlice.reducer