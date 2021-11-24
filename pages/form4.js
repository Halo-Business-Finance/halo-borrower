import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import OwnerTwo from "../components/ownerTwo";
import axios from "axios";
import cookie from 'js-cookie';
import Router from 'next/router';

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
`;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [owner, setOwner] = useState(false);

  const handleClick = () => {
    setOwner(true);
  };

  const onSubmitForm = async (values) => {
    // console.log(values);
    Router.push('/form5');
    const headers = {
      "Content-Type": "application/json",
      'Authorization': 'Bearer' + ' ' + cookie.get('access_token')
    };

    // let ownerdata = [{
    //                 borrowerId: cookie.get('id'),
    //                 fullName: values.fullname,
    //                 dateOfBirth: values.dateofbirth,
    //                 homeAddress: values.homeaddress,
    //                 city: values.city,
    //                 state: values.state,
    //                 zipCode: values.zipcode,
    //                 ssn: values.socialsecuritynumber,
    //                 email: values.email,
    //                 phoneNumber: values.mobile,
    //                 ownershipPercentage: values.ownership,
    //                 typeOfResident: values.personaldata,
    //             },{
    //               borrowerId: cookie.get('id'),
    //               fullName: values.fullname,
    //               dateOfBirth: values.dateofbirth,
    //               homeAddress: values.homeaddress,
    //               city: values.city,
    //               state: values.state,
    //               zipCode: values.zipcode,
    //               ssn: values.socialsecuritynumber,
    //               email: values.email,
    //               phoneNumber: values.mobile,
    //               ownershipPercentage: values.ownership,
    //               typeOfResident: values.personaldata,
    //             }

    //           ];

    // axios({
    //   method: "post",
    //   url: process.env.NEXT_PUBLIC_BASE_URL + '/api/borrower/add-owners',
    //   headers: headers,
    //   data: ownerdata
    // })
    // .then(
    //   (response) => {
    //     if (response.data.isSuccess) {
    //       console.log(response);
    //       Router.push("/form5");
    //       console.log("test");
    //     } else {
    //       console.log(response);
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  };
  return (
    <>
      <Head>
        <title>Owner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <form
          className="formstyle"
          action="form6"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <section className="Form-design">
            <div className="form-head">
              <h2 className="heading">Owner 1</h2>
              <h2 className="heading-step">
                <p className="active">Step 3</p> /3
              </h2>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Full Name
                </label>
                <input
                  {...register("fullname", {
                    required: "true",
                    maxLength: {
                      value: 20,
                      message: "max length is 25",
                    },
                  })}
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="John"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  Date of Birth
                </label>
                <input
                  {...register("dateofbirth", {
                    required: "true",
                  })}
                  id="firstname"
                  className="textbox"
                  type="date"
                  autoComplete="fdba"
                  placeholder="Enter Monthly Total Business Expenses"
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Home Address
                </label>
                <input
                  {...register("homeaddress", {
                    required: "true",
                  })}
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="address"
                  placeholder="Enter Address"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  City
                </label>
                <input
                  {...register("city", {
                    required: "true",
                  })}
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter City"
                  required
                />
              </div>
            </div>

            <div className="form-row-three form-gap">
              <div className="form-group form-city">
                <label htmlFor="fname" className="formlabel">
                  State
                </label>
                <input
                  {...register("state", {
                    required: "true",
                  })}
                  id="city"
                  className="textbox"
                  type="state"
                  autoComplete="fname"
                  placeholder="Select State"
                  required
                />
              </div>
              <div className="form-group form-state">
                <label htmlFor="fname" className="formlabel">
                  Zip Code
                </label>
                <input
                  {...register("zipcode", {
                    required: "true",
                  })}
                  id="state"
                  className="textbox"
                  type="number"
                  autoComplete="fname"
                  placeholder="Enter Zip Code"
                  required
                />
              </div>
              <div className="form-group form-zip">
                <label htmlFor="fname" className="formlabel">
                  Social Security Number
                </label>
                <input
                  {...register("socialsecuritynumber", {
                    required: "true",
                  })}
                  id="zipcode"
                  className="textbox"
                  type="number"
                  autoComplete="fname"
                  placeholder="Social Security Number"
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "true",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  Mobile
                </label>
                <input
                  {...register("mobile", {
                    required: "true",
                    maxLength: {
                      value: 15,
                      message: "max length is 15",
                    },
                  })}
                  id="firstname"
                  className="textbox"
                  type="number"
                  autoComplete="fdba"
                  placeholder="(XXX)-(XXX)-(XXXX)"
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Ownership
                </label>
                <input
                  {...register("ownership", {
                    required: "true",
                  })}
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter percent of ownership"
                  required
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
                    type="radio"
                   
                    className="own-click"
                    value="USCitizen"
                    {...register("personaldata")}
                    required
                  />
                  <label>US Citizen</label>
                </div>
                <div className="radio-container">
                  <input
                    type="radio"
                  
                    value="USCitizen"
                    className="mortgage-click"
                    {...register("personaldata")}
                    required
                  />
                  <label>US Permanent Resident</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                   
                    value="USCitizen"
                    className="rent-click"
                    {...register("personaldata")}
                    required
                  />
                  <label>Other</label>
                </div>
              </div>
              <p className="add-owner " onClick={handleClick}>
                Add Owner
              </p>
              {owner ? <OwnerTwo /> : ""}

              <div className="form-row-button">
                <input type="submit" id="button" value="Continue" />
              </div>
            </div>
          </section>
        </form>
      </Hero>
    </>
  );
}
