import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Image } from "cloudinary-react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { NavBar } from "../component/NavBar";

const Container = styled.div`
	width: 90%;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	background-color: ${props => (props.back ? "#bd6194" : "none")};
`;
const ContainerIn = styled.div`
	width: 95%;
	margin: ${props => (props.brand ? "10px" : "15px")};
	display: flex;
	flex-wrap: ${props => (props.brand ? "wrap" : "nowrap")};
	justify-content: ${props => (props.brand ? "space-evenly" : "center")};
`;
const ContainerInfoMedia = styled(Container)`
	height: 420px;
	width: ${props => (props.info ? "40%" : "60%")};
	margin: 0;
	@media (max-width: 985px) {
		width: ${props => (props.info ? "50%" : "50%")};
	}
	@media (max-width: 767px) {
		height: auto;
		width: 100%;
		display: ${props => (props.info ? "flex" : "none")};
	}
`;
const Logo = styled(Image)`
	width: ${props => (props.size ? "90%" : "270px")};
	margin: 15px 0;
	display: ${props => (props.showplay ? "inline-block" : "none")};
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
const Header = styled.h3`
	text-align: center;
`;
const Label = styled.p`
	text-align: center;
	font-size: 12px;
	margin: 0;
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
`;

export const Home = () => {
	const { store, actions } = useContext(Context);

	let brandsMapped = store.cloudinary.brands.map(brand => {
		return <ImagesVarious brand key={brand} cloudName={store.cloudinary.userName} publicId={brand} />;
	});

	return (
		<div>
			<NavBar />
			<Container back>
				<Logo showplay size cloudName={store.cloudinary.userName} publicId="Regardee/regardee-orange" />
				<Logo
					responsive_showplay
					cloudName={store.cloudinary.userName}
					publicId="Regardee/regardee-simple-orange"
				/>
				<Header>Empieza una nueva experiencia de compra</Header>
				<ImagesVarious cloudName={store.cloudinary.userName} publicId="Regardee/the-box" />
				<ButtonStyled>REGÍSTRATE</ButtonStyled>
			</Container>
			<Container>
				<Label>QUE ES REGARDEE</Label>
				<Header>Una manera distinta de comprar ropa</Header>
			</Container>
			<Container>
				<ContainerIn>
					<ContainerInfoMedia info>
						<Label>NOSOTROS</Label>
						<Header>Qué somos</Header>
						<Resume>
							Una experiencia personalizada y distinta de comprar ropa, donde la ropa que quieres va a ti.
							Puedes probar, ver, sentir las prendas desde la comodidad de tu hogar para después decidir
							si deseas adquirirlas. En nuestro proyecto habrá algunas piezas de ropa importada con las
							características de valor por dinero que espera el cliente, pero siempre priorizando lo Hecho
							en Venezuela.
						</Resume>
						<ButtonStyled>MÁS INFORMACIÓN</ButtonStyled>
					</ContainerInfoMedia>
					<ContainerInfoMedia back>
						<Logo
							showplay
							responsive_showplay
							cloudName={store.cloudinary.userName}
							publicId="Regardee/regardee-simple-orange"
						/>
					</ContainerInfoMedia>
				</ContainerIn>
				<ContainerIn>
					<ContainerInfoMedia back>
						<Logo
							showplay
							responsive_showplay
							cloudName={store.cloudinary.userName}
							publicId="Regardee/regardee-simple-orange"
						/>
					</ContainerInfoMedia>
					<ContainerInfoMedia info>
						<Label>NOSOTROS</Label>
						<Header>Cómo lo hacemos</Header>
						<Resume>
							Cada cierto tiempo se llevarán a cabo rondas, que te serán notificadas con antelación. Si
							decides participar, deberás llenar un formulario, por medio del cual determinamos tu estilo,
							tallas y presupuesto. Con esta información procedemos a realizar la selección para tu caja y
							su posterior entrega.
						</Resume>
						<ButtonStyled>MÁS INFORMACIÓN</ButtonStyled>
					</ContainerInfoMedia>
				</ContainerIn>
			</Container>
			<Container>
				<Label>MARCAS</Label>
				<ContainerIn brand>{brandsMapped}</ContainerIn>
			</Container>
			<Container>
				<Header>Empieza tu experiencia regardée</Header>
				<ImagesVarious cloudName={store.cloudinary.userName} publicId="Regardee/the-box" />
				<ButtonStyled>REGÍSTRATE</ButtonStyled>
			</Container>
		</div>
	);
};
