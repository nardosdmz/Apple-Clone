// import { useState } from 'react'
import React from "react";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";

import { Routes, Route } from "react-router-dom";

import Iphone from "./components/pages/Iphones/Iphone";
import Four04 from "./components/pages/Four04/Four04";
import SharedLayout from "./components/SharedLayout";
import HomePg from "./HomePg";
import Productpage from "./components/pages/Productpage/Productpage";


function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route path="/" element={<HomePg />} />
					<Route path="mac" element={<Iphone />} />
					<Route path="iphone" element={<Iphone />} />

					<Route path="iphone/:productID" element={<Productpage />} />

					<Route path="ipad" element={<Iphone />} />
					<Route path="watch" element={<HomePg />} />
					<Route path="tv" element={<HomePg />} />
					<Route path="Music" element={<HomePg />} />
					<Route path="support" element={<HomePg />} />
					<Route path="*" element={<Four04 />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
