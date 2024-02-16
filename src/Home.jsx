import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<div className="home-container">
			<img
				className="background-image"
				alt=""
				src="src/images/73d457db2a0182b74d60d46b5834a6e2.jpeg"
			/>
			<section className="questions-call-section" />
			<div className="welcome-container">
				<h1 className="welcome-text">
					<span className="welcome-prefix">Welcome to the </span>
					<span className="alumni-hub-text">VSIT Alumni Hub</span>
				</h1>
			</div>
			<img
				className="logo-image"
				loading="eager"
				alt=""
				src="src/images/5a872e4de0e0c89d98e29764f807f843.png"
			/>
			<header className="navigation-bar" />
			<h1 className="alumni-hub-title">Alumni Hub</h1>
			<img
				className="user-icon"
				loading="eager"
				alt=""
				src="src/images/use-icon.png"
			/>
			<div className="button-container">
				<button className="alumni-button">
					<div className="button-background" />
					<img
						className="button-icon"
						alt=""
						src="src/images/right-arrow.svg "
					/>
					<b className="button-text">Alumni</b>
				</button>
			</div>
		</div>
	);
};

export default Home;

// import React from "react";
// import "./Home.css";

// const Home = () => {
// 	return (
// 		<div className="home-container">
// 			{/* Background Image */}
// 			<img
// 				className="background-image"
// 				alt="Background"
// 				src="src/images/73d457db2a0182b74d60d46b5834a6e2.jpeg"
// 			/>
// 			{/* Questions Call Section */}
// 			<section className="questions-call-section" />
// 			{/* Welcome Section */}
// 			<div className="welcome-container">
// 				<h1 className="welcome-text">
// 					<span className="welcome-prefix">Welcome to the </span>
// 					<span className="alumni-hub-text">VSIT Alumni Hub</span>
// 				</h1>
// 			</div>
// 			{/* Logo Image */}
// 			<img
// 				className="logo-image"
// 				loading="eager"
// 				alt="Logo"
// 				src="src/images/5a872e4de0e0c89d98e29764f807f843.png"
// 			/>
// 			{/* Navigation Bar */}
// 			<header className="navigation-bar" />
// 			{/* Alumni Hub Title */}
// 			<h1 className="alumni-hub-title">Alumni Hub</h1>
// 			{/* Content Area Icon */}
// 			<img
// 				className="content-area-icon"
// 				loading="eager"
// 				alt="Content Icon"
// 				src="/vector.svg"
// 			/>
// 			{/* Button Container */}
// 			<div className="button-container">
// 				<button className="alumni-button">
// 					<div className="button-background" />
// 					<img
// 						className="button-icon"
// 						alt="Arrow Icon"
// 						src="src/images/right-arrow.svg "
// 					/>
// 					<b className="button-text">Alumni</b>
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default Home;
