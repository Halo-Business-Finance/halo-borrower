import styled from "styled-components";
import cookie from "js-cookie";
import Borrower from "./borrower-apply";
import LoansApplications from "./loanallapplications";


const Hero = styled.div`
	font-family: Mulish;

	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
`;

const Heading = styled.h1`
	color: #000;
	font-size: 10rem;
	font-weight: 900;
`;

export default function Home() {
	if (
		typeof cookie.get("access_token") == "undefined" ||
		typeof cookie.get("userName") == "undefined" ||
		typeof cookie.get("email") == "undefined" ||
		typeof cookie.get("userid") == "undefined"
	) {
		return <Borrower />
	}  else {
		return (
			<>
				<LoansApplications />
			</>
		);
	}
}
