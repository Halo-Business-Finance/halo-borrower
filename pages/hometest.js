import Head from "next/head";
import styled from "styled-components";
import NavMenu from "../components/NavMenu";

const Hero = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #e5e5e5;
	padding: 20px;
	font-family: Mulish;

	.formstyle {
		width: 60%;
		background: #f8f8ff;
		border-radius: 10px;
	}
	.Form-design {
		padding: 30px 30px 30px 30px;
	}

	.form-head {
		display: inline-block;
		width: 100%;
	}

	.active {
		color: #1b46b0;
		display: inline;
	}

	.heading {
		display: inline;
		float: left;
	}

	.heading-step {
		display: inline;
		color: #adadad;
		display: inline;
		float: right;
	}

	input[type="submit"] {
		background-color: #f3ba17;
		border: none;
		color: black;
		font-weight: 600;
		border-radius: 8px;
		padding: 14px 30px;
		text-decoration: none;
		cursor: pointer;
	}

	.form-row-button {
		width: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		margin: 20px 0px 20px 0px;
	}

	.scrollimage {
		min-width: 100%;
	}
`;

export default function Form() {
	return (
		<>
			<NavMenu />

			<Head>
				<title>Form</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				
			</Hero>
		</>
	);
}
