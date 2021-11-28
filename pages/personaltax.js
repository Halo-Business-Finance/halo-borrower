import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";


const PersonalStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: Mulish;
	background: #e5e5e5;
	padding: 10px;

	.main-style {
		width: 60%;
		padding: 12px;
		background: #ffffff;
		border-radius: 10px;
		header {
			.header-one {
				h1 {
					font-weight: 700;
				}
				p {
					font-size: 16px;
					color: #adadad;
					font-weight: bold;
				}
			}
			.header-two {
				display: flex;
				flex-direction: column;
				h3 {
					color: #5c5c5c;
				}

				.buttons {
					align-self: center;
					margin-bottom: 30px;
					button {
						background: #ffffff;
						font-size: 16px;
						padding: 10px 15px;
						margin: 0px 15px;
						border: 2px solid #ededed;
						border-radius: 8px;
					}
					.mid-button {
						border: 2px solid #f3ba17;
						border-radius: 8px;
						color: #f3ba17;
					}
				}
			}
		}

		//body section css
		.main-section {
			display: flex;
			flex-direction: column;
			gap: 2rem;
			section {
				display: flex;
				align-items: center;
				border-top: 1px solid #ededed;
				padding-top: 8px;
				.column-one {
					display: flex;
					flex-direction: column;
					gap: 10px;
					margin-right: auto;
					input {
						font-size: 16px;
						padding: 10px 5px;
						border: 1px solid #adadad;
						border-radius: 4px;
					}
					label {
						font-weight: bold;
						color: #5c5c5c;
					}
				}
				.column-two {
					margin-left: auto;
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 8px;
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
				p {
					text-decoration: underline;
				}
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

			font-size: inherit;
			font-weight: 500;
			margin-bottom: 1rem;
			outline: none;
			padding: 1rem 50px;
			position: relative;
			transition: all 0.3s;
			vertical-align: middle;
		}
	}
`;

export default function PersonalForm() {
	const {register, handleSubmit, formState: {errors}} = useForm();
	
	const onSubmitForm = (data) => {
		console.log(data);
	}
	return (
		<>
			<Head>
				<title>Personal Tax</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PersonalStyle>
				<section className="main-style">
				 <form onSubmit={handleSubmit(onSubmitForm)} >
					<div>
						<header>
							<div className="header-one">
								<h1>Personal Tax Returns for Owner 1</h1>
								<p>
									Include all schedules and statements, We need all pages to
									give an accurate analysis.
								</p>
							</div>
							<div className="header-two">
								<h3>What year did John Smith most recently file taxes?</h3>
								<div className="buttons">
									<button>2019</button>
									<button className="mid-button">2018</button>
									<button>Before 2018</button>
								</div>
							</div>
						</header>
						<div className="main-section">
							<section>
								<div className="column-one">
									<label>Business Tax Return 1</label>
									<input type="date" id="business" {...register("taxReturnDateOne")} />
								</div>
								<div className="column-two">
									<img src="/images/upload.png" />
									<input type="file" id="file" {...register("fileOne")} />
									<label>Drag & Drop or click to upload files</label>
								</div>
							</section>
							<section>
								<div className="column-one">
									<label>Business Tax Return 2</label>
									<input type="date" {...register("taxReturnDateTwo")}  />
								</div>
								<div className="column-two">
									<img src="/images/upload.png" />
									<input type="file" {...register("fileTwo")} />
									<label htmlFor="file">Drag & Drop or click to upload files</label>
								</div>
							</section>
							<section>
								<div className="new-column">
									<h6>Add Another Tax Return</h6>
								</div>
							</section>
						</div>
					</div>

					<div className="footer">
						<div className="continue-button">
							<img src="/images/back.png" />
							<input
								type="submit"
								href="form2"
								id="button"
								value="Upload to continue"
							/>
						</div>
						<div className="skip-link">
							<p>Skip</p>
						</div>
					</div>
					</form>
				</section>
			</PersonalStyle>
		</>
	);
}
