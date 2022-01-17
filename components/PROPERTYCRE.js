import React from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import cookie from "js-cookie";
import Router from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { RadioGroup, RadioButton } from "react-radio-buttons";

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
		padding: 10px 20px 10px 20px;
		margin-top: 20px;
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
	const [formValues, setFormValues] = useState({
		tenants:'',
		bankruptcy:'',
		bankruptcyYear:'',
		downpayment:'',
		business:'',
		property:'',
		propertyType:'',
		occupy:'',
		ownership:'',
		commercial:'',
	});
	const [propertyState, setPropertyState] = useState('');
	const [formstep, setFormstep] = React.useState(0);

	const completeFormStep = () => {
		setFormstep(formstep + 1);
	};
	const onChange= (e) => {
		setPropertyState(e.target.value)
			}
		console.log(formValues.tenants);
		const isUserDisqualified=()=> {
			notification.error({
				message:'Disqualified'
			})	
		}
		const onFormChange = (e,name) => {
			setFormValues({
				...formValues,
				[name]:e.target.value

			})
		}
		useEffect(() => {
			if(formValues.tenants=='1'||(formValues.bankruptcyYear!=''&& formValues.bankruptcyYear<7)){
			isUserDisqualified()
			}
			if(formValues.downpayment!=''&& Number(formValues.downpayment)<20){
			isUserDisqualified()	
			}
		},[formValues.tenants,formValues.bankruptcyYear,formValues.downpayment])
	return (
		<div>
			<Hero>
				{formstep === 1 && (
					<>
						<section>
							<div className="goal">
								<div>
									<div className="cast">
										Years in Business or Investment Experience
									</div>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'business')}  type="radio" name="years" value="Less than a year" />
									<label className="radio">Less than a year</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'business')}  type="radio" name="years" value="Less than 2 Years" />
									<label className="radio">Less than 2 Years</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'business')}  type="radio" name="years" value="More then 2 Years" />
									<label className="radio">More then 2 Years</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'business')} 
										type="radio"
										name="years"
										value="Investment Property"
									/>
									<label className="radio">Investment Property</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">Property Address</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'property')} 
										className="outline"
										type="text"
										placeholder="Your answer"
									/>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div>
									<div className="cast">Property Type</div>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}  type="radio" name="property" value="Food / Beverage" />
									<label className="radio">Industrial</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   type="radio" name="property" value="Industrial" />
									<label className="radio">Retail</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   type="radio" name="property" value="Mixed Use" />
									<label className="radio">Office / Condo</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   type="radio" name="property" value="Retail" />
									<label className="radio">Mixed Use</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   type="radio" name="property" value="Office / Condo" />
									<label className="radio">Multi-Family </label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}  
										type="radio"
										name="property"
										value="Investment Property"
									/>
									<label className="radio">Apartment Multi-Family</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   type="radio" name="property" value="Multi-Family" />
									<label className="radio">Investment Property</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   type="radio" name="property" value="Hospitality" />
									<label className="radio">Hospitality</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}  
										type="radio"
										name="property"
										value="Apartment Multi-Family"
									/>
									<label className="radio">Food/Beverage</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   type="radio" name="property" value="Farm & Land" />
									<label className="radio">Farm & Land</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   type="radio" name="property" value="gas" />
									<label className="radio">Gas Station</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">
									Owner Occupied or Investment Property
								</div>
								<div className="term">
									<input onChange={onChange}  type="radio" name="occupied" value="Owner" />
									<label className="radio">Owner</label>
								</div>
								<div className="term">
									<input onChange={onChange} type="radio" name="occupied" value="Investment" />
									<label className="radio">Investment</label>
								</div>
							</div>
						</section>
					</>
				)}
				{formstep === 2 && (
					<>
					{propertyState=='Owner'&&<section>
						<div className="goal">
							<div className="cast">
								Will You Occupy 51% or more of the space
							</div>
							<div className="term">
								<input  onChange={(e)=> onFormChange(e,'occupy')} type="radio" name="more" value="Yes" />
								<label className="radio">Yes</label>
							</div>
							<div className="term">
								<input  onChange={(e)=> onFormChange(e,'occupy')} type="radio" name="more" value="No" />
								<label className="radio">No</label>
							</div>
						</div>
					</section>}
					<>
						<section>
							<div className="goal">
								<div className="cast">How many Tenants or Units</div>
								<div className="term">
									<input  onChange={(e)=> onFormChange(e,'tenants')}
										className="outline"
										type="text"
										placeholder="Your answer"
									/>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">Dollar Amount Wanted </div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'tenants')} type="radio" name="amount" value="1" />
									<label className="radio">25,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'tenants')} type="radio" name="amount" value="2" />
									<label className="radio">250,000 - 1,000,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'tenants')} type="radio" name="amount" value="3" />
									<label className="radio">1,000,000 - 5,000,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'tenants')} type="radio" name="amount" value="4" />
									<label className="radio">5,000,000 - 25,000,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'tenants')} type="radio" name="amount" value="5" />
									<label className="radio">25,000,000 - 100,000,000</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">Ownership Structure </div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'ownership')}  type="radio" name="amount" value="dollar" />
									<label className="radio">LLC</label>
								</div>
								<div className="term">
									<input  onChange={(e)=> onFormChange(e,'ownership')}   type="radio" name="amount" value="dollar" />
									<label className="radio">C-Corp</label>
								</div>
								<div className="term">
									<input  onChange={(e)=> onFormChange(e,'ownership')}   type="radio" name="amount" value="dollar" />
									<label className="radio">S-CORP</label>
								</div>
								<div className="term">
									<input  onChange={(e)=> onFormChange(e,'ownership')}   type="radio" name="amount" value="dollar" />
									<label className="radio">Partnership</label>
								</div>
							</div>
						</section>
						</>
					</>
				)}
				{formstep === 3&& (
					<>
						<section>
							<div className="goal">
								<div className="cast">Ever File Bankruptcy?</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'bankruptcy')} type="radio" name="bankruptcy" value="Yes" />
									<label className="radio">Yes</label>
								</div>
								<div className="term">
									<input  onChange={(e)=> onFormChange(e,'bankruptcy')} type="radio" name="bankruptcy" value="No" />
									<label className="radio">No</label>
								</div>
							</div>
						</section>
{formValues.bankruptcy=='Yes'&&	<section>
						<div className="goal">
							<div className="cast">If So, When?</div>
							<div className="term">
									<input onChange={(e)=> onFormChange(e,'bankruptcyYear')} type="radio" name="bankruptcyYear" value="0" />
									<label className="radio">Less than 7 years</label>
								</div>
								<div className="term">
									<input  onChange={(e)=> onFormChange(e,'bankruptcyYear')} type="radio" name="bankruptcyYear" value="10" />
									<label className="radio">7 or More than 7 years</label>
								</div>
						</div>
					</section>}
						<section>
							<div className="goal">
								<div className="cast">
									How much do you plan on putting down?
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'downpayment')} type="radio" name="putting" value="10" />
									<label className="radio">10%</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'downpayment')}  type="radio" name="putting" value="20" />
									<label className="radio">20%</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'downpayment')}  type="radio" name="putting" value="30" />
									<label className="radio">30%</label>
								</div>
								<div className="term">
									<input type="radio" name="putting" value="100" />
									<label onChange={(e)=> onFormChange(e,'downpayment')}  className="radio">More then 30%</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">
									Do you have any other commercial properties?
								</div>
								<div className="term">
									<input  onChange={(e)=> onFormChange(e,'commercial')}   type="radio" name="commercial" value="Yes" />
									<label className="radio">Yes</label>
								</div>
								<div className="term">
									<input  onChange={(e)=> onFormChange(e,'commercial')}   type="radio" name="commercial" value="No" />
									<label className="radio">No</label>
								</div>
							</div>
						</section>
					</>
				)}

				<button type="button" className="button" onClick={completeFormStep}>
					Next Step
				</button>
			</Hero>
		</div>
	);
}
