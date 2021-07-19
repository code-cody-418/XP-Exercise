import {createSlice} from "@reduxjs/toolkit";
import {useGLTF} from "@react-three/drei";



const animationSlice = createSlice( {
    name: "animations",
    initialState: [],
    reducers: {
        getAllAnimations: (animations, action) => {
            return action.payload
        }
    }
})


export const {getAllAnimations} = animationSlice.actions

// export const fetchAllAnimations = () => async dispatch => {
//     // const group = useRef()
//     const { animations } = await useGLTF('/naruto.glb')
//     const { animeActions } = await useAnimations(animations)
//     dispatch(getAllAnimations(animeActions))
//
// }



useGLTF.preload('/naruto.glb')

export default animationSlice.reducer
