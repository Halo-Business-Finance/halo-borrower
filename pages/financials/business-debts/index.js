import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import NavMenu from "../../../components/NavMenu";
import { Button, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const BusinessDebtStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Mulish;
	background: #e5e5e5;
	padding: 10px;

	.main-style {
		width: 52%;
		padding: 12px;
		background: #f8f8ff;
		border-radius: 10px;
		header {
			.header-one {
				display: flex;
				align-items: center;
				h1 {
					margin-right: auto;
				}
				h3 span {
					color: #1b46b0;
				}
			}
			.header-two {
				p {
					margin-top: -10px;
					color: #adadad;
				}
			}
		}
		.debt-form {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1.5rem;
			margin-bottom: 2rem;
			input {
				width: 350px;
				height: 40px;
				font-size: 16px;
				text-align: center;
				padding: 10px 30px;
				background: #ffffff;
				border: 2px solid #ededed;
				box-sizing: border-box;
				border-radius: 8px;
			}
			.button-one {
				border: 2px solid #f3ba17;
				color: #f3ba17;
			}
		}
			.footer {
				.continue-button {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 10px;
					img {
						padding: 14px;
						border: 1px solid #f3ba17;
						border-radius: 8px;
					}

					input {
						padding: 16px 32px;
						font-size: 16px;
						font-weight: bold;
						background: #f3ba17;
						border-radius: 8px;
						border: none;
					}
				}
				.skip-link {
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					p {
						text-decoration: underline;
					}
				}
			}
		
	}
`;

export default function Business() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const headers = {
		"Content-Type": "application/json",
		Authorization: "Bearer" + " " ,
	};

	const onSubmitForm = async (values) => {
	

		axios({
			method: "post",
			url:
				process.env.NEXT_PUBLIC_BASE_URL + "/api/business-finance/add-update-business-debt",
			data: {
				
			
			},
			headers: headers,
		}).then(
			(response) => {
				if (response.data.isSuccess) {
					Router.push("businessfinance_pls");
				} else {
					console.log(response);
				}
			},
			(error) => {
				console.log(error);
			}
		);
	};


	return (
		<>
			<Head>
				<title>Business Debt</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavMenu />
			<BusinessDebtStyle>
				<section className="main-style">
					<header>
						<div className="header-one">
							<h1>Your Business Debts</h1>
							<h3>
								<span> Step 1 </span> / 2
							</h3>
						</div>
						<div className="header-two">
							<p>
								Does your company have any outstanding debts? This includes term
								loans, equipment loans, business credit cards (in the name of
								the business), lines of credit, leases or any other business
								debt.
							</p>
						</div>
					</header>
					<form onSubmit={handleSubmit(onSubmitForm)}>
						<div className="debt-form">
							<input
								type="button"
								className="button-one"
								value="My business has debts"
								{...register("Debts")}
							/>
							<input
								type="button"
								value="My business doesn’t have any debts"
								{...register("noDebts")}
							/>
						</div>
						<div className="footer">
							<div className="continue-button">
                            <Upload >
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
							</div>

							<div className="skip-link">
								<a href="/businessfinance_pls">Skip</a>
							</div>
						</div>
					</form>
				</section>
			</BusinessDebtStyle>
		</>
	);
}
