import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignUpForm} from "./SignUpForm";
import "../sign-in/menuStyle.css"


export const SignUpModal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button onClick={handleShow} size='lg' className='inMenuButton mt-2' >
				Sign-Up
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header className='backgroundColor'>
					<Modal.Title>Sign-Up</Modal.Title>
				</Modal.Header>
				<Modal.Body className='backgroundColor'>
					<SignUpForm/>
				</Modal.Body>
				<Modal.Footer className='backgroundColor'>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
