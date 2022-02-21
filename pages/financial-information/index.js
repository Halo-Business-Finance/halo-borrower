import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";
import NavMenu from "../../components/NavMenu";
import { API } from "../../utils/api";
import { notification } from "antd";

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
  .form-head {
    display: inline-block;
    width: 100%;
  }
  .form-row {
    column-count: 1;
    width: 100%;
  }
  /* .form-group {
		margin-top: 5%;
	} */
  .form-row-one {
    column-count: 2;
    width: 100%;
    display: inline-block;
    column-gap: 5%;
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
`;

export default function financialInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState(0);
  const [consumer, getConsumer] = useState({});

  const radioHandler = (status) => {
    setStatus(status);
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer" + " " + cookie.get("access_token"),
  };
  const addUpdateHandler = async (data) => {
    try {
      await API.post("/api/borrower/add-update-business-financials", data)
    } catch (error) {
      notification.error({ message: 'Error Occured', description: error?.data?.reason })

    }
  }
  const onSubmitForm = async (values) => {
    addUpdateHandler(values)
    //   let olab = false;
    //   if (values.olab == "" || values.olab == "false") {
    //     olab = false;
    //   } else {
    //     olab = true;
    //   }

    //   if (cookie.get("id") == "") {
    //     axios({
    //       method: "post",
    //       url:
    //         process.env.NEXT_PUBLIC_BASE_URL +
    //         "",
    //       headers: headers,
    //       data: {
    //         annualRevenuw: values.annual,
    //         // monthlyPayrollExpenses: values.payroll,
    //         // monthlyBusinessExpenses: values.expenses,
    //         // dailyAverageBankBalance: values.dailybalance,
    //         outstandingLoanOrAdvance: true,
    //         ourstandingAdvancesLoanAmount: values.advanceloan,
    //         useOfFunds: values.funds,
    //         loanAmountRequested: values.amount,
    //         typeOfProperty: values.Own,
    //         borrowerId: cookie.get("loan_request_id"),
    //         mortageInformation: {
    //           monthlyMoratge: values.mortage,
    //         },
    //         rentInformation: {
    //           monthlyRent: values.rent,
    //           landlordName: values.landordName,
    //           leaseStartDate: values.firstDate,
    //           leaseEndDate: values.endDate,
    //         },
    //       },
    //     }).then(
    //       (response) => {
    //         if (response.data.isSuccess) {
    //           Router.push("/prequlaify_owner");
    //         } else {
    //           console.log(response);
    //         }
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );
    //   } else {
    //     axios({
    //       method: "post",
    //       url:
    //         process.env.NEXT_PUBLIC_BASE_URL +
    //         "/api/borrower/add-update-business-financials",
    //       headers: headers,
    //       data: {
    //         annualRevenuw: values.annual,
    //         // monthlyPayrollExpenses: values.payroll,
    //         // monthlyBusinessExpenses: values.expenses,
    //         // dailyAverageBankBalance: values.dailybalance,
    //         outstandingLoanOrAdvance: true,
    //         ourstandingAdvancesLoanAmount: values.advanceloan,
    //         useOfFunds: values.funds,
    //         loanAmountRequested: values.amount,
    //         typeOfProperty: values.Own,
    //         id: cookie.get("id"),
    //         borrowerId: cookie.get("loan_request_id"),
    //         mortageInformation: {
    //           monthlyMoratge: values.mortage,
    //         },
    //         rentInformation: {
    //           monthlyRent: values.rent,
    //           landlordName: values.landordName,
    //           leaseStartDate: values.firstDate,
    //           leaseEndDate: values.endDate,
    //         },
    //       },
    //     }).then(
    //       (response) => {
    //         if (response.data.isSuccess) {
    //           Router.push("/prequlaify_owner");
    //         } else {
    //           console.log(response);
    //         }
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );
    //   }
  };

  const GetAllInformations = async () => {
    try {
      if (id){
        const response = await API.get(`/api/borrower/get-business-financials/${id}`)
        console.log(response);
      }
   
    } catch (error) {
      notification.error({ message: 'Error Occured', description: error?.data?.reason })
    }
  }


  useEffect(() => {
    GetAllInformations();
    // let url =
    //   process.env.NEXT_PUBLIC_BASE_URL +
    //   "/api/borrower/get-business-financials/" +
    //   cookie.get("loan_request_id");
    // axios({
    //   method: "GET",
    //   url: url,
    //   headers: headers,
    // }).then(
    //   (respo) => {
    //     if (respo.data.payload == null) {
    //       cookie.set("id", "", { expires: 5 / 24 });
    //       let dataempty = {
    //         annualRevenuw: "",
    //         monthlyPayrollExpenses: "",
    //         monthlyBusinessExpenses: "",
    //         dailyAverageBankBalance: "",
    //         outstandingLoanOrAdvance: "",
    //         ourstandingAdvancesLoanAmount: "",
    //         useOfFunds: "",
    //         loanAmountRequested: "",
    //         typeOfProperty: "",
    //         mortageInformation: {
    //           monthlyMoratge: "",
    //         },
    //         rentInformation: {
    //           monthlyRent: "",
    //           landlordName: "string",
    //           leaseStartDate: "2021-11-22T06:39:28.564Z",
    //           leaseEndDate: "2021-11-22T06:39:28.564Z",
    //         },
    //       };
    //       getConsumer(dataempty);
    //     } else {
    //       cookie.set("id", respo.data.payload.id, { expires: 5 / 24 });
    //       // console.log(respo.data.payload);
    //       getConsumer(respo.data.payload);
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }, []);

  function handleChange(event) {
    getConsumer(event.target.value);
  }

  return (
    <>
      <Head>
        <title>Financial Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <Hero>
        <form className="formstyle" onSubmit={handleSubmit(onSubmitForm)}>
          <section className="Form-design">
            <div className="form-head">
              <h2 className="heading">Financial Information</h2>
              <h2 className="heading-step">
                <p className="active">Step 3</p> /3
              </h2>
            </div>

            <div className="form-row form-gap">
              <div className="form-group">
                <label htmlFor="fname" className="formlabel ">
                  Annual Business Revenue
                </label>
                <input
                  className="textbox"
                  type="number"
                  autoComplete="fname"
                  placeholder="Enter Annual Business Revenue"
                  defaultValue={consumer.annualRevenuw}
                  {...register("annual")}
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="ffti" className="formlabel">
                  Do you have any outstanding loans or advances?
                </label>
                <div className="radio-two">
                  <div className="radio-container">
                    <input
                      type="radio"
                      name="olab"
                      value="Yes"
                      defaultValue={consumer.outstandingLoanOrAdvance}
                      {...register("loans")}
                    />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="olab"
                      value="No"
                      defaultValue={consumer.outstandingLoanOrAdvance}
                      {...register("loans")}
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  Outstanding Loan/Advance Balance
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="number"
                  autoComplete="fdba"
                  placeholder="Enter Outstanding Loan/Advance Balance"
                  defaultValue={consumer.ourstandingAdvancesLoanAmount}
                  {...register("advanceloan")}
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Use of Funds
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Use of Funds"
                  defaultValue={consumer.useOfFunds}
                  {...register("funds", {
                    required: "Required",
                  })}
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  Loan Amount Requested
                </label>
                <input
                  className="textbox"
                  type="number"
                  autoComplete="fdba"
                  placeholder="Enter Loan Amount Requested"
                  defaultValue={consumer.loanAmountRequested}
                  {...register("amount", {
                    required: "Required",
                  })}
                  required
                />
              </div>
            </div>

            <div className="form-head">
              <h2 className="heading">Property Details</h2>
            </div>
            <div className="form-group form-name">
              <label htmlFor="ffti" className="formlabel">
                Do you own the business property?
              </label>
              <div className="radio-four">
                <div className="radio-container">
                  <input
                    type="radio"
                    name="radio"
                    className="own-click"
                    value="0"
                    defaultChecked={status === 1}
                    onClick={(e) => radioHandler(1)}
                  />
                  <label>Own</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="radio"
                    className="mortgage-click"
                    value="1"
                    defaultChecked={status === 2}
                    onClick={(e) => radioHandler(2)}
                  />
                  <label>Mortgage</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="radio"
                    className="rent-click"
                    value="2"
                    defaultChecked={status === 3}
                    onClick={(e) => radioHandler(3)}
                  />
                  <label>Rent</label>
                </div>
              </div>
            </div>
            {status === 1 && ""}
            {status === 2 && (
              <div className="form-row-one form-gap mortgage">
                <div className="form-group form-name">
                  <label htmlFor="fname" className="formlabel ">
                    Monthly Mortgage
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="fname"
                    placeholder="Enter Monthly Rent/Mortgage"
                    {...register("mortage")}
                  />
                </div>
              </div>
            )}
            {status === 3 && (
              <div>
                <div className="rent">
                  <div className="form-row-one form-gap">
                    <div className="form-group form-name">
                      <label htmlFor="fname" className="formlabel ">
                        Monthly Rent
                      </label>
                      <input
                        className="textbox"
                        type="text"
                        autoComplete="fname"
                        placeholder="Enter Monthly Rent"
                        {...register("rent")}
                      />
                    </div>
                  </div>

                  <div className="form-row-one form-gap">
                    <div className="form-group form-name">
                      <label htmlFor="fname" className="formlabel ">
                        Landlord Name
                      </label>
                      <input
                        id="firstname"
                        className="textbox"
                        type="text"
                        autoComplete="fname"
                        placeholder="Enter Landlord Name"
                        {...register("landordName", {
                          required: "Required",
                        })}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="form-phone">
                      <label htmlFor="fname" className="formlabel">
                        Lease Start Date
                      </label>
                      <input
                        id="date"
                        className="textbox"
                        type="date"
                        autoComplete="fname"
                        placeholder="(XXX)-(XXX)-(XXXX)"
                        {...register("firstDate", {
                          required: "Required",
                        })}
                      />
                    </div>
                    <div className="form-phone">
                      <label htmlFor="fname" className="formlabel">
                        Lease End Date
                      </label>
                      <input
                        id="date"
                        className="textbox"
                        type="date"
                        autoComplete="fname"
                        placeholder="(XXX)-(XXX)-(XXXX)"
                        {...register("endDate", {
                          required: "Required",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <div className="form-row-button">
            <input onClick={() => Router.push("/owners")} type="submit" id="button" value="Continue" />
          </div>
        </form>
      </Hero>
    </>
  );
}
