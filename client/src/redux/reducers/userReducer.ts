import { createSlice } from '@reduxjs/toolkit';



export const slice = createSlice({
    name:'user',
    initialState: { 
        user: {
            name: '',
            age: 0,
            post: '',
            email: '',
            password: ''
        }
    },
    reducers: {
        setname: (state, action)=>{
            state.user = action.payload;
        }
    }
});

export const {setname} = slice.actions;
export default slice.reducer;