import { Button, Input, Form } from "antd";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

const Hero = styled.div`
	padding: 40px 20% 40px 20%;
	font-family: Mulish;
	background-color: #e5e5e5;

	.verify {
		width: 60%;
		color: #5c5c5c;
		font-weight: 600;
		font-size: 16px;
	}

	.formstyle {
		background: #fff;
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
		justify-content: center;
		align-items: center;
		display: flex;
		width: 100%;
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

	.reg-head {
		width: 100%;
		background-color: #1b46b0;
		color: #fff;
		text-align: center;
		padding: 20px;
		line-height: 10px;
		margin-bottom: 20px;
	}

	.reg-head p {
		color: rgba(255, 255, 255, 0.7);
		font-size: 16px;
		line-height: 10px;
	}
`;

export default function TwoFAForm() {
	const[code,setCode] = useState();
	const onSubmitForm = (values) => {

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

					<section className="Form-design">
						<div className="form-head">
							<h2 className="heading">Two Factor Authentication</h2>
						</div>

						<div>
							<center>
								<img src="/images/mail.png" />
								<p className="verify">
									A verification code has been sand to your email. This code
									will be valid for 15 minutes.
								</p>
							</center>
						</div>

						<div className="form-row-one form-gap">
							<Form onFinish={onSubmitForm} layout='vertical'>
								<Form.Item rules={[{required:true, message:'Please Fill In'}]} label='Verification Code'>
									<Input size="large" placeholder="Enter code here"/>

								</Form.Item>
								<Button htmlType="submit" type="primary" size="large">
							Verify
							</Button>
							</Form>
						</div>
					</section>

		
				
			</Hero>
		</>
	);
}
