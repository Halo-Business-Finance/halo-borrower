import Head from "next/head";
import styled from "styled-components";

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
`;

export default function Form() {
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

				<form className="formstyle" action="information2">
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
									id="firstname"
									className="textbox"
									type="text"
									autoComplete="fdba"
									placeholder="XXX-XXX-XXXX"
									required
								/>
							</div>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-addess">
								<label htmlFor="fname" className="formlabel">
									Business of Employer
								</label>
								<input
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
									id="suite"
									className="textbox"
									type="text"
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
									id="state"
									className="textbox"
									type="text"
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
									id="dob"
									className="textbox"
									type="text"
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
									id="website"
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
									id="zipcode"
									className="textbox"
									type="text"
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
									id="tele"
									className="textbox"
									type="text"
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
									<input type="radio" name="radio" />

									<label>Yes</label>
								</div>

								<div className="radio-container">
									<input type="radio" name="radio" />
									<label>No</label>
								</div>
							</div>
						</div>
						<div className="form-row">
							<label htmlFor="inform" className="formlabel">
								Do you have a will?
							</label>
							<div className="radio-two">
								<div className="radio-third">
									<div className="">
										<input type="radio" name="radio" />
										<label>Yes</label>
									</div>

									<div className="">
										<input type="radio" name="radio" />
										<label>No</label>
									</div>
								</div>

								<div className="form-group form-website">
									<label htmlFor="fname" className="formlabel">
										Name of executor
									</label>
									<input
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
