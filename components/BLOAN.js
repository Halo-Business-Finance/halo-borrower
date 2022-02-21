import React from "react";
import styled, { keyframes } from "styled-components";

import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Button, Modal, notification, Progress } from "antd";
import { Disqulaified } from "./Organism/Disqualify";
import { fadeIn, zoomIn, fadeInRightBig } from 'react-animations';
import { API } from "../utils/api";
import { Success } from "./Organism/Success";
const zoomAnimation = keyframes`${fadeIn}`;
const zoomInAnimation = keyframes`${zoomIn}`;
const fadeAnimation = keyframes`${fadeInRightBig}`;

const Hero = styled.div`
	padding: 40px 30px 40px 30px;
	font-family: Mulish;
	background-color: #fff;
    min-height: 300px;
	box-shadow: rgba(40, 120, 250, 0.1) 0px 4px 16px, rgba(40, 120, 250, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
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
		padding: 10px 20px 10px 20px;
		margin-top: 20px;
		border-radius: 5px;
		font-size: 15px;
	}
	.cast {
		animation: 2s ${zoomInAnimation};
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
	.outline:focus {
		outline: none;
	}
	.other {
		margin-left: 15px;
	}
	.other:focus {
		outline: none;
	}
`;
const ButtonWrapper = styled.div`

animation: 1s ${zoomAnimation};
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
const ErrorMessage = styled.div`
animation: 1s ${zoomInAnimation};
color:red;
margin-top: 10px;

`;

export default function BLOAN() {
	const [isDisqualified, setDisqualified] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [showSucessModal, setshowSucessModal] = useState(false);
	const [formstep, setFormstep] = React.useState(1);
	const [errors, setErrors] = useState({
		fundPlan: "",
		refinance: "",
		cashOut: "",
		constructionAmount: "",
		rateTermAmount: "",
		experience: "",
		propertyAddress: "",
		propertyType: "",
		propertyTypeOther: "",
		termRequest: "",
		ownerOrInvestment: "",
		occupy: "",
		tenants: "",
		dollar: "",
		ownership: "",
		lawsuit: "",
		bankruptcy: "",
		bankruptcyYear: "",
		plan: "",
		currentProperty: "",
		stabilized: "",

	})
	const [bridgeLoanData, setBridgeLoanData] = useState({
		fundPlan: "",
		refinance: "",
		cashOut: "",
		constructionAmount: "",
		rateTermAmount: "",
		experience: "",
		propertyAddress: "",
		propertyType: "",
		propertyTypeOther: "",
		termRequest: "",
		ownerOrInvestment: "",
		occupy: "",
		tenants: "",
		dollar: "",
		ownership: "",
		lawsuit: "",
		bankruptcy: "",
		bankruptcyYear: "",
		plan: "",
		currentProperty: "",
		stabilized: "",

	})
	const completeFormStep = () => {

		if (Number(bridgeLoanData.cashOut) < 250000 || Number(bridgeLoanData.constructionAmount) < 250000 || Number(bridgeLoanData.dollar) < 250000 || bridgeLoanData.bankruptcyYear == "0" || (bridgeLoanData.plan == "10" || bridgeLoanData.plan == '20' || Number(bridgeLoanData.rateTermAmount) < 250000 )) {
			setIsModalVisible(true);
			return;

		}
		if (bridgeLoanData.fundPlan == "refinance" && formstep == 1) {
			setFormstep(2);
			return;
		}
		if (bridgeLoanData.cashOut !== "" && formstep == 3) {
			setFormstep(6);
			return
		}

		if (bridgeLoanData.fundPlan == "purchase" && formstep == 1 || (bridgeLoanData.refinance == "term" && formstep == 2)) {
			setFormstep(5);
			return;
		}
		if (formstep == 4 && bridgeLoanData.fundPlan !== "purchase" && bridgeLoanData.refinance !== "term" && bridgeLoanData.constructionAmount !== "") {
			setFormstep(6);
			return;
		}
		// if (formstep == 4) {
		// 	setFormstep(6);
		// 	return;
		// }

		if (bridgeLoanData.fundPlan == "construct" && formstep == 1) {
			setFormstep(4);
			return;
		}
		if (bridgeLoanData.ownerOrInvestment == "Investment" && formstep == 10) {
			setFormstep(12);
			return;
		}
		if (bridgeLoanData.bankruptcy == "No" && formstep == 16) {
			setFormstep(18);
			return
		}
		if (formstep == 1 && bridgeLoanData.fundPlan == "") {
			setErrors({ ...errors, fundPlan: "Error" });
			return;
		}
		if (formstep == 2 && bridgeLoanData.refinance == "" && bridgeLoanData.fundPlan == "refinance") {
			setErrors({ ...errors, refinance: "Error" });
			return;
		}
		if (formstep == 3 && bridgeLoanData.cashOut == "" && bridgeLoanData.refinance == "cashout") {
			setErrors({ ...errors, cashOut: "Error" });
			return;
		}
		if (formstep == 4 && bridgeLoanData.constructionAmount == "" && bridgeLoanData.fundPlan == "construct") {
			setErrors({ ...errors, constructionAmount: "Error" });
			return;
		}
		if (formstep == 5 && bridgeLoanData.rateTermAmount == "" && (bridgeLoanData.refinance == "term" || bridgeLoanData.fundPlan == "purchase")) {
			setErrors({ ...errors, rateTermAmount: "Error" });
			return;
		}
		if (formstep == 6 && bridgeLoanData.experience == "") {
			setErrors({ ...errors, experience: "Error" });
			return;
		}
		if (formstep == 7 && bridgeLoanData.propertyAddress == "") {
			setErrors({ ...errors, propertyAddress: "Error" });
			return;
		}
		if (formstep == 8 && bridgeLoanData.propertyType == "") {
			setErrors({ ...errors, propertyType: "Error" });
			return;
		}
		if (formstep == 8 && bridgeLoanData.propertyType == "Other" && bridgeLoanData.propertyTypeOther == "") {
			setErrors({ ...errors, propertyTypeOther: "Error" });
			return;
		}
		if (formstep == 9 && bridgeLoanData.termRequest == "") {
			setErrors({ ...errors, termRequest: "Error" });
			return;
		}
		if (formstep == 10 && bridgeLoanData.ownerOrInvestment == "") {
			setErrors({ ...errors, ownerOrInvestment: "Error" });
			return;
		}
		if (formstep == 11 && bridgeLoanData.occupy == "") {
			setErrors({ ...errors, occupy: "Error" });
			return;
		}
		if (formstep == 12 && bridgeLoanData.tenants == "") {
			setErrors({ ...errors, tenants: "Error" });
			return;
		}
		if (formstep == 13 && bridgeLoanData.dollar == "") {
			setErrors({ ...errors, dollar: "Error" });
			return;
		}
		if (formstep == 14 && bridgeLoanData.ownership == "") {
			setErrors({ ...errors, ownership: "Error" });
			return;
		}
		if (formstep == 15 && bridgeLoanData.lawsuit == "") {
			setErrors({ ...errors, lawsuit: "Error" });
			return;
		}
		if (formstep == 16 && bridgeLoanData.bankruptcy == "") {
			setErrors({ ...errors, bankruptcy: "Error" });
			return;
		}
		if (formstep == 17 && bridgeLoanData.bankruptcyYear == "") {
			setErrors({ ...errors, bankruptcyYear: "Error" });
			return;
		}
		if (formstep == 18 && bridgeLoanData.plan == "") {
			setErrors({ ...errors, plan: "Error" });
			return;
		}
		if (formstep == 19 && bridgeLoanData.currentProperty == "") {
			setErrors({ ...errors, currentProperty: "Error" });
			return;
		}
		if (formstep == 20 && bridgeLoanData.stabilized == "") {
			setErrors({ ...errors, stabilized: "Error" });

			return;
		}


		setFormstep(formstep + 1);


	};
	const previousStep = () => {
		if (bridgeLoanData.fundPlan == "refinance" && formstep == 2) {
			setFormstep(1);
			return;
		}
		if (bridgeLoanData.cashOut !== "" && formstep == 6) {
			setFormstep(3);
			return
		}

		if (bridgeLoanData.fundPlan == "purchase" && formstep == 5 || (bridgeLoanData.refinance == "term" && formstep == 5)) {

			if (bridgeLoanData.fundPlan == 'purchase') {
				setFormstep(1);
				return;
			} else {
				setFormstep(2);
				return;
			}

		}
		if (formstep == 6 && bridgeLoanData.fundPlan !== "purchase" && bridgeLoanData.refinance !== "term") {
			setFormstep(4);
			return;
		}
		// if (formstep == 4) {
		// 	setFormstep(6);
		// 	return;
		// }

		if (bridgeLoanData.fundPlan == "construct" && formstep == 4) {
			setFormstep(1);
			return;
		}
		if (bridgeLoanData.ownerOrInvestment == "Investment" && formstep == 12) {
			setFormstep(10);
			return;
		}
		if (bridgeLoanData.bankruptcy == "No" && formstep == 18) {
			setFormstep(16);
			return
		}
		setFormstep(formstep - 1)
	}

	const onChangeHandler = (name, e) => {

		setBridgeLoanData({
			...bridgeLoanData,
			[name]: e.target.value
		});
		setErrors({ ...errors, [name]: "" })
	}
	const [loading, setLoading] = useState(false);
	const formHandler = async () => {
		setLoading(true);
		const userData=sessionStorage.getItem("user");
        const parsedData=JSON.parse(userData);
        const data = {
            "loanTypes": 102,
            "nameOfBusiness":parsedData?.businessName,
            "nameOfBorrower": parsedData?.borrowerName,
            "emailOfBorrower": parsedData?.email,
            "phoneNumber": parsedData?.phoneNumber,
			"prequalifyAnswers": bridgeLoanData,
			"accepted": true
		}
		try {
			await API.post("/api/borrower/create-prequalify-request", data)
			notification.success({ message: "Form submitted successfully" })
			setshowSucessModal(true)

		} catch (error) {
			notification.error({ message: 'Error Occured', description: error?.data?.reason || "Something went wrong, Please try again" })
		}
		setLoading(true);
	}

	return (
		<div>

			<Hero>
				<Progress
					strokeColor={{
						'0%': '#108ee9',
						'100%': '#87d068',
					}}
					percent={Math.ceil((formstep / 20) * 100)}

				/>
				<>
					{formstep == 1 && <section>
						<div className="goal">
							<div className="cast">
								Tell us what you plan on using the funds for?
							</div>
							<div className="term">
								<input checked={bridgeLoanData.fundPlan == "purchase" ? true : false}
									onChange={(e) => onChangeHandler("fundPlan", e)}
									type="radio" name="goal" value="purchase" />
								<label className="radio">Purchase</label>
							</div>
							<div className="term">
								<input checked={bridgeLoanData.fundPlan == "construct" ? true : false} default={bridgeLoanData.fundPlan}
									onChange={(e) => onChangeHandler("fundPlan", e)}
									type="radio" name="goal" value="construct" />
								<label className="radio">Construction</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.fundPlan == "refinance" ? true : false}
									onChange={(e) => onChangeHandler("fundPlan", e)}
									type="radio" name="goal" value="refinance" />
								<label className="radio">Refinance</label>
							</div>
						</div>
						{errors.fundPlan && <ErrorMessage>{errors.fundPlan && "Please select one to continue"}</ErrorMessage>}
					</section>}

					{
						(bridgeLoanData.fundPlan == "refinance" && formstep == 2) &&
						<section>
							<div className="goal">
								<div className="cast">Refinance</div>
								<div className="term">
									<input checked={bridgeLoanData.refinance == "cashout" ? true : false} onChange={(e) => onChangeHandler("refinance", e)} type="radio" name="amount" value="cashout" />
									<label className="radio">Cash out</label>
								</div>
								<div className="term">
									<input
										checked={bridgeLoanData.refinance == "term" ? true : false}
										onChange={(e) => onChangeHandler("refinance", e)} type="radio" name="amount" value="term" />
									<label className="radio">Rate and Term</label>
								</div>
							</div>
							<ErrorMessage>{errors.refinance && "Please select one to continue"}</ErrorMessage>

						</section>}
					{(bridgeLoanData.refinance == "cashout" && formstep == 3) && <section>
						<div className="goal">
							<div className="cast">Cash out Amount </div>
							<div className="term">
							<input value={bridgeLoanData.cashOut} onChange={(e) => onFormChange(e, 'cashOut')}
										className="outline"
										type="number"
										placeholder="Only Number"
									/>
								{/* <input
									checked={bridgeLoanData.cashOut == "1" ? true : false}
									onChange={(e) => onChangeHandler("cashOut", e)} type="radio" name="amount" value="1" />
								<label className="radio">25,000 - 250,000</label> */}
							</div>
							{/* <div className="term">
								<input
									checked={bridgeLoanData.cashOut == "2" ? true : false}
									onChange={(e) => onChangeHandler("cashOut", e)} type="radio" name="amount" value="2" />
								<label className="radio">250,000 - 1,000,000</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.cashOut == "3" ? true : false}
									onChange={(e) => onChangeHandler("cashOut", e)} type="radio" name="amount" value="3" />
								<label className="radio">1,000,000 - 5,000,000</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.cashOut == "4" ? true : false}
									onChange={(e) => onChangeHandler("cashOut", e)} type="radio" name="amount" value="4" />
								<label className="radio">5,000,000 - 25,000,000</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.cashOut == "5" ? true : false}
									onChange={(e) => onChangeHandler("cashOut", e)} type="radio" name="amount" value="5" />
								<label className="radio">25,000,000 - 100,000,000</label>
							</div> */}
						</div>

						<ErrorMessage>{errors.cashOut && "Please select one to continue"}</ErrorMessage>

					</section>}
					{(bridgeLoanData.fundPlan === "construct" && formstep == 4) && <section>
						<div className="goal">
							<div className="cast">Construction Amount </div>
							<div className="term">
							<input value={bridgeLoanData.constructionAmount} onChange={(e) => onFormChange(e, 'constructionAmount')}
										className="outline"
										type="number"
										placeholder="Only Number"
									/>
								{/* <input
									checked={bridgeLoanData.constructionAmount == "1" ? true : false}
									onChange={(e) => onChangeHandler("constructionAmount", e)} type="radio" name="amount" value="1" />
								<label className="radio">25,000 - 250,000</label> */}
							</div>
							{/* <div className="term">
								<input
									checked={bridgeLoanData.constructionAmount == "2" ? true : false}
									onChange={(e) => onChangeHandler("constructionAmount", e)} type="radio" name="amount" value="2" />
								<label className="radio">250,000 - 1,000,000</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.constructionAmount == "3" ? true : false}
									onChange={(e) => onChangeHandler("constructionAmount", e)} type="radio" name="amount" value="3" />
								<label className="radio">1,000,000 - 5,000,000</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.constructionAmount == "4" ? true : false}
									onChange={(e) => onChangeHandler("constructionAmount", e)} type="radio" name="amount" value="4" />
								<label className="radio">5,000,000 - 25,000,000</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.constructionAmount == "5" ? true : false}
									onChange={(e) => onChangeHandler("constructionAmount", e)} type="radio" name="amount" value="5" />
								<label className="radio">25,000,000 - 100,000,000</label>
							</div> */}
						</div>
						<ErrorMessage>{errors.constructionAmount && "Please select one to continue"}</ErrorMessage>

					</section>}
				</>


				<>
					{((bridgeLoanData.fundPlan == "purchase" && formstep == 5) || (["term"].includes(bridgeLoanData.refinance)) && formstep == 5)
						&& <section>
							<div className="goal">
								<div className="cast">Rate and Term Amount </div>
								<div className="term">
								<input value={bridgeLoanData.rateTermAmount} onChange={(e) => onFormChange(e, 'rateTermAmount')}
										className="outline"
										type="number"
										placeholder="Only Number"
									/>
									{/* <input
										checked={bridgeLoanData.rateTermAmount == "1" ? true : false}
										onChange={(e) => onChangeHandler("rateTermAmount", e)} type="radio" name="amount" value="1" />
									<label className="radio">25,000 - 250,000</label> */}
								</div>
								{/* <div className="term">
									<input
										checked={bridgeLoanData.rateTermAmount == "2" ? true : false}
										onChange={(e) => onChangeHandler("rateTermAmount", e)} type="radio" name="amount" value="2" />
									<label className="radio">250,000 - 1,000,000</label>
								</div>
								<div className="term">
									<input
										checked={bridgeLoanData.rateTermAmount == "3" ? true : false}
										onChange={(e) => onChangeHandler("rateTermAmount", e)} type="radio" name="amount" value="3" />
									<label className="radio">1,000,000 - 5,000,000</label>
								</div>
								<div className="term">
									<input
										checked={bridgeLoanData.rateTermAmount == "4" ? true : false}
										onChange={(e) => onChangeHandler("rateTermAmount", e)} type="radio" name="amount" value="4" />
									<label className="radio">5,000,000 - 25,000,000</label>
								</div>
								<div className="term">
									<input checked={bridgeLoanData.rateTermAmount == "5" ? true : false} onChange={(e) => onChangeHandler("rateTermAmount", e)} type="radio" name="amount" value="5" />
									<label className="radio">25,000,000 - 100,000,000</label>
								</div> */}
							</div>
							<ErrorMessage>{errors.rateTermAmount && "Please select one to continue"}</ErrorMessage>

						</section>}
					{formstep == 6 && <section>
						<div className="goal">
							<div className="cast">Years of Experience </div>
							<div className="term">
								<input
									checked={bridgeLoanData.experience == "0" ? true : false}
									onChange={(e) => onChangeHandler("experience", e)} type="radio" name="term" value="0" />
								<label className="radio">1-3 Years of Experience</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.experience == "1" ? true : false}
									onChange={(e) => onChangeHandler("experience", e)} type="radio" name="term" value="1" />
								<label className="radio">3-5 Years Experience</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.experience == "2" ? true : false}
									onChange={(e) => onChangeHandler("experience", e)} type="radio" name="term" value="2" />
								<label className="radio">5+ Years Experience</label>
							</div>
						</div>
						<ErrorMessage>{errors.experience && "Please select one to continue"}</ErrorMessage>

					</section>
					}
					{formstep == 7 && <section>
						<div className="goal">
							<div className="cast">Property Address</div>
							<div className="term">
								<input value={bridgeLoanData.propertyAddress} onChange={(e) => onChangeHandler("propertyAddress", e)}
									className="outline"
									type="text"
									placeholder="Your answer"
								/>
							</div>
						</div>
						<ErrorMessage>{errors.propertyAddress && "Please enter"}</ErrorMessage>

					</section>
					}
					{formstep == 8 && <section>
						<div className="goal">
							<div>
								<div className="cast">Property Type</div>
							</div>
							<div className="term">
								<input checked={bridgeLoanData.propertyType == "FoodBeverage" ? true : false} onChange={(e) => onChangeHandler("propertyType", e)} type="radio" name="property" value="FoodBeverage" />
								<label className="radio">Food / Beverage</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.propertyType == "Industrial" ? true : false}
									onChange={(e) => onChangeHandler("propertyType", e)} type="radio" name="property" value="Industrial" />
								<label className="radio">Industrial</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.propertyType == "MixedUse" ? true : false}
									onChange={(e) => onChangeHandler("propertyType", e)} type="radio" name="property" value="MixedUse" />
								<label className="radio">Mixed Use</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.propertyType == "Retail" ? true : false}
									onChange={(e) => onChangeHandler("propertyType", e)} type="radio" name="property" value="Retail" />
								<label className="radio">Retail</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.propertyType == "Office/Condo" ? true : false}
									onChange={(e) => onChangeHandler("propertyType", e)} type="radio" name="property" value="Office/Condo" />
								<label className="radio">Office / Condo</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.propertyType == "InvestmentProperty" ? true : false}
									onChange={(e) => onChangeHandler("propertyType", e)}
									type="radio"
									name="property"
									value="InvestmentProperty"
								/>
								<label className="radio">Investment Property</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.propertyType == "MultiFamily" ? true : false}
									onChange={(e) => onChangeHandler("propertyType", e)} type="radio" name="property" value="MultiFamily" />
								<label className="radio">Multi-Family</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.propertyType == "Hospitality" ? true : false}
									onChange={(e) => onChangeHandler("propertyType", e)} type="radio" name="property" value="Hospitality" />
								<label className="radio">Hospitality</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.propertyType == "ApartmentMultiFamily" ? true : false}
									onChange={(e) => onChangeHandler("propertyType", e)}
									type="radio"
									name="property"
									value="ApartmentMultiFamily"
								/>
								<label className="radio">Apartment Multi-Family</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.propertyType == "FarmLand" ? true : false}
									onChange={(e) => onChangeHandler("propertyType", e)} type="radio" name="property" value="FarmLand" />
								<label className="radio">Farm & Land</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.propertyType == "Other" ? true : false}
									onChange={(e) => onChangeHandler("propertyType", e)} type="radio" name="property" value="Other" />
								<label className="radio">Other</label>
								<input
									className="other"
									type="text"
									checked={bridgeLoanData.propertyTypeOther}
									onChange={(e) => onChangeHandler("propertyTypeOther", e)}
								// placeholder="Your answer"
								/>
							</div>
						</div>
						<ErrorMessage>{(errors.propertyType && bridgeLoanData.propertyType !== "Other") && "Please select one to continue"}{(errors.propertyTypeOther && bridgeLoanData.propertyType == "Other") && "please enter"}</ErrorMessage>

					</section>
					}
				</>

				<>
					{formstep == 9 && <section>
						<div className="goal">
							<div className="cast">Term Requested </div>
							<div className="term">
								<input
									checked={bridgeLoanData.termRequest == "term1" ? true : false}
									onChange={(e) => onChangeHandler("termRequest", e)} type="radio" name="term" value="term1" />
								<label className="radio">3-12 Months</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.termRequest == "term2" ? true : false}
									onChange={(e) => onChangeHandler("termRequest", e)} type="radio" name="term" value="term2" />
								<label className="radio">12-24 Months</label>
							</div>
							<div className="term">
								<input checked={bridgeLoanData.termRequest == "term3" ? true : false} onChange={(e) => onChangeHandler("termRequest", e)} type="radio" name="term" value="term3" />
								<label className="radio">24-36 Months</label>
							</div>
						</div>
						<ErrorMessage>{errors.termRequest && "Please select one to continue"}</ErrorMessage>


					</section>
					}
					{formstep == 10 && <section>
						<div className="goal">
							<div className="cast">
								Owner Occupied or Investment Property
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.ownerOrInvestment == "Owner" ? true : false}
									onChange={(e) => onChangeHandler("ownerOrInvestment", e)} type="radio" name="owner" value="Owner" />
								<label className="radio">Owner</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.ownerOrInvestment == "Investment" ? true : false}
									onChange={(e) => onChangeHandler("ownerOrInvestment", e)} type="radio" name="owner" value="Investment" />
								<label className="radio">Investment</label>
							</div>
						</div>
						<ErrorMessage>{errors.ownerOrInvestment && "Please select one to continue"}</ErrorMessage>

					</section>
					}
					{(bridgeLoanData.ownerOrInvestment == "Owner" && formstep == 11) && <section>
						<div className="goal">
							<div className="cast">
								Will You Occupy 51% or more of the space
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.occupy == "Yes" ? true : false}
									onChange={(e) => onChangeHandler("occupy", e)} type="radio" name="more" value="Yes" />
								<label className="radio">Yes</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.occupy == "No" ? true : false}
									onChange={(e) => onChangeHandler("occupy", e)} type="radio" name="more" value="No" />
								<label className="radio">No</label>
							</div>
						</div>
						<ErrorMessage>{errors.occupy && "Please select one to continue"}</ErrorMessage>
					</section>}
					{formstep == 12 && <section>
						<div className="goal">
							<div className="cast">How many Tenants or Units</div>
							<div className="term">
								<input
									value={bridgeLoanData.tenants}
									onChange={(e) => onChangeHandler("tenants", e)}
									className="outline"
									type="number"
									placeholder="Number Only"
								/>
							</div>
						</div>
						<ErrorMessage>{errors.tenants && "Please enter"}</ErrorMessage>

					</section>}
				</>

				<>
					{formstep == 13 && <section>
						<div className="goal">
							<div className="cast">Dollar Amount Wanted </div>
							<div className="term">
							<input value={bridgeLoanData.dollar} onChange={(e) => onFormChange(e, 'dollar')}
										className="outline"
										type="number"
										placeholder="Only Number"
									/>
							</div>
						</div>
						<ErrorMessage>{errors.dollar && "Please select one to continue"}</ErrorMessage>

					</section>
					}
					{formstep == 14 && <section>
						<div className="goal">
							<div className="cast">Ownership Structure </div>
							<div className="term">
								<input
									checked={bridgeLoanData.ownership == "LLC" ? true : false}
									onChange={(e) => onChangeHandler("ownership", e)} type="radio" name="amount" value="LLC" />
								<label className="radio">LLC</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.ownership == "CCORP" ? true : false}
									onChange={(e) => onChangeHandler("ownership", e)} type="radio" name="amount" value="CCORP" />
								<label className="radio">C-Corp</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.ownership == "SCORP" ? true : false}
									onChange={(e) => onChangeHandler("ownership", e)} type="radio" name="amount" value="SCORP" />
								<label className="radio">S-CORP</label>
							</div>
							<div className="term">
								<input checked={bridgeLoanData.ownership == "Partnership" ? true : false}
									onChange={(e) => onChangeHandler("ownership", e)} type="radio" name="amount" value="Partnership" />
								<label className="radio">Partnership</label>
							</div>
						</div>
						<ErrorMessage>{errors.ownership && "Please select one to continue"}</ErrorMessage>

					</section>
					}
					{formstep == 15 && <section>
						<div className="goal">
							<div className="cast">
								Are you or the property involved in a Lawsuit
							</div>
							<div className="term">
								<input checked={bridgeLoanData.lawsuit == "Yes" ? true : false} onChange={(e) => onChangeHandler("lawsuit", e)} type="radio" name="lawsuit" value="Yes" />
								<label className="radio">Yes</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.lawsuit == "No" ? true : false}
									onChange={(e) => onChangeHandler("lawsuit", e)} type="radio" name="lawsuit" value="No" />
								<label className="radio">No</label>
							</div>
						</div>
						<ErrorMessage>{errors.lawsuit && "Please select one to continue"}</ErrorMessage>

					</section>
					}
					{formstep == 16 && <section>
						<div className="goal">
							<div className="cast">Ever File Bankruptcy?</div>
							<div className="term">
								<input checked={bridgeLoanData.bankruptcy == "Yes" ? true : false} onChange={(e) => onChangeHandler("bankruptcy", e)} type="radio" name="bankruptcy" value="Yes" />
								<label className="radio">Yes</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.bankruptcy == "No" ? true : false}
									onChange={(e) => onChangeHandler("bankruptcy", e)} type="radio" name="bankruptcy" value="No" />
								<label className="radio">No</label>
							</div>
						</div>
						<ErrorMessage>{errors.bankruptcy && "Please select one to continue"}</ErrorMessage>

					</section>}
					{(bridgeLoanData.bankruptcy == 'Yes' && formstep == 17) && <section>
						<div className="goal">
							<div className="cast">If So, When?</div>

							<div className="term">
								<input
									checked={bridgeLoanData.bankruptcyYear == "0" ? true : false}
									onChange={(e) => onChangeHandler('bankruptcyYear', e)} type="radio" name="bankruptcyYear" value="0" />
								<label className="radio">Less than 7 years</label>
							</div>
							<div className="term">
								<input
									checked={bridgeLoanData.bankruptcyYear == "10" ? true : false}
									onChange={(e) => onChangeHandler('bankruptcyYear', e)} type="radio" name="bankruptcyYear" value="10" />
								<label className="radio">7 or More than 7 years</label>
							</div>
						</div>
						<ErrorMessage>{errors.bankruptcyYear && "Please select one to continue"}</ErrorMessage>

					</section>}
					{formstep == 18 && <section>
						<div className="goal">
							<div className="cast">
								How much do you plan on putting down?
							</div>
							{bridgeLoanData.bankruptcy == "Yes" && <div className="term">
								<input
									checked={bridgeLoanData.plan == "10" ? true : false}
									onChange={(e) => onChangeHandler("plan", e)} type="radio" name="putting" value="10" />
								<label className="radio">10%</label>
							</div>}
							{bridgeLoanData.bankruptcy == "Yes" && <div className="term">
								<input checked={bridgeLoanData.plan == "20" ? true : false} onChange={(e) => onChangeHandler("plan", e)} type="radio" name="putting" value="20" />
								<label className="radio">20%</label>
							</div>}
							<div className="term">
								<input checked={bridgeLoanData.plan == "30" ? true : false} onChange={(e) => onChangeHandler("plan", e)} type="radio" name="putting" value="30" />
								<label className="radio">30%</label>
							</div>
							<div className="term">
								<input checked={bridgeLoanData.plan == "100" ? true : false} onChange={(e) => onChangeHandler("plan", e)} type="radio" name="putting" value="100" />
								<label className="radio">More then 30%</label>
							</div>
						</div>
						<ErrorMessage>{errors.plan && "Please select one to continue"}</ErrorMessage>

					</section>}
					{formstep == 19 && <section>
						<div className="goal">
							<div className="cast">Current Property Value</div>
							<div className="term">
								<input
									value={bridgeLoanData.currentProperty}
									onChange={(e) => onChangeHandler("currentProperty", e)}
									className="outline"
									type="text"
									name="value"
									placeholder="Your answer"
								/>
							</div>
						</div>
						<ErrorMessage>{errors.currentProperty && "Please enter"}</ErrorMessage>

					</section>}
					{(formstep == 20 || formstep == 21) && <section>
						<div className="goal">
							<div className="cast">Once Stabilized</div>
							<div className="term">
								<input
									value={bridgeLoanData.stabilized}
									onChange={(e) => onChangeHandler("stabilized", e)}
									className="outline"
									type="text"
									name="stabilized"
									placeholder="Your answer"
								/>
							</div>
						</div>
						<ErrorMessage>{errors.stabilized && "Please enter"}</ErrorMessage>

					</section>}
				</>
				<ButtonWrapper>

					{(formstep != 1 && formstep < 21) && <StyledButton size="large" onClick={previousStep} type="dashed">Previous Step</StyledButton>}
					{formstep == 21 ? <Button loading={loading} onClick={formHandler} type="primary">Submit</Button> : (formstep < 21 && <Button disabled={isDisqualified} size="large" type="primary" onClick={completeFormStep}>
						Next Step
					</Button>)}
				</ButtonWrapper>

			</Hero>
			<Modal visible={isModalVisible} footer={null}>
				<Disqulaified />
			</Modal>
			<Modal visible={showSucessModal} footer={null}>
                <Success />
            </Modal>
		</div>
	);
}
