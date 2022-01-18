import React from 'react';
import styled from "styled-components";
import { useEffect, useState } from "react";


const Hero = styled.div`
	padding: 40px 0% 40px 0%;
	font-family: Mulish;
	background-color: #e5e5e5;

    & 	.goal {
		background-color: white;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		border-radius: 10px;
		padding: 10px 20px 10px 20px;
		margin-top: 20px;
	}
    & .cast {
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
	& .input {
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

const WorkingCapitalForm = () => {
    const[workingCapitalData,setWorkingCapitalData] = useState({
        bankruptcy: "",
		bankruptcyYear: "",
        annualRevenue: "",
        businessType: "",
        proceeds: "",
    })
    const onChangeHandler = (name, e) => {

		setWorkingCapitalData({
			...workingCapitalData,
			[name]: e.target.value
		})
	}
    return (
        <div>
            <Hero>
              
                <div className="goal">
							<div className="cast">Ever File Bankruptcy?</div>
							<div className="term">
								<input checked={workingCapitalData.bankruptcy == "Yes" ? true : false}  onChange={(e) => onChangeHandler("bankruptcy", e)} type="radio" name="bankruptcy" value="Yes" />
								<label className="radio">Yes</label>
							</div>
							<div className="term">
								<input
								checked={workingCapitalData.bankruptcy == "No" ? true : false}
								onChange={(e) => onChangeHandler("bankruptcy", e)} type="radio" name="bankruptcy" value="No" />
								<label className="radio">No</label>
							</div>
						</div>
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
                        <div className="goal">
							<div className="cast">Annual Revenue </div>
							<div className="term">
								<input
									checked={workingCapitalData.annualRevenue == "1" ? true : false}
									onChange={(e) => onChangeHandler("annualRevenue", e)} type="radio" name="amount" value="1" />
								<label className="radio">0 - $200,000</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.annualRevenue == "2" ? true : false}
									onChange={(e) => onChangeHandler("annualRevenue", e)} type="radio" name="amount" value="2" />
								<label className="radio">200,000 - $1,000,000</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.annualRevenue == "3" ? true : false}
									onChange={(e) => onChangeHandler("annualRevenue", e)} type="radio" name="amount" value="3" />
								<label className="radio">1,000,000 - $5,000,000</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.annualRevenue == "4" ? true : false}
									onChange={(e) => onChangeHandler("annualRevenue", e)} type="radio" name="amount" value="4" />
								<label className="radio">5,000,000 - $25,000,000</label>
							</div>
							<div className="term">
								<input
									checked={workingCapitalData.annualRevenue == "5" ? true : false}
									onChange={(e) => onChangeHandler("annualRevenue", e)} type="radio" name="amount" value="5" />
								<label className="radio">25,000,000 - $100,000,000</label>
							</div>
						</div>
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
						
                         
						
            </Hero>


            
        </div>
    );
}

export default WorkingCapitalForm;
