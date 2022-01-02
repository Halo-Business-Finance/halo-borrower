import Head from "next/head";
import styled from "styled-components";
import cookie from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import NavMenu from "../components/NavMenu";
import { useForm } from "react-hook-form";
import router from "next/router";
import LoanNavbar from "../components/LoanNavbar";
import LoanData from "../components/LoanData";
import Slider from "react-slick/lib/slider";
import Borrow from "../components/Borrow";

const Hero = styled.div`
	font-family: Mulish;

	.newloan {
		background-color: #1b46b0;
		padding: 20px 10% 20px 15%;
		color: #ffffff;
		font-size: 18px;
		font-weight: 600;
	}

	.loan-carasol {
		padding: 20px 10% 20px 15%;
		background-color: #fff;
	}

	.arrows {
		width: 5%;
		display: inline-block;
		vertical-align: middle;
		padding-top: 20px;
	}

	.right {
		/* float: right; */
		display: inline-block;
	}

	.loan-type-section {
		display: inline-block;
		min-width: 20%;
		max-width: 25%;
		padding: 0px 15px 0px 15px;
		vertical-align: top;
		color: #5c5c5c;
		font-weight: 800;
	}

	.loan-type-contain {
		/* border: 3px solid #ededed; */
		border-radius: 8px;
		padding: 5px;
	}

	.loan-type-contain img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 200px;
	}

	.loan-type-contain img:hover {
		border: 3px solid #f3ba17;
	}

	//all loan requested sections
	.sba-header-container {
		width: 100%;
		padding: 20px;
		border: 2px solid
			rgba(236.93750202655792, 236.93750202655792, 236.93750202655792, 1);
		border-radius: 15px;
	}

	.finance-container-one {
		width: 40%;
		display: inline-block;
	}

	.sba-image {
		width: 30%;
		height: 70px;
		width: 70px;
		padding: 5px;
		border: 2px solid #f3ba17;
		display: inline-block;
		border-radius: 6px;
	}

	.sba-details {
		display: inline-block;
		width: 40%;
		vertical-align: top;
		padding-left: 15px;
	}

	.finance-detail-title {
		line-height: 0px;
		font-weight: 700;
		font-size: 20px;
		color: #333333;
	}
	.finance-detail-detail {
		font-weight: 400;
		font-size: 16px;
		color: #adadad;
	}
	.finance-container-two {
		width: 60%;
		display: inline-block;
	}
	.button-step {
		float: right;
		text-align: center;
		font-weight: 700;
		cursor: pointer;
		display: inline-block;
		text-decoration: none;
		width: 25%;
	}

	.button-step input[type="submit"] {
		text-align: center;
		color: #333333;
		padding: 10px 30px 10px 30px;
		background-color: #f3ba17;
		border-radius: 5px;
	}

	.application_details {
		display: inline-block;
		width: 25%;
	}
	.application_details h3 {
		display: inline-block;
		line-height: 2px;
		color: #adadad;
		font-size: 12px;
	}

	.application_details p {
		color: #333333;
		line-height: 2px;
		font-size: 16px;
		font-weight: 900;
	}
`;



export default function LoansApplications() {
	const { register, handleSubmit } = useForm();

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "red" }}
				onClick={onClick}
			/>
		);
	}
	
	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					display: "block",
					background: "blue",
					color: "#ADADAD",
				}}
				onClick={onClick}
			/>
		);
	}
	const headers = {
		"Content-Type": "application/json",
		Authorization: "Bearer" + " " + cookie.get("access_token"),
	};

	//slider
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		speed: 5000,
		autoplaySpeed: 0,
		// cssEase: "linear",
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	//slider end

	const [details, setDetails] = useState([]);

	const [loanRequest, AllLonaset] = useState([]);

	const headersone = {
		"Content-Type": "application/json",
	};

	const urlone = process.env.NEXT_PUBLIC_BASE_URL + "/api/loan-type/get-all";

	useEffect(() => {
		axios({
			method: "GET",
			url: urlone,
			headers: headersone,
		}).then(
			(respo) => {
				// console.log(respo.data.payload)
				setDetails(respo.data.payload);
			},
			(error) => {
				console.log(error);
			}
		);
	}, []);

	const url =
		process.env.NEXT_PUBLIC_BASE_URL + "/api/borrower/get-all-loan-requests";

	useEffect(() => {
		axios({
			method: "GET",
			url: url,
			headers: headers,
		}).then(
			(respo) => {
				// console.log((respo.data.payload));
				AllLonaset(respo.data.payload);
			},
			(error) => {
				console.log(error);
			}
		);
	}, []);

	const onSubmitForm = (values) => {
		cookie.set("loan_request_id", values.loanid, { expires: 1 / 24 });
		router.push("/informationindex");
	};

	const [showme, setShowme] = useState(false);
	function toggle() {
		setShowme(!showme);
	}

	return (
		<>
			<Head>
				<title>Dashboard</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				{/* <div className="newloan">
					<a>New Loan</a>
				</div> */}
				<NavMenu />
				<div className="loan-carasol">
					<h3>Which type of loan do you prefer?</h3>

					<section className="loans-types">
						

						<div>
							<Slider {...settings}>
								{details.map((datai, dataname) => {
									const base_url =
										process.env.NEXT_PUBLIC_BASE_URL + datai.thumbnail;
									return (
										<div className="loan-type-section" key={datai.id}>
											<div className="loan-type">
												<div className="loan-type-select">
													<div className="loan-type-contain first-img">
														{/* value= {datai.id} */}
														<img src={base_url} onClick={toggle} />
													</div>
													<p>{datai.loanTitle} </p>
												</div>
											</div>
										</div>
									);
								})}

								<div>
									<h3>1</h3>
								</div>
								<div>
									<h3>2</h3>
								</div>
								<div>
									<h3>3</h3>
								</div>
							</Slider>
						</div>

						
					</section>

					<div style={{ display: showme ? "block" : "none" }}>
						{/* <section> */}
						<Borrow />
						{/* </section> */}
					</div>

					<section>
						<p>All aplications</p>
						{loanRequest.map((loan_requests, loans_details) => {
							return (
								<form onSubmit={handleSubmit(onSubmitForm)} key={loan_requests.id} >
									<div className="finance-list">
										<div className="sba-header-container">
											<div className="finance-container-one">
												<img
													src="/images/Pre-qualify.png"
													className="sba-image"
												/>

												<div className="sba-details">
													<p className="finance-detail-title">
														{loan_requests.borrowerState}
													</p>
													<p className="finance-detail-detail">
														{loan_requests.loanRequestStatus}
													</p>
												</div>
											</div>

											<div className="finance-container-two">
												<div className="application_details">
													<h3>Application Started</h3>
													<p> {loan_requests.applicationStarted} </p>
												</div>

												<div className="application_details">
													<h3>Application Number</h3>
													<p> {loan_requests.applicationNumber} </p>
												</div>

												<div className="application_details">
													<h3>Amount to borrow</h3>
													<p> $ {loan_requests.amount} </p>
												</div>
												<input
													type="hidden"
													name="loanid"
													value={loan_requests.id}
													{...register("loanid")}
												/>
												<div className="button-step">
													{/* <a href="/informationindex"> */}
													<input type="submit" value="View" />
													{/* </a> */}
												</div>
											</div>
										</div>
										<br />
										<br />
									</div>
								</form>
							);
						})}
					</section>
				</div>
			</Hero>
		</>
	);
}
