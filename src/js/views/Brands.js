import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Image } from "cloudinary-react";
import { Navbar, Nav, Button } from "react-bootstrap";
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
const ContainerBrands = styled.div`
	width: 90%;
	margin: 20px auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
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
const Resume = styled.p`
	text-align: justify;
	padding: 5px;
	margin-bottom: 0;
	width: 55%;
	@media (max-width: 700px) {
		width: 80%;
	}
`;
const ImagesVarious = styled(Image)`
	height: ${props => (props.brand ? "250px" : "60px")};
	margin: 5px;
	@media (max-width: 580px) {
		height: ${props => (props.brand ? "180px" : "60px")};
	}
	@media (max-width: 430px) {
		height: ${props => (props.brand ? "120px" : "60px")};
	}

	:hover,
	:active {
		border-radius: 50px;
		opacity: ${props => (props.brand ? "0.95" : "")};
		box-shadow: ${props => (props.brand ? "0 10px 10px rgba(0, 0, 0, 1)" : "")};
	}
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

export const Brands = () => {
	const { store, actions } = useContext(Context);

	let brandsMapped = store.cloudinary.brands.map(brand => {
		return <ImagesVarious brand key={brand} cloudName={store.cloudinary.userName} publicId={brand} />;
	});

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
				<Header>MARCAS ALIADAS</Header>
			</Container>
			<Divider />
			<ContainerBrands>{brandsMapped}</ContainerBrands>
			<Divider />
			<Container>
				<Header>Beneficios de trabajar con nosotros para tu Marca:</Header>
				<Resume>-Llegarás a nuevos consumidores (así no compren al recibir la primera caja)</Resume>
				<Resume>-Obtendrás información de consumidores potenciales</Resume>
				<Resume>-Tendrás ventas a un margen menor que el de tiendas de terceros.</Resume>
				<Link onClick={() => window.scrollTo(0, 0)} to="/Contact">
					<ButtonStyled>CONTÁCTANOS</ButtonStyled>
				</Link>
			</Container>
		</div>
	);
};
