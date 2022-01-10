import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import cookie from "js-cookie";
import Router from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import CRE from "../../components/CRE";
import BLOAN from "../../components/BLOAN";
import PROPERTYCRE from "../../components/PROPERTYCRE";

const Hero = styled.div`
	padding: 40px 20% 40px 20%;
	font-family: Mulish;
	background-color: #1B46B0;
	height: 93.6vh;
	& .loan-type-select{
        padding: 15px 0px;
		&:hover{
			transform: scale(1.1); 
		}
		& strong{
			display: block;
			text-align: center;
			margin-top:5px;
			font-family: Mulish;
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            line-height: 150%;
            color: #5C5C5C;
		}
	}

	.form-row-button {
		width: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		margin: 20px 0px 20px 0px;
	}

	input[type="submit"] {
		background-color: #f3ba17;
		border: none;

		color: black;
		font-weight: 600;
		border-radius: 8px;
		padding: 14px 30px;
		text-decoration: none;
		cursor: pointer;
	}

	.loan-type-contain {
		/* border: 3px solid #ededed; */
		border: 2px solid #EDEDED;
		border-radius: 8px;
		padding: 5px;
		cursor: pointer;
	}

	.first {
		border: 3px solid #f3ba17;
	}

	input[type="radio"]:after {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		top: -2px;
		left: -1px;
		position: relative;
		background-color: #d9d9d9;
		content: "";
		display: inline-block;
		visibility: visible;
		border: 5px solid #adadad;
	}

	input[type="radio"]:checked:after {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		top: -2px;
		left: -1px;
		position: relative;
		background-color: #f3ba17;
		content: "";
		display: inline-block;
		visibility: visible;
		border: 5px solid #c4c4c4;
	}

	.loan-type-contain img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 200px;
	}

	.loan-type-contain a img {
		display: block;
		margin-left: auto;
		margin-right: 1px;
	}

	.loans-types {
        max-width:800px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
		
        
	}

	.loan-type-section {
		/* display: inline-block; */
		max-width:230px ;
        width: 100%;
		// max-width: 25%;
		padding: 0px 15px 15px 15px;
		vertical-align: top;
		color: #5c5c5c;
		font-weight: 800;
		
	}

	.finance-list {
		background-color: white;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		border-radius: 5px;
		padding: 30px 20px 50px 20px;
	}

	.loan-step {
		color: #adadad;
		text-transform: uppercase;
		font-weight: 700;
	}

	.loan-head {
		color: #333333;
		
		font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 36px;
text-align: center;
line-height: 150%;
margin-bottom: 2px;
	}

	.loan-describe {
		color: #adadad;
		font-weight: 400;
		font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 150%;
text-align: center;

	}

	.space {
		height: 30px;
	}

	.loan-amount {
		margin: 0 auto;
	}

	.dvImageTextBox {
		position: relative;
		margin: 0 auto;
		width: 250px;
	}

	.dvImageTextBox input {
		border: 2px solid #e5e5e5;
		border-radius: 5px;
		box-shadow: #f3ba17 0px 2px 0px;
		display: block;
		width: 100%;
		box-sizing: border-box;
		min-height: 40px;
		text-align: center;
		color: #333333;
		font-weight: 600;
		font-size: 24px;
	}
	.dvImageTextBox .rightimage {
		position: absolute;
		right: 5px;
		top: 2px;
		padding: 5px 5px 5px 20px;
	}

	.dvImageTextBox .leftimage {
		position: absolute;
		padding: 5px 20px 5px 5px;
	}

	hr {
		border-top: 1px solid #ededed;
	}

	.loan-interest {
		width: 100%;
		display: inline-block;
	}

	.interest-rates {
		width: 25%;
		display: inline-block;
	}

	.interest-rates h3 {
		color: #1b46b0;
		font-size: 24px;
		font-weight: 700;
		text-align: center;
		line-height: 8px;
	}

	.interest-rates p {
		color: #5c5c5c;
		font-weight: 700;
		text-align: center;
		line-height: 8px;
	}

	.form-row-one {
		column-count: 2;
		width: 100%;
		display: inline-block;
		column-gap: 5%;
	}

	.form-gap {
		margin-top: 20px;
	}

	.form-row-two {
		width: 100%;
		display: inline-block;
	}

	.formlabel {
		color: #5c5c5c;
		font-weight: 600;
		font-size: 14px;
		line-height: 30px;
	}

	.textbox {
		width: 100%;
		padding: 12px;
		border-radius: 5px;
		border: 1px solid #adadad;
	}

	.req {
		color: red;
		font-size: 14px;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export default function Form() {
    const { register, handleSubmit } = useForm();

    const [details, setDetails] = useState([]);
    const [status, setStatus] = useState(0);

    const radioHandler = (status) => {
        setStatus(status);
    };

    const headers = {
        "Content-Type": "application/json",
    };

    const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/loan-type/get-all";

    useEffect(() => {
        axios({
            method: "GET",
            url: url,
            headers: headers,
        }).then(
            (respo) => {
                console.log(respo.data.payload);
                setDetails(respo.data.payload);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const onSubmitForm = async (data) => {
        cookie.set("loanTypeId", data.loantypeid, {
            expires: 1 / 24,
        });
        cookie.set("amount", data.amount, { expires: 1 / 24 });
        cookie.set("firstName", data.firstName, { expires: 1 / 24 });
        cookie.set("lastName", data.lastName, { expires: 1 / 24 });
        cookie.set("phone", data.phone, { expires: 1 / 24 });
        cookie.set("businessName", data.businessName, { expires: 1 / 24 });
        cookie.set("source", data.source, { expires: 1 / 24 });
        Router.push("/registration");
    };

    return (
        <>
            <Head>
                <title>Borrower Section</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero>
                <form onSubmit={handleSubmit(onSubmitForm)} action="form2">
                    <div className="finance-list">
                        <p className="loan-step">Step 1</p>
                        <h3 className="loan-head">Which type of loan do you prefer?</h3>
                        <p className="loan-describe">Please select one to continue</p>

                        <section className="loans-types">
                            {/* {details.map((datai, dataname) => {
								const base_url =
									process.env.NEXT_PUBLIC_BASE_URL + datai.thumbnail;
								return ( */}
                            <div className="loan-type-section">
                                <div className="loan-type">
                                    <div className="loan-type-select">

                                        <div onClick={(e) => radioHandler(1)} className={`loan-type-contain ${status == 1 && "first"}`}>

                                            <input
                                                type="radio"
                                                name="radio"
                                                className="own-click"
                                                value="0"
                                                defaultChecked={status === 1}
                                                onClick={(e) => radioHandler(1)}
                                            />

                                            <img src="/loantypes/refinance.svg" />

                                            <a>
                                                <img src="/images/help.png" />
                                            </a>

                                        </div>
                                        <strong>Refinance of Property</strong>
                                        {/* <p>{datai.loanTitle}</p> */}
                                    </div>
                                </div>
                            </div>
                            {/* );
							})} */}
                            <div className="loan-type-section">
                                <div className="loan-type">
                                    <div className="loan-type-select">
                                        <div onClick={(e) => radioHandler(2)} className={`loan-type-contain ${status == 2 && "first"}`}>
                                            <input
                                                type="radio"
                                                name="radio"
                                                className="own-click"
                                                value="1"
                                                defaultChecked={status === 2}
                                                onClick={(e) => radioHandler(2)}
                                            />
                                               <img src="/loantypes/bridge.svg" />
                                            <a>
                                                <img src="/images/help.png" />
                                            </a>
                                        </div>
                                        <strong>Bridge Loan</strong>
                                        {/* <p>{datai.loanTitle}</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="loan-type-section">
                                <div className="loan-type">
                                    <div className="loan-type-select">
                                        <div onClick={(e) => radioHandler(3)} className={`loan-type-contain ${status == 3 && "first"}`}>
                                            <input
                                                type="radio"
                                                name="radio"
                                                className="own-click"
                                                value="2"
                                                defaultChecked={status === 3}
                                                onClick={(e) => radioHandler(3)}
                                            />
                                              <img src="/loantypes/purchase.svg" />
                                            <a>
                                                <img src="/images/help.png" />
                                            </a>
                                        </div>
                                        <strong>Purchase of Proprty</strong>
                                        {/* <p>{datai.loanTitle}</p> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* <div className="space"></div> */}

                    {status === 1 && <CRE />}
                    {status === 2 && <BLOAN />}
                    {status === 3 && <PROPERTYCRE />}

                    {/* <div className="finance-list">
						<p className="loan-step">Step 2</p>
						<h3 className="loan-head">How much do you want to borrow?</h3>
						<p className="loan-describe">
							Use the slider to select your loan amount or enter an amount in
							the text field.
						</p>

						<section className="loan-amount">
							<div className="dvImageTextBox">
								<img src="/images/dollar.png" className="leftimage" />
								<input
									{...register("amount", {
										required: "true",
										maxLength: {
											value: 20,
											message: "max length is 20",
										},
									})}
									type="number"
								/>
								<img src="/images/pen.png" className="rightimage" />
							</div>
							<br />
							<hr />
							<div className="loan-interest">
								<div className="interest-rates">
									<h3>$1,942</h3>
									<p>Monthly payment</p>
								</div>

								<div className="interest-rates">
									<h3>10 Years</h3>
									<p>Loan term</p>
								</div>

								<div className="interest-rates">
									<h3>
										6.00%
										<img src="/images/help-orange.png" />
									</h3>
									<p>Interest rate</p>
								</div>

								<div className="interest-rates">
									<h3>6.96%</h3>
									<p>APR with fees</p>
								</div>
							</div>
						</section>
					</div> */}

                    {/* <CRE />
					<BLOAN />
					<PROPERTYCRE /> */}

                    <div className="space"></div>
                    {/* 
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
					</div> */}
                </form>
            </Hero>
        </>
    );
}
