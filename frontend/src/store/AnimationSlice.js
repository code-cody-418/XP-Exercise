import {createSlice} from "@reduxjs/toolkit";
import {useAnimations, useGLTF} from "@react-three/drei";


const animationSlice = createSlice( {
    name: "animations",
    initialState: [],
    reducers: {
        getAllAnimations: (actions, action) => {
            return action.payload
        }
    }
})

export const {getAllAnimations} = animationSlice.actions

export const fetchAllAnimations = () => async dispatch => {
    const { animations } = useGLTF('/naruto.glb')
    const { actions } = useAnimations(animations)
    dispatch(getAllAnimations(actions))
}

export default animationSlice.reducer
