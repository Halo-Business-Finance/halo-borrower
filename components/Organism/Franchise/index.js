import React from 'react';
import styled, { keyframes } from "styled-components";
import { Button, Form, Modal, notification, Progress } from 'antd';
import { useEffect, useState } from "react";
import { zoomIn, fadeInRightBig } from 'react-animations';
import { Disqulaified } from '../Disqualify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { API } from '../../../utils/api';
import { Success } from "../Success";
import CurrencyFormat from 'react-currency-format';


const bounceAnimation = keyframes`${zoomIn}`;
const fadeAnimation = keyframes`${fadeInRightBig}`;
const Hero = styled.div`
	padding: 40px 40px 40px 40px;
	font-family: Mulish;
	background-color: #e5e5e5;
   
    & .progress{
        display: flex;
        width: 100%;
        justify-content:flex-end;
    }
    & .submit-form{
        margin-top: 20px;
        min-width:200px;
        min-height: 54px;
        background: #F3BA17;
        border-radius: 8px;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 32px;
    }

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
		margin-left: 25px;
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
align-items: center;
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
`;


export const Franchaise = () => {
    const [formstep, setFormstep] = React.useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [showSucessModal, setshowSucessModal] = useState(false);


    const [error, setErrors] = useState({
        businessYear: '',
        annualRevenue: "",
        AreaOfBusiness: '',
        useOfProceeds: '',
        specifiedOtherUse: "",
        SBALoan: '',
        creditScore: "",
        ownership: '',
        bankruptcy: '',
        bankruptcyYear: '',
        LoanAmountRequested: "",
        LoanTermRequested: "",
    });

    const [formValues, setFormValues] = useState({
        businessYear: '',
        annualRevenue: "",
        AreaOfBusiness: '',
        useOfProceeds: '',
        specifiedOtherUse: "",
        SBALoan: '',
        creditScore: "",
        ownership: '',
        bankruptcy: '',
        bankruptcyYear: '',
        LoanAmountRequested: "",
        LoanTermRequested: "",
    });
    const [isModalVisible, setIsModalVisible] = useState(false);


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



    const completeFormStep = async (e) => {
        e.preventDefault();
        if (formValues.businessYear == "0" || (formValues?.annualRevenue !== '' && Number(formValues.annualRevenue) < 25000) || formValues.creditScore == "579" || formValues.bankruptcyYear == "0") {

            setIsModalVisible(true)
            return;
        }
        // if (formValues.bankruptcy == "No") {
        //     setFormstep(14);
        //     return;
        // }

        if (formstep == 1 && formValues.businessYear == "") {
            setErrors({ ...error, businessYear: "Error" });
            return;
        }
        else if (formstep == 2 && formValues.annualRevenue == "") {
            setErrors({ ...error, annualRevenue: "Error" });
            return;
        }
        else if (formstep == 3 && formValues.AreaOfBusiness == "") {
            setErrors({ ...error, AreaOfBusiness: "Error" });
            return;
        }

        else if (formstep == 4 && formValues.useOfProceeds == "") {
            setErrors({ ...error, useOfProceeds: "Error" });
            return;
        }
        else if (formstep == 5 && formValues.specifiedOtherUse == "" && formValues.useOfProceeds == "OtherUse") {
            setErrors({ ...error, specifiedOtherUse: "Error" });
            return;
        }
        else if (formValues?.useOfProceeds == "OtherUse") {
            if (formValues?.specifiedOtherUse?.length > 20) {
                setErrors({ ...error, specifiedOtherUse: "len" });
                return;
            }
        }
        else if (formstep == 6 && formValues.LoanTermRequested == "") {
            setErrors({ ...error, LoanTermRequested: "Error" });
            return;
        }
        else if (formstep == 7 && formValues.creditScore == "") {
            setErrors({ ...error, creditScore: "Error" });
            return;
        }
        else if (formstep == 8 && formValues.SBALoan == "") {
            setErrors({ ...error, SBALoan: "Error" });
            return;
        }
        else if (formstep == 9 && formValues.LoanAmountRequested == "") {
            setErrors({ ...error, LoanAmountRequested: "Error" });
            return;
        }
        else if (formstep == 10 && formValues.ownership == "") {
            setErrors({ ...error, ownership: "Error" });
            return;
        }
        // else if (formstep == 11 && formValues.bankruptcy == "") {
        //     setErrors({ ...error, bankruptcy: "Error" });
        //     return;
        // }
        else if (formstep == 12 && formValues.bankruptcyYear == "" && formValues.bankruptcy == "yes") {
            setErrors({ ...error, bankruptcyYear: "Error" });
            return;
        }

        if (formValues.useOfProceeds !== "OtherUse" && formstep == 4) {
            setFormstep(6);
            return;
        }


        setFormstep(formstep + 1);
    };
    const previousStep = (e) => {
        e.preventDefault();
        if (formValues.useOfProceeds !== "OtherUse" && formstep == 6) {
            setFormstep(4);
            return;
        }

        setFormstep(formstep - 1);
    }
    useEffect(() => {
        const userData = sessionStorage.getItem("user");
        const parsedData = JSON.parse(userData);
        (parsedData)
    }, [])
    const formHandler = async () => {

        setIsLoading(true)

        const userData = sessionStorage.getItem("user");
        const parsedData = JSON.parse(userData);
        (parsedData)

        const data = {
            "loanTypes": 104,
            "nameOfBusiness": parsedData?.businessName,
            "nameOfBorrower": parsedData?.borrowerName,
            "emailOfBorrower": parsedData?.email,
            "phoneNumber": parsedData?.phoneNumber,
            "amountToBeBorrowed": formValues?.LoanAmountRequested,
            "prequalifyAnswers": formValues,
            "accepted": true
        }
        try {
            await API.post("/api/borrower/create-prequalify-request", data, {
                headers: {
                    Authorization: "Bearer " + sessionStorage.getItem('token')
                }
            })
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
                percent={Math.ceil(((formstep == 1 ? 0 : formValues.bankruptcy == "No" ? 12 : formstep) / 12) * 100)}

            />
            <Hero>


                {formstep == 1 && <section>
                    <div className="goal">
                        <div className="cast">Years in Business?</div>
                        {/* <div className="term">
                            <input onChange={(e) => onFormChange(e, 'businessYear')} type="radio" name="goal" value="0" />
                            <label className="radio">Cast Out Refinance</label>
                        </div> */}
                        <div className="term">
                            <input checked={formValues.businessYear == "0" ? true : false} onChange={(e) => onFormChange(e, 'businessYear')} type="radio" value="0" />
                            <label className="radio">Less than a Year</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.businessYear == "1" ? true : false} onChange={(e) => onFormChange(e, 'businessYear')} type="radio" value="1" />
                            <label className="radio">1-2 Years</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.businessYear == "2" ? true : false} onChange={(e) => onFormChange(e, 'businessYear')} type="radio" value="2" />
                            <label className="radio">2+ Years</label>
                        </div>
                    </div>

                    <ErrorMessage>{error.businessYear && "Please select to continue"}</ErrorMessage>

                </section>}
                {formstep == 2 && <section>
                    <div className="goal">
                        <div className="cast">Annual Revenue </div>
                        <div className="term">
                            <CurrencyFormat 
                            prefix={'$'}
                            thousandSeparator={true}
                            value={formValues.annualRevenue}
                            onValueChange={(e) => setFormValues({...formValues,annualRevenue:e.formattedValue})}
                                type="text"
                                name="amount"
                                className="outline"
                                 />

                        </div>

                    </div>
                    <ErrorMessage>{error.annualRevenue && "Please select to continue"}</ErrorMessage>

                </section>}
                {formstep == 3 && <section>
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
                    <ErrorMessage>{error.AreaOfBusiness && "Please select to continue"}</ErrorMessage>
                </section>}
                {formstep == 4 && <section>
                    <div className="goal">
                        <div className="cast">
                            Use of Proceeds
                        </div>
                        <div className="term">
                            <input checked={formValues.useOfProceeds == "PurchaseFranchise" ? true : false} onChange={(e) => onFormChange(e, "useOfProceeds")} type="radio" name="occupied" value="PurchaseFranchise" />
                            <label className="radio">Purchase of Franchise </label>
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
                    <ErrorMessage>{error.useOfProceeds && "Please select to continue"}</ErrorMessage>
                </section>}
                {(formstep == 5 && formValues.useOfProceeds == "OtherUse") && <section>
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
                    <ErrorMessage>{error?.specifiedOtherUse.startsWith("le") && "Please enter with in 20 characters"}</ErrorMessage>
                    <ErrorMessage>{error?.specifiedOtherUse.startsWith("Error") && "Please enter"}</ErrorMessage>
                </section>}
                {formstep == 6 && <section>
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
                    <ErrorMessage>{error.LoanTermRequested && "Please select to continue"}</ErrorMessage>
                </section>}
                {formstep == 7 && <section>
                    <div className="goal">
                        <div className="cast">
                            What does your credit score look like?
                        </div>
                        <div className="term">
                            <input checked={formValues.creditScore == "579" ? true : false} onChange={(e) => onFormChange(e, "creditScore")} type="radio" name="occupied" value="579" />
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
                            <label className="radio">680 & Above</label>
                        </div>
                    </div>
                    <ErrorMessage>{error.creditScore && "Please select to continue"}</ErrorMessage>
                </section>}

                {formstep == 8 && <section>
                    <div className="goal">
                        <div className="cast">
                            Would you prefer a SBA Loan?
                        </div>
                        <div className="term">
                            <input checked={formValues.SBALoan == "Yes" ? true : false} onChange={(e) => onFormChange(e, "SBALoan")} type="radio" name="occupied" value="Yes" />
                            <label className="radio">Yes</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.SBALoan == "No" ? true : false} onChange={(e) => onFormChange(e, "SBALoan")} type="radio" name="occupied" value="No" />
                            <label className="radio">No</label>
                        </div>
                    </div>
                    <ErrorMessage>{error.SBALoan && "Please select to continue"}</ErrorMessage>
                </section>}

                {formstep == 9 && <section>
                    <div className="goal">
                        <div className="cast">Loan Amount Requested</div>
                        <div className="term">
                            <CurrencyFormat 
                            prefix={'$'}
                            thousandSeparator={true}
                            value={formValues.LoanAmountRequested} 
                            onValueChange={(e) => setFormValues({...formValues,LoanAmountRequested:e.value}) }
                                className="outline"
                                type="text"
                                placeholder="Only Number"
                            />
                        </div>
                    </div>
                    <ErrorMessage>{error.LoanAmountRequested && "Please select to continue"}</ErrorMessage>
                </section>}
                {formstep == 10 && <section>
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
                    <ErrorMessage>{error.ownership && "Please select to continue"}</ErrorMessage>
                </section>}
                {(formstep == 11 || (formstep ==12 && formValues.bankruptcy == "No" )) && <section>
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
                </section>}
                {((formstep == 12 || formstep == 13) && formValues.bankruptcy == "Yes") && <section>
                    <div className="goal">
                        <div className="cast">If Yes, tells us when?</div>
                        <div className="term">
                            <input checked={formValues.bankruptcyYear == "0" ? true : false} onChange={(e) => onFormChange(e, 'bankruptcyYear')} type="radio" name="bankruptcy" value="0" />
                            <label className="radio">Less Than 7 Years</label>
                        </div>
                        <div className="term">
                            <input checked={formValues.bankruptcyYear == "1" ? true : false} onChange={(e) => onFormChange(e, 'bankruptcyYear')} type="radio" name="bankruptcy" value="1" />
                            <label className="radio">Over 7 Years</label>
                        </div>
                    </div>
                    <ErrorMessage>{error.bankruptcyYear && "Please select to continue"}</ErrorMessage>
                </section>}
                {/* {
                    formstep == 14 && <div>
                        <Button className="submit-form" loading={isLoading} onClick={formHandler} type="primary">Submit</Button>
                    </div>
                } */}
                	<ButtonWrapper>

{(formstep != 1 && formstep < 13) && <StyledButton size="large" onClick={previousStep} type="dashed">Previous Step</StyledButton>}
{(formstep == 13 || (formstep ==12 && formValues.bankruptcy == "No" ))? <Button loading={isLoading} onClick={formHandler} type="primary">Submit</Button> : (formstep < 13 && <Button  size="large" type="primary" onClick={completeFormStep}>
    Next Step
</Button>)}
</ButtonWrapper>
                {/* {formstep < 14 && <ButtonWrapper>

                    {(formstep > 1 || formstep < 13) && <StyledButton disabled={formstep == 1} size="large" onClick={previousStep} type="dashed">Previous Step</StyledButton>}
                    <Button size="large" onClick={completeFormStep} type="primary" >
                        Next Step
                    </Button>

                </ButtonWrapper>} */}
                <Modal visible={isModalVisible} footer={null}>
                    <Disqulaified />
                </Modal>
                <Modal visible={showSucessModal} footer={null}>
                    <Success  amount={formValues?.LoanAmountRequested}/>
                </Modal>

            </Hero>

        </div>
    )
}
