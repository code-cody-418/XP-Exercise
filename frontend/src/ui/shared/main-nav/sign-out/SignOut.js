import React from 'react'
import {useDispatch} from 'react-redux'
import {Button} from "react-bootstrap"
import {httpConfig} from "../../utils/http-config";
import {getAuth} from "../../../../store/authSlice";

export const SignOut = () => {
	const dispatch = useDispatch()
	const signOut = () => {
		httpConfig.get('/apis/sign-out/').then(reply => {

			if (reply.status === 200) {
				window.localStorage.removeItem('authorization')
				dispatch(getAuth(null))
				window.location = '/'

			}
		})
	}

	return(
		<>
			{/*<div className="sign-out-dropdown">*/}
				<Button variant="outline-primary" onClick={signOut} size='sm' className='mx-2 star-button'>
					Sign Out&nbsp;&nbsp;
				</Button>
			{/*</div>*/}
		</>
	)
}
