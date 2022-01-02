import Head from "next/head";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import cookie from "js-cookie";
import axios from "axios";
import ProGressTracker from "../components/PfTracker";
import NavMenu from "../components/NavMenu";

const Hero = styled.div`
  padding: 40px 5% 40px 5%;

  background: #e5e5e5;
  font-family: Mulish;

  .formstyle {
    margin-left: 20%;
    width: 60%;
    background: #f8f8ff;
    border-radius: 10px;
    padding-bottom: 20px;
  }
  .Form-design {
    padding: 30px 30px 30px 30px;
  }

  .textbox {
    width: 100%;
    padding: 12px;
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
    column-count: 3;
    width: 100%;
    display: inline-block;
  }

  .form-row-four {
    width: 100%;
    display: inline-block;
  }

  .form-city {
    width: 100%;
    display: inline-block;
    margin-right: 5%;
  }

  .form-addess {
    width: 100%;
    display: inline-block;
    margin-right: 5%;
  }

  .form-phone {
    width: 100%;
    display: inline-block;
    margin-right: 5%;
  }

  .form-state {
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0px 20px 0px;
  }
  .radio-container {
    padding: 10px 40px;
    background: #ffffff;
    border-radius: 8px;
    label {
      font-weight: 600;
      font-size: 16px;
    }
  }

  .radio-two {
    column-count: 2;
    width: 100%;
    display: block;
    column-gap: 5%;
  }

  .radio-one {
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin-top: 2px;
  }
  .radio-third {
    margin-top: 2px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .meter {
    margin-top: 20px;
    box-sizing: content-box;
    height: 10px;
    position: relative;
    background: #ededed;
    border-radius: 25px;
  }

  .meter > span {
    display: block;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #1b46b0;
    position: relative;
    overflow: hidden;
  }

  .meter span {
    width: 10%;
  }

  .meter-link {
    float: right;
    font-weight: 500;
    font-size: 14px;
    color: #1b46b0;
    text-decoration: underline;
  }
  .progress-tracker {
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 2%;
  }

  .progress-form {
    width: 10%;
    // min-height:100px;
    // background-color:red;
  }

  .progress-form {
    font-weight: 700;
    color: #1b46b0;
    font-size: 14px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function Information() {
  const { register, handleSubmit } = useForm();

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer" + " " + cookie.get("access_token"),
  };

  // const onSubmitForm = async (values) => {
  //   axios({
  //     method: "post",
  //     url: process.env.NEXT_PUBLIC_BASE_URL + "/add-update-personal-info",
  //     data: {
  //       id: cookie.get("id"),
  //       ownerId: cookie.get("ownerId"),
  //       name: values.applicantName,
  //       phone: values.phone,
  //       businessOfEmployer: values.businessOfEmployer,
  //       dateOfBirth: values.dateOfBirth,
  //       coApplicantName: values.coApplicantName,
  //       coApplciantBusinessPhone: values.coApplciantBusinessPhone,
  //       coApplicantBusinessOfEmployer: values.coApplicantBusinessOfEmployer,
  //       coApplicantDateOfBirth: values.coApplicantDateOfBirth,
  //       residenceAddress: values.residenceAddress,
  //       city: values.city,
  //       state: values.state,
  //       zipCode: values.zipCode,
  //       residencePhone: values.residencePhone,
  //       partnerInOtherVentures: values.partnerInOtherVentures,
  //       haveWill: true,
  //     },
  //     headers: headers,
  //   }).then(
  //     (response) => {
  //       if (response.data.isSuccess) {
  //         Router.push("/personalfinance_gi");
  //       } else {
  //         console.log(response);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };
 
  const onSubmitForm = async (values) => {
    if (cookie.get("id") == "") {
      axios({
        method: "post",
        url: process.env.NEXT_PUBLIC_BASE_URL + "/add-update-personal-info",
        data: {
          ownerId: cookie.get("ownerId"),
          name: values.applicantName,
          phone: values.phone,
          businessOfEmployer: values.businessOfEmployer,
          dateOfBirth: values.dateOfBirth,
          coApplicantName: "",
          coApplciantBusinessPhone: values.coApplciantBusinessPhone,
          coApplicantBusinessOfEmployer: values.coApplicantBusinessOfEmployer,
          coApplicantDateOfBirth: values.coApplicantDateOfBirth,
          residenceAddress: values.residenceAddress,
          city: values.city,
          state: values.state,
          zipCode: values.zipCode,
          residencePhone: values.residencePhone,
          partnerInOtherVentures: true,
          haveWill: true,
        },
        headers: headers,
      }).then(
        (response) => {
          if (response.data.isSuccess) {
            Router.push("/personalfinance_gi");
          } else {
            console.log(response);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      axios({
        method: "post",
        url: process.env.NEXT_PUBLIC_BASE_URL + "/add-update-personal-info",
        data: {
          id: cookie.get("id"),
          ownerId: cookie.get("ownerId"),
          name: values.applicantName,
          phone: values.phone,
          businessOfEmployer: values.businessOfEmployer,
          dateOfBirth: values.dateOfBirth,
          coApplicantName: "",
          coApplciantBusinessPhone: values.coApplciantBusinessPhone,
          coApplicantBusinessOfEmployer: values.coApplicantBusinessOfEmployer,
          coApplicantDateOfBirth: values.coApplicantDateOfBirth,
          residenceAddress: values.residenceAddress,
          city: values.city,
          state: values.state,
          zipCode: values.zipCode,
          residencePhone: values.residencePhone,
          partnerInOtherVentures: true,
          haveWill: true,
        },
        headers: headers,
      }).then(
        (response) => {
          if (response.data.isSuccess) {
            Router.push("/personalfinance_gi");
          } else {
            console.log(response);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  const [consumer, getConsumer] = useState({});

  useEffect(() => {
    let url =
      process.env.NEXT_PUBLIC_BASE_URL +
      "/get-personal-info/" +
      cookie.get("ownerId");
    axios({
      method: "GET",
      url: url,
      headers: headers,
    }).then(
      (response) => {
        console.log(response.data.payload);
        if (response.data.payload == null) {
          // cookie.set("id", "", { expires: 5 / 24 });
          let dataempty = {
            name: "",
            phone: "",
            businessOfEmployer: "",
            dateOfBirth: "",
            coApplicantName: "",
            coApplciantBusinessPhone: "",
            coApplicantBusinessOfEmployer: "",
            coApplicantDateOfBirth: "",
            residenceAddress: "",
            city: "",
            state: "",
            zipCode: "",
            residencePhone: "",
            partnerInOtherVentures: "",
          };
          getConsumer(dataempty);
        } else {
          // cookie.set("id", respo.data.payload.id, { expires: 5 / 24 });
          getConsumer(response.data.payload);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  function handleChange(event) {
    getConsumer(event.target.value);
  }

  return (
    <>
      <Head>
        <title>Personal Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <Hero>
        <ProGressTracker />
        <form
          className="formstyle"
          action="information2"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <section className="Form-design">
            <div className="form-head">
              <h2 className="heading">Personal Information</h2>
              <h2 className="heading-step">
                <p className="active">Step 1</p> /6
              </h2>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Applicant Name
                </label>
                <input
                  {...register("applicantName", {
                    required: "true",
                  })}
                  defaultValue={consumer.name}
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Applicant Name"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  Business phone
                </label>
                <input
                  {...register("phone", {
                    required: "true",
                  })}
                  defaultValue={consumer.phone}
                  id="firstname"
                  className="textbox"
                  type="number"
                  autoComplete="fdba"
                  placeholder="XXX-XXX-XXXX"
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-addess">
                <label htmlFor="fname" className="formlabel">
                  Business of Employeer
                </label>
                <input
                  {...register("businessOfEmployer", {
                    required: "true",
                  })}
                  defaultValue={consumer.businessOfEmployer}
                  id="address"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Applicant Name"
                  required
                />
              </div>
              <div className="form-group form-suite">
                <label htmlFor="fname" className="formlabel">
                  Date of Birth
                </label>
                <input
                  {...register("dateOfBirth", {
                    required: "true",
                  })}
                  defaultValue={consumer.dateOfBirth}
                  id="suite"
                  className="textbox"
                  type="date"
                  autoComplete="fname"
                  placeholder="MM-DD-YYYY"
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              {/* <div className="form-group form-city">
                <label htmlFor="fname" className="formlabel">
                  Co-Applicant Name
                </label>
                <input
                  {...register("co-applicantname", {
                    required: "true",
                  })}
                  defaultValue={consumer.coApplicantName}
                  id="city"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Co-Applicant Name"
                  required
                />
              </div> */}
              <div className="form-group form-bphone">
                <label htmlFor="fname" className="formlabel">
                  Business Phone
                </label>
                <input
                  {...register("coApplciantBusinessPhone", {
                    required: "true",
                  })}
                  defaultValue={consumer.coApplciantBusinessPhone}
                  id="state"
                  className="textbox"
                  type="number"
                  autoComplete="fname"
                  placeholder="XXX-XXX-XXXX"
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-zip">
                <label htmlFor="fname" className="formlabel">
                  Business of Employeer
                </label>
                <input
                  {...register("coApplicantBusinessOfEmployer")}
                  defaultValue={consumer.coApplicantBusinessOfEmployer}
                  id="employer"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Applicant Name"
                  required
                />
              </div>
              <div className="form-group form-phone">
                <label htmlFor="fname" className="formlabel">
                  Date of Birth
                </label>
                <input
                  {...register("coApplicantDateOfBirth", {
                    required: "true",
                  })}
                  defaultValue={consumer.coApplicantDateOfBirth}
                  id="dob"
                  className="textbox"
                  type="date"
                  autoComplete="fname"
                  placeholder="MM-DD-YYYY"
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-website">
                <label htmlFor="fname" className="formlabel">
                  Residence Address
                </label>
                <input
                  {...register("residenceAddress", {
                    required: "true",
                  })}
                  defaultValue={consumer.coApplicantDateOfBirth}
                  id="address"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter City"
                  required
                />
              </div>
              <div className="form-group form-city">
                <label htmlFor="fname" className="formlabel">
                  City
                </label>
                <input
                  {...register("city", {
                    required: "true",
                  })}
                  defaultValue={consumer.city}
                  id="city"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter City"
                  required
                />
              </div>
            </div>

            <div className="form-row-three form-gap">
              <div className="form-group form-state">
                <label htmlFor="fname" className="formlabel">
                  State
                </label>
                <input
                  {...register("state", {
                    required: "true",
                  })}
                  defaultValue={consumer.state}
                  id="state"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Select State"
                  required
                />
              </div>
              <div className="form-group form-fzip">
                <label htmlFor="fname" className="formlabel">
                  Zip Code
                </label>
                <input
                  {...register("zipCode", {
                    required: "true",
                  })}
                  defaultValue={consumer.zipCode}
                  id="zipcode"
                  className="textbox"
                  type="number"
                  autoComplete="fname"
                  placeholder="Enter Zip Code"
                  required
                />
              </div>
              <div className="form-group form-tele">
                <label htmlFor="fname" className="formlabel">
                  Residence Phone
                </label>
                <input
                  {...register("residencePhone", {
                    required: "true",
                  })}
                  defaultValue={consumer.residencePhone}
                  id="tele"
                  className="textbox"
                  type="number"
                  autoComplete="fname"
                  placeholder="(XXX)-(XXX)-(XXXX)"
                />
              </div>
            </div>
            <div className="form-row form-gap">
              <label htmlFor="fentity" className="formlabel ">
                Partner or officer in any other venture?
              </label>
              <div className="radio-one">
                <div className="radio-container">
                  <input
                    type="radio"
                    name="radio"
                    value="Yes"
                    defaultValue={consumer.partnerInOtherVentures}
                    {...register("partner", {
                      required: "true",
                    })}
                  />

                  <label>Yes</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="radio"
                    value="No"
                    defaultValue={consumer.partnerInOtherVentures}
                    {...register("partner", {
                      required: "true",
                    })}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>
            {/* <div className="form-row form-gap">
              <label htmlFor="inform" className="formlabel">
                Do you have a will?
              </label>
              <div className="radio-two">
                <div className="radio-third">
                  <div className="">
                    <input
                      type="radio"
                      name="radio"
                      value="Yes"
                      defaultValue={consumer.haveWill}
                      {...register("will", {
                        required: "true",
                      })}
                    />
                    <label>Yes</label>
                  </div>

                  <div className="">
                    <input
                      type="radio"
                      name="radio"
                      value="No"
                      defaultValue={consumer.haveWill}
                      {...register("will", {
                        required: "true",
                      })}
                    />
                    <label>No</label>
                  </div>
                </div>

                <div className="form-group form-website">
                  <label htmlFor="fname" className="formlabel">
                    Name of executor
                  </label>
                  <input
                    {...register("executor", {
                      required: "true",
                    })}
                    // defaultValue={consumer.}

                    id="website"
                    className="textbox"
                    type="text"
                    autoComplete="fname"
                    required
                  />
                </div>
              </div>
            </div> */}
          </section>

          <div className="form-row-button">
            <input
              type="submit"
              href="information2"
              id="button"
              value="Continue"
            />
            <a href="/personalfinance_gi">Skip</a>
          </div>
        </form>
      </Hero>
    </>
  );
}
