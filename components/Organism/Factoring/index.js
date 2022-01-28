import React from 'react';
import styled, { keyframes } from "styled-components";
import { Button, Modal, notification, Progress } from 'antd';
import { useEffect, useState } from "react";
import { zoomIn, fadeInRightBig } from 'react-animations';
import { Disqulaified } from '../Disqualify';

const bounceAnimation = keyframes`${zoomIn}`;
const fadeAnimation = keyframes`${fadeInRightBig}`;
const Hero = styled.div`
	padding: 40px 40px 40px 40px;
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
color:red;
margin-top: 10px;
`;

export const Factoring = () => {
    const [formstep, setFormstep] = React.useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formValues, setFormValues] = useState({
        businessYear: '',
        invoiceReceivables: "",
        payableTerms: "",
        AreaOfBusiness: '',
        useOfProceeds: '',
        specifiedOtherUse: "",
        LoanTermRequested: "",
        creditScore: "",
        franchiseCompany: "",
        LoanAmountRequested: "",
        ownership: '',
        bankruptcy: '',
        bankruptcyYear: '',


    });
    const [errors, setErrors] = useState({
        businessYear: '',
        invoiceReceivables: "",
        payableTerms: "",
        AreaOfBusiness: '',
        useOfProceeds: '',
        specifiedOtherUse: "",
        LoanTermRequested: "",
        creditScore: "",
        franchiseCompany: "",
        LoanAmountRequested: "",
        ownership: '',
        bankruptcy: '',
        bankruptcyYear: '',


    });
    const onFormChange = (e, name) => {
        setFormValues({
            ...formValues,
            [name]: e.target.value

        })
        setErrors({...errors,[name]:""})
    }
    const completeFormStep = () => {
        if (formValues.creditScore == "579" || formValues.bankruptcyYear == "0") {
            setIsModalVisible(true);
        }
        if (formstep == 1 && formValues.businessYear == "") {
            setErrors({ ...errors, businessYear: "Error" });
            return;
        }
        if (formstep == 2 && formValues.invoiceReceivables == "") {
            setErrors({ ...errors, invoiceReceivables: "Error" });
            return;
        }
        if (formstep == 3 && formValues.payableTerms == "") {
            setErrors({ ...errors, payableTerms: "Error" });
            return;
        }
        if (formstep == 4 && formValues.AreaOfBusiness == "") {
            setErrors({ ...errors, AreaOfBusiness: "Error" });
            return;
        }
        if (formstep == 5 && formValues.useOfProceeds == "") {
            setErrors({ ...errors, useOfProceeds: "Error" });
            return;
        }
        if (formstep == 6 && formValues.useOfProceeds == "OtherUse" && formValues.specifiedOtherUse == "") {
            setErrors({ ...errors, specifiedOtherUse: "Error" });
            return;
        }
        if (formstep == 7 && formValues.LoanTermRequested == "") {
            setErrors({ ...errors, specifiedOtherUse: "Error" });
            return;
        }
        if (formstep == 8 && formValues.creditScore == "") {
            setErrors({ ...errors, creditScore: "Error" });
            return;
        }
        if (formstep == 9 && formValues.franchiseCompany == "") {
            setErrors({ ...errors, franchiseCompany: "Error" });
            return;
        }
        if (formstep == 10 && formValues.LoanAmountRequested == "") {
            setErrors({ ...errors, LoanAmountRequested: "Error" });
            return;
        }
        if (formstep == 11 && formValues.ownership == "") {
            setErrors({ ...errors, ownership: "Error" });
            return;
        }
        if (formstep == 12 && formValues.bankruptcy == "") {
            setErrors({ ...errors, bankruptcy: "Error" });
            return;
        }
        if (formstep == 13 && formValues.bankruptcy == "Yes" && formValues.bankruptcyYear == "") {
            setErrors({ ...errors, bankruptcy: "Error" });
            return;
        }
        if (formValues.useOfProceeds !== "OtherUse" && formstep == 5) {
            setFormstep(7);
            return;
        }

        setFormstep(formstep + 1);
    };
    const previousStep = () => {
        if (formValues.useOfProceeds !== "OtherUse" && formstep == 7) {
            setFormstep(5);
            return;
        }

        setFormstep(formstep - 1);
    }

const formCount=formValues.bankruptcy=="Yes"?13:12;
    return (
        <div>
           <Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={Math.ceil((formstep/formCount)*100)}

            />
            <Hero>
                {formstep == 1 && <section>
                    <div className="goal">
                        <div className="cast">How long have you been in Business? </div>

                        <div className="term">
                            <input checked={formValues.businessYear == "0" ? true : false} onChange={(e) => onFormChange(e, 'businessYear')} type="radio" name="goal" value="0" />
                            <label className="radio">0 - 1 Years</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.businessYear == "1" ? true : false} onChange={(e) => onFormChange(e, 'businessYear')} type="radio" name="goal" value="1" />
                            <label className="radio">1 - 2 Years</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.businessYear == "2" ? true : false} onChange={(e) => onFormChange(e, 'businessYear')} type="radio" name="goal" value="2" />
                            <label className="radio">2+ Years</label>
                        </div>
                    </div>
                    <ErrorMessage>{errors.businessYear && "Please select to continue"}</ErrorMessage>

                </section>}
                {formstep == 2 && <section>
                    <div className="goal">
                        <div className="cast">Is this based on Invoices or Accounts Receivables  </div>

                        <div className="term">
                            <input checked={formValues.invoiceReceivables == "Invoices" ? true : false} onChange={(e) => onFormChange(e, 'invoiceReceivables')} type="radio" name="amount" value="Invoices" />
                            <label className="radio">Invoices</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.invoiceReceivables == "Receivables" ? true : false} onChange={(e) => onFormChange(e, 'invoiceReceivables')} type="radio" name="amount" value="Receivables" />
                            <label className="radio">Receivables</label>
                        </div>
                    </div>
                    <ErrorMessage>{errors.invoiceReceivables && "Please select to continue"}</ErrorMessage>

                </section>}
                {formstep == 3 && <section>
                    <div className="goal">
                        <div className="cast">Net Payables Terms </div>

                        <div className="term">
                            <input checked={formValues.payableTerms == "Net_30" ? true : false} onChange={(e) => onFormChange(e, 'payableTerms')} type="radio" name="amount" value="Net_30" />
                            <label className="radio">Net 30</label>
                        </div>


                        <div className="term">
                            <input checked={formValues.payableTerms == "Net_30_60" ? true : false} onChange={(e) => onFormChange(e, 'payableTerms')} type="radio" name="amount" value="Net_30_60" />
                            <label className="radio">Net 30-60</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.payableTerms == "Net_60_90" ? true : false} onChange={(e) => onFormChange(e, 'payableTerms')} type="radio" name="amount" value="Net_60_90" />
                            <label className="radio">Net 60-90</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.payableTerms == "Net_90_120" ? true : false} onChange={(e) => onFormChange(e, 'payableTerms')} type="radio" name="amount" value="Net_90_120" />
                            <label className="radio">Net 90-120</label>
                        </div>

                        <div className="term">
                            <input checked={formValues.payableTerms == "Net_120" ? true : false} onChange={(e) => onFormChange(e, 'payableTerms')} type="radio" name="amount" value="Net_120" />
                            <label className="radio">Net 120+</label>
                        </div>

                    </div>
                    <ErrorMessage>{errors.payableTerms && "Please select to continue"}</ErrorMessage>


                </section>}
                {formstep == 4 && <section>
                    <div className="goal">
                        <div>
                            <div className="cast">What area of business are you in?</div>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "FoodBeverage" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')} type="radio" name="property" value="FoodBeverage" />
                            <label className="radio">Food / Beverage</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "Industrial" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')} type="radio" name="property" value="Industrial" />
                            <label className="radio">Industrial</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "MixedUse" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')} type="radio" name="property" value="MixedUse" />
                            <label className="radio">Mixed Use</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "Retail" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')} type="radio" name="property" value="Retail" />
                            <label className="radio">Retail</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "OfficeCondo" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')} type="radio" name="property" value="OfficeCondo" />
                            <label className="radio">Office / Condo</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "InvestmentProperty" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')}
                                type="radio"
                                name="property"
                                value="InvestmentProperty"
                            />
                            <label className="radio">Investment Property</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "MultiFamily" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')} type="radio" name="property" value="MultiFamily" />
                            <label className="radio">Multi-Family</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "Hospitality" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')} type="radio" name="property" value="Hospitality" />
                            <label className="radio">Hospitality</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "ApartmentMultiFamily" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')}
                                type="radio"
                                name="property"
                                value="ApartmentMultiFamily"
                            />
                            <label className="radio">Apartment Multi-Family</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "FarmLand" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')} type="radio" name="property" value="FarmLand" />
                            <label className="radio">Farm & Land</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.AreaOfBusiness == "GasStation" ? true : false} onChange={(e) => onFormChange(e, 'AreaOfBusiness')} type="radio" name="property" value="GasStation" />
                            <label className="radio">GasStation</label>
                        </div>
                    </div>
                    <ErrorMessage>{errors.AreaOfBusiness && "Please select to continue"}</ErrorMessage>


                </section>}
                {formstep == 5 && <section>
                    <div className="goal">
                        <div className="cast">
                            Use of Proceeds
                        </div>
                        <div className="term">
                            <input checked={formValues.useOfProceeds == "BusinessExpanison" ? true : false} onChange={(e) => onFormChange(e, "useOfProceeds")} type="radio" name="occupied" value="BusinessExpanison" />
                            <label className="radio">Business Expanison</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.useOfProceeds == "OtherUse" ? true : false} onChange={(e) => onFormChange(e, "useOfProceeds")} type="radio" name="occupied" value="OtherUse" />
                            <label className="radio">Other Use</label>
                        </div>
                    </div>
                    <ErrorMessage>{errors.useOfProceeds && "Please select to continue"}</ErrorMessage>


                </section>}
                {(formstep == 6 && formValues.useOfProceeds == "OtherUse") && <section>
                    <div className="goal">
                        <div className="cast">If Other use, Please Specify </div>
                        <div className="term">
                            <input value={formValues.specifiedOtherUse} onChange={(e) => onFormChange(e, 'specifiedOtherUse')}
                                className="outline"
                                type="text"
                                placeholder="Your answer"
                            />
                        </div>
                    </div>
                    <ErrorMessage>{errors.specifiedOtherUse && "Please enter"}</ErrorMessage>


                </section>}
                {formstep == 7 && <section>
                    <div className="goal">
                        <div className="cast">
                            Loan Term Requested
                        </div>
                        <div className="term">
                            <input checked={formValues.LoanTermRequested == "3to24Month" ? true : false} onChange={(e) => onFormChange(e, "LoanTermRequested")} type="radio" name="occupied" value="3to24Month" />
                            <label className="radio">3-24 Months</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.LoanTermRequested == "2to5" ? true : false} onChange={(e) => onFormChange(e, "LoanTermRequested")} type="radio" name="occupied" value="2to5" />
                            <label className="radio">2-5 Years</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.LoanTermRequested == "7to10" ? true : false} onChange={(e) => onFormChange(e, "LoanTermRequested")} type="radio" name="occupied" value="7to10" />
                            <label className="radio">7-10 Years</label>
                        </div>
                    </div>
                    <ErrorMessage>{errors.LoanTermRequested && "Please select to continue"}</ErrorMessage>


                </section>}
                {formstep == 8 && <section>
                    <div className="goal">
                        <div className="cast">
                            What is your credit score look like?
                        </div>
                        <div className="term">
                            <input checked={formValues.creditScore == "579" ? true : false} onChange={(e) => onFormChange(e, "creditScore",)} type="radio" name="occupied" value="579" />
                            <label className="radio">579 or Less</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.creditScore == "580_620" ? true : false} onChange={(e) => onFormChange(e, "creditScore")} type="radio" name="occupied" value="580_620" />
                            <label className="radio">580-620</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.creditScore == "620_680" ? true : false} onChange={(e) => onFormChange(e, "creditScore")} type="radio" name="occupied" value="620_680" />
                            <label className="radio">620-680</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.creditScore == "680_740" ? true : false} onChange={(e) => onFormChange(e, "creditScore")} type="radio" name="occupied" value="680_740" />
                            <label className="radio">680-740</label>
                        </div>
                    </div>
                    <ErrorMessage>{errors.creditScore && "Please select to continue"}</ErrorMessage>

                </section>}

                {formstep == 9 && <section>
                    <div className="goal">
                        <div className="cast">
                            Is this a Franchise Company?
                        </div>
                        <div className="term">
                            <input checked={formValues.franchiseCompany == "Yes" ? true : false} onChange={(e) => onFormChange(e, "franchiseCompany")} type="radio" name="occupied" value="Yes" />
                            <label className="radio">Yes</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.franchiseCompany == "No" ? true : false} onChange={(e) => onFormChange(e, "franchiseCompany")} type="radio" name="occupied" value="No" />
                            <label className="radio">No</label>
                        </div>
                    </div>
                    <ErrorMessage>{errors.franchiseCompany && "Please select to continue"}</ErrorMessage>

                </section>}

                {formstep == 10 && <section>
                    <div className="goal">
                        <div className="cast">Loan Request Amount? </div>
                        <div className="term">
                            <input checked={formValues.LoanAmountRequested == "1" ? true : false} onChange={(e) => onFormChange(e, 'LoanAmountRequested')} type="radio" name="amount" value="1" />
                            <label className="radio">25,000</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.LoanAmountRequested == "2" ? true : false} onChange={(e) => onFormChange(e, 'LoanAmountRequested')} type="radio" name="amount" value="2" />
                            <label className="radio">250,000 - 1,000,000</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.LoanAmountRequested == "3" ? true : false} onChange={(e) => onFormChange(e, 'LoanAmountRequested')} type="radio" name="amount" value="3" />
                            <label className="radio">1,000,000 - 5,000,000</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.LoanAmountRequested == "4" ? true : false} onChange={(e) => onFormChange(e, 'LoanAmountRequested')} type="radio" name="amount" value="4" />
                            <label className="radio">5,000,000 - 25,000,000</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.LoanAmountRequested == "5" ? true : false} onChange={(e) => onFormChange(e, 'LoanAmountRequested')} type="radio" name="amount" value="5" />
                            <label className="radio">25,000,000 - 100,000,000</label>
                        </div>
                    </div>
                    <ErrorMessage>{errors.LoanAmountRequested && "Please select to continue"}</ErrorMessage>

                </section>}
                {formstep == 11 && <section>
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
                    <ErrorMessage>{errors.ownership && "Please select to continue"}</ErrorMessage>

                </section>}
                {formstep == 12 && <section>
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
                    <ErrorMessage>{errors.bankruptcy && "Please select to continue"}</ErrorMessage>

                </section>}
                {(formstep == 13 && formValues.bankruptcy == "Yes") && <section>
                    <div className="goal">
                        <div className="cast">If Yes, tells us when?</div>
                        <div className="term">
                            <input checked={formValues.bankruptcyYear == "0" ? true : false} onChange={(e) => onFormChange(e, 'bankruptcyYear')} type="radio" name="bankruptcy" value="0" />
                            <label className="radio">Less Than 2 Years</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.bankruptcyYear == "1" ? true : false} onChange={(e) => onFormChange(e, 'bankruptcyYear')} type="radio" name="bankruptcy" value="1" />
                            <label className="radio">Over 2 Years</label>
                        </div>
                    </div>
                    <ErrorMessage>{errors.bankruptcyYear && "Please select to continue"}</ErrorMessage>

                </section>}
                <ButtonWrapper>

                    <StyledButton disabled={formstep == 1} size="large" onClick={previousStep} type="dashed">Previous Step</StyledButton>
                    {((formstep == 12 && formValues.bankruptcy == "No") || formstep == 13) ? <Button type="primary">Submit</Button> : <Button size="large" type="primary" onClick={completeFormStep}>
                        Next Step
                    </Button>}
                </ButtonWrapper>

            </Hero>
            <Modal visible={isModalVisible} footer={null}>
                <Disqulaified />
            </Modal>
        </div>
    )
}
