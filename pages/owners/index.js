import { useState, useEffect } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";
import NavMenu from "../../components/NavMenu";
import { notification } from "antd";

const Hero = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #e5e5e5;
	padding: 20px;
	font-family: Mulish;

	.formstyle {
		width: 60%;
		background: #f8f8ff;
		border-radius: 10px;
	}
	.Form-design {
		padding: 30px 30px 30px 30px;
	}

	.textbox {
		width: 100%;
		padding: 12px;
	}

	.radio-four {
		column-count: 4;
		width: 100%;
		display: inline-block;
		column-gap: 5%;
	}

	.radio-three {
		column-count: 3;
		width: 100%;
		display: inline-block;
		column-gap: 5%;
	}

	.radio-two {
		column-count: 2;
		width: 100%;
		display: inline-block;
		column-gap: 5%;
	}

	.form-row-one {
		column-count: 2;
		width: 100%;
		display: inline-block;
		column-gap: 5%;
	}

	.form-row-two {
		width: 100%;
		display: inline-block;
	}

	.form-row-three {
		width: 100%;
		display: inline-block;
	}

	.form-row-four {
		width: 100%;
		display: inline-block;
	}

	.form-city {
		width: 40%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-state {
		width: 25%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-zip {
		width: 25%;
		display: inline-block;
	}

	.form-addess {
		width: 60%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-phone {
		width: 40%;
		display: inline-block;
		margin-right: 5%;
	}

	.form-website {
		width: 55%;
		display: inline-block;
	}

	.form-suite {
		width: 35%;
		display: inline-block;
	}

	.form-head {
		display: inline-block;
		width: 100%;
	}

	.active {
		color: #1b46b0;
		display: inline;
	}

	.heading {
		display: inline;
		float: left;
	}

	.heading-step {
		display: inline;
		color: #adadad;
		display: inline;
		float: right;
	}

	.formlabel {
		color: #5c5c5c;
	}

	.textbox {
		border-radius: 4px;
		border: 1px solid #ededed;
	}

	.form-gap {
		margin-top: 20px;
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

	.form-row-button {
		width: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		margin: 20px 0px 20px 0px;
	}

	.radio-container {
		padding: 5px 5px 5px 5px;
		border: 1px solid #ededed;
		border-radius: 4px;
		background-color: white;
	}

	.rent {
		display: none;
	}

	.mortgage {
		display: none;
	}

	.check-btn input:checked ~ .hiddendiv {
		display: block;
	}

	.mortgage-click input:checked ~ .mortgage {
		display: block;
	}

	.own-click:checked ~ .mortgage {
		display: none;
	}

	.own-click:checked ~ .rent {
		display: none;
	}

	.add-owner {
		margin: 10px auto;
		color: #1b46b0;
		text-align: center;
		font-size: 14px;
		max-width: 600px;
		position: relative;
		cursor: pointer;
	}
	.add-owner:before {
		content: "";
		display: block;
		width: 40%;
		height: 1px;
		background: #1b46b0;
		left: 0;
		top: 50%;
		position: absolute;
	}
	.add-owner:after {
		content: "";
		display: block;
		width: 40%;
		height: 1px;
		background: #1b46b0;
		right: 0;
		top: 50%;
		position: absolute;
	}

	.trash {
		display: inline;
	}
	input::-webkit-outer-spin-button,
  	input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .hide-class{
	  display:none;
  }
`;

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm();

	  const addHandler = (data) => {
		try {
			API.post("api/borrower/add-update-owners", data)
			// Router.push({pathname:"/financial-information",query:{id:id}})
		} catch (error) {
			notification.error({ message: 'Error Occured', description: error?.data?.reason })
		}
	}
	// const [inputList, setInputList] = useState([{ fullname: "",
	// dateofbirth: "",
	// homeaddress: "",
	// city: "",
	// state: "",
	// zipcode: "",
	// socialsecuritynumber: "",
	// email: "",
	// mobile: "",
	// ownership: "",
	// personaldata: "", }]);

	const [inputList, setInputList] = useState([]);

	// handle input change
	const handleInputChange = (e, index) => {
	  const { name, value } = e.target;
	  const list = [...inputList];
	  list[index][name] = value;
	//   setInputList(list);
	};
  
	// handle click event of the Remove button
	const handleRemoveClick = index => {
	  const list = [...inputList];
	  list.splice(index, 1);
	  setInputList(list);
	};
  
	// handle click event of the Add button
	const handleAddClick = () => {
	  setInputList([...inputList, { fullname: "",
	  dateofbirth: "",
	  homeaddress: "",
	  city: "",
	  state: "",
	  zipcode: "",
	  socialsecuritynumber: "",
	  email: "",
	  mobile: "",
	  ownership: "",
	  personaldata: "",}]);
	};
	
	let a= 1;

	const headers = {
		"Content-Type": "application/json",
		Authorization: "Bearer" + " " + cookie.get("access_token"),
	  };

	const onSubmitForm = async (values) => {
		console.log(values);
		const headers = {
			"Content-Type": "application/json",
			Authorization: "Bearer" + " " + cookie.get("access_token"),
		};

		const ownerdata = [
			{
				id: cookie.get("id"),
				borrowerId: cookie.get("loan_request_id"),
				fullName: values.fullname,
				dateOfBirth: values.dateofbirth,
				homeAddress: values.homeaddress,
				city: values.city,
				state: values.state,
				zipCode: values.zipcode,
				ssn: values.socialsecuritynumber,
				email: values.email,
				phoneNumber: values.mobile,
				ownershipPercentage: values.ownership,
				typeOfResident: values.personaldata,
			}
			
		];

		axios({
			method: "post",
			url: process.env.NEXT_PUBLIC_BASE_URL + "/api/borrower/add-update-owners",
			headers: headers,
			data: ownerdata,
		}).then(
			(response) => {
				if (response.data.isSuccess) {
					console.log(response.data.isSuccess);
					// Router.push("/prequlaify_ba");
				} else {
					console.log(response);
				}
			},
			(error) => {
				console.log(error);
			}
		);
	};
	
	useEffect(() => {
		  let url =
			process.env.NEXT_PUBLIC_BASE_URL +
			"/api/borrower/get-owners/" +
			cookie.get("loan_request_id");
		  axios({
			method: "GET",
			url: url,
			headers: headers,
		  }).then(
			(respo) => {
	  
			  if(respo.data.payload == null){
						cookie.set("id","", { expires: 5 / 24 });
				let dataempty = {
						  legalEntity: "",
				stateOfOrganization: "",
				federalTaxId: "",
				startDate: "",
				industryDescription: "",
				typeOfProduct:"",
				totalEmployees: "",
				totalContractors: "",
				wasPurchased: "",
						  }
						  getConsumer(dataempty);
			  }else{
						cookie.set("id", respo.data.payload.id, { expires: 5 / 24 });
				console.log(respo.data.payload);
				setInputList(respo.data.payload);
			  }
			},
			(error) => {
			  console.log(error);
			}
		  );
		}, []);
		console.log(inputList,"input list")

	return (
		<>
			<Head>
				<title>Owner</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavMenu />
			<Hero>
				<form className="formstyle"  onSubmit={handleSubmit(onSubmitForm)}>
					<section className="Form-design">

						{inputList.map((x, i) => {
							return (
								<div>
								<br /><br />
								<div className="form-head">
									<h2 className="heading">
										Owner {a }
										
										{inputList.length !== 1 && <img
											src={"/images/trash.png"}
											alt="trash"
											onClick={() => handleRemoveClick(i)}
										/>}
										
										
										<div className="hide-class">{a = a+1 }</div>										
										
									</h2>
							
									<h2 className="heading-step">
										<p className="active">Step 1</p> /3
									</h2>
								</div>	

								<div className="form-row-one form-gap">
									<div className="form-group form-name">
										<label htmlFor="fname" className="formlabel ">
											Full Name
										</label>
										
										<input
											name="fullname"
											className="textbox"
											type="text"
											placeholder="John"
											defaultValue={x.fullName}
											onChange={e => handleInputChange(e, i)}
										/>
									</div>
								

									<div className="form-group form-dba">
										<label htmlFor="fdba" className="formlabel">
											Date of Birth
										</label>
										<input
											
											name="dateofbirth"
											className="textbox"
											type="date"
											placeholder="dateofbirth"
											defaultValue={x.dateofbirth}
											onChange={e => handleInputChange(e, i)}
										/>
									</div>
								</div>
								
								<div className="form-row-one form-gap">
									<div className="form-group form-name">
										<label htmlFor="fname" className="formlabel ">
												Home Address
											</label>
											<input
												name="homeaddress"
												className="textbox"
												type="text"
												placeholder="Enter Address"
												defaultValue={x.homeAddress}
												onChange={e => handleInputChange(e, i)}
											/>
									</div>
									
									<div className="form-group form-dba">
										<label htmlFor="fdba" className="formlabel">
											City
										</label>
										<input
											name="city"
											className="textbox"
											type="text"
											placeholder="Enter City"
											defaultValue={x.city}
											onChange={e => handleInputChange(e, i)}
										/>
									</div>
								</div>

								<div className="form-row-three form-gap">
									<div className="form-group form-city">
										<label htmlFor="fname" className="formlabel">
											State
										</label>
										<input
											name="state"
											className="textbox"
											type="text"
											placeholder="Select State"
											defaultValue={x.state}
											onChange={e => handleInputChange(e, i)}
										/>
									</div>
									<div className="form-group form-state">
										<label htmlFor="fname" className="formlabel">
											Zip Code
										</label>
										<input
											name="zipcode"
											className="textbox"
											type="number"
											placeholder="Enter Zip Code"
											defaultValue={x.zipCode}
											onChange={e => handleInputChange(e, i)}
										/>
									</div>
									<div className="form-group form-zip">
										<label htmlFor="fname" className="formlabel">
											Social Security Number
										</label>
										<input

											name="socialsecuritynumber"
											className="textbox"
											type="number"
											placeholder="Social Security Number"
											defaultValue={x.ssn}
											onChange={e => handleInputChange(e, i)}
										/>
									</div>
								</div>

								<div className="form-row-one form-gap">
									<div className="form-group form-name">
										<label htmlFor="fname" className="formlabel ">
											Email
										</label>
										<input
											name="email"
											className="textbox"
											type="email"
											placeholder="Enter Email"
											defaultValue={x.email}
											onChange={e => handleInputChange(e, i)}
										/>
									</div>
									<div className="form-group form-dba">
										<label htmlFor="fdba" className="formlabel">
											Mobile
										</label>
										<input

											name="mobile"
											className="textbox"
											type="mobile"
											placeholder="(XXX)-(XXX)-(XXXX)"
											defaultValue={x.phoneNumber}
											onChange={e => handleInputChange(e, i)}
										/>
									</div>
								</div>

								<div className="form-row-one form-gap">
									<div className="form-group form-name">
										<label htmlFor="fname" className="formlabel ">
											Ownership
										</label>
										<input

											name="ownership"
											className="textbox"
											type="text"
											placeholder="Enter percent of ownership"
											defaultValue={x.ownershipPercentage}
											onChange={e => handleInputChange(e, i)}
										/>
									</div>
								</div>

								<div className="form-group form-gap">
									<label htmlFor="ffti" className="formlabel">
										Are you a:
									</label>
									<div className="radio-three">
										<div className="radio-container">
											<input

												name="personaldata"
												className="own-click"
												type="radio"
												value="USCitizen"
												placeholder="Enter percent of ownership"
												onChange={e => handleInputChange(e, i)}
											/>
											<label>US Citizen</label>
										</div>
										<div className="radio-container">
											<input
												name="personaldata"
												className="own-click"
												type="radio"
												value="USCitizen"
												placeholder="Enter percent of ownership"
												onChange={e => handleInputChange(e, i)}

											/>
											<label>US Permanent Resident</label>
										</div>

										<div className="radio-container">
											<input

												name="personaldata"
												className="own-click"
												type="radio"
												value="USCitizen"
												placeholder="Enter percent of ownership"
												onChange={e => handleInputChange(e, i)}
											/>
											<label>Other</label>
										</div>
									</div>
								</div>
							</div>
								
							);
						})}	
							<p className="add-owner" onClick={handleAddClick}>
							Add Owner
							</p>

							<div className="form-row-button">
								<input type="submit" id="button" value="Continue" />
							</div>


							{/* <div className="btn-box">
								{inputList.length !== 1 && <button
									className="mr10"
									onClick={() => handleRemoveClick(i)}>Remove</button>}
								{inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
								</div> */}

						{/* 
									

									<div className="form-row-button">
										<input type="submit" id="button" value="Continue" />
									</div>
								</div>
							 */}
					</section>
				</form>
			</Hero>
		</>
	);
	}

