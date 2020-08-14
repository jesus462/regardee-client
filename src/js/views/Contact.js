import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Image } from "cloudinary-react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { NavBar } from "../component/NavBar";

export const Contact = () => {
	return (
		<div>
			<NavBar />
			<h1>Contact</h1>
		</div>
	);
};
