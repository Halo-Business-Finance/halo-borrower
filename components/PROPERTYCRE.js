import React from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import cookie from "js-cookie";
import Router from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, notification, Space } from "antd";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { Disqulaified } from "./Organism/Disqualify";

const Hero = styled.div`
	padding: 40px 0% 40px 0%;
	font-family: Mulish;
	background-color: #e5e5e5;

	.goal {
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


export default function PROPERTYCRE() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [formValues, setFormValues] = useState({
		tenants: '',
		bankruptcy: '',
		bankruptcyYear: '',
		downpayment: '',
		business: '',
		property: '',
		propertyType: '',
		propertyState:"",
		occupy: '',
		ownership: '',
		commercial: '',
	});
	// const [propertyState, setPropertyState] = useState('');
	const [formstep, setFormstep] = React.useState(1);

	const completeFormStep = () => {
		if (formValues.tenants == '1' || (formValues.bankruptcyYear != '' && formValues.bankruptcyYear < 7)) {
			isUserDisqualified();
			return;
		}
		if (formValues.downpayment != '' && Number(formValues.downpayment) < 20) {
			isUserDisqualified();
			return;
		}

		if (formstep === 4 && formValues.propertyState !== 'Owner') {
			setFormstep(6);
			return;
		}
		if (formstep == 9 && formValues.bankruptcy !== 'Yes') {
			setFormstep(11);
			return;
		}
		setFormstep(formstep + 1);
	};

	const onPreviousForm = () => {
		if (formstep === 6 && formValues.propertyState !== 'Owner') {
			setFormstep(4);
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
	}
	return (
		<div>
			{formstep}
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
					</section>
				}{
					formstep === 4 &&

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
					</section>
				}




				{(formstep === 5 && formValues.propertyType == 'Owner') && <section>
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
				</section>}
				{formstep == 6 &&
					<section>
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
					</section>
				}
				{
					formstep == 7 &&

					<section>
						<div className="goal">
							<div className="cast">Dollar Amount Wanted </div>
							<div className="term">
								<input checked={formValues.tenants == "1" ? true : false} onChange={(e) => onFormChange(e, 'tenants')} type="radio" name="amount" value="1" />
								<label className="radio">25,000</label>
							</div>
							<div className="term">
								<input checked={formValues.tenants == "2" ? true : false} onChange={(e) => onFormChange(e, 'tenants')} type="radio" name="amount" value="2" />
								<label className="radio">250,000 - 1,000,000</label>
							</div>
							<div className="term">
								<input checked={formValues.tenants == "3" ? true : false} onChange={(e) => onFormChange(e, 'tenants')} type="radio" name="amount" value="3" />
								<label className="radio">1,000,000 - 5,000,000</label>
							</div>
							<div className="term">
								<input checked={formValues.tenants == "4" ? true : false} onChange={(e) => onFormChange(e, 'tenants')} type="radio" name="amount" value="4" />
								<label className="radio">5,000,000 - 25,000,000</label>
							</div>
							<div className="term">
								<input checked={formValues.tenants == "5" ? true : false} onChange={(e) => onFormChange(e, 'tenants')} type="radio" name="amount" value="5" />
								<label className="radio">25,000,000 - 100,000,000</label>
							</div>
						</div>
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
				</section>
				}
				{formstep == 11 &&
					<section>
						<div className="goal">
							<div className="cast">
								How much do you plan on putting down?
							</div>
							<div className="term">
								<input checked={formValues.downpayment == "10" ? true : false} onChange={(e) => onFormChange(e, 'downpayment')} type="radio" name="putting" value="10" />
								<label className="radio">10%</label>
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
								<input checked={formValues.downpayment == "100" ? true : false} onChange={(e) => onFormChange(e, 'downpayment')}  type="radio" name="putting" value="100" />
								<label className="radio">More then 30%</label>
							</div>
						</div>
					</section>
				}
				{formstep == 12 &&
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
					</section>
				}
				<br/>
				<Space>
					<Button size="large" type="ghost" onClick={onPreviousForm}>
						Previous
					</Button>
					<Button size="large"  className="button" onClick={completeFormStep}>
						Next Step
					</Button>
				</Space>

			</Hero>
			<Modal visible={isModalVisible} footer={null}>
				<Disqulaified />
			</Modal>
		</div>
	);
}
