import React from "react";
import "../styles/SideBar.css";
import SideBarSection from "./SideBarSection";
import LeftIcon from "../icons/slide-left.svg";
import Home from "../icons/Category.svg";
import Section1 from "../icons/Group 15792.svg";
import Section2 from "../icons/Group 15799.svg";
import Section3 from "../icons/Group 15794.svg";
import Section4 from "../icons/Group 15758.svg";
import Section5 from "../icons/Group 15802.svg";
import Section6 from "../icons/Group 15803.svg";
import Section7 from "../icons/Group 15804.svg";
import Section8 from "../icons/Group 15805.svg";
import Documentation from "../icons/Group (1).svg";
import Globe from "../icons/globe.svg";
import Moon from "../icons/moon.svg";
const SideBar = () => {
	return (
		<div className="sideBar">
			<div className="sideBar_heading">
				<div style={{ display: "flex", alignItems: "center" }}>
					<div className="sideBar_heading_name">N</div>
					<div className="sideBar_heading_title">Name</div>
				</div>
				<div className="sideBar_heading_icon"></div>
				<img src={LeftIcon} alt="img"/>
			</div>
			<SideBarSection Icon={Home} desc="Home" />
			<SideBarSection Icon={Section1} desc="Section 1" />
			<SideBarSection Icon={Section2} desc="Section 2" />
			<SideBarSection Icon={Section3} desc="Section 3" />
			<SideBarSection Icon={Section4} desc="Section 4" />
			<SideBarSection Icon={Section5} desc="Section" />
			<SideBarSection Icon={Section6} desc="Section 6" />
			<SideBarSection Icon={Section7} desc="Section 7" />
			<SideBarSection Icon={Section8} desc="Section 8" highlight />
			<SideBarSection Icon={Documentation} desc="Documentation" />
			<div className="sideBar_bottomContainer">
				<div className="upperBottom">
					<div className="upperBottom_first">
						<div>N</div>
						<h3>$0.90</h3>
					</div>
					<div className="upperBottom_last">Buy $XYZ</div>
				</div>
				<div className="lowerBottom">
					<img src={Globe} alt="globe" />
					<div className="lowerBottom_last">
						<img src={Moon} alt="dark" />
						<div className="blankBG"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
