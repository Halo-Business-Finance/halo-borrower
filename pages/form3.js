import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Mortage from "../components/Mortage";
import Rent from "../components/Rent";
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";

const Hero = styled.div`
	display: flex;
	font-family: Mulish;

	justify-content: center;
	align-items: center;
	background: #e5e5e5;
	padding: 20px;

	.formstyle {
		width: 60%;
		background: #f8f8ff;
		border-radius: 10px;
	}
	.Form-design {
		padding: 30px 30px 30px 30px;
	}

	.textbox {
		width: 100%;
		padding: 12px;
	}

	.radio-four {
		column-count: 4;
		width: 100%;
		display: inline-block;
		column-gap: 5%;
	}

	.radio-two {
		column-count: 2;
		width: 100%;
		display: inline-block;
		column-gap: 5%;
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
		width: 100%;
		display: inline-block;
	}

	.form-row-four {
		width: 100%;
		display: inline-block;
	}

	.form-city {
		width: 40%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-state {
		width: 25%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-zip {
		width: 25%;
		display: inline-block;
	}

	.form-addess {
		width: 60%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-phone {
		width: 40%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-website {
		width: 55%;
		display: inline-block;
	}

	.form-suite {
		width: 35%;
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
		padding: 5px 5px 5px 5px;
		border: 1px solid #ededed;
		border-radius: 4px;
		background-color: white;
	}
	/* 
  .rent {
    display: none;
  }

  .mortgage {
    display: none;
  }

  .check-btn input:checked ~ .hiddendiv {
    display: block;
  }

  .mortgage-click input:checked ~ .mortgage {
    display: block;
  }

  .own-click:checked ~ .mortgage {
    display: none;
  }

  .own-click:checked ~ .rent {
    display: none;
  } */
`;

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [status, setStatus] = useState(0);

	const radioHandler = (status) => {
		setStatus(status);
	};

	const onSubmitForm = async (values) => {
		// console.log(values);

		const headers = {
			"Content-Type": "application/json",
			Authorization: "Bearer" + " " + cookie.get("access_token"),
		};

		let olab = false;
		if (values.olab == "" || values.olab == "false") {
			olab = false;
		} else {
			olab = true;
		}

		axios({
			method: "post",
			url:
				process.env.NEXT_PUBLIC_BASE_URL +
				"/api/borrower/add-business-financials",
			headers: headers,
			data: {
				// "id": "00000000-0000-0000-0000-000000000000",
				annualRevenuw: values.annual,
				monthlyPayrollExpenses: values.payroll,
				monthlyBusinessExpenses: values.expenses,
				dailyAverageBankBalance: values.dailybalance,
				outstandingLoanOrAdvance: true,
				ourstandingAdvancesLoanAmount: values.advanceloan,
				useOfFunds: values.funds,
				loanAmountRequested: values.amount,
				typeOfProperty: values.Own,
				borrowerId: cookie.get("id"),
				mortageInformation: {
					monthlyMoratge: 0,
				},
				rentInformation: {
					monthlyRent: 0,
					landlordName: "string",
					leaseStartDate: "2021-11-22T06:39:28.564Z",
					leaseEndDate: "2021-11-22T06:39:28.564Z",
				},
			},
		}).then(
			(response) => {
				if (response.data.isSuccess) {
					Router.push("/form4");
					// console.log('test');
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
				<title>Financial Information</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<form className="formstyle" onSubmit={handleSubmit(onSubmitForm)}>
					<section className="Form-design">
						<div className="form-head">
							<h2 className="heading">Financial Information</h2>
							<h2 className="heading-step">
								<p className="active">Step 3</p> /3
							</h2>
						</div>

						<div className="form-row form-gap">
							<div className="form-group">
								<label htmlFor="fname" className="formlabel ">
									Annual Business Revenue
								</label>
								<input
									className="textbox"
									type="number"
									autoComplete="fname"
									placeholder="Enter Annual Business Revenue"
									{...register("annual")}
									required
								/>
							</div>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-name">
								<label htmlFor="fname" className="formlabel ">
									Monthly Total Payroll Expenses
								</label>
								<input
									className="textbox"
									type="number"
									autoComplete="fname"
									placeholder="Enter Monthly Total Payroll Expenses"
									{...register("payroll", {
										required: "Required",
									})}
									required
								/>
							</div>
							<div className="form-group form-dba">
								<label htmlFor="fdba" className="formlabel">
									Monthly Total Business Expenses
								</label>
								<input
									className="textbox"
									type="number"
									autoComplete="fdba"
									placeholder="Enter Monthly Total Business Expenses"
									{...register("expenses", {
										required: "Required",
									})}
									required
								/>
							</div>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-name">
								<label htmlFor="fname" className="formlabel ">
									Average Daily Bank Balance
								</label>
								<input
									className="textbox"
									type="number"
									autoComplete="fname"
									placeholder="Enter Average Daily Bank Balance"
									{...register("dailybalance", {
										required: "Required",
									})}
									required
								/>
							</div>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-name">
								<label htmlFor="ffti" className="formlabel">
									Do you have any outstanding loans or advances?
								</label>
								<div className="radio-two">
									<div className="radio-container">
										<input type="radio" name="olab" {...register("loans")} />
										<label>Yes</label>
									</div>

									<div className="radio-container">
										<input type="radio" name="olab" {...register("loans")} />
										<label>No</label>
									</div>
								</div>
							</div>
							<div className="form-group form-dba">
								<label htmlFor="fdba" className="formlabel">
									Outstanding Loan/Advance Balance
								</label>
								<input
									id="firstname"
									className="textbox"
									type="number"
									autoComplete="fdba"
									placeholder="Enter Outstanding Loan/Advance Balance"
									{...register("advanceloan", {
										required: "Required",
									})}
									required
								/>
							</div>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-name">
								<label htmlFor="fname" className="formlabel ">
									Use of Funds
								</label>
								<input
									className="textbox"
									type="text"
									autoComplete="fname"
									placeholder="Enter Use of Funds"
									{...register("funds", {
										required: "Required",
									})}
									required
								/>
							</div>
							<div className="form-group form-dba">
								<label htmlFor="fdba" className="formlabel">
									Loan Amount Requested
								</label>
								<input
									className="textbox"
									type="number"
									autoComplete="fdba"
									placeholder="Enter Loan Amount Requested"
									{...register("amount", {
										required: "Required",
									})}
									required
								/>
							</div>
						</div>

						<div className="form-head">
							<h2 className="heading">Property Details</h2>
						</div>
						<div className="form-group form-name">
							<label htmlFor="ffti" className="formlabel">
								Do you own the business property?
							</label>
							<div className="radio-four">
								<div className="radio-container">
									<input
										type="radio"
										name="radio"
										className="own-click"
										value="0"
										defaultChecked={status === 1}
										onClick={(e) => radioHandler(1)}
									/>
									<label>Own</label>
								</div>

								<div className="radio-container">
									<input
										type="radio"
										name="radio"
										className="mortgage-click"
										value="1"
										defaultChecked={status === 2}
										onClick={(e) => radioHandler(2)}
									/>
									<label>Mortgage</label>
								</div>

								<div className="radio-container">
									<input
										type="radio"
										name="radio"
										className="rent-click"
										value="2"
										defaultChecked={status === 3}
										onClick={(e) => radioHandler(3)}
									/>
									<label>Rent</label>
								</div>
							</div>
						</div>
						{status === 1 && ""}
						{status === 2 && <Mortage />}
						{status === 3 && <Rent />}
					</section>

					<div className="form-row-button">
						<input type="submit" id="button" value="Continue" />
					</div>
				</form>
			</Hero>
		</>
	);
}
