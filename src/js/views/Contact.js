import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Image } from "cloudinary-react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { NavBar } from "../component/NavBar";

const Container = styled.div`
	width: 90%;
	margin: ${props => (props.noMargin ? "0 auto" : "20px auto")};
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	background-color: ${props => (props.backColor ? "#bd6194" : "none")};
`;
const ContainerContact = styled.div`
	width: 90%;
	margin: 20px auto;
	display: flex;
	@media (max-width: 767px) {
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}
`;
const ContainerIn = styled.div`
	width: ${props => (props.form ? "65%" : "35%")};
	@media (max-width: 767px) {
		width: ${props => (props.form ? "100%" : "100%")};
	}
`;
const Logo = styled(Image)`
	width: ${props => (props.size ? "70%" : "270px")};
	margin: 15px 0;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 200px;
	display: ${props => (props.showplay ? "inline-block" : "none")};
	@media (max-width: 767px) {
		display: ${props => (props.responsive_showplay ? "inline-block" : "none")};
	}
`;
const Header = styled.h3`
	text-align: center;
	margin: 20px 0;
`;
const FormStyled = styled(Form)`
	border: 1px solid #eee;
	padding: 10px;
`;
const Divider = styled.div`
	height: 2px;
	background-color: #eee;
	margin: 0 auto;
	width: 90%;
`;
const ButtonStyled = styled(Button)`
	font-size: 15px;
	background-color: #342b53;
	border-color: #342b53;
	color: white;
	margin: 15px 0;
	padding: 6px 3px;
	:hover,
	:active {
		background-color: #b498ab !important;
		border-color: #b498ab !important;
		box-shadow: none !important;
	}
`;
const Text = styled.p`
	margin-top: ${props => (props.top ? "66px" : "")};
	font-weight: ${props => (props.top ? "bold" : "")};
	@media (max-width: 767px) {
		margin-top: ${props => (props.top ? "0px" : "")};
	}
`;
const ImagesVarious = styled(Image)`
	height: ${props => (props.brand ? "150px" : "60px")};
	margin: 5px;
	@media (max-width: 400px) {
		height: ${props => (props.brand ? "100px" : "60px")};
	}
`;

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<NavBar />
			<Container backColor>
				<Logo showplay size cloudName={store.cloudinary.userName} publicId="Regardee/regardee-orange" />
				<Logo
					responsive_showplay
					cloudName={store.cloudinary.userName}
					publicId="Regardee/regardee-simple-orange"
				/>
				<Header>CONTACTO</Header>
			</Container>
			<Divider />
			<ContainerContact>
				<ContainerIn form>
					<Header>Contáctanos</Header>
					<FormStyled>
						<Form.Group controlId="formBasicName">
							<Form.Label>Nombre</Form.Label>
							<Form.Control type="text" placeholder="Ingrese su nombre" />
						</Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Ingrese su email" />
						</Form.Group>

						<Form.Group controlId="formBasicMessage">
							<Form.Label>Mensaje</Form.Label>
							<Form.Control as="textarea" rows="4" />
						</Form.Group>
						<Container>
							<ButtonStyled type="submit">SUBMIT</ButtonStyled>
						</Container>
					</FormStyled>
				</ContainerIn>
				<ContainerIn>
					<Container>
						<Text top>Contacto</Text>
						<Text>email@gmail.com</Text>
						<Text>0000-00-00</Text>
					</Container>
				</ContainerIn>
			</ContainerContact>
			<Divider />
			<Container>
				<Header>Empieza tu experiencia regardée</Header>
				<ImagesVarious cloudName={store.cloudinary.userName} publicId="Regardee/the-box" />
				<Link onClick={() => window.scrollTo(0, 0)} to="/Signin">
					<ButtonStyled>REGÍSTRATE</ButtonStyled>
				</Link>
			</Container>
		</div>
	);
};
