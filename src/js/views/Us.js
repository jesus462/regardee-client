import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Image, Video } from "cloudinary-react";
import { Button } from "react-bootstrap";
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
const ContainerProcess = styled.div`
	width: 90%;
	margin: 20px auto;
	display: flex;
	justify-content: space-evenly;
	@media (max-width: 767px) {
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}
`;
const ContainerServices = styled.div`
	width: 90%;
	margin: 20px auto;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
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
const SmallLogo = styled(Image)`
	width: 150px;
`;
const Text = styled.p`
	width: 20%;
	margin: 5px;
	padding: 5px;
	text-align: justify;
	border-radius: 25px;
	background-color: #f3ab4d;
	@media (max-width: 767px) {
		width: 60%;
	}
	@media (max-width: 420px) {
		width: 90%;
	}
`;
const Resume = styled.p`
	text-align: justify;
	padding: 5px;
	margin-bottom: 0;
`;
const Header = styled.h3`
	text-align: center;
	margin: 20px 0;
`;
const Title = styled.h4`
	text-align: center;
	font-weight: bold;
	padding: ${props => (props.services ? "5px" : "0")};
	border-radius: ${props => (props.services ? "15px" : "")};
	background-color: ${props => (props.services ? "#bd6194" : "")};
	text-decoration: ${props => (props.important ? "underline" : "none")};
`;
const Divider = styled.div`
	height: 2px;
	background-color: #eee;
	margin: 0 auto;
	width: 90%;
`;
const VideoStyled = styled(Video)`
	width: 90%;
	margin: 15px 0;
	border-radius: 50px;
`;
const ButtonStyled = styled(Button)`
	font-size: 15px;
	background-color: #342b53;
	border-color: #342b53;
	color: white;
	margin: 15px 0;
	padding: 6px 3px;
`;
const ImagesVarious = styled(Image)`
	height: ${props => (props.brand ? "150px" : "60px")};
	margin: 5px;
	@media (max-width: 400px) {
		height: ${props => (props.brand ? "100px" : "60px")};
	}
`;

export const Us = () => {
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
				<Header>NOSOTROS</Header>
			</Container>
			<Divider />
			<ContainerProcess>
				<Container>
					<Resume>
						Ofrecemos una experiencia personalizada y distinta de comprar ropa, donde la ropa que quieres va
						a ti. Puedes probar, ver, sentir las prendas desde la comodidad de tu hogar para después decidir
						si deseas adquirirlas. En nuestro proyecto habrá algunas piezas de ropa importada con las
						características de valor por dinero que espera el cliente, pero siempre priorizando lo Hecho en
						Venezuela.
						<br />
						<br />
						Cada cierto tiempo se llevarán a cabo rondas, que te serán notificadas con antelación. Si
						decides participar, deberás llenar un formulario, por medio del cual determinamos tu estilo,
						tallas y presupuesto. Con esta información procedemos a realizar la selección para tu caja y su
						posterior entrega.
					</Resume>
				</Container>
				<Container noMargin>
					<Container noMargin backColor>
						<VideoStyled
							controls
							publicId="Regardee/video-evento-tiny"
							cloudName={store.cloudinary.userName}
						/>
					</Container>
				</Container>
			</ContainerProcess>
			<Divider />
			<Header>Timeline de la ronda</Header>
			<ContainerProcess>
				<Text>
					<Title>Día N-10</Title>
					Crea tu ‘perfil’ y provee tu información sobre tallas y presupuesto
				</Text>
				<Text>
					<Title>Día N-7</Title>
					Revisamos tus respuestas sobre estilo, tallas y presupuesto, y armamos una caja con items y marcas
					que se ajusten a tus expectativas
				</Text>
				<Text>
					<Title important>Día N</Title>
					Recibes ‘The Box’ y tienes 2 días para probarte los ítems
				</Text>
				<Text>
					<Title>Día N+2</Title>
					Retiramos ‘The Box’ con los ítems que no quieres y recibimos el pago por los ítems que mantienes
				</Text>
				<Text>
					<Title>Día N+3</Title>
					Haces una encuesta donde evalúas lo que recibiste
				</Text>
			</ContainerProcess>
			<Divider />
			<Header>Nuestros Servicios</Header>
			<Container noMargin>
				<SmallLogo cloudName={store.cloudinary.userName} publicId="Regardee/regardee-simple-purple" />
			</Container>
			<ContainerServices>
				<Title services>Atención Personalizada</Title>
				<Title services>Manejo de Marca</Title>
				<Title services>Imagen Personal</Title>
				<Title services>Consultoría</Title>
				<Title services>Eventos</Title>
				<Title services>Estrategia</Title>
			</ContainerServices>
			<Divider />
			<Container>
				<Header>Empieza tu experiencia regardée</Header>
				<ImagesVarious cloudName={store.cloudinary.userName} publicId="Regardee/the-box" />
				<ButtonStyled>REGÍSTRATE</ButtonStyled>
			</Container>
		</div>
	);
};
