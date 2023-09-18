import { Button, Form, Input, notification, Steps } from "antd";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useContext, useState } from "react";
import styled from "styled-components";
import { API } from "../../../utils/api";
import { AuthContext } from "../../../utils/AuthContext";
const Hero = styled.div`
	/* padding: 40px 20% 40px 20%; */
	max-width: 1440px;
	padding: 24px;
	margin:0 auto;
	width: 90%;
	margin: 24px;
	background: white;
	font-family: Mulish;
	& .ant-input{
		width: 100%;
	}
	& .ant-form-item{
		max-width: 450px;
		width: 100%;
		margin: 0 auto;
		margin-bottom: 12px;
	}
	
	& .container{
		background: aliceblue;
		max-width: 800px;
		width: 100%;
		margin: 0 auto;
		margin-top:30px;
	}

	.verify {
		/* width: 60%; */
		color: #5c5c5c;
		font-weight: 600;
		font-size: 16px;
		white-space:break-spaces;
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

	
	.form-head {
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	.heading {
		font-weight: 700;
		color: #333333;
	}

& .btn-resend{
	display:flex;
	justify-content: center;
	align-items: center;
	margin-top:-15px;
	font-size: 16px;
	margin-bottom: 20px;
	& button{
		font-size: 16px;
		padding: 0px !important;
	}
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
	 & .btn-wrap {
		 display: flex;
		 justify-content: center;
		 margin-top:20px;
		 & .ant-btn-primary {
			 min-width: 150px;
			 font-weight: bold;
			 height: 42px !important;
		 }
	 }
`;
const { Step } = Steps;
export default function VerifyEmailForm() {
	const { setFormState, username, phone } = useContext(AuthContext)
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmitForm = async (values) => {
		setIsLoading(true)
		const formData = new FormData();
		formData.append("code", Number(values.code));
		formData.append("grant_type", "password");
		formData.append("username", router?.query?.email)
		const refactoredData = {
			code: values?.code,
			email: username,
		}
		try {
			const response = await API.post("/api/registration/verify-email", refactoredData);
			const isError = await response?.isError;
			if (isError) {
				notification.error({ message: "Email verification unsuccessful", description: response?.reason || "The email or phone verification has failed." })
			}
			else {
				router.push(`/register?phone=${phone}`);
				setFormState(2);
			}

		} catch (error) {
			notification.error({ message: 'Error Occured', description: error?.data?.reason || 'Something went wrong. Please try again' })

		}
		setIsLoading(false)


	}
	const ResendVerificationEmail = async () => {
		try {
			await API.post("/api/registration/send-email-verification", {
				"email": username != null ? username : router.query.email
			}, {
				headers: {
					Authorization: "Bearer " + sessionStorage.getItem('token')
				}
			})
			notification.success({ message: "Success", description: "Verification email resend successfully" })
		} catch (error) {
			(error)
			notification.error({ message: "Error occured", description: error?.data?.reason || "Something went wrong,please try again later" })
		}
	}
	return (
		<>
			<Head>
				<title>Registration</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				{/* <Steps>
					<Step status="finish" title="Login" icon={<UserOutlined />} />
					<Step status="finish" title="Email Verification" icon={<SolutionOutlined />} />
					<Step status="process" title="Phone Verification" icon={<PhoneOutlined />} />

				</Steps> */}
				<div className="container">

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
									{`A verification code has been send to your email.\n This code will be valid for 15 minutes.`}
								</p>
							</center>
						</div>


						<Form onFinish={onSubmitForm} layout='vertical'>
							<Form.Item name="code" rules={[{ required: true, message: 'Please Fill In' }]} label='Verification Code'>
								<Input size="large" placeholder="Enter code here" />

							</Form.Item>
							<div className="btn-wrap">
								<Button loading={isLoading} htmlType="submit" type="primary" size="large">
									Verify
								</Button>
							</div>
						</Form>

					</section>
					<div className="btn-resend">
						Didn't receive code?<Button type="link" onClick={ResendVerificationEmail}>Resend Verification Code</Button>
					</div>
				</div>


			</Hero>
		</>
	);
}
