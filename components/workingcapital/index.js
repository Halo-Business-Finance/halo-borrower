import React from 'react';
import styled, {keyframes} from "styled-components";
import { useEffect, useState } from "react";
import { Button, notification } from "antd";
import { zoomIn,fadeInRightBig } from 'react-animations';
 
const bounceAnimation = keyframes`${zoomIn}`;
const fadeAnimation=keyframes`${fadeInRightBig}`;


const Hero = styled.div`
	padding: 40px 0% 40px 0%;
	font-family: Mulish;
	background-color: #e5e5e5;

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

const WorkingCapitalForm = () => {
	const [isDisqualified, setDisqualified] = useState(false);
	const [formstep, setFormstep] = React.useState(1);
    const[workingCapitalData,setWorkingCapitalData] = useState({
        bankruptcy: "",
		bankruptcyYear: "",
		businessYear: "",
        annualRevenue: "",
        businessType: "",
        proceeds: "",
		termRequest: "",
		franchise: "",
		loanAmount: "",
		ownership: "",
		creditScore: "",
    })
	const completeFormStep = () => {
		// if(workingCapitalData.bankruptcy=="No" && formstep==13){
		// 	setFormstep(15);
		// 	return
		// }
		// console.log(bridgeLoanData.ownerOrInvestment,formstep)
		// if(bridgeLoanData.ownerOrInvestment=="Investment" && formstep==7){
		// 	setFormstep(9);
		// 	console.log('hjh')
		// 	return
		// }
		setFormstep(formstep + 1);

	};
	const previousStep = () => {
		// if(bridgeLoanData.bankruptcy=="Yes" && formstep==12){
		// 	setFormstep(12);
		// }
		// if(bridgeLoanData.ownerOrInvestment=="Investment" && formstep==9){
		// 	setFormstep(7);
		// 	console.log('hjh')
		// 	return
		// }
		// if(bridgeLoanData.bankruptcy=="No" && formstep==15){
		// 	setFormstep(13);
		// 	return
		// }
		setFormstep(formstep - 1)
	}
    const onChangeHandler = (name, e) => {

		setWorkingCapitalData({
			...workingCapitalData,
			[name]: e.target.value
		})
	}
	useEffect(() => {
		if ( workingCapitalData.bankruptcyYear == "0"|| workingCapitalData.businessYear == "0"|| workingCapitalData.annualRevenue == "1"|| workingCapitalData.creditScore == "score1") {
			notification.error({
				message: "Disqualified"
			})
			setDisqualified(true)
		}
		else {
			setDisqualified(false)

		}

	}, [workingCapitalData.bankruptcyYear, workingCapitalData.businessYear, workingCapitalData.annualRevenue, workingCapitalData.creditScore])
    return (
        <div>
            <Hero>
			<>
				{formstep == 1 && <section>
              
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
						</section>}
						{(workingCapitalData.bankruptcy == 'Yes' &&formstep == 2) && <section>

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
						</div></section>}
						{formstep == 3 && <section>
                    <div className="goal">
                        <div className="cast">How long have you been in Business? </div>

                        {workingCapitalData.bankruptcy == "Yes" && <div className="term">
                            <input checked={workingCapitalData.businessYear == "0" ? true : false} onChange={(e) => onChangeHandler('businessYear', e)} type="radio" name="goal" value="0" />
                            <label className="radio">0 - 1 Years</label>
                        </div>}
                        <div className="term">
                            <input checked={workingCapitalData.businessYear == "1" ? true : false} onChange={(e) => onChangeHandler('businessYear', e)} type="radio" name="goal" value="1" />
                            <label className="radio">1 - 2 Years</label>
                        </div>
                        <div className="term">
                            <input checked={workingCapitalData.businessYear == "2" ? true : false} onChange={(e) => onChangeHandler('businessYear', e)} type="radio" name="goal" value="2" />
                            <label className="radio">2+ Years</label>
                        </div>
                    </div>
                </section>}
						{formstep==4 && <section>
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
						</section>
						}
						{formstep==5 &&
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
                            </div>}
							{formstep==6 &&
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
                            </div>}
							{formstep==7 &&
							<div className="goal">
							<div className="cast">If Other use, Please Specify</div>
							<div className="term">
								<input
								value={workingCapitalData.proceeds}
								onChange={(e) => onChangeHandler("proceeds", e)}
									className="outline"
									type="text"
									placeholder="Your answer"
								/>
							</div>
						</div>}
						{formstep==8 &&
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
							</div>}
							{formstep==9 && <section>
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
						</section>
						}
						{formstep==10 &&
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
						</div>}
						{formstep==11 &&
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
						</div>}
						{formstep==12 &&
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
						}
						</>
						<ButtonWrapper>

<StyledButton disabled={formstep==1 } size="large" onClick={previousStep} type="dashed">Previous Step</StyledButton>
{formstep==13?<Button type="primary">Submit</Button>:<Button disabled={isDisqualified} size="large" type="primary" onClick={completeFormStep}>
	Next Step
</Button>}
</ButtonWrapper>
						
                         
						
            </Hero>


            
        </div>
    );
}

export  {WorkingCapitalForm};
