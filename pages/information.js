import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import RegisterNav from "../components/RegisterNav";
import axios from "axios";

const Hero = styled.div`
	padding: 40px 5% 40px 5%;

	background: #e5e5e5;
	font-family: Mulish;

	.formstyle {
		margin-left: 20%;
		width: 60%;
		background: #f8f8ff;
		border-radius: 10px;
		padding-bottom: 20px;
	}
	.Form-design {
		padding: 30px 30px 30px 30px;
	}

	.textbox {
		width: 100%;
		padding: 12px;
	}

	.form-row-one {
		column-count: 2;
		width: 100%;
		display: inline-block;
		column-gap: 5%;
	}

	.form-row-two {
		width: 100%;
		display: inline-block;
	}

	.form-row-three {
		column-count: 3;
		width: 100%;
		display: inline-block;
	}

	.form-row-four {
		width: 100%;
		display: inline-block;
	}

	.form-city {
		width: 100%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-addess {
		width: 100%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-phone {
		width: 100%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-state {
		display: inline-block;
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

	.formlabel {
		color: #5c5c5c;
	}

	.textbox {
		border-radius: 4px;
		border: 1px solid #ededed;
	}

	.form-gap {
		margin-top: 20px;
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
	.radio-container {
		padding: 10px 40px;
		background: #ffffff;
		border-radius: 8px;
		label {
			font-weight: 600;
			font-size: 16px;
		}
	}

	.radio-two {
		column-count: 2;
		width: 100%;
		display: block;
		column-gap: 5%;
	}

	.radio-one {
		width: 40%;
		display: flex;
		justify-content: space-between;
		margin-top: 2px;
	}
	.radio-third {
		margin-top: 2px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.meter {
		margin-top: 20px;
		box-sizing: content-box;
		height: 10px;
		position: relative;
		background: #ededed;
		border-radius: 25px;
	}

	.meter > span {
		display: block;
		height: 100%;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		background-color: #1b46b0;
		position: relative;
		overflow: hidden;
	}

	.meter span {
		width: 10%;
	}

	.meter-link {
		float: right;
		font-weight: 500;
		font-size: 14px;
		color: #1b46b0;
		text-decoration: underline;
	}
	.progress-tracker {
		width: 100%;
		display: inline-flex;
		flex-wrap: wrap;
		gap: 2%;
	}

	.progress-form {
		width: 10%;
		// min-height:100px;
		// background-color:red;
	}

	.progress-form {
		font-weight: 700;
		color: #1b46b0;
		font-size: 14px;
	}
	input::-webkit-outer-spin-button,
  	input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function Information() {
	const { register, handleSubmit } = useForm();

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
					Router.push("/");
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
				<title>Personal Information</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<section className="progress-tracker">
					<div className="progress-form">
						<h3>Personal Information</h3>
						<div className="meter pi">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>General Information</h3>
						<div className="meter gi">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>
							Income
							<br />
							Source
						</h3>
						<div className="meter is">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>Contigent Liabilities</h3>
						<div className="meter cl">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>
							Balance
							<br /> Sheet
						</h3>
						<div className="meter bs">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>Schedule of Assets Pledged</h3>
						<div className="meter soap">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>Business Debt Schedule</h3>
						<div className="meter bds">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>Personal Tax Returns(100%)</h3>
						<div className="meter ptr">
							<span></span>
						</div>
					</div>
				</section>
				<br />
				<br />
				<br />
				<br />

				<form
					className="formstyle"
					action="information2"
					onSubmit={handleSubmit(onSubmitForm)}
				>
					<section className="Form-design">
						<div className="form-head">
							<h2 className="heading">Personal Information</h2>
							<h2 className="heading-step">
								<p className="active">Step 1</p> /6
							</h2>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-name">
								<label htmlFor="fname" className="formlabel ">
									Applicant Name
								</label>
								<input
									{...register("applicationname", {
										required: "true",
									})}
									id="firstname"
									className="textbox"
									type="text"
									autoComplete="fname"
									placeholder="Enter Applicant Name"
									required
								/>
							</div>
							<div className="form-group form-dba">
								<label htmlFor="fdba" className="formlabel">
									Business phone
								</label>
								<input
									{...register("businessphone1", {
										required: "true",
									})}
									id="firstname"
									className="textbox"
									type="number"
									autoComplete="fdba"
									placeholder="XXX-XXX-XXXX"
									required
								/>
							</div>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-addess">
								<label htmlFor="fname" className="formlabel">
									Business of Employeer
								</label>
								<input
									{...register("businessofemployeer", {
										required: "true",
									})}
									id="address"
									className="textbox"
									type="text"
									autoComplete="fname"
									placeholder="Enter Applicant Name"
									required
								/>
							</div>
							<div className="form-group form-suite">
								<label htmlFor="fname" className="formlabel">
									Date of Birth
								</label>
								<input
									{...register("dateofbirth1", {
										required: "true",
									})}
									id="suite"
									className="textbox"
									type="date"
									autoComplete="fname"
									placeholder="MM-DD-YYYY"
									required
								/>
							</div>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-city">
								<label htmlFor="fname" className="formlabel">
									Co-Applicant Name
								</label>
								<input
									{...register("co-applicantname", {
										required: "true",
									})}
									id="city"
									className="textbox"
									type="text"
									autoComplete="fname"
									placeholder="Enter Co-Applicant Name"
									required
								/>
							</div>
							<div className="form-group form-bphone">
								<label htmlFor="fname" className="formlabel">
									Business Phone
								</label>
								<input
									{...register("businessphone2", {
										required: "true",
									})}
									id="state"
									className="textbox"
									type="number"
									autoComplete="fname"
									placeholder="XXX-XXX-XXXX"
									required
								/>
							</div>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-zip">
								<label htmlFor="fname" className="formlabel">
									Business of Employeer
								</label>
								<input
									{...register("businesofemployeer")}
									id="employer"
									className="textbox"
									type="text"
									autoComplete="fname"
									placeholder="Enter Applicant Name"
									required
								/>
							</div>
							<div className="form-group form-phone">
								<label htmlFor="fname" className="formlabel">
									Date of Birth
								</label>
								<input
									{...register("dateofbirth2", {
										required: "true",
									})}
									id="dob"
									className="textbox"
									type="date"
									autoComplete="fname"
									placeholder="MM-DD-YYYY"
									required
								/>
							</div>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-website">
								<label htmlFor="fname" className="formlabel">
									Residence Address
								</label>
								<input
									{...register("residenceaddress", {
										required: "true",
									})}
									id="address"
									className="textbox"
									type="text"
									autoComplete="fname"
									placeholder="Enter City"
									required
								/>
							</div>
							<div className="form-group form-city">
								<label htmlFor="fname" className="formlabel">
									City
								</label>
								<input
									{...register("city", {
										required: "true",
									})}
									id="city"
									className="textbox"
									type="text"
									autoComplete="fname"
									placeholder="Enter City"
									required
								/>
							</div>
						</div>

						<div className="form-row-three form-gap">
							<div className="form-group form-state">
								<label htmlFor="fname" className="formlabel">
									State
								</label>
								<input
									{...register("state", {
										required: "true",
									})}
									id="state"
									className="textbox"
									type="text"
									autoComplete="fname"
									placeholder="Select State"
									required
								/>
							</div>
							<div className="form-group form-fzip">
								<label htmlFor="fname" className="formlabel">
									Zip Code
								</label>
								<input
									{...register("zipcode", {
										required: "true",
									})}
									id="zipcode"
									className="textbox"
									type="number"
									autoComplete="fname"
									placeholder="Enter Zip Code"
									required
								/>
							</div>
							<div className="form-group form-tele">
								<label htmlFor="fname" className="formlabel">
									Residence Phone
								</label>
								<input
									{...register("residencephone", {
										required: "true",
									})}
									id="tele"
									className="textbox"
									type="number"
									autoComplete="fname"
									placeholder="(XXX)-(XXX)-(XXXX)"
									required
								/>
							</div>
						</div>
						<div className="form-row form-gap">
							<label htmlFor="fentity" className="formlabel ">
								Partner or officer in any other venture?
							</label>
							<div className="radio-one">
								<div className="radio-container">
									<input
										type="radio"
										name="radio"
										{...register("partner", {
											required: "true",
										})}
									/>

									<label>Yes</label>
								</div>

								<div className="radio-container">
									<input
										type="radio"
										name="radio"
										{...register("partner", {
											required: "true",
										})}
									/>
									<label>No</label>
								</div>
							</div>
						</div>
						<div className="form-row form-gap">
							<label htmlFor="inform" className="formlabel">
								Do you have a will?
							</label>
							<div className="radio-two">
								<div className="radio-third">
									<div className="">
										<input
											type="radio"
											name="radio"
											{...register("will", {
												required: "true",
											})}
										/>
										<label>Yes</label>
									</div>

									<div className="">
										<input
											type="radio"
											name="radio"
											{...register("will", {
												required: "true",
											})}
										/>
										<label>No</label>
									</div>
								</div>

								<div className="form-group form-website">
									<label htmlFor="fname" className="formlabel">
										Name of executor
									</label>
									<input
										{...register("executor", {
											required: "true",
										})}
										id="website"
										className="textbox"
										type="text"
										autoComplete="fname"
										placeholder="(XXX)-(XXX)-(XXXX)"
										required
									/>
								</div>
							</div>
						</div>
					</section>

					<div className="form-row-button">
						<input
							type="submit"
							href="information2"
							id="button"
							value="Continue"
						/>
					</div>
				</form>
			</Hero>
		</>
	);
}
