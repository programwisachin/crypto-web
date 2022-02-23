import React, { useEffect, useState } from "react";
import "../styles/APISub.css";
import LinkOut from "../icons/Group 15260.svg";
const APISub = () => {
	const [fetchedData, setFetchedData] = useState([]);
	const fetchUrl =
		"https://raw.githubusercontent.com/akshita151199/APIs/main/data";
	useEffect(() => {
		async function fetchApi() {
			const response = await fetch(`${fetchUrl}`);
			const _json = await response.json();
			setFetchedData(_json.data);
		}
		fetchApi();
	}, [fetchUrl]);

	function capitalizeLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	return (
		<div className="apiSub">
			<div className="apiSub_tabs">
				<span>First Tab</span>
				<span>Second Tab</span>
			</div>
			<div className="apiSub_labels">
				<div>Asset</div>
				<div>Amount</div>
				<div>User Account</div>
				<div>Referral Earning</div>
			</div>
			<div className="apiSub_values_parent">
				{fetchedData?.map((data, index) => {
					return (
						<div className="apiSub_values" key={index}>
							<div className="asset">
								<img
									src={`${data?.img}`}
									alt="asset"
									className="asset_img"
								/>
								<span>
									<div className="asset_name">
										{data?.asset}
									</div>
									<div className="asset_desc">
										<span className="asset_type">
											{data?.type}
										</span>
										<span className="asset_chain">
											<img
												src={`${data?.chain?.img}`}
												alt="chain"
												className="asset_chainImg"
											/>
											<span className="asset_chain_name">
												{data?.chain?.name}
											</span>
										</span>
									</div>
								</span>
							</div>
							<div className="amount">
								<div className="amount_value">
									{data?.referral_earnings} BNB
								</div>
								<div className="amount_status">
									{capitalizeLetter(data?.state)}
								</div>
							</div>
							<div className="userAccount">
								{data?.user.slice(0, 5) +
									".." +
									data?.user.slice(data?.user.length - 7)}
							</div>
							<div className="referralEarning">
								<div className="referralEarning_value">
									{data?.referral_earnings}.BNB
								</div>
								<div className="referralEarning_desc">
									View on BSC Scan
									<img
										src={LinkOut}
										alt="link"
										className="linkOut"
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default APISub;
