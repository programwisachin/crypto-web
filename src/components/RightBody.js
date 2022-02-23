import React, { useState } from "react";
import "../styles/RightBody.css";
import ButtonGroupSub from "./ButtonGroupSub";
import DropDownSub from "./DropDownSub";
import LeftArrow from "../icons/arrow-left.svg";
const RightBody = () => {

	const [value, setValue] = useState("ENTER")
	const onChange = (e)=>{
		setValue(e.target.value)
	}
	return (
		<div className="rightBody">
			<DropDownSub />
      <div className="rightBody_heading">
			<img src={LeftArrow} alt="left" />Custom Link
      </div>
      
			<div className="rightBody_inputGroup">
				<div>https://testnet.xyz.xyz/trade?ref=</div>
				<input type="text" name="link" id="link" value={value} onChange={onChange}/>
			</div>
			<ButtonGroupSub />
		</div>
	);
};

export default RightBody;
