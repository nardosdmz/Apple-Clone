import React from "react";
import Nav from "./Header/Nav";
import NavFooter from "./Footer/NavFooter";
import { Outlet } from "react-router-dom";

function SharedLayout() {
	return (
		<>
			<Nav />
			<Outlet />
			<NavFooter />
		</>
	);
}

export default SharedLayout;
