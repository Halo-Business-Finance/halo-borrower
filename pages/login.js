import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import React, { useState } from "react";
import Router from "next/router";
import cookie from "js-cookie";
import Link from "next/link";

const Hero = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #e5e5e5;
	padding: 20px;
	font-family: Mulish;

	.formstyle {
		width: 60%;
		background: #fff;
		border-radius: 10px;
		padding: 0px 20px 20px 20px;
	}
	.Form-design {
		padding: 30px 30px 30px 30px;
	}

	.textbox {
		width: 100%;
		padding: 12px;
	}

	.form-group {
		margin-top: 5%;
	}

	.form-row-one {
		width: 60%;
		margin-top: 5%;
		margin-left: 20%;
	}

	.formlabel {
		color: #5c5c5c;
		font-weight: 600;
		font-size: 16px;
		line-height: 10px;
	}

	.form-head {
		display: inline-block;
		width: 100%;
	}

	.heading {
		text-align: center;
	}

	.heading-step {
		display: inline;
		color: #adadad;
		display: inline;
		float: right;
	}

	.textbox {
		border-radius: 4px;
		border: 2px solid #ededed;
	}

	.textbox ::placeholder {
		color: #adadad;
		opacity: 1;
		font-style: italic;
	}

	.form-gap {
		margin-top: 20px;
	}

	input[type="submit"] {
		background-color: #f3ba17;
		border: none;
		color: #333333;
		font-weight: 700;
		border-radius: 8px;
		padding: 14px 30px;
		text-decoration: none;
		cursor: pointer;
		font-size: 18px;
	}

	.form-row-button {
		width: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
	}
	& .login-description {
		text-align: center;
	}
	& .login-link {
		color: blue;
		font-weight: 700;
	}
`;

export default function Login({ email, userName, access_token, userid }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [aState, setA] = useState();

	const onSubmitForm = async (values) => {
		const params = new URLSearchParams();
		params.append("username", values.username);
		params.append("password", values.password);
		params.append("grant_type", "password");

		const config = {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		};

		let baseurl = process.env.NEXT_PUBLIC_BASE_URL;

		let login = baseurl + "/auth/token";

		console.log(login);

		axios.post(login, params, config).then(
			(response) => {
				if (
					response.data.access_token !== "" ||
					response.data.access_token !== "undefined"
				) {
					try {
						const configo = {
							headers: {
								Accept: "application/json",
								Authorization: "Bearer" + " " + response.data.access_token,
							},
						};

						axios
							.get(
								process.env.NEXT_PUBLIC_BASE_URL +
									"/api/borrower/get-all-loan-requests",
								configo
							)
							.then((resone) => {
								const user_data = resone.data.payload[0];
								cookie.set("id", user_data.id, { expires: 1 / 24 });
								// console.log(response);
								cookie.set("access_token", response.data.access_token, {
									expires: 1 / 24,
								});
								cookie.set("userName", response.data.userName, {
									expires: 1 / 24,
								});
								cookie.set("email", response.data.Email, { expires: 1 / 24 });
								cookie.set("userid", response.data.userId, { expires: 1 / 24 });
								Router.push("/loanallapplications");
							}),
							(error) => {
								setA("Username or Password Incorrect");
								return <div>{aState}</div>;
								console.log(error);
							};
					} catch (err) {
						console.log(err);
					}
				} else {
					console.log(response);
					setA(response);
					return <div>{aState}</div>;
				}
			},
			(error) => {
				setA("Username or Password Incorrect");
				return <div>{aState}</div>;
				console.log(error);
			}
		);
	};

	return (
		<>
			<Head>
				<title>Registration </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<form className="formstyle" onSubmit={handleSubmit(onSubmitForm)}>
					<section className="Form-design">
						<div className="form-head">
							<h2 className="heading">Log In</h2>
						</div>
						<div className="error">
							<p>{aState}</p>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-name">
								<label htmlFor="fname" className="formlabel ">
									Email
								</label>
								<input
									{...register("username", {
										required: "required",
										pattern: {
											value: /\S+@\S+\.\S+/,
											message: "Entered value does not match email format",
										},
									})}
									className="textbox"
									type="text"
									autoComplete="fname"
									placeholder="Enter your email address"
								/>
								{errors.email && (
									<span role="alert">{errors.email.message}</span>
								)}
							</div>
							<div className="form-group form-dba">
								<label htmlFor="fdba" className="formlabel">
									Password
								</label>
								<input
									{...register("password", {
										required: "required",
										minLength: {
											value: 5,
											message: "min length is 5",
										},
									})}
									className="textbox"
									type="password"
									autoComplete="fdba"
									placeholder="Enter your password"
									required
								/>
								{errors.password && (
									<span role="alert">{errors.password.message}</span>
								)}
							</div>
						</div>
					</section>

					<div className="form-row-button">
						<input type="submit" id="button" value="Log In" />
					</div>
					<p className="login-description">
						{" "}
						Don't have an account?{" "}
						<Link href="/registration"><a  className="login-link">
							Register
						</a>
						</Link>
					</p>
				</form>
			</Hero>
		</>
	);
}
