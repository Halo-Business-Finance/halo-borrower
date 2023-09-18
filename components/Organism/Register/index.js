import { CaretRightOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Collapse, notification } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as Yup from 'yup';
import { API } from "../../../utils/api";
import { AuthContext } from "../../../utils/AuthContext";

const Hero = styled.div`
	padding: 40px 20% 40px 20%;
	font-family: Mulish;
	/* background-color: aliceblue; */
max-width:1440px;
width: 90%;
margin: 0 auto;
	.formstyle {
		background: aliceblue;
		border-radius: 10px;
		padding: 0px 0px 20px 0px;
	}

	.Form-design {
		padding: 30px 30px 20px 30px;
	}

	.textbox {
		width: 100%;
		padding: 12px;
	}

	.form-row-one {
		column-count: 2;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 15px;
	}

	.form-head {
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	.heading {
		font-weight: 700;
		color: #333333;
	}

	.formlabel {
		color: #5c5c5c;
		font-weight: 600;
		font-size: 16px;
		line-height: 10px;
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

	.req {
		color: red;
		font-size: 14px;
	}

	.register-description {
		font-size: 16px;
		color: #5c5c5c;
		font-weight: 400;
	}

	.reg-head {
		width: 100%;
		background-color: #1b46b0;
		color: #fff;
		text-align: center;
		padding: 20px;
		line-height: 10px;
		margin-bottom: 20px;
	}

	.reg-head h3{
		color: #fff;
		font-weight: 700;
		font-size: 22px;
	}

	.reg-head p {
		color: rgba(255, 255, 255,0.8);
		font-size: 16px;
		line-height: 10px;
	}

	.login-link {
		color: blue;
		font-weight: 700;
	}

	.register-description {
		text-align: center;
	}

	.error {
		text-align: center;
	}

	.error p {
		color: #dc3545;
		padding: 10px 10px 10px 10px;
	}
	& .StyledError {
		color: red;
	}
	& .ant-btn-primary{
		min-width: 230px;
	}
`;

const { Panel } = Collapse;
export default function RegistrationForm() {
	const { setFormState, setUsername, setPhone } = useContext(AuthContext);
	const router = useRouter();
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.required('Email is required')
			.email('Invalid Email'),
		phone: Yup.string()
			.required('Phone is required')
			.min(10, 'Phone must be at least 10 characters'),
		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters'),
		confirmPassword: Yup.string()
			.required('Confirm Password is required')
			.oneOf([Yup.ref('password')], 'Passwords must match')

	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema)
	});
	const [isLoading, setIsLoading] = useState(false);




	const onSubmitForm = async (data) => {

		setIsLoading(true)
		
		// router.push({pathname:"/log",query:{email:data?.email}})

		try {
			const response = await API.post("/api/registration/borrower-registration", data);
			const isError = await response?.isError;
			if (isError) {
				notification.error({ message: "Error occured", description: response?.reason || "The email or phone verification has failed." })
			}
			else {
				setUsername(data?.email);
				setPhone(data?.phone);
				setFormState(1);
			}

		} catch (error) {
			notification.error({ message: 'Error Occured', description: error?.data?.reason || 'Something went wrong. Please try again' })
		}
		setIsLoading(false)
	}


	return (
		<>
			<Head>
				<title>Registration</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<section className="reg-head">
					<h3>Soft Credit Check – No Upfront Fees – Apply Online</h3>
					<p>Get started now by filling out the loan application below</p>
				</section>

				<form
					className="formstyle"
					action="/login"
					onSubmit={handleSubmit(onSubmitForm)}
				>
					<section className="Form-design">
						<div className="form-head">
							<h2 className="heading">Continue to Enroll</h2>
						</div>



						<div className="form-row-one">
							<div className="form-group">
								<label htmlFor="emal" className="formlabel ">
									Email Address<sup className="req">*</sup>
								</label>
								<input
									{...register("email"

									)}
									id="email"
									className="textbox"
									type="email"
									autoComplete="fname"
									placeholder="Enter your email address"

								/>
								{errors.email && (
									<span className="StyledError" role="alert">{errors.email.message}</span>
								)}
							</div>
							<div className="form-group">
								<label htmlFor="phone" className="formlabel">
									Phone<sup className="req">*</sup>
								</label>
								<input
									{...register("phone"
									)}
									id="phone"
									className="textbox"
									type="tel"
									autoComplete="fdba"
									placeholder="Enter your phone number"

								/>
								{errors.phone && (
									<span className="StyledError" role="alert">{errors.phone.message}</span>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="password" className="formlabel">
									Password<sup className="req">*</sup>
								</label>
								<input
									{...register("password"
									)}
									id="password"
									className="textbox"
									type="password"
									autoComplete="fdba"
									placeholder="Enter your password"

								/>
								{errors.password && (
									<span className="StyledError" role="alert">{errors.password.message}</span>
								)}
							</div>


							<div className="form-group">
								<label htmlFor="password" className="formlabel">
									Confirm Password<sup className="req">*</sup>
								</label>
								<input
									{...register("confirmPassword"
									)}
									id="password"
									className="textbox"
									type="password"
									autoComplete="fdba"
									placeholder="Retype your password"
								/>
								{errors.confirmPassword && (
									<span className="StyledError" role="alert">{errors.confirmPassword.message}</span>
								)}
							</div>
						</div>
<br/>
						<Collapse 
						expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
						border={false}>
							<Panel header="Read Our Terms and Policies">
								<p >

									By clicking “Register”, you consent to receive calls and emails
									from Halo Business Finance. You acknowledge that no purchase of
									credit or services is contingent upon such consent and acknowledge
									that you have read Halo Business Finance’s Application Agreement
									and Halo Business Finance’s privacy policy. You understand that
									you may opt-out of receiving communications of your choice from
									Halo Business Finance as provided in the privacy policy.
								</p>
							</Panel>
						</Collapse>

					</section>

					<div className="form-row-button">
						<Button  loading={isLoading} size="large" htmlType="submit" type="primary">Register</Button>
							</div>

					<p className="register-description">
						{" "}
						Already have an account?{" "}
						<Link href="/login"><a className="login-link">
							Login
						</a>
						</Link>
					</p>
				</form>
			</Hero>
		</>
	);
}