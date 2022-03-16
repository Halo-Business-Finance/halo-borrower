import React from "react";
import styled, { keyframes } from "styled-components";

import { useForm } from "react-hook-form";

import { useState } from "react";

import { Button, Modal, notification, Progress, Space } from "antd";
import { zoomIn, fadeInRightBig } from 'react-animations'
import {API} from '../utils/api';

import { Disqulaified } from "./Organism/Disqualify";
import { Success } from "./Organism/Success";
const bounceAnimation = keyframes`${zoomIn}`;
const fadeAnimation = keyframes`${fadeInRightBig}`;
const Hero = styled.div`
	padding: 40px 0% 40px 0%;
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
		/* height: 40px; */
		/* padding: 10px 20px 10px 20px; */
		/* margin-top: 20px; */
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


export default function PROPERTYCRE() {
	const [isLoading, setIsLoading] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [showSucessModal, setshowSucessModal] = useState(false);
	const [error, setErrors] = useState({
		business: '',
		property: '',
		propertyType: '',
		propertyState: "",
		occupy: '',
		tenants: '',
		amount: '',
		ownership: '',
		bankruptcy: '',
		bankruptcyYear: '',
		downpayment: '',
		commercial: '',
	});
	const [formValues, setFormValues] = useState({
		business: '',
		property: '',
		propertyType: '',
		propertyState: "",
		occupy: '',
		tenants: '',
		amount: '',
		ownership: '',
		bankruptcy: '',
		bankruptcyYear: '',
		downpayment: '',
		commercial: '',
	});
	const [formstep, setFormstep] = React.useState(1);

	const completeFormStep = () => {
		if (formValues.amount != '' && Number(formValues.amount) < 250000 || (formValues.bankruptcyYear != '' && formValues.bankruptcyYear < 7)) {
			setIsModalVisible(true)
			return;
		}
		if (formValues.downpayment != '' && Number(formValues.downpayment) < 20) {
			setIsModalVisible(true)
			return;
		}
		if (formstep == 1 && formValues.business == "") {
			setErrors({ ...error, business: "Error" });
			return;
		}
		else if (formstep == 2 && formValues.property == "") {
			setErrors({ ...error, property: "Error" });
			return;
		}
		else if (formstep == 3 && formValues.propertyType == "") {
			setErrors({ ...error, propertyType: "Error" });
			return;
		}
		else if (formstep == 4 && formValues.propertyState == "") {
			setErrors({ ...error, propertyState: "Error" });
			return;
		}
		else if (formstep == 5 && formValues.occupy == "") {
			setErrors({ ...error, occupy: "Error" });
			return;
		}
		else if (formstep == 6 && formValues.tenants == "") {
			setErrors({ ...error, tenants: "Error" });
			return;
		}
		else if (formstep == 7 && formValues.amount == "") {
			setErrors({ ...error, amount: "Error" });
			return;
		}
		else if (formstep == 8 && formValues.ownership == "") {
			setErrors({ ...error, ownership: "Error" });
			return;
		}
		else if (formstep == 9 && formValues.bankruptcy == "") {
			setErrors({ ...error, bankruptcy: "Error" });
			return;
		}
		else if (formstep == 10 && formValues.bankruptcyYear == "") {
			setErrors({ ...error, bankruptcyYear: "Error" });
			return;
		}
		else if (formstep == 11 && formValues.downpayment == "") {
			setErrors({ ...error, downpayment: "Error" });
			return;
		}
		else if (formstep == 12 && formValues.commercial == "") {
			setErrors({ ...error, commercial: "Error" });
			return;
		}

		if (formValues.propertyState == "Investment" && formstep == 4) {
			setFormstep(6)
			return;
		}
		if (formstep == 9 && formValues.bankruptcy !== 'Yes') {
			setFormstep(11);
			return;
		}
		setFormstep(formstep + 1);
	};

	const previousStep = () => {
		if (formValues.propertyState == "Investment" && formstep == 6) {
			setFormstep(4)
			return;
		}
		if (formstep == 11 && formValues.bankruptcy !== 'Yes') {
			setFormstep(9);
			return;
		}
		setFormstep(formstep - 1);
	}

	console.log(formValues.tenants);
	const isUserDisqualified = () => {
		setIsModalVisible(true);
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
		setIsLoading(true)
		const userData=sessionStorage.getItem("user");
        const parsedData=JSON.parse(userData);
        const data = {
            "loanTypes": 103,
            "nameOfBusiness":parsedData?.businessName,
            "nameOfBorrower": parsedData?.borrowerName,
            "emailOfBorrower": parsedData?.email,
            "phoneNumber": parsedData?.phoneNumber,
			"amountToBeBorrowed":formValues.amount,
			"prequalifyAnswers": formValues,
			"accepted": true
		}
		try {
			await API.post("/api/borrower/create-prequalify-request", data)
			notification.success({ message: "Form submitted successfully" })
			setshowSucessModal(true)


		} catch (error) {
			notification.error({ message: 'Error Occured', description: error?.data?.reason || "Something went wrong, Please try again" })
		}
		setIsLoading(false)
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
				{formstep === 1 &&

					<section>
						<div className="goal">
							<div>
								<div className="cast">
									Years in Business or Investment Experience
								</div>
							</div>
							<div className="term">
								<input checked={formValues.business == "0" ? true : false} onChange={(e) => onFormChange(e, 'business')} type="radio" name="years" value="0" />
								<label className="radio">Less than a year</label>
							</div>
							<div className="term">
								<input checked={formValues.business == "1" ? true : false} onChange={(e) => onFormChange(e, 'business')} type="radio" name="years" value="1" />
								<label className="radio">Less than 2 Years</label>
							</div>
							<div className="term">
								<input checked={formValues.business == "2" ? true : false} onChange={(e) => onFormChange(e, 'business')} type="radio" name="years" value="2" />
								<label className="radio">More then 2 Years</label>
							</div>
							<div className="term">
								<input checked={formValues.business == "3" ? true : false} onChange={(e) => onFormChange(e, 'business')}
									type="radio"
									name="years"
									value="3"
								/>
								<label className="radio">Investment Property</label>
							</div>
						</div>
						<ErrorMessage>{error.business && "Please select to continue"}</ErrorMessage>
					</section>
				}
				{formstep === 2 &&
					<section>
						<div className="goal">
							<div className="cast">Property Address</div>
							<div className="term">
								<input value={formValues.property} onChange={(e) => onFormChange(e, 'property')}
									className="outline"
									type="text"
									placeholder="Your answer"
								/>
							</div>
						</div>
						<ErrorMessage>{error.property && "Please Enter"}</ErrorMessage>
					</section>
				}
				{formstep === 3 &&
					<section>
						<div className="goal">
							<div>
								<div className="cast">Property Type</div>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Industrial" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="Industrial" />
								<label className="radio">Industrial</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Retail" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="Retail" />
								<label className="radio">Retail</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "office" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="office" />
								<label className="radio">Office / Condo</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Mixed" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="Mixed" />
								<label className="radio">Mixed Use</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Multi" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="Multi" />
								<label className="radio">Multi-Family </label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Apartment" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')}
									type="radio"
									name="property"
									value="Apartment"
								/>
								<label className="radio">Apartment Multi-Family</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "InvestmentProperty" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="InvestmentProperty" />
								<label className="radio">Investment Property</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Hospitality" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="Hospitality" />
								<label className="radio">Hospitality</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Food/Beverage" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')}
									type="radio"
									name="property"
									value="Food/Beverage"
								/>
								<label className="radio">Food/Beverage</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "Farm&Land" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="Farm&Land" />
								<label className="radio">Farm & Land</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyType == "gas" ? true : false} onChange={(e) => onFormChange(e, 'propertyType')} type="radio" name="property" value="gas" />
								<label className="radio">Gas Station</label>
							</div>
						</div>
						<ErrorMessage>{error.propertyType && "Please select to continue"}</ErrorMessage>
					</section>
				}
				{formstep === 4 &&

					<section>
						<div className="goal">
							<div className="cast">
								Owner Occupied or Investment Property
							</div>
							<div className="term">
								<input checked={formValues.propertyState == "Owner" ? true : false} onChange={(e) => onFormChange(e, 'propertyState')} type="radio" name="occupied" value="Owner" />
								<label className="radio">Owner</label>
							</div>
							<div className="term">
								<input checked={formValues.propertyState == "Investment" ? true : false} onChange={(e) => onFormChange(e, 'propertyState')} type="radio" name="occupied" value="Investment" />
								<label className="radio">Investment</label>
							</div>
						</div>
						<ErrorMessage>{error.propertyState && "Please select to continue"}</ErrorMessage>
					</section>
				}
				{(formValues.propertyState == 'Owner' && formstep == 5) &&
					<section>
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
					</section>}
				{formstep == 6 &&
					<section>
						<div className="goal">
							<div className="cast">How many Tenants or Units</div>
							<div className="term">
								<input value={formValues.tenants} onChange={(e) => onFormChange(e, 'tenants')}
									className="outline"
									type="number"
									placeholder="Only Number"
								/>
							</div>
						</div>
						<ErrorMessage>{error.tenants && "Please Enter"}</ErrorMessage>
					</section>
				}
				{
					formstep == 7 &&

					<section>
						<div className="goal">
							<div className="cast">Loan Amount Requested</div>
							<div className="term">
							<input value={formValues.amount} onChange={(e) => onFormChange(e, 'amount')}
										className="outline"
										type="number"
										placeholder="Only Number"
									/>
							</div>
						</div>
						<ErrorMessage>{error.amount && "Please select to continue"}</ErrorMessage>
					</section>
				}
				{
					formstep == 8 &&

					<section>
						<div className="goal">
							<div className="cast">Ownership Structure </div>
							<div className="term">
								<input checked={formValues.ownership == "1" ? true : false} onChange={(e) => onFormChange(e, 'ownership')} type="radio" name="amount" value="1" />
								<label className="radio">LLC</label>
							</div>
							<div className="term">
								<input checked={formValues.ownership == "2" ? true : false} onChange={(e) => onFormChange(e, 'ownership')} type="radio" name="amount" value="2" />
								<label className="radio">C-Corp</label>
							</div>
							<div className="term">
								<input checked={formValues.ownership == "3" ? true : false} onChange={(e) => onFormChange(e, 'ownership')} type="radio" name="amount" value="3" />
								<label className="radio">S-CORP</label>
							</div>
							<div className="term">
								<input checked={formValues.ownership == "4" ? true : false} onChange={(e) => onFormChange(e, 'ownership')} type="radio" name="amount" value="4" />
								<label className="radio">Partnership</label>
							</div>
						</div>
						<ErrorMessage>{error.ownership && "Please select to continue"}</ErrorMessage>
					</section>

				}
				{formstep == 9 &&

					<section>
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
					</section>
				}
				{(formstep == 10 && formValues.bankruptcy == 'Yes') && <section>
					<div className="goal">
						<div className="cast">If So, When?</div>
						<div className="term">
							<input checked={formValues.bankruptcyYear == "0" ? true : false} onChange={(e) => onFormChange(e, 'bankruptcyYear')} type="radio" name="bankruptcyYear" value="0" />
							<label className="radio">Less than 7 years</label>
						</div>
						<div className="term">
							<input checked={formValues.bankruptcyYear == "10" ? true : false} onChange={(e) => onFormChange(e, 'bankruptcyYear')} type="radio" name="bankruptcyYear" value="10" />
							<label className="radio">7 or More than 7 years</label>
						</div>
					</div>
					<ErrorMessage>{error.bankruptcyYear && "Please select to continue"}</ErrorMessage>
				</section>
				}
				{formstep == 11 &&
					<section>
						<div className="goal">
							<div className="cast">
								How much do you plan on putting down?
							</div>
							
							<div className="term">
								<input checked={formValues.downpayment == "20" ? true : false} onChange={(e) => onFormChange(e, 'downpayment')} type="radio" name="putting" value="20" />
								<label className="radio">20%</label>
							</div>
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
					</section>
				}
				{(formstep == 12 || formstep ==13) &&
					<section>
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
					</section>
				}
				<ButtonWrapper>
					{(formstep > 1 && formstep < 13) && <StyledButton disabled={formstep == 1} size="large" onClick={previousStep} type="dashed">Previous Step</StyledButton>}
					{formstep == 13 ? <Button loading={isLoading} onClick={formHandler} type="primary">Submit</Button> : (formstep < 13 &&<Button size="large" type="primary" onClick={completeFormStep}>
						Next Step
					</Button>)}
				</ButtonWrapper>
				<Modal amount={formValues.amount} visible={isModalVisible} footer={null}>
					<Disqulaified />
				</Modal>
				<Modal  visible={showSucessModal} footer={null}>
                <Success amount={formValues.amount} />
            </Modal>
			</Hero>

		</div>
	);
}
