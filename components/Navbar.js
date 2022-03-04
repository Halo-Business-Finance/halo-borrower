import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import NavMenu from "./NavMenu";
import React, { useContext, useState } from "react";
import cookie from "js-cookie";
import axios from "axios";
import { Button } from "antd";
import { useRouter } from 'next/router';
import { AuthContext } from "../utils/AuthContext";

const Nav = styled.nav`
	height: 70px;
	padding :0px 20px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	background: #001529;

	.logo {
		margin-left: 155px;
	}

	.top-details {
		margin-right: 155px;
	}
`;

const StyledLink = styled.a`
	padding: 0rem 2rem;
`;

const Navbar = (data) => {
	const router = useRouter();
	const { authenticated } = useContext(AuthContext)
	const restricted = ["/login", "/verify"]
	if (
		typeof cookie.get("access_token") !== "undefined" ||
		typeof cookie.get("userName") !== "undefined" ||
		typeof cookie.get("email") !== "undefined" ||
		typeof cookie.get("userid") !== "undefined"
	) {
		// console.log(cookie.get('access_token'));
		var token = cookie.get("access_token");

		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: "Bearer " + token,
			},
		};

		axios
			.get(
				process.env.NEXT_PUBLIC_BASE_URL +
				"/api/borrower/get-all-loan-requests",
				config
			)
			.then(
				(response) => {
					try {
					} catch (err) { }
				},
				(error) => {
					console.log(error);
				}
			);

		var username = cookie.get("userName");

		return (
			<>
				<Nav>
					<div className="logo">
						<StyledLink>
							<Image src={Logo} height={128} width={77} alt="logo" />
						</StyledLink>
					</div>
					<div className="top-details">
						<Link href="/" passHref>
							<StyledLink>Phone</StyledLink>
						</Link>
						<Link href="/" passHref>
							<StyledLink>{username}</StyledLink>
						</Link>
					</div>
				</Nav>
			</>
		);
	} else {
		return (
			<>
				<Nav>
					<div onClick={()=>router.push("/test")} className="logo">
						<StyledLink>
							<img src={"/logo.svg"} alt="logo" />
						</StyledLink>
					</div>
					<div className="top-details">
						{(!authenticated) ? <Button size="large" type="primary" onClick={() => router.push("/login")}>Login</Button> :
							<Button size="large" type="primary" onClick={() => {
								try {
									sessionStorage.removeItem("token");
									router.push("/login")
								} catch (error) {

								}
							}}>Logout</Button>
						}	</div>
				</Nav>
			</>
		);
	}
};

export default Navbar;
