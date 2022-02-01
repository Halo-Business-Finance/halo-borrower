import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import React, { useState } from "react";
import Router from "next/router";
import cookie from "js-cookie";
import Link from "next/link";
import { Button, notification } from "antd";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from "../utils/api";
import router from "next/router";

const Hero = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
		/* background: #e5e5e5; */
	padding: 20px;
	font-family: Mulish;
	margin-top: 50px;

	& .ant-btn-primary {
		min-width: 100%;
	}

	.formstyle {
		box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;

		width: 40%;
		background: #fff;
		border-radius: 10px;
		padding: 0px 20px 20px 20px;
	}
	

	.textbox {
		width: 100%;
		padding: 12px;
	}

	.form-group {
		margin-top: 5%;
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
		padding-top: 30px;
		font-size: 36px;
		font-weight: 700;
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
	& .error{
		color:red;
	}
`;

export default function Login({ email, userName, access_token, userid }) {
	const validationSchema = yup.object().shape({
		username: yup.string()
			.required('Email is required')
			.email('Invalid Email'),

		password: yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters'),


	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "all",
		resolver: yupResolver(validationSchema)
	});
	const[isLoading,setIsLoading] = useState(false);


	const onSubmitForm = async (values) => {
		setIsLoading(true)
const data = {
	"userName": values.username,
	"password": values.password,
  }	
  try {
 await API.post('/auth/request-for-code',data)
 notification.success({message:'Success', description:`Verification Code sent to ${data.userName}`})
 router.push('/2fa')

	  
  } catch (error) {
	  notification.error({message: 'Error Occured', description: error.data.reason})
	  console.log(error.data.reason)
	  
  }	
  setIsLoading(false)

		
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
					

						<div className="form-row-one form-gap">
							<div className="form-name">
								<label htmlFor="fname" className="formlabel ">
									Email
								</label>
								<input
									{...register("username")}
									className="textbox"
									type="text"
									autoComplete="fname"
									placeholder="Enter your email address"
								/>
								{errors.username && (
									<span className="error" role="alert">{errors.username.message}</span>
								)}
							</div>
							<div className="form-group form-dba">
								<label htmlFor="fdba" className="formlabel">
									Password
								</label>
								<input
									{...register("password")}
									className="textbox"
									type="password"
									
									placeholder="Enter your password"
								
								/>
								{errors.password && (
									<span className="error" role="alert">{errors.password.message}</span>
								)}
							</div>
						</div>
					</section>
					<br />
					<div className="form-row-button">
						<Button loading={isLoading} htmlType="submit" size="large" type="primary" >
							Login
						</Button>
					</div>
					<p className="login-description">
						{" "}
						Don't have an account?{" "}
						<Link href="/registration"><a className="login-link">
							Register
						</a>
						</Link>
					</p>
				</form>
			</Hero>
		</>
	);
}