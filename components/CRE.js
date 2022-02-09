import React from "react";
import styled, { keyframes } from "styled-components";
import { Button, Modal, notification, Progress } from 'antd';
import { useEffect, useState } from "react";
import { zoomIn, fadeInRightBig } from 'react-animations';
import { Disqulaified } from "./Organism/Disqualify";
import { UserForm } from "./Organism/UserForm";
import {API} from '../utils/api'
const bounceAnimation = keyframes`${zoomIn}`;
const fadeAnimation = keyframes`${fadeInRightBig}`;
const Hero = styled.div`
	padding: 40px 40px 40px 40px;
	font-family: Mulish;
	background-color: #fff;
    min-height: 300px;
	box-shadow: rgba(40, 120, 250, 0.1) 0px 4px 16px, rgba(40, 120, 250, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
	padding: 24px;

	.goal {
		animation: 1s ${fadeAnimation};
		background-color: white;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		border-radius: 10px;
		padding: 10px 20px 10px 20px;
		margin-top: 20px;
	}
	.button {
		background-color: #f3ba17;
		
		height: 40px;
		margin-left: 8px;
		margin-top: 20px;
		border-radius: 5px;
		font-size: 15px;
	}
	.cast {
		animation: 2s ${bounceAnimation};
		padding: 10px 10px 10px 10px;
		font-size: 20px;
	}
	.term {
		margin: 10px 10px 10px 10px;
	}
	.radio {
		margin-left: 15px;
	}
	input {
		border-top-style: hidden;
		border-right-style: hidden;
		border-left-style: hidden;
	}

	.loan-type-contain img {
		max-width: 80px !important;
	}
	.outline:focus {
		outline: none;
	}
`;
const ButtonWrapper = styled.div`
display: flex;
gap:10px;
margin-top:20px;
& .ant-btn-primary {
	height: 48px;
	background: #F3BA17;
	border-color:#F3BA17 ;
	border-radius: 8px;
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 32px;
	color: #333333;
}
& .ant-btn-dashed{
	height: 48px;
	background-color:#1B46B0;
	color:#fff;
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 32px;
	border-radius: 8px;
}
`;
const StyledButton = styled(Button)`

`;
const ErrorMessage = styled.p`
margin-top: 10px;
color:red;

`;

export default function CRE() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [error, setErrors] = useState({
		goal: '',
		cash: '',
		business: '',
		address: '',
		propertyType: '',
		property: '',
		occupy: '',
		tenants: '',
		dollar: '',
		ownership: '',
		bankruptcy: '',
		bankruptcyYear: '',
		downpayment: '',
		commercial: '',

	});
	const [formValues, setFormValues] = useState({
		goal: '',
		cash: '',
		business: '',
		address: '',
		propertyType: '',
		property: '',
		occupy: '',
		tenants: '',
		dollar: '',
		ownership: '',
		bankruptcy: '',
		bankruptcyYear: '',
		downpayment: '',
		commercial: '',
	});

	const [formstep, setFormstep] = React.useState(1);

	const completeFormStep = () => {
		if (formValues.tenants == '1' || formValues.bankruptcyYear == "0") {
			setIsModalVisible(true)
			return;
		}
		if (formValues.dollar == '1') {
			setIsModalVisible(true)
			return;
		}
		if (formValues.downpayment != '' && Number(formValues.downpayment) < 20) {
			setIsModalVisible(true)
			return;

		}
		if (formstep == 1 && formValues.goal == "") {
            setErrors({ ...error, goal: "Error" });
            return;
        }
		else if (formstep == 2 && formValues.cash == "" ) {
            setErrors({ ...error, cash: "Error" });
            return;
        }
		else if (formstep == 3 && formValues.business == "" ) {
            setErrors({ ...error, business: "Error" });
            return;
        }
		else if (formstep == 4 && formValues.address == "" ) {
            setErrors({ ...error, address: "Error" });
            return;
        }
		else if (formstep == 5 && formValues.propertyType == "" ) {
            setErrors({ ...error, propertyType: "Error" });
            return;
        }
		else if (formstep == 6 && formValues.property == "" ) {
            setErrors({ ...error, property: "Error" });
            return;
        }
		else if (formstep == 7 && formValues.occupy == "" ) {
            setErrors({ ...error, occupy: "Error" });
            return;
        }
		
		else if (formstep == 8 && formValues.tenants == "" ) {
            setErrors({ ...error, tenants: "Error" });
            return;
        }
		else if (formstep == 9 && formValues.dollar == "" ) {
            setErrors({ ...error, dollar: "Error" });
            return;
        }
		else if (formstep == 10 && formValues.ownership == "" ) {
            setErrors({ ...error, ownership: "Error" });
            return;
        }
		else if (formstep == 11 && formValues.bankruptcy == "" ) {
            setErrors({ ...error, bankruptcy: "Error" });
            return;
        }
		else if (formstep == 12 && formValues.bankruptcyYear == "" ) {
            setErrors({ ...error, bankruptcyYear: "Error" });
            return;
        }
		else if (formstep == 13 && formValues.downpayment == "" ) {
            setErrors({ ...error, downpayment: "Error" });
            return;
        }
		else if (formstep == 14 && formValues.commercial == "" ) {
            setErrors({ ...error, commercial: "Error" });
            return;
        }
		if (formValues.goal !== "CashOut" && formstep == 1) {
			setFormstep(3);
			return;
		}
		if (formValues.property !== 'Owner' && formstep == 6) {
			setFormstep(8);
			return;
		}
		if (formValues.bankruptcy !== 'Yes' && formstep == 11) {
			setFormstep(13);
			return;
		}
		setFormstep(formstep + 1);
	};
	const previousStep = () => {
		if (formValues.goal !== "CashOut" && formstep == 3) {
			setFormstep(1);
			return;
		}
		if (formValues.property !== 'Owner' && formstep == 8) {
			setFormstep(6);
			return;
		}
		if (formValues.bankruptcy !== 'Yes' && formstep == 13) {
			setFormstep(11);
			return;
		}
		setFormstep(formstep - 1);
	}

	const isUserDisqualified = () => {
		setIsModalVisible(true)
	}
	const onFormChange = (e, name) => {
		setFormValues({
			...formValues,
			[name]: e.target.value

		})
		setErrors({
			...error,
			[name]: ""
		})
	}
	const formHandler = async () => {
	const data=	{
			"loanTypes": 101,
			"nameOfBusiness": "string",
			"nameOfBorrower": "string",
			"emailOfBorrower": "string",
			"phoneNumber": "string",
			"prequalifyAnswers": formValues,
			"accepted": true
		  }
        try {
			console.log("lk")
            await API.post("/api/borrower/create-prequalify-request", data)

        } catch (error) {
            notification.error({ message: 'Error Occured', description: error?.data?.reason || "Something went wrong, Please try again" })
        }
    }
	return (
		<div>
			  <Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={Math.ceil((formstep/14)*100)}

            />


			<Hero>
				{/* {formstep === 0 && (
					<div className="finance-list">
						<p className="loan-step">Step 1</p>
						<h3 className="loan-head">Which type of loan do you prefer?</h3>
						<p className="loan-describe">Please select one to continue</p>

						<section className="loans-types">
							{details.map((datai, dataname) => {
								const base_url =
									process.env.NEXT_PUBLIC_BASE_URL + datai.thumbnail;
								return (
									<div className="loan-type-section">
										<div className="loan-type">
											<div className="loan-type-select">
												<div className="loan-type-contain first">
													<input
														type="radio"
														name="loantypeid"
														value={datai.id}
														{...register("loantypeid")}
													/>
													<img src={base_url} />
													<a>
														<img src="/images/help.png" />
													</a>
												</div>
												<p>{datai.loanTitle}</p>
											</div>
										</div>
									</div>
								);
							})}
						</section>
					</div>
				)} */}


				<>

					{formstep == 1 && <section>
						<div className="goal">
							<div className="cast">What is your goal?</div>
							<div className="term">
								<input checked={formValues.goal == "CashOut" ? true : false} onChange={(e) => onFormChange(e, 'goal')} type="radio" name="goal" value="CashOut" />
								<label className="radio">Cast Out Refinance</label>
							</div>
							<div className="term">
								<input checked={formValues.goal == "RateAndTerm" ? true : false} onChange={(e) => onFormChange(e, 'goal')} type="radio" name="goal" value="RateAndTerm" />
								<label className="radio">Rate and Term only</label>
							</div>
						</div>
						<ErrorMessage>{error.goal && "Please select to continue"}</ErrorMessage>
					</section>}
					{(formValues.goal == "CashOut" && formstep == 2) && <section>
						<div className="goal">
							<div className="cast">If Cash Out, How much?</div>
							<div className="term">
								<input
									value={formValues.cash}
									onChange={(e) => onFormChange(e, 'cash')}
									className="outline"
									type="text"
									placeholder="Your answer"
								/>
							</div>
						</div>
						<ErrorMessage>{error.cash && "Please Enter"}</ErrorMessage>
					</section>}
					{formstep == 3 && <section>
						<div className="goal">
							<div>
								<div className="cast">
									Years in Business or Investment Experience
								</div>
							</div>
							<div className="term">
								<input checked={formValues.business == "1" ? true : false} onChange={(e) => onFormChange(e, 'business')} type="radio" name="years" value="1" />
								<label className="radio">Less than a year</label>
							</div>
							<div className="term">
								<input checked={formValues.business == "2" ? true : false} onChange={(e) => onFormChange(e, 'business')} type="radio" name="years" value="2" />
								<label className="radio">Less than 2 Years</label>
							</div>
							<div className="term">
								<input checked={formValues.business == "3" ? true : false} onChange={(e) => onFormChange(e, 'business')} type="radio" name="years" value="3" />
								<label className="radio">More then 2 Years</label>
							</div>
							<div className="term">
								<input checked={formValues.business == "InvestmentProperty" ? true : false} onChange={(e) => onFormChange(e, 'business')}
									type="radio"
									name="years"
									value="InvestmentProperty"
								/>
								<label className="radio">Investment Property</label>
							</div>
						</div>
						<ErrorMessage>{error.business && "Please select to continue"}</ErrorMessage>
					</section>}
					{formstep == 4 && <section>
						<div className="goal">
							<div className="cast">Property Address</div>
							<div className="term">
								<input value={formValues.address} onChange={(e) => onFormChange(e, 'address')}
									className="outline"
									type="text"
									placeholder="Your answer"
								/>
							</div>
						</div>
						<ErrorMessage>{error.address && "Please Enter"}</ErrorMessage>
					</section>}
				</>

				<>
					{formstep == 5 && <section>
						<div className="goal">
							<div>
								<div className="cast">Property Type</div>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "FoodBeverage" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="FoodBeverage" />
								<label className="radio">Food / Beverage</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Industrial" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="Industrial" />
								<label className="radio">Industrial</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "MixedUse" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="MixedUse" />
								<label className="radio">Mixed Use</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Retail" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="Retail" />
								<label className="radio">Retail</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "OfficeCondo" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="OfficeCondo" />
								<label className="radio">Office / Condo</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "InvestmentProperty" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')}
									type="radio"
									name="property"
									value="InvestmentProperty"
								/>
								<label className="radio">Investment Property</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "MultiFamily" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="MultiFamily" />
								<label className="radio">Multi-Family</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Hospitality" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="Hospitality" />
								<label className="radio">Hospitality</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "ApartmentMultiFamily" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')}
									type="radio"
									name="property"
									value="ApartmentMultiFamily"
								/>
								<label className="radio">Apartment Multi-Family</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "FarmLand" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="FarmLand" />
								<label className="radio">Farm & Land</label>
							</div>
						</div>
						<ErrorMessage>{error.propertyType && "Please select to continue"}</ErrorMessage>
					</section>}

					{formstep == 6 && <section>
						<div className="goal">
							<div className="cast">
								Owner Occupied or Investment Property
							</div>
							<div className="term">
								<input checked={formValues.property == "Owner" ? true : false} onChange={(e) => onFormChange(e, "property")} type="radio" name="occupied" value="Owner" />
								<label className="radio">Owner</label>
							</div>
							<div className="term">
								<input checked={formValues.property == "Investment" ? true : false} onChange={(e) => onFormChange(e, "property", e)} type="radio" name="occupied" value="Investment" />
								<label className="radio">Investment</label>
							</div>
						</div>
						<ErrorMessage>{error.property && "Please select to continue"}</ErrorMessage>
					</section>}
					{(formValues.property == 'Owner' && formstep == 7) && <section>
						<div className="goal">
							<div className="cast">
								Will You Occupy 51% or more of the space
							</div>
							<div className="term">
								<input checked={formValues.occupy == "Yes" ? true : false} onChange={(e) => onFormChange(e, 'occupy')} type="radio" name="more" value="Yes" />
								<label className="radio">Yes</label>
							</div>
							<div className="term">
								<input checked={formValues.occupy == "No" ? true : false} onChange={(e) => onFormChange(e, 'occupy')} type="radio" name="more" value="No" />
								<label className="radio">No</label>
							</div>
						</div>
						<ErrorMessage>{error.occupy && "Please select to continue"}</ErrorMessage>
					</section>
					}
					<>
						{formstep == 8 && <section>
							<div className="goal">
								<div className="cast">How many Tenants or Units</div>
								<div className="term">
									<input value={formValues.tenants} onChange={(e) => onFormChange(e, 'tenants')}
										className="outline"
										type="text"
										placeholder="Your answer"
									/>
								</div>
							</div>
							<ErrorMessage>{error.tenants && "Please Enter"}</ErrorMessage>
						</section>}
					</>

				</>

				<>
					{formstep == 9 && <section>
						<div className="goal">
							<div className="cast">Dollar Amount Wanted </div>
							<div className="term">
								<input checked={formValues.dollar == "1" ? true : false} onChange={(e) => onFormChange(e, 'dollar')} type="radio" name="amount" value="1" />
								<label className="radio">25,000</label>
							</div>
							<div className="term">
								<input checked={formValues.dollar == "2" ? true : false} onChange={(e) => onFormChange(e, 'dollar')} type="radio" name="amount" value="2" />
								<label className="radio">250,000 - 1,000,000</label>
							</div>
							<div className="term">
								<input checked={formValues.dollar == "3" ? true : false} onChange={(e) => onFormChange(e, 'dollar')} type="radio" name="amount" value="3" />
								<label className="radio">1,000,000 - 5,000,000</label>
							</div>
							<div className="term">
								<input checked={formValues.dollar == "4" ? true : false} onChange={(e) => onFormChange(e, 'dollar')} type="radio" name="amount" value="4" />
								<label className="radio">5,000,000 - 25,000,000</label>
							</div>
							<div className="term">
								<input checked={formValues.dollar == "5" ? true : false} onChange={(e) => onFormChange(e, 'dollar')} type="radio" name="amount" value="5" />
								<label className="radio">25,000,000 - 100,000,000</label>
							</div>
						</div>
						<ErrorMessage>{error.dollar && "Please select to continue"}</ErrorMessage>
					</section>}
					{formstep == 10 && <section>
						<div className="goal">
							<div className="cast">Ownership Structure </div>
							<div className="term">
								<input checked={formValues.ownership == "LLC" ? true : false} onChange={(e) => onFormChange(e, 'ownership')} type="radio" name="amount" value="LLC" />
								<label className="radio">LLC</label>
							</div>
							<div className="term">
								<input checked={formValues.ownership == "CCORP" ? true : false} onChange={(e) => onFormChange(e, 'ownership')} type="radio" name="amount" value="CCORP" />
								<label className="radio">C-Corp</label>
							</div>
							<div className="term">
								<input checked={formValues.ownership == "SCORP" ? true : false} onChange={(e) => onFormChange(e, 'ownership')} type="radio" name="amount" value="SCORP" />
								<label className="radio">S-CORP</label>
							</div>
							<div className="term">
								<input checked={formValues.ownership == "Partnership" ? true : false} onChange={(e) => onFormChange(e, 'ownership')} type="radio" name="amount" value="Partnership" />
								<label className="radio">Partnership</label>
							</div>
						</div>
						<ErrorMessage>{error.ownership && "Please select to continue"}</ErrorMessage>
					</section>}
					{formstep == 11 && <section>
						<div className="goal">
							<div className="cast">Ever File Bankruptcy?</div>
							<div className="term">
								<input checked={formValues.bankruptcy == "Yes" ? true : false} onChange={(e) => onFormChange(e, 'bankruptcy')} type="radio" name="bankruptcy" value="Yes" />
								<label className="radio">Yes</label>
							</div>
							<div className="term">
								<input checked={formValues.bankruptcy == "No" ? true : false} onChange={(e) => onFormChange(e, 'bankruptcy')} type="radio" name="bankruptcy" value="No" />
								<label className="radio">No</label>
							</div>
						</div>
						<ErrorMessage>{error.bankruptcy && "Please select to continue"}</ErrorMessage>
					</section>}
				</>

				<>
					{(formValues.bankruptcy == 'Yes' && formstep == 12) && <section>
						<div className="goal">
							<div className="cast">If So, When?</div>

							<div className="term">
								<input
									checked={formValues.bankruptcyYear == "0" ? true : false}
									onChange={(e) => onFormChange(e, 'bankruptcyYear')} type="radio" name="bankruptcyYear" value="0" />
								<label className="radio">Less than 7 years</label>
							</div>
							<div className="term">
								<input
									checked={formValues.bankruptcyYear == "10" ? true : false}
									onChange={(e) => onFormChange(e, 'bankruptcyYear')} type="radio" name="bankruptcyYear" value="10" />
								<label className="radio">7 or More than 7 years</label>
							</div>

						</div>
						<ErrorMessage>{error.bankruptcyYear && "Please select to continue"}</ErrorMessage>
					</section>}
					{formstep == 13 && <section>
						<div className="goal">
							<div className="cast">
								How much do you plan on putting down?
							</div>
							{formValues.bankruptcy == "Yes" && <div className="term">
								<input checked={formValues.downpayment == "10" ? true : false} onChange={(e) => onFormChange(e, 'downpayment')} type="radio" name="putting" value="10" />
								<label className="radio">10%</label>
							</div>}
							{formValues.bankruptcy == 'Yes' && <div className="term">
								<input checked={formValues.downpayment == "20" ? true : false} onChange={(e) => onFormChange(e, 'downpayment')} type="radio" name="putting" value="20" />
								<label className="radio">20%</label>
							</div>}
							<div className="term">
								<input checked={formValues.downpayment == "30" ? true : false} onChange={(e) => onFormChange(e, 'downpayment')} type="radio" name="putting" value="30" />
								<label className="radio">30%</label>
							</div>
							<div className="term">
								<input checked={formValues.downpayment == "100" ? true : false} onChange={(e) => onFormChange(e, 'downpayment')} type="radio" name="putting" value="100" />
								<label className="radio">More then 30%</label>
							</div>
						</div>
						<ErrorMessage>{error.downpayment && "Please select to continue"}</ErrorMessage>
					</section>}
					{formstep == 14 && <section>
						<div className="goal">
							<div className="cast">
								Do you have any other commercial properties?
							</div>
							<div className="term">
								<input checked={formValues.commercial == "Yes" ? true : false} onChange={(e) => onFormChange(e, 'commercial')} type="radio" name="commercial" value="Yes" />
								<label className="radio">Yes</label>
							</div>
							<div className="term">
								<input checked={formValues.commercial == "No" ? true : false} onChange={(e) => onFormChange(e, 'commercial')} type="radio" name="commercial" value="No" />
								<label className="radio">No</label>
							</div>
						</div>
						<ErrorMessage>{error.commercial && "Please select to continue"}</ErrorMessage>
					</section>}
				</>

				{/* {formstep === 5 && (
					<div className="finance-list">
						<p className="loan-step">Step 3</p>
						<h3 className="loan-head">Tell us a bit about you</h3>
						<section className="loan-amount">
							<section>
								<div className="form-row-one">
									<div className="form-group">
										<label htmlFor="fname" className="formlabel ">
											First Name <sup className="req">*</sup>
										</label>
										<input
											{...register("firstName", {
												required: "true",
												maxLength: {
													value: 20,
													message: "max length is 20",
												},
											})}
											className="textbox"
											type="text"
											autoComplete="fname"
											placeholder="Enter First Name"
											required
										/>
									</div>

									<div className="form-group">
										<label htmlFor="fdba" className="formlabel">
											Last Name <sup className="req">*</sup>
										</label>
										<input
											{...register("lastName", {
												required: "true",
												maxLength: {
													value: 20,
													message: "max length is 20",
												},
											})}
											className="textbox"
											type="text"
											autoComplete="fdba"
											placeholder="Enter Last Name"
											required
										/>
									</div>
								</div>

								<div className="form-row-one form-gap">
									<div className="form-group">
										<label htmlFor="fname" className="formlabel">
											Telephone Number <sup className="req">*</sup>
										</label>
										<input
											{...register("phone", {
												required: "true",
												maxLength: {
													value: 15,
													message: "max length is 15",
												},
											})}
											className="textbox"
											type="number"
											autoComplete="fname"
											placeholder="Enter Telephone Number"
											required
										/>
									</div>

									<div className="form-group">
										<label htmlFor="fname" className="formlabel">
											Legal Business Name <sup className="req">*</sup>
										</label>
										<input
											{...register("businessName", {
												required: "true",
												maxLength: {
													value: 20,
													message: "max length is 20",
												},
											})}
											className="textbox"
											type="text"
											autoComplete="fname"
											placeholder="Enter Legal Business Name"
											required
										/>
									</div>
								</div>

								<div className="form-row-one form-gap">
									<div className="form-group">
										<label htmlFor="fname" className="formlabel">
											How did you hear about us?
										</label>
										<select {...register("source")} className="textbox">
											<option value="Select">Select</option>
											<option value="1">Saab</option>
											<option value="1">Opel</option>
											<option value="1">Audi</option>
										</select>
									</div>
								</div>
							</section>
							<div className="form-row-button">
								<input type="submit" id="button" value="Check to Pre-Qualify" />
							</div>
						</section>
					</div>
				)} */}
				<ButtonWrapper>
						{formstep > 1 &&<StyledButton disabled={formstep==1 } size="large" onClick={previousStep} type="dashed">Previous Step</StyledButton>}
{formstep==14?<Button onClick={formHandler} type="primary">Submit</Button>:<Button size="large" type="primary" onClick={completeFormStep}>
	Next Step
</Button>}
</ButtonWrapper>
				<Modal visible={isModalVisible} footer={null}>
					<Disqulaified />
				</Modal>

				{/* <input className="button" type="button" value="Next" /> */}
			</Hero>
		</div>
	);
}
