import React from "react";
import styled from "styled-components";
import {notification} from 'antd';
import { useEffect, useState } from "react";

const Hero = styled.div`
	padding: 40px 40px 40px 40px;
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

	.loan-type-contain img {
		max-width: 80px !important;
	}
	.outline:focus {
		outline: none;
	}
`;

export default function CRE() {
	const [formValues, setFormValues] = useState({
		tenants:'',
		bankruptcy:'',
		bankruptcyYear:'',
		downpayment:'',
		goal:'',
		cash:'',
		business:'',
		property:'',
		propertyType:'',
		occupy:'',
		ownership:'',
		commercial:'',
	});
	const [propertyState, setPropertyState] = useState('');
	const [formstep, setFormstep] = React.useState(1);

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
			if(formValues.tenants=='1'|| formValues.bankruptcyYear=="0"){
			isUserDisqualified()
			}
			if(formValues.downpayment!=''&& Number(formValues.downpayment)<20){
			isUserDisqualified()	
			}
		},[formValues.tenants,formValues.bankruptcyYear,formValues.downpayment])
	return (
		<div>
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

				{formstep === 1 && (
					<>
					
						<section>
							<div className="goal">
								<div className="cast">What is your goal?</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'goal')}  type="radio" name="goal" value="CastOut" />
									<label className="radio">Cast Out Refinance</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'goal')}  type="radio" name="goal" value="RateAndTerm" />
									<label className="radio">Rate and Term only</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">If Cash Out, How much?</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'cash')} 
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
									<div className="cast">
										Years in Business or Investment Experience
									</div>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'business')}  type="radio" name="years" value="1" />
									<label className="radio">Less than a year</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'business')}   type="radio" name="years" value="2" />
									<label className="radio">Less than 2 Years</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'business')}   type="radio" name="years" value="3" />
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
					</>
				)}

				{formstep === 2 && (
					<>
						<section>
							<div className="goal">
								<div>
									<div className="cast">Property Type</div>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   type="radio" name="property" value="Food / Beverage" />
									<label className="radio">Food / Beverage</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}    type="radio" name="property" value="Industrial" />
									<label className="radio">Industrial</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}    type="radio" name="property" value="Mixed Use" />
									<label className="radio">Mixed Use</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}    type="radio" name="property" value="Retail" />
									<label className="radio">Retail</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}    type="radio" name="property" value="Office / Condo" />
									<label className="radio">Office / Condo</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   
										type="radio"
										name="property"
										value="Investment Property"
									/>
									<label className="radio">Investment Property</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}    type="radio" name="property" value="Multi-Family" />
									<label className="radio">Multi-Family</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}    type="radio" name="property" value="Hospitality" />
									<label className="radio">Hospitality</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}   
										type="radio"
										name="property"
										value="Apartment Multi-Family"
									/>
									<label className="radio">Apartment Multi-Family</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'propertyType')}    type="radio" name="property" value="Farm & Land" />
									<label className="radio">Farm & Land</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">
									Owner Occupied or Investment Property
								</div>
								<div className="term">
									<input onChange={onChange} type="radio" name="occupied" value="Owner" />
									<label className="radio">Owner</label>
								</div>
								<div className="term">
									<input onChange={onChange} type="radio" name="occupied" value="Investment" />
									<label className="radio">Investment</label>
								</div>
							</div>
						</section>
						{ propertyState=='Owner'?<section>
							<div className="goal">
								<div className="cast">
									Will You Occupy 51% or more of the space
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'occupy')}    type="radio" name="more" value="Yes" />
									<label className="radio">Yes</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'occupy')}    type="radio" name="more" value="No" />
									<label className="radio">No</label>
								</div>
							</div>
						</section>:
						<>
						<section>
							<div className="goal">
								<div className="cast">How many Tenants or Units</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'tenants')}   
										className="outline"
										type="text"
										placeholder="Your answer"
									/>
								</div>
							</div>
						</section>
					</>
					}
					</>
				)}
				

				{formstep === 3 && (
					<>
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
									<input onChange={(e)=> onFormChange(e,'ownership')}    type="radio" name="amount" value="dollar" />
									<label className="radio">LLC</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'ownership')}    type="radio" name="amount" value="dollar" />
									<label className="radio">C-Corp</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'ownership')}    type="radio" name="amount" value="dollar" />
									<label className="radio">S-CORP</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'ownership')}    type="radio" name="amount" value="dollar" />
									<label className="radio">Partnership</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">Ever File Bankruptcy?</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'bankruptcy')} type="radio" name="bankruptcy" value="Yes" />
									<label className="radio">Yes</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'bankruptcy')} type="radio" name="bankruptcy" value="No" />
									<label className="radio">No</label>
								</div>
							</div>
						</section>
					</>
				)}

				{formstep === 4 && (
					<>
						{formValues.bankruptcy=='Yes'&&<section>
							<div className="goal">
								<div className="cast">If So, When?</div>
								
										<div className="term">
								<input
								checked={formValues.bankruptcyYear == "0" ? true : false}
								onChange={(e) => onFormChange(e,'bankruptcyYear')} type="radio" name="bankruptcyYear" value="0" />
								<label className="radio">Less than 7 years</label>
							</div>
							<div className="term">
								<input
								checked={formValues.bankruptcyYear == "10" ? true : false}
								onChange={(e) => onFormChange(e,'bankruptcyYear')} type="radio" name="bankruptcyYear" value="10" />
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
									<input onChange={(e)=> onFormChange(e,'downpayment')} type="radio" name="putting" value="20" />
									<label className="radio">20%</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'downpayment')} type="radio" name="putting" value="30" />
									<label className="radio">30%</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'downpayment')} type="radio" name="putting" value="100" />
									<label className="radio">More then 30%</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">
									Do you have any other commercial properties?
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'commercial')}  type="radio" name="commercial" value="Yes" />
									<label className="radio">Yes</label>
								</div>
								<div className="term">
									<input onChange={(e)=> onFormChange(e,'commercial')}  type="radio" name="commercial" value="No" />
									<label className="radio">No</label>
								</div>
							</div>
						</section>
					</>
				)}
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

				<button type="button" className="button" onClick={completeFormStep}>
					Next Step
				</button>
				{/* <input className="button" type="button" value="Next" /> */}
			</Hero>
		</div>
	);
}
