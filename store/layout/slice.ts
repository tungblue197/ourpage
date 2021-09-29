import { createSlice } from '@reduxjs/toolkit'

export const INIT_STATE: { page: string} = {
    page: 'home'
}

const slice = createSlice({
    name: 'layout',
    initialState: INIT_STATE,
    reducers: {
        changePage(state, { payload }){
            state.page = payload
        }
    }
})

export const reducer = slice.reducer
export const { changePage } = slice.actions