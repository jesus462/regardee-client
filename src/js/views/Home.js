import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Image, Video } from "cloudinary-react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { NavBar } from "../component/NavBar";

const Container = styled.div`
	width: 90%;
	margin: ${props => (props.bigMargin ? "40px auto" : "20px auto")};
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	background-color: ${props => (props.backColor ? "#bd6194" : "none")};
`;
const ContainerIn = styled.div`
	width: 95%;
	margin: ${props => (props.brand ? "10px" : "15px")};
	display: flex;
	flex-wrap: ${props => (props.brand ? "wrap" : "nowrap")};
	justify-content: ${props => (props.brand ? "space-evenly" : "center")};
`;
const ContainerInfoMedia = styled(Container)`
	height: 370px;
	width: 50%;
	margin: 0;
	@media (max-width: 767px) {
		height: auto;
		width: 100%;
		display: ${props => (props.info ? "flex" : "none")};
	}
`;
const Logo = styled(Image)`
	width: ${props => (props.size ? "70%" : "270px")};
	margin: 15px 0;
	display: ${props => (props.showplay ? "inline-block" : "none")};
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 200px;
	@media (max-width: 767px) {
		display: ${props => (props.responsive_showplay ? "inline-block" : "none")};
	}
`;
const ImagesVarious = styled(Image)`
	height: ${props => (props.brand ? "150px" : "60px")};
	margin: 5px;
	@media (max-width: 400px) {
		height: ${props => (props.brand ? "100px" : "60px")};
	}
`;
const VideoStyled = styled(Video)`
	width: 80%;
	border-radius: 50px;
`;
const Header = styled.h3`
	text-align: center;
`;
const Resume = styled.p`
	text-align: justify;
	font-size: 18px;
	padding: 5px;
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
const Divider = styled.div`
	height: 2px;
	background-color: #eee;
	margin: 0 auto;
	width: 90%;
`;

export const Home = () => {
	const { store, actions } = useContext(Context);

	let brandsMapped = store.cloudinary.brands.map(brand => {
		return <ImagesVarious brand key={brand} cloudName={store.cloudinary.userName} publicId={brand} />;
	});

	return (
		<div>
			<NavBar />
			<Container backColor>
				<Logo showplay size cloudName={store.cloudinary.userName} publicId="Regardee/regardee-color" />
				<Logo
					responsive_showplay
					cloudName={store.cloudinary.userName}
					publicId="Regardee/regardee-simple-purple"
				/>
				<Header>Empieza una nueva experiencia de compra</Header>
				<ImagesVarious cloudName={store.cloudinary.userName} publicId="Regardee/the-box" />
				<Link onClick={() => window.scrollTo(0, 0)} to="/Signin">
					<ButtonStyled>REGÍSTRATE</ButtonStyled>
				</Link>
			</Container>
			<Divider />
			<Container>
				<Header>
					<i>Thinking in the box is also thinking out of it</i>
				</Header>
			</Container>
			<Divider />
			<Container>
				<ContainerIn>
					<ContainerInfoMedia info>
						<Header>Qué es Regardée</Header>
						<Resume>
							Es una experiencia de compra que te permite conocer marcas y productos en la comodidad de tu
							casa.
							<br />
							<br />
							Recibe una selección de piezas en función de tu estilo, tallas y presupuesto. Te puedes
							probar todo, elegir y pagar lo que te gusta, y devolver lo que no va contigo.
						</Resume>
						<Link onClick={() => window.scrollTo(0, 0)} to="/Us">
							<ButtonStyled>MÁS INFO</ButtonStyled>
						</Link>
					</ContainerInfoMedia>
					<ContainerInfoMedia backColor>
						<VideoStyled controls publicId="Regardee/making-box" cloudName={store.cloudinary.userName} />
					</ContainerInfoMedia>
				</ContainerIn>
				<ContainerIn>
					<ContainerInfoMedia backColor>
						<Logo
							showplay
							responsive_showplay
							cloudName={store.cloudinary.userName}
							publicId="Regardee/regardee-simple-purple"
						/>
					</ContainerInfoMedia>
					<ContainerInfoMedia info>
						<Header>Cómo funciona</Header>
						<Resume>
							Para participar, llena tu formulario de estilos y preferencias. Armamos The Box de acuerdo a
							tus respuestas. Está atent@ al calendario de rondas, paga el fee de participación y recibe
							tu box.
						</Resume>
						<Link onClick={() => window.scrollTo(0, 0)} to="/Us">
							<ButtonStyled>MÁS INFO</ButtonStyled>
						</Link>
					</ContainerInfoMedia>
				</ContainerIn>
			</Container>
			<Divider />
			<Container bigMargin>
				<Header>Participan en The Box...</Header>
				<ContainerIn brand>{brandsMapped}</ContainerIn>
			</Container>
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
