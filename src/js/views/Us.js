import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Image } from "cloudinary-react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { NavBar } from "../component/NavBar";

export const Us = () => {
	return (
		<div>
			<NavBar />
			<h1>Us</h1>
		</div>
	);
};
