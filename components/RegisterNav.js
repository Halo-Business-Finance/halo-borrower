import React from "react";
import styled from "styled-components";

const RegisterNavStyle = styled.div`
	width: 100%;
	background-color: #1b46b0;
	color: #fff;
	text-align: center;
	padding: 20px;
	line-height: 10px;

	.reg-head p {
		color: rgba(255, 255, 255, 0.7);
		font-size: 16px;
		line-height: 10px;
	}
`;
function RegisterNav() {
	return (
		<RegisterNavStyle>
			<section className="reg-head">
				<h3>Soft Credit Check – No Upfront Fees – Apply Online</h3>
				<p>Get started now by filling out the loan application below</p>
			</section>
		</RegisterNavStyle>
	);
}

export default RegisterNav;
