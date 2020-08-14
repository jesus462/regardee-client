import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Image } from "cloudinary-react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarStyled = styled(Navbar)`
	background-color: white;
	box-shadow: 0 5px 3px rgba(0, 0, 0, 0.11);
	width: 100%;
	position: sticky;
	top: 0;
	padding: 0 16px;

	.navbar-brand {
		margin: 0;
	}
`;
const Logo = styled(Image)`
	height: 50px;
	display: ${props => (props.showplay ? "inline-block" : "none")};
	@media (max-width: 767px) {
		display: ${props => (props.responsive_showplay ? "inline-block" : "none")};
	}
`;
const StyledButton = styled(Button)`
	width: ${props => (props.size ? "132px" : "auto")};
	font-size: 15px;
	background-color: #342b53;
	border-color: #342b53;
	color: white;
	margin: 0 5px;
	padding: 6px 3px;
	display: ${props => (props.showplay ? "inline-block" : "none")};
	@media (max-width: 767px) {
		display: ${props => (props.responsive_showplay ? "inline-block" : "none")};
	}
`;
const ContainerLinks = styled(Nav)`
	display: flex;
	justify-content: center;
	width: 100%;
`;
const LinkStyled = styled(Link)`
	text-decoration: none;
	font-size: 15px;
	padding: 2px 5px;
	font-weight: 600;
	color: black;
	text-align: center;
`;

export const NavBar = () => {
	const { store, actions } = useContext(Context);

	return (
		<NavbarStyled expand="md">
			<Navbar.Brand>
				<Link to="/">
					<Logo showplay cloudName={store.cloudinary.userName} publicId="Regardee/regardee-dark-purple" />
				</Link>
				<Link to="/">
					<Logo
						responsive_showplay
						cloudName={store.cloudinary.userName}
						publicId="Regardee/regardee-simple-dark-purple"
					/>
				</Link>
			</Navbar.Brand>
			<Nav>
				<StyledButton responsive_showplay>INICIAR SESIÓN</StyledButton>
			</Nav>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<ContainerLinks>
					<LinkStyled to="/Us">NOSOTROS</LinkStyled>
					<LinkStyled to="/Brands">MARCAS</LinkStyled>
					<LinkStyled to="/Contact">CONTACTO</LinkStyled>
				</ContainerLinks>
				<Nav>
					<LinkStyled>
						<StyledButton showplay responsive_showplay>
							REGÍSTRATE
						</StyledButton>
					</LinkStyled>
					<LinkStyled>
						<StyledButton size showplay>
							INICIAR SESIÓN
						</StyledButton>
					</LinkStyled>
				</Nav>
			</Navbar.Collapse>
		</NavbarStyled>
	);
};
