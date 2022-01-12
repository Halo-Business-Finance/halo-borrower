import React from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import cookie from "js-cookie";
import Router from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";

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

export default function BLOAN() {
	const [formstep, setFormstep] = React.useState(0);
	const [bridgeLoanData,setBridgeLoanData]=useState({
		fundPlan:"",
		refinance:"",
		cashOut:"",
		constructionAmount:"",
		rateTermAmount:"",
		propertyAddress:"",
		propertyType:"",
		termRequest:"",
		ownerOrInvestment:"",
		occupy:"",
		tenants:"",
		dollar:"",
		ownership:"",
		lawsuit:"",
		bankruptcy:"",
		bankruptcyYear:"",
		plan:"",
		currentProperty:"",
		stabilized:"",

	})

	const completeFormStep = () => {
		setFormstep(formstep + 1);
	};
	console.log(bridgeLoanData)
	const onChangeHandler=(name,e)=>{
		
   setBridgeLoanData({
	   ...bridgeLoanData,
	   [name]:e.target.value
   })
	}
	useEffect(() => {
		if(bridgeLoanData.constructionAmount=="1" || bridgeLoanData.dollar=="1" ||bridgeLoanData.bankruptcyYear=="0" || (bridgeLoanData.plan=="10" ||bridgeLoanData.plan=='20')){
			notification.error({
				message:"Disqualified"
			})
		}

	},[bridgeLoanData.constructionAmount,bridgeLoanData.dollar,bridgeLoanData.bankruptcyYear,bridgeLoanData.plan])
	return (
		<div>
			<Hero>
				{formstep === 1 && (
					<>
						<section>
							<div className="goal">
								<div className="cast">
									Tell us what you plan on using the funds for?
								</div>
								<div className="term">
									<input 
									onChange={(e)=>onChangeHandler("fundPlan",e)}
									 type="radio" name="goal" value="purchase" />
									<label className="radio">Purchase</label>
								</div>
								<div className="term">
									<input
									 onChange={(e)=>onChangeHandler("fundPlan",e)}
									  type="radio" name="goal" value="construct" />
									<label className="radio">Construction</label>
								</div>
								<div className="term">
									<input
									 onChange={(e)=>onChangeHandler("fundPlan",e)}
									  type="radio" name="goal" value="refinance" />
									<label className="radio">Refinance</label>
								</div>
							</div>
						</section>
						{
						bridgeLoanData.fundPlan!=="construct" &&
						 <section>
							<div className="goal">
								<div className="cast">Refinance</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("refinance",e)} type="radio" name="amount" value="cashout" />
									<label className="radio">Cash out</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("refinance",e)} type="radio" name="amount" value="term" />
									<label className="radio">Rate and Term</label>
								</div>
							</div>
						</section>}
						{(bridgeLoanData.refinance !=="term") && <section>
							<div className="goal">
								<div className="cast">If Cash Out, How much?</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("cashOut",e)}
										className="outline"
										type="text"
										placeholder="Your answer"
									/>
								</div>
							</div>
						</section>}
						{bridgeLoanData.fundPlan==="construct" && <section>
							<div className="goal">
								<div className="cast">Construction Amount </div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("constructionAmount",e)} type="radio" name="amount" value="dollar" />
									<label className="radio">25,000 - 250,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("constructionAmount",e)} type="radio" name="amount" value="dollar" />
									<label className="radio">250,000 - 1,000,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("constructionAmount",e)} type="radio" name="amount" value="dollar" />
									<label className="radio">1,000,000 - 5,000,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("constructionAmount",e)} type="radio" name="amount" value="dollar" />
									<label className="radio">5,000,000 - 25,000,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("constructionAmount",e)} type="radio" name="amount" value="dollar" />
									<label className="radio">25,000,000 - 100,000,000</label>
								</div>
							</div>
						</section>}
					</>
				)}
				{formstep === 2 && (
					<>
						{bridgeLoanData.refinance==="term" && <section>
							<div className="goal">
								<div className="cast">Rate and Term Amount </div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("rateTermAmount",e)} type="radio" name="amount" value="1" />
									<label className="radio">25,000 - 250,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("rateTermAmount",e)} type="radio" name="amount" value="2" />
									<label className="radio">250,000 - 1,000,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("rateTermAmount",e)} type="radio" name="amount" value="3" />
									<label className="radio">1,000,000 - 5,000,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("rateTermAmount",e)} type="radio" name="amount" value="4" />
									<label className="radio">5,000,000 - 25,000,000</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("rateTermAmount",e)} type="radio" name="amount" value="5" />
									<label className="radio">25,000,000 - 100,000,000</label>
								</div>
							</div>
						</section>}
						<section>
							<div className="goal">
								<div className="cast">Property Address</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("propertyAddress",e)}
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
									<input onChange={(e)=>onChangeHandler("propertyType",e)} type="radio" name="property" value="Food / Beverage" />
									<label className="radio">Food / Beverage</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("propertyType",e)} type="radio" name="property" value="Industrial" />
									<label className="radio">Industrial</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("propertyType",e)} type="radio" name="property" value="Mixed Use" />
									<label className="radio">Mixed Use</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("propertyType",e)} type="radio" name="property" value="Retail" />
									<label className="radio">Retail</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("propertyType",e)} type="radio" name="property" value="Office / Condo" />
									<label className="radio">Office / Condo</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("propertyType",e)}
										type="radio"
										name="property"
										value="Investment Property"
									/>
									<label className="radio">Investment Property</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("propertyType",e)} type="radio" name="property" value="Multi-Family" />
									<label className="radio">Multi-Family</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("propertyType",e)} type="radio" name="property" value="Hospitality" />
									<label className="radio">Hospitality</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("propertyType",e)}
										type="radio"
										name="property"
										value="Apartment Multi-Family"
									/>
									<label className="radio">Apartment Multi-Family</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("propertyType",e)} type="radio" name="property" value="Farm & Land" />
									<label className="radio">Farm & Land</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("propertyType",e)} type="radio" name="property" value="Other" />
									<label className="radio">Other</label>
									<input
										className="other"
										type="text"
										// placeholder="Your answer"
									/>
								</div>
							</div>
						</section>
					</>
				)}
				{formstep === 3 && (
					<>
						<section>
							<div className="goal">
								<div className="cast">Term Requested </div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("termRequest",e)} type="radio" name="term" value="term1" />
									<label className="radio">3-12 Months</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("termRequest",e)} type="radio" name="term" value="term2" />
									<label className="radio">12-24 Months</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("termRequest",e)} type="radio" name="term" value="term3" />
									<label className="radio">24-36 Months</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">
									Owner Occupied or Investment Property
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("ownerOrInvestment",e)} type="radio" name="owner" value="Owner" />
									<label className="radio">Owner</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("ownerOrInvestment",e)}  type="radio" name="owner" value="Investment" />
									<label className="radio">Investment</label>
								</div>
							</div>
						</section>
						{bridgeLoanData.ownerOrInvestment=="Owner" && <section>
							<div className="goal">
								<div className="cast">
									Will You Occupy 51% or more of the space
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("occupy",e)}  type="radio" name="more" value="Yes" />
									<label className="radio">Yes</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("occupy",e)}  type="radio" name="more" value="No" />
									<label className="radio">No</label>
								</div>
							</div>
						</section>}
						<section>
							<div className="goal">
								<div className="cast">How many Tenants or Units</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("tenants",e)} 
										className="outline"
										type="text"
										placeholder="Your answer"
									/>
								</div>
							</div>
						</section>
					</>
				)}
				{formstep === 4 && (
					<>
						<section>
							<div className="goal">
								<div className="cast">Dollar Amount Wanted </div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("dollar",e)}  type="radio" name="amount" value="1" />
									<label className="radio">25,000</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("dollar",e)} type="radio" name="amount" value="2" />
									<label className="radio">250,000 - 1,000,000</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("dollar",e)} type="radio" name="amount" value="3" />
									<label className="radio">1,000,000 - 5,000,000</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("dollar",e)} type="radio" name="amount" value="4" />
									<label className="radio">5,000,000 - 25,000,000</label>
								</div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("dollar",e)} type="radio" name="amount" value="5" />
									<label className="radio">25,000,000 - 100,000,000</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">Ownership Structure </div>
								<div className="term">
									<input  onChange={(e)=>onChangeHandler("ownership",e)} type="radio" name="amount" value="dollar" />
									<label className="radio">LLC</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("ownership",e)} type="radio" name="amount" value="dollar" />
									<label className="radio">C-Corp</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("ownership",e)} type="radio" name="amount" value="dollar" />
									<label className="radio">S-CORP</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("ownership",e)} type="radio" name="amount" value="dollar" />
									<label className="radio">Partnership</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">
									Are you or the property involved in a Lawsuit
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("lawsuit",e)} type="radio" name="lawsuit" value="Yes" />
									<label className="radio">Yes</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("lawsuit",e)} type="radio" name="lawsuit" value="No" />
									<label className="radio">No</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">Ever File Bankruptcy?</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("bankruptcy",e)} type="radio" name="bankruptcy" value="Yes" />
									<label className="radio">Yes</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("bankruptcy",e)} type="radio" name="bankruptcy" value="No" />
									<label className="radio">No</label>
								</div>
							</div>
						</section>
						{bridgeLoanData.bankruptcy=='Yes'&&	<section>
						<div className="goal">
							<div className="cast">If So, When?</div>
							
							<div className="term">
									<input onChange={(e)=> onChangeHandler('bankruptcyYear',e)} type="radio" name="bankruptcyYear" value="0" />
									<label className="radio">Less than 7 years</label>
								</div>
								<div className="term">
									<input  onChange={(e)=> onChangeHandler('bankruptcyYear',e)} type="radio" name="bankruptcyYear" value="10" />
									<label className="radio">7 or More than 7 years</label>
								</div>
						</div>
					</section>}
						<section>
							<div className="goal">
								<div className="cast">
									How much do you plan on putting down?
								</div>
								{bridgeLoanData.bankruptcy=="Yes" && <div className="term">
									<input onChange={(e)=>onChangeHandler("plan",e)} type="radio" name="putting" value="10" />
									<label className="radio">10%</label>
								</div>}
								{bridgeLoanData.bankruptcy=="Yes" &&<div className="term">
									<input onChange={(e)=>onChangeHandler("plan",e)} type="radio" name="putting" value="20" />
									<label className="radio">20%</label>
								</div>}
								<div className="term">
									<input onChange={(e)=>onChangeHandler("plan",e)} type="radio" name="putting" value="30" />
									<label className="radio">30%</label>
								</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("plan",e)} type="radio" name="putting" value="100" />
									<label className="radio">More then 30%</label>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">Current Property Value</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("currentProperty",e)}
										className="outline"
										type="text"
										name="value"
										placeholder="Your answer"
									/>
								</div>
							</div>
						</section>
						<section>
							<div className="goal">
								<div className="cast">Once Stabilized</div>
								<div className="term">
									<input onChange={(e)=>onChangeHandler("stabilized",e)}
										className="outline"
										type="text"
										name="stabilized"
										placeholder="Your answer"
									/>
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
