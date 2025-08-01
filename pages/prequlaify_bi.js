import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import cookie from "js-cookie";
import NavMenu from "../components/NavMenu";


const Hero = styled.div`
  display: flex;
  font-family: Mulish;

  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  padding: 20px;

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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .first-input,
  .second-input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #ededed;
    margin: 2px;
  }
`;

export default function businessInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [consumer, getConsumer] = useState({});
  
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer" + " " + cookie.get("access_token"),
  };
  const onSubmitForm = async (values) => {

  if(cookie.get("id") == "") {
    axios({
          method: "post",
          url: process.env.NEXT_PUBLIC_BASE_URL + "/api/borrower/add-update-business-info/",
          data: {
            legalEntity: values.binfo,
            stateOfOrganization: values.organization,
            federalTaxId: values.federal,
            startDate: values.date,
            industryDescription: values.industry,
            typeOfProduct: values.product,
            totalEmployees: values.totalEmployees,
            totalContractors: values.totalContractors,
            wasPurchased: values.businesspurchased,
            borrowerId: cookie.get("loan_request_id"),
          },
          headers: headers,
        }).then(
          (response) => {
            if (response.data.isSuccess) {
              Router.push("/prequlaify_fi");
            } else {
              (response);
            }
          }, 
          (error) => {
            (error);
          }
        );
}else{
      axios({
        method: "post",
        url: process.env.NEXT_PUBLIC_BASE_URL + "/api/borrower/add-update-business-info/",
        data: {
          legalEntity: values.binfo,
          stateOfOrganization: values.organization,
          federalTaxId: values.federal,
          startDate: values.date,
          industryDescription: values.industry,
          typeOfProduct: values.product,
          totalEmployees: values.totalEmployees,
          totalContractors: values.totalContractors,
          wasPurchased: values.businesspurchased,
          id: cookie.get("id"),
          borrowerId: cookie.get("loan_request_id"),
        },
        headers: headers,
      }).then(
        (response) => {
          if (response.data.isSuccess) {
            Router.push("/prequlaify_fi");
          } else {
            (response);
          }
        },
        (error) => {
          (error);
        }
      );
  }

  };
     
  useEffect(() => {


  //   const [datache, datachecked] = useState({});

  // const datatest =  {
  //    "CCorpprecheck" : "checked"
  // };

  // // let CCorpprecheck = "checked";
  // // let SolePropcheck ="";
  // // let LLCcheck ="";
  // // let Partnershipcheck ="";
  // datachecked(datatest);

    let url =
      process.env.NEXT_PUBLIC_BASE_URL +
      "/api/borrower/get-business-info/" +
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
          (respo.data.payload);
          
          // let legalEntitypre;
          // if (respo.data.payload.legalEntity == 0 ) {
          //     legalEntitypre = false;
          //    CCorpprecheck ="checked";

          // } else if (respo.data.payload.legalEntity == "CCorp" ) {
          //    CCorpprecheck ="checked";
          // } else if (respo.data.payload.legalEntity == "SoleProp" ) {
          //    SolePropcheck ="checked";
          // }else if (respo.data.payload.legalEntity == "LLC" ) {
          //    LLCcheck ="checked";
          // }else if (respo.data.payload.legalEntity == "Partnership" ) {
          //    Partnershipcheck ="checked";
          // }else{
          //   legalEntitypre = false;
          // }
          // (respo.data.payload);
          getConsumer(respo.data.payload);
        }
      },
      (error) => {
        (error);
      }
    );
  }, []);

  function handleChange(event) {
    getConsumer(event.target.value);
  }

  return (
    <>
      <Head>
        <title> Business Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <Hero>
        <form className="formstyle" onSubmit={handleSubmit(onSubmitForm)}>
          <section className="Form-design">
            <div className="form-head">
              <h2 className="heading">Business Information</h2>
              <h2 className="heading-step">
                <p className="active">Step 2</p> /3
              </h2>
            </div>

            <div className="form-row">
              <label htmlFor="fentity" className="formlabel ">
                Legal Entity
              </label>
              <div className="radio-four">
                <div className="radio-container">
                  <input
                    type="radio"
                    name="binfo"
                    value="CCorp"
                    // defaultChecked = {datache.CCorpprecheck}
                    {...register("binfo")}
                  />

                  <label>C- Corp</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="binfo"
                    value="SoleProp"
                    {...register("binfo")}
                  />
                  <label>Sole-Prop</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="binfo"
                    value="LLC"
                    {...register("binfo")}
                  />
                  <label>LLC</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="binfo"
                    value="Partnership"
                    {...register("binfo")}
                  />
                  <label>Partnership</label>
                </div>
              </div>
            </div>

            <div className="form-row-two form-gap">
              <div className="form-addess">
                <label htmlFor="fsoo" className="formlabel">
                  State of Organization
                </label>
                <input
                  id="address"
                  className="textbox"
                  type="text"
                  autoComplete="fsoo"
                  placeholder="Enter State of Organization"
                  defaultValue={consumer.stateOfOrganization}
                  {...register("organization", {
                    required: "Required",
                  })}
                />
              </div>
              <div className="form-suite">
                <label htmlFor="ffti" className="formlabel">
                  Federal Tax ID
                </label>
                <input
                  id="suite"
                  className="textbox"
                  type="text"
                  autoComplete="ffti"
                  placeholder="Enter Federal Tax ID"
                  defaultValue={consumer.federalTaxId}
                  {...register("federal", {
                    required: "Required",
                  })}
                />
              </div>
            </div>

            <div className="form-row-four form-gap">
              <div className="form-phone">
                <label htmlFor="fname" className="formlabel">
                  Business Start Date
                </label>
                <input
                  id="date"
                  className="textbox"
                  type="date"
                  autoComplete="fname"
                  placeholder="(XXX)-(XXX)-(XXXX)"
                  defaultValue={consumer.startDate}
                  {...register("date", {
                    required: "Required",
                  })}
                />
              </div>
              <div className="form-website">
                <label htmlFor="fname" className="formlabel">
                  Industry Description/SIC
                </label>
                <input
                  id="industry"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Industry Description/SIC:"
                  defaultValue={consumer.industryDescription}
                  {...register("industry", {
                    required: "Required",
                  })}
                />
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group">
                <label htmlFor="fname" className="formlabel">
                  Type of Product/Service Sold
                </label>
                <input
                  id="product"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Type of Product/Service Sold"
                  defaultValue={consumer.typeOfProduct}
                  {...register("product", {
                    required: "Required",
                  })}
                />
              </div>
            </div>

            <div className="form-row-two form-gap">
              <div className="form-addess">
                <label htmlFor="fsoo" className="formlabel">
                  Total Company Employees and 1099 Contractors
                </label>
                <input
                  id="totalEmployees"
                  className="first-input"
                  type="number"
                  autoComplete="fsoo"
                  placeholder="Total Employees"
                  defaultValue={consumer.totalEmployees}
                  {...register("totalEmployees", {
                    required: "Required",
                  })}
                />

                <input
                  id="totalContractors"
                  className="second-input"
                  type="number"
                  autoComplete="fsoo"
                  placeholder="Total Contractors"
                  defaultValue={consumer.totalContractors}
                  {...register("totalContractors", {
                    required: "Required",
                  })}
                />
              </div>
              <div className="form-suite">
                <label htmlFor="ffti" className="formlabel">
                  Was this Business Purchased?
                </label>

                <div className="radio-two">
                  <div className="radio-container">
                    <input
                      type="radio"
                      name="business"
                      value="Yes"
                      defaultChecked={consumer.wasPurchased}
                      {...register("business")}
                    />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="business"
                      value="No"
                      defaultChecked={consumer.wasPurchased}
                      {...register("business")}
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="form-row-button">
            <input type="submit" id="button" value="Continue" />
          </div>
        </form>
      </Hero>
    </>
  );
}
