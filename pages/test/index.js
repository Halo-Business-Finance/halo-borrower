import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import cookie from "js-cookie";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CRE from "../../components/CRE";
import BLOAN from "../../components/BLOAN";
import PROPERTYCRE from "../../components/PROPERTYCRE";
import { WorkingCapitalForm } from "../../components/workingcapital";
import { Franchaise } from "../../components/Organism/Franchise";
import { Factoring } from "../../components/Organism/Factoring";
import { useRouter } from 'next/router';
import PrivateRoute from "../withPrivateRoute";
import { AuthContext } from "../../utils/AuthContext";
import Carousel from "react-multi-carousel";
import { ArrowLeftOutlined } from '@ant-design/icons'

import { Button, Popconfirm, Spin } from "antd";
import { API } from "../../utils/api";
import { LoanList } from "../../components/Organism/LoanList";
import moment from "moment";
import { LoanCode } from "../../utils/code";
const Hero = styled.div`
	/* padding: 40px 20% 40px 20%; */
	max-width: 1250px;
	width: 90%;
	margin: 0 auto;
	margin-top:30px;
	font-family: Mulish;
	background-color: #fff;
    //  background-image:linear-gradient(to bottom,rgba(255,255,250,0),rgba(243,186,23,.3));
	min-height: 93.7vh;
    height: 100%;
	& .loan-type-select{
        padding: 15px 0px;
		transition: all .3s ease-in-out;
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
			transition: all .1s ease-in-out;
		&:hover{
			transform: scale(1.1); 
			
		}
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
		
		&:hover{
			border-top: 2px solid #F3BA17 ;
			border-left: 2px solid #1B46B0 ;
			border-right: 2px solid #F3BA17 ;
			border-bottom: 2px solid #1B46B0 ;
		}
	}

	.first {
		border: 3px solid #f3ba17;
	}

	input[type="radio"]:after {
		width: 25px;
		height: 25px;
		border-radius: 25px;
		top: -3px;
		left: -1px;
		position: relative;
		background-color: #d9d9d9;
		content: "";
		display: inline-block;
		visibility: visible;
		border: 1px solid #adadad;
	}

	input[type="radio"]:checked:after {
		 width: 25px;
		height: 25px;
		border-radius: 50%;
		top: -3px;
		left: -1px;
		position: relative;
		background-color: blue;
		content: "";
		display: inline-block;
		visibility: visible;
		border: 6px solid #c4c4c4;
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
        max-width:1200px;
        /* min-height: 300px; */
        width: 100%;
        margin: 0 auto;
        display: flex;
		flex-wrap: wrap;
		gap: 10px;
        /* justify-content: space-between; */
		
        
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
		box-shadow: rgba(0, 0, 0, 0.5) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
const SpinWrapper = styled.div`
height: 100vh;
width: 100%;
display: flex ;
justify-content: center;
align-items: center;

`;

const Form = () => {
	const { register, handleSubmit } = useForm();
	const [details, setDetails] = useState([]);
	const [applicationList, setApplicationList] = useState([]);
	const [status, setStatus] = useState(0);
	const router = useRouter();
	const { authenticated } = useContext(AuthContext);
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2
		}
	};


	const radioHandler = (status) => {
		setStatus(status);
	};

	const headers = {
		"Content-Type": "application/json",
	};

	const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/loan-type/get-all";
	useEffect(() => {
		if (router?.query?.id) {
			setStatus(router.query.id)
		}

	}, [router.query])

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
	const [prequalifyData, setPrequalifyData] = useState([])

	const FetchPrequaifyDataFromAPI = async () => {
		try {
			const response = await API.get("/api/borrower/get-prequalify-request");
			const data = await response?.payload;
			setPrequalifyData(data)
			console.log(response, "as")
		} catch (error) {

		}
	}

	useEffect(() => {
		FetchPrequaifyDataFromAPI();

	}, [])


	return (
		<>
			<Head>
				<title>Borrower Section</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{!authenticated ? <SpinWrapper><Spin size="large" /></SpinWrapper> : <Hero>
				{router.query.id && <Popconfirm onConfirm={() => window.location.assign('/test')} title="Once you back you need to start from the beginning. Are you sure you want to go back?">
					<Button type="link" >
						<ArrowLeftOutlined /> Back to home
					</Button>
				</Popconfirm>}
				<form onSubmit={handleSubmit(onSubmitForm)} action="form2">
					{status == "" && <div className="finance-list">
						<p className="loan-step">Step 1</p>
						<h3 className="loan-head">Which type of loan do you prefer?</h3>
						<p className="loan-describe">Please select one to continue</p>

						{/* <section className="loans-types"> */}
						{/* {details.map((datai, dataname) => {
								const base_url =
									process.env.NEXT_PUBLIC_BASE_URL + datai.thumbnail;
								return ( */}

						<Carousel responsive={responsive}>
							<div className="loan-type-section">
								<div className="loan-type">
									<div className="loan-type-select">

										<div onClick={(e) => router.push({ pathname: "/user", query: { id: 1 } })} className={`loan-type-contain ${status == 1 && "first"}`}>

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
										<div onClick={(e) => router.push({ pathname: "/user", query: { id: 2 } })} className={`loan-type-contain ${status == 2 && "first"}`}>
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
										<div onClick={(e) => router.push({ pathname: "/user", query: { id: 3 } })} className={`loan-type-contain ${status == 3 && "first"}`}>
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
										<strong>Purchase of Property</strong>
										{/* <p>{datai.loanTitle}</p> */}
									</div>
								</div>
							</div>
							<div className="loan-type-section">
								<div className="loan-type">
									<div className="loan-type-select">
										<div onClick={(e) => router.push({ pathname: "/user", query: { id: 4 } })} className={`loan-type-contain ${status == 4 && "first"}`}>
											<input
												type="radio"
												name="radio"
												className="own-click"
												value="2"
												defaultChecked={status === 4}
												onClick={(e) => radioHandler(4)}
											/>
											<img src="/loantypes/businessterm.svg" />
											<a>
												<img src="/images/help.png" />
											</a>
										</div>
										<strong>Franchise Loan</strong>
										{/* <p>{datai.loanTitle}</p> */}
									</div>
								</div>
							</div>

							<div className="loan-type-section">
								<div className="loan-type">
									<div className="loan-type-select">
										<div onClick={(e) => router.push({ pathname: "/user", query: { id: 5 } })} className={`loan-type-contain ${status == 5 && "first"}`}>
											<input
												type="radio"
												name="radio"
												className="own-click"
												value="2"
												defaultChecked={status === 5}
												onClick={(e) => radioHandler(5)}
											/>
											<img src="/loantypes/sba.svg" />
											<a>
												<img src="/images/help.png" />
											</a>
										</div>
										<strong>Factoring Loan</strong>
										{/* <p>{datai.loanTitle}</p> */}
									</div>
								</div>
							</div>
							<div className="loan-type-section">
								<div className="loan-type">
									<div className="loan-type-select">
										<div onClick={(e) => router.push({ pathname: "/user", query: { id: 6 } })} className={`loan-type-contain ${status == 6 && "first"}`}>
											<input
												type="radio"
												name="radio"
												className="own-click"
												value="2"
												defaultChecked={status === 6}
												onClick={(e) => radioHandler(6)}
											/>
											<img src="/loantypes/shorttermbusiness.svg" />
											<a>
												<img src="/images/help.png" />
											</a>
										</div>
										<strong>Working Capital</strong>
										{/* <p>{datai.loanTitle}</p> */}
									</div>
								</div>
							</div>
						</Carousel>
						{/* </section> */}
					</div>}

					{/* <div className="space"></div> */}

					{status == 1 && <CRE />}
					{status == 2 && <BLOAN />}
					{status == 3 && <PROPERTYCRE />}
					{status == 4 && <Franchaise />}
					{status == 5 && <Factoring />}
					{status == 6 && <WorkingCapitalForm />}
					<br />
					<br />
					<br />
					{status==0 &&<div>
						<h2>All Applications</h2>
						{

							prequalifyData?.length > 0 && prequalifyData?.map((item, index) =>

								<LoanList
									key={index}
									startedDate={moment(item?.applicationStartedDate).format("YYYY/MM/DD hh:mm")}
									amout={item?.amountToBeBorrowed}
									applicationNumber={item?.applicationNumber}
									name={LoanCode?.find((loan) => loan?.code == item?.loanTypes)?.name} />
							)
						}
					</div>}

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
					</div> 

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
			}	</>
	);
}
export default PrivateRoute(Form);
//  Form
//  PrivateRoute(Form);
