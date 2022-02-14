import React from 'react';
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { Button, Modal, notification, Progress } from "antd";
import { zoomIn, fadeInRightBig } from 'react-animations';
import { Disqulaified } from '../Organism/Disqualify';
import { API } from '../../utils/api';

const bounceAnimation = keyframes`${zoomIn}`;
const fadeAnimation = keyframes`${fadeInRightBig}`;


const Hero = styled.div`
	padding: 40px 0% 40px 0%;
	font-family: Mulish;
	background-color: #fff;
    min-height: 300px;
	box-shadow: rgba(40, 120, 250, 0.1) 0px 4px 16px, rgba(40, 120, 250, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
	padding: 24px;

    & 	.goal {
		animation: 1s ${fadeAnimation};
		background-color: white;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		border-radius: 10px;
		padding: 10px 20px 10px 20px;
		margin-top: 20px;
	}
    & .cast {
		animation: 2s ${bounceAnimation};
		padding: 10px 10px 10px 10px;
		font-size: 20px;
	}
	& .term {
		margin: 10px 10px 10px 10px;
	}
    & 	.button {
		background-color: #f3ba17;
		padding: 10px 20px 10px 20px;
		margin-top: 20px;
		border-radius: 5px;
		font-size: 15px;
	}
    & .radio {
		margin-left: 15px;
	}
	& input {
		border-top-style: hidden;
		border-right-style: hidden;
		border-left-style: hidden;
	}
	& .outline:focus {
		outline: none;
	}
	& .other {
		margin-left: 15px;
	}
	& .other:focus {
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
color:red;
margin-top: 10px;
`;

const WorkingCapitalForm = () => {
	const [formstep, setFormstep] = React.useState(1);
	const [error, setErrors] = useState({
		bankruptcy: "",
		bankruptcyYear: "",
		businessYear: "",
		annualRevenue: "",
		businessType: "",
		proceeds: "",
		otheruse: "",
		termRequest: "",
		creditScore: "",
		franchise: "",
		loanAmount: "",
		ownership: "",
	});
	const [workingCapitalData, setWorkingCapitalData] = useState({
		bankruptcy: "",
		bankruptcyYear: "",
		businessYear: "",
		annualRevenue: "",
		businessType: "",
		proceeds: "",
		otheruse: "",
		termRequest: "",
		franchise: "",
		loanAmount: "",
		ownership: "",
		creditScore: "",
	})
	const [isModalVisible, setIsModalVisible] = useState(false);
	const completeFormStep = () => {
		if (workingCapitalData.bankruptcyYear == "0" || workingCapitalData.businessYear == "0" || Number(workingCapitalData.annualRevenue) < 20000 || workingCapitalData.creditScore == "score1") {
			setIsModalVisible(true)
			return;

		}
		if (formstep == 1 && workingCapitalData.bankruptcy == "") {
			setErrors({ ...error, bankruptcy: "Error" });
			return;
		}
		else if (formstep == 2 && workingCapitalData.bankruptcyYear == "" && workingCapitalData.bankruptcy == "Yes") {
			setErrors({ ...error, bankruptcyYear: "Error" });
			return;
		}
		else if (formstep == 3 && workingCapitalData.businessYear == "") {
			setErrors({ ...error, businessYear: "Error" });
			return;
		}
		else if (formstep == 4 && workingCapitalData.annualRevenue == "") {
			setErrors({ ...error, annualRevenue: "Error" });
			return;
		}
		else if (formstep == 5 && workingCapitalData.businessType == "") {
			setErrors({ ...error, businessType: "Error" });
			return;
		}
		else if (formstep == 6 && workingCapitalData.proceeds == "") {
			setErrors({ ...error, proceeds: "Error" });
			return;
		}
		else if (formstep == 7 && workingCapitalData.otheruse == "" && workingCapitalData.proceeds == "otherUse") {
			setErrors({ ...error, otheruse: "Error" });
			return;
		}
		else if (formstep == 8 && workingCapitalData.termRequest == "") {
			setErrors({ ...error, termRequest: "Error" });
			return;
		}
		else if (formstep == 9 && workingCapitalData.creditScore == "") {
			setErrors({ ...error, creditScore: "Error" });
			return;
		}
		else if (formstep == 10 && workingCapitalData.franchise == "") {
			setErrors({ ...error, franchise: "Error" });
			return;
		}
		else if (formstep == 11 && workingCapitalData.loanAmount == "") {
			setErrors({ ...error, loanAmount: "Error" });
			return;
		}
		else if (formstep == 12 && workingCapitalData.ownership == "") {
			setErrors({ ...error, ownership: "Error" });
			return;
		}


		if (workingCapitalData.bankruptcy == "No" && formstep == 1) {
			setFormstep(3)
			return;
		}
		if (workingCapitalData.proceeds == "businessExpansion" && formstep == 6) {
			setFormstep(8)
			return;
		}

		setFormstep(formstep + 1);

	};
	const previousStep = () => {
		if (workingCapitalData.bankruptcy == "No" && formstep == 3) {
			setFormstep(1)
			return;
		}
		if (workingCapitalData.proceeds == "businessExpansion" && formstep == 8) {
			setFormstep(6)
			return;
		}

		setFormstep(formstep - 1)
	}
	const onChangeHandler = (name, e) => {

		setWorkingCapitalData({
			...workingCapitalData,
			[name]: e.target.value
		})
		setErrors({
			...error,
			[name]: ""
		})
	}
	const [loading, setLoading] = useState(false)
	const formHandler = async () => {
		setLoading(true)
		try {
			const userData = sessionStorage.getItem("user");
			const parsedData = JSON.parse(userData);
			const data = {
				"loanTypes": 106,
				"nameOfBusiness": parsedData?.businessName,
				"nameOfBorrower": parsedData?.borrowerName,
				"emailOfBorrower": parsedData?.email,
				"phoneNumber": parsedData?.phoneNumber,
				"prequalifyAnswers": workingCapitalData,
				"accepted": true
			}
			await API.post("/api/borrower/create-prequalify-request", data)
			notification.success({ message: "Form submitted successfully" })

		} catch (error) {
			notification.error({ message: 'Error Occured', description: error?.data?.reason || "Something went wrong, Please try again" })
		}
		setLoading(false)
	}
	return (
		<div>
			<Progress
				strokeColor={{
					'0%': '#108ee9',
					'100%': '#87d068',
				}}
				percent={Math.ceil((formstep / 12) * 100)}

			/>
			<Hero>
				<>
					{formstep == 1 && <section>

						<div className="goal">
							<div className="cast">Ever File Bankruptcy?</div>
							<div className="term">
								<input checked={workingCapitalData.bankruptcy == "Yes" ? true : false} onChange={(e) => onChangeHandler("bankruptcy", e)} type="radio" name="bankruptcy" value="Yes" />
								<label className="radio">Yes</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.bankruptcy == "No" ? true : false}
									onChange={(e) => onChangeHandler("bankruptcy", e)} type="radio" name="bankruptcy" value="No" />
								<label className="radio">No</label>
							</div>
						</div>
						<ErrorMessage>{error.bankruptcy && "Please select to continue"}</ErrorMessage>
					</section>}
					{(workingCapitalData.bankruptcy == 'Yes' && formstep == 2) && <section>

						<div className="goal">
							<div className="cast">If So, When?</div>

							<div className="term">
								<input
									checked={workingCapitalData.bankruptcyYear == "0" ? true : false}
									onChange={(e) => onChangeHandler('bankruptcyYear', e)} type="radio" name="bankruptcyYear" value="0" />
								<label className="radio">Less than 5 years</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.bankruptcyYear == "10" ? true : false}
									onChange={(e) => onChangeHandler('bankruptcyYear', e)} type="radio" name="bankruptcyYear" value="10" />
								<label className="radio">5 or More than 5 years</label>
							</div>
						</div>
						<ErrorMessage>{error.bankruptcyYear && "Please select to continue"}</ErrorMessage>
					</section>}
					{formstep == 3 && <section>
						<div className="goal">
							<div className="cast">How long have you been in Business? </div>

							<div className="term">
								<input checked={workingCapitalData.businessYear == "0" ? true : false} onChange={(e) => onChangeHandler('businessYear', e)} type="radio" name="goal" value="0" />
								<label className="radio">0 - 1 Years</label>
							</div>
							<div className="term">
								<input checked={workingCapitalData.businessYear == "1" ? true : false} onChange={(e) => onChangeHandler('businessYear', e)} type="radio" name="goal" value="1" />
								<label className="radio">1 - 2 Years</label>
							</div>
							<div className="term">
								<input checked={workingCapitalData.businessYear == "2" ? true : false} onChange={(e) => onChangeHandler('businessYear', e)} type="radio" name="goal" value="2" />
								<label className="radio">2+ Years</label>
							</div>
						</div>
						<ErrorMessage>{error.businessYear && "Please select to continue"}</ErrorMessage>
					</section>}
					{formstep == 4 && <section>
						<div className="goal">
							<div className="cast">Annual Revenue </div>
							<div className="term">
								<input

									onChange={(e) => onChangeHandler("annualRevenue", e)} type="number" name="amount" value={workingCapitalData.annualRevenue} />

							</div>

						</div>
						<ErrorMessage>{error.annualRevenue && "Please select to continue"}</ErrorMessage>
					</section>
					}
					{formstep == 5 && <section>
						<div className="goal">
							<div>
								<div className="cast">What area of business are you in?</div>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.businessType == "Industrial" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)} type="radio" name="property" value="Industrial" />
								<label className="radio">Industrial</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.businessType == "Retail" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)} type="radio" name="property" value="Retail" />
								<label className="radio">Retail</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.businessType == "Office/Condo" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)} type="radio" name="property" value="Office/Condo" />
								<label className="radio">Office / Condo</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.businessType == "MixedUse" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)} type="radio" name="property" value="MixedUse" />
								<label className="radio">Mixed Use</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.businessType == "MultiFamily" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)} type="radio" name="property" value="MultiFamily" />
								<label className="radio">Multi-Family</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.businessType == "ApartmentMultiFamily" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)}
									type="radio"
									name="property"
									value="ApartmentMultiFamily"
								/>
								<label className="radio">Apartment Multi-Family</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.businessType == "InvestmentProperty" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)}
									type="radio"
									name="property"
									value="InvestmentProperty"
								/>
								<label className="radio">Investment Property</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.businessType == "Hospitality" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)} type="radio" name="property" value="Hospitality" />
								<label className="radio">Hospitality</label>
							</div>
							<div className="term">
								<input checked={workingCapitalData.businessType == "FoodBeverage" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)} type="radio" name="property" value="FoodBeverage" />
								<label className="radio">Food / Beverage</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.businessType == "FarmLand" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)} type="radio" name="property" value="FarmLand" />
								<label className="radio">Farm & Land</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.businessType == "GasStation" ? true : false}
									onChange={(e) => onChangeHandler("businessType", e)} type="radio" name="property" value="GasStation" />
								<label className="radio">Gas Station</label>
							</div>
						</div>
						<ErrorMessage>{error.businessType && "Please select to continue"}</ErrorMessage>
					</section>
					}
					{formstep == 6 && <section>
						<div className="goal">
							<div className="cast">Use of Proceeds  </div>
							<div className="term">
								<input
									checked={workingCapitalData.proceeds == "businessExpansion" ? true : false}
									onChange={(e) => onChangeHandler("proceeds", e)} type="radio" name="amount" value="businessExpansion" />
								<label className="radio">Business Expanison</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.proceeds == "otherUse" ? true : false}
									onChange={(e) => onChangeHandler("proceeds", e)} type="radio" name="amount" value="otherUse" />
								<label className="radio">Other Use</label>
							</div>
						</div>
						<ErrorMessage>{error.proceeds && "Please select to continue"}</ErrorMessage>
					</section>
					}
					{formstep == 7 && <section>
						<div className="goal">
							<div className="cast">If Other use, Please Specify</div>
							<div className="term">
								<input
									value={workingCapitalData.otheruse}
									onChange={(e) => onChangeHandler("otheruse", e)}
									className="outline"
									type="text"
									placeholder="Your answer"
								/>
							</div>
						</div>
						<ErrorMessage>{error.otheruse && "Please Enter"}</ErrorMessage>
					</section>
					}
					{formstep == 8 && <section>
						<div className="goal">
							<div className="cast">Loan Term Requested  </div>
							<div className="term">
								<input
									checked={workingCapitalData.termRequest == "term1" ? true : false}
									onChange={(e) => onChangeHandler("termRequest", e)} type="radio" name="term" value="term1" />
								<label className="radio">3-24 Months</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.termRequest == "term2" ? true : false}
									onChange={(e) => onChangeHandler("termRequest", e)} type="radio" name="term" value="term2" />
								<label className="radio">2-5 Years</label>
							</div>
							<div className="term">
								<input checked={workingCapitalData.termRequest == "term3" ? true : false} onChange={(e) => onChangeHandler("termRequest", e)} type="radio" name="term" value="term3" />
								<label className="radio">7-10 Years</label>
							</div>
						</div>
						<ErrorMessage>{error.termRequest && "Please select to continue"}</ErrorMessage>
					</section>
					}
					{formstep == 9 && <section>
						<div className="goal">
							<div className="cast">What is your credit score look like?  </div>
							<div className="term">
								<input
									checked={workingCapitalData.creditScore == "score1" ? true : false}
									onChange={(e) => onChangeHandler("creditScore", e)} type="radio" name="score" value="score1" />
								<label className="radio">579 or Less</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.creditScore == "score2" ? true : false}
									onChange={(e) => onChangeHandler("creditScore", e)} type="radio" name="score" value="score2" />
								<label className="radio">580-620</label>
							</div>
							<div className="term">
								<input checked={workingCapitalData.creditScore == "score3" ? true : false}
									onChange={(e) => onChangeHandler("creditScore", e)} type="radio" name="score" value="score3" />
								<label className="radio">620-680</label>
							</div>
							<div className="term">
								<input checked={workingCapitalData.creditScore == "score4" ? true : false}
									onChange={(e) => onChangeHandler("creditScore", e)} type="radio" name="score" value="score4" />
								<label className="radio">680-740</label>
							</div>

						</div>
						<ErrorMessage>{error.creditScore && "Please select to continue"}</ErrorMessage>
					</section>
					}
					{formstep == 10 && <section>
						<div className="goal">
							<div className="cast">
								Is this a Franchise?
							</div>
							<div className="term">
								<input checked={workingCapitalData.franchise == "Yes" ? true : false}
									onChange={(e) => onChangeHandler("franchise", e)} type="radio" name="franchise" value="Yes" />
								<label className="radio">Yes</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.franchise == "No" ? true : false}
									onChange={(e) => onChangeHandler("franchise", e)} type="radio" name="franchise" value="No" />
								<label className="radio">No</label>
							</div>
						</div>
						<ErrorMessage>{error.franchise && "Please select to continue"}</ErrorMessage>
					</section>
					}
					{formstep == 11 && <section>
						<div className="goal">
							<div className="cast">Loan Request Amount?  </div>
							<div className="term">
								<input
									checked={workingCapitalData.loanAmount == "1" ? true : false}
									onChange={(e) => onChangeHandler("loanAmount", e)} type="radio" name="amount" value="1" />
								<label className="radio">25,000</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.loanAmount == "2" ? true : false}
									onChange={(e) => onChangeHandler("loanAmount", e)} type="radio" name="amount" value="2" />
								<label className="radio">250,000 - 1,000,000</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.loanAmount == "3" ? true : false}
									onChange={(e) => onChangeHandler("loanAmount", e)} type="radio" name="amount" value="3" />
								<label className="radio">1,000,000 - 5,000,000</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.loanAmount == "4" ? true : false}
									onChange={(e) => onChangeHandler("loanAmount", e)} type="radio" name="amount" value="4" />
								<label className="radio">5,000,000 - 25,000,000</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.loanAmount == "5" ? true : false}
									onChange={(e) => onChangeHandler("loanAmount", e)} type="radio" name="amount" value="5" />
								<label className="radio">25,000,000 - 100,000,000</label>
							</div>
						</div>
						<ErrorMessage>{error.loanAmount && "Please select to continue"}</ErrorMessage>
					</section>
					}
					{(formstep == 12 || formstep == 13) && <section>
						<div className="goal">
							<div className="cast">Ownership Structure </div>
							<div className="term">
								<input
									checked={workingCapitalData.ownership == "LLC" ? true : false}
									onChange={(e) => onChangeHandler("ownership", e)} type="radio" name="amount" value="LLC" />
								<label className="radio">LLC</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.ownership == "CCORP" ? true : false}
									onChange={(e) => onChangeHandler("ownership", e)} type="radio" name="amount" value="CCORP" />
								<label className="radio">C-Corp</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.ownership == "SCORP" ? true : false}
									onChange={(e) => onChangeHandler("ownership", e)} type="radio" name="amount" value="SCORP" />
								<label className="radio">S-CORP</label>
							</div>
							<div className="term">
								<input checked={workingCapitalData.ownership == "Partnership" ? true : false}
									onChange={(e) => onChangeHandler("ownership", e)} type="radio" name="amount" value="Partnership" />
								<label className="radio">Partnership</label>
							</div>
						</div>
						<ErrorMessage>{error.ownership && "Please select to continue"}</ErrorMessage>
					</section>
					}
				</>
				<ButtonWrapper>
					{(formstep > 1 && formstep < 13) && <StyledButton disabled={formstep == 1} size="large" onClick={previousStep} type="dashed">Previous Step</StyledButton>}
					{formstep == 13 ? <Button loading={loading} onClick={formHandler} type="primary">Submit</Button> : (formstep < 13 && <Button size="large" type="primary" onClick={completeFormStep}>
						Next Step
					</Button>)}
				</ButtonWrapper>
				<Modal visible={isModalVisible} footer={null}>
					<Disqulaified />
				</Modal>



			</Hero>



		</div>
	);
}

export { WorkingCapitalForm };
