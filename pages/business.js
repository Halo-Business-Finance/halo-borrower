import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";

const BusinessStyle = styled.div`
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
			.header-one h1 {
				font-weight: 500;
			}
			p {
				font-size: 16px;
				color: #5c5c5c;
				font-weight: bold;
			}
			.header-two {
				h3 {
					font-weight: 500;
				}

				p {
					margin-top: -10px;
					color: #adadad;
				}
			}
		}
	}
	.main-form {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		section {
			display: flex;
			align-items: center;
			.column-one {
				display: flex;
				flex-direction: column;
				gap: 10px;
				margin-right: auto;
			}
			.column-two {
				margin-left: auto;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 2px dashed #ededed;
				border-radius: 8px;
				width: 60%;
				height: 70px;
				label {
					color: #adadad;
				}
			}
			.new-column {
				h6 {
					margin-top: 0;
					font-size: 16px;
					color: #1b46b0;
					text-decoration-line: underline;
				}
			}
		}
	}
	.continue-button {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		input {
			padding: 10px 32px;
			font-size: 16px;
			font-weight: bold;
			background: #f3ba17;
			border-radius: 8px;
			border: none;
		}
		p {
			text-decoration-line: underline;
			cursor: pointer;
		}
	}

	[type="file"] {
		height: 0;
		overflow: hidden;
		width: 0;
	}

	[type="file"] + label {
		border: none;
		border-radius: 5px;
		color: #fff;
		cursor: pointer;
		display: inline-block;
		font-family: "Rubik", sans-serif;
		font-size: inherit;
		font-weight: 500;
		margin-bottom: 1rem;
		outline: none;
		padding: 1rem 50px;
		position: relative;
		transition: all 0.3s;
		vertical-align: middle;
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
				process.env.NEXT_PUBLIC_BASE_URL + "/api/",
			data: {
				
			},
			headers: headers,
		}).then(
			(response) => {
				if (response.data.isSuccess) {
					Router.push("");
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
			<BusinessStyle>
				<Head>
					<title>Business </title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<section className="main-style">
					<header>
						<div className="header-one">
							<h1>Business Tax returns</h1>
							<p>
								In order to understand your business financials, we’ll need to
								analyze two of your most recent business Tax returns.
							</p>
						</div>
						<div className="header-two">
							<h3>Upload at least the last 2 years of business Tax returns</h3>
							<p>
								Include all schedules and statements, We need all pages to give
								an accurate analysis.
							</p>
						</div>
					</header>
					<form onSubmit={handleSubmit(onSubmitForm)}>
						<div className="main-form">
							<section>
								<div className="column-one">
									<label>Business Tax Return 1</label>
									<input type="date" {...register("taxReturnOne")} />
								</div>
								<div className="column-two">
									<input type="file" id="file" {...register("fileOne")} />
									<label htmlFor="file">
										Drag & Drop or click to upload files
									</label>
								</div>
							</section>
							<section>
								<div className="column-one">
									<label>Business Tax Return 2</label>
									<input type="date" {...register("taxReturnTwo")} />
								</div>
								<div className="column-two">
									<input type="file" id="file" {...register("fileTwo")} />
									<label htmlFor="file">
										Drag & Drop or click to upload files
									</label>
								</div>
							</section>
							<section>
								<div className="new-column">
									<h6>Add Another Tax Return</h6>
								</div>
							</section>
						</div>

						<div className="continue-button">
							<input type="submit" id="button" value="Upload to continue" />
							<p>Skip</p>
						</div>
					</form>
				</section>
			</BusinessStyle>
		</>
	);
}
