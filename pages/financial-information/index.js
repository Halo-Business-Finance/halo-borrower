import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import cookie from "js-cookie";
import Router, { useRouter } from "next/router";
import NavMenu from "../../components/NavMenu";
import { API } from "../../utils/api";
import { notification } from "antd";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

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
    display: flex;
      align-items: center;
    padding: 5px 5px 5px 5px;
    border: 1px solid #ededed;
    border-radius: 4px;
    background-color: white;
    & input{
			margin-right: 5px;
		}
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
  const router = useRouter();
  const { id } = router.query
  const [status, setStatus] = useState(1);
  function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
  }
  const [consumer, getConsumer] = useState(
    {

      "annualRevenue": null,
      // "dailyAverageBankBalance": null,
      "outstandingLoanOrAdvance": true,
      "ourstandingAdvancesLoanAmount": null,
      "useOfFunds": null,
      "loanAmountRequested": null,
      "typeOfProperty": 1,
      "loanRequestId": id,
      "mortgageInformation": {
        "monthlyMortgage": null
      },
      "rentInformation": {
        "monthlyRent": null,
        "landlordName": null,
        "leaseStartDate": null,
        "leaseEndDate": null
      }
    }
  );
  const [hasId, setHasID] = useState(null)

  const radioHandler = (status) => {
    setStatus(status);
    getConsumer({
      ...consumer,
      typeOfProperty: status
    })
  };


  const addUpdateHandler = async (data) => {
    try {
      await API.post("/api/borrower/add-update-business-financials", data);
      localStorage.setItem("progress","3")
      router.push({ pathname: "/owners", query: { id: id } })
    } catch (error) {
      notification.error({ message: 'Error Occured', description: error?.data?.reason })

    }
  }
  const onSubmitForm = async (values) => {
    if (hasId !== null && status == 1) {
      getConsumer({
        // "annualRevenue": consumer?.annualRevenue,
        "annualRevenue": +`${consumer?.annualRevenue||0}`.replace(/[^\d]+/gi, ''),
        // "dailyAverageBankBalance": null,
        "outstandingLoanOrAdvance": +`${consumer?.outstandingLoanOrAdvance||0}`.replace(/[^\d]+/gi, ''),
        // "ourstandingAdvancesLoanAmount": +`${consumer?.ourstandingAdvancesLoanAmount||0}`.replace(/[^\d]+/gi, ''),
        "ourstandingAdvancesLoanAmount": +`${consumer?.ourstandingAdvancesLoanAmount||0}`.replace(/[^\d]+/gi, ''),
        "useOfFunds": consumer?.useOfFunds,
        // "loanAmountRequested": consumer?.loanAmountRequested,
        "loanAmountRequested": +`${consumer?.loanAmountRequested||0}`.replace(/[^\d]+/gi, ''),
        "typeOfProperty": consumer?.typeOfProperty,
        "loanRequestId": id,
        id: hasId,
      })
      addUpdateHandler({
        // "annualRevenue": consumer?.annualRevenue,
        "annualRevenue": +`${consumer?.annualRevenue||0}`.replace(/[^\d]+/gi, ''),
        // "dailyAverageBankBalance": null,
        "outstandingLoanOrAdvance": +`${consumer?.outstandingLoanOrAdvance||0}`.replace(/[^\d]+/gi, ''),
        // "ourstandingAdvancesLoanAmount": +`${consumer?.ourstandingAdvancesLoanAmount||0}`.replace(/[^\d]+/gi, ''),
        "ourstandingAdvancesLoanAmount": +`${consumer?.ourstandingAdvancesLoanAmount||0}`.replace(/[^\d]+/gi, ''),
        "useOfFunds": consumer?.useOfFunds,
        // "loanAmountRequested": consumer?.loanAmountRequested,
        "loanAmountRequested": +`${consumer?.loanAmountRequested||0}`.replace(/[^\d]+/gi, ''),
        "typeOfProperty": consumer?.typeOfProperty,
        "loanRequestId": id,
        id: hasId,
      })
    }
    if (status == 1 && hasId == null) {
      getConsumer({
        // "annualRevenue": consumer?.annualRevenue,
        "annualRevenue": +`${consumer?.annualRevenue||0}`.replace(/[^\d]+/gi, ''),
        // "dailyAverageBankBalance": null,
        // "outstandingLoanOrAdvance": consumer?.outstandingLoanOrAdvance,
        // "ourstandingAdvancesLoanAmount": consumer?.outstandingLoanOrAdvance? consumer?.ourstandingAdvancesLoanAmount : null,
        "outstandingLoanOrAdvance": +`${consumer?.outstandingLoanOrAdvance||0}`.replace(/[^\d]+/gi, ''),
        "ourstandingAdvancesLoanAmount": +`${consumer?.ourstandingAdvancesLoanAmount||0}`.replace(/[^\d]+/gi, ''),
        "useOfFunds": consumer?.useOfFunds,
        // "loanAmountRequested": consumer?.loanAmountRequested,
        "loanAmountRequested": +`${consumer?.loanAmountRequested||0}`.replace(/[^\d]+/gi, ''),
        "typeOfProperty": consumer?.typeOfProperty,
        "loanRequestId": id,
      })
      addUpdateHandler({
        // "annualRevenue": consumer?.annualRevenue,
        "annualRevenue": +`${consumer?.annualRevenue||0}`.replace(/[^\d]+/gi, ''),
        // "dailyAverageBankBalance": null,
        // "outstandingLoanOrAdvance": consumer?.outstandingLoanOrAdvance,
        // "ourstandingAdvancesLoanAmount": consumer?.outstandingLoanOrAdvance? consumer?.ourstandingAdvancesLoanAmount : null,
        "outstandingLoanOrAdvance": +`${consumer?.outstandingLoanOrAdvance||0}`.replace(/[^\d]+/gi, ''),
        "ourstandingAdvancesLoanAmount": +`${consumer?.ourstandingAdvancesLoanAmount||0}`.replace(/[^\d]+/gi, ''),
        "useOfFunds": consumer?.useOfFunds,
        // "loanAmountRequested": consumer?.loanAmountRequested,
        "loanAmountRequested": +`${consumer?.loanAmountRequested||0}`.replace(/[^\d]+/gi, ''),
        "typeOfProperty": consumer?.typeOfProperty,
        "loanRequestId": id,
      })

    } else if (status == 2 && hasId == null) {
      getConsumer({
        // "annualRevenue": consumer?.annualRevenue,
        "annualRevenue": +`${consumer?.annualRevenue||0}`.replace(/[^\d]+/gi, ''),
        // "dailyAverageBankBalance": null,
        // "outstandingLoanOrAdvance": consumer?.outstandingLoanOrAdvance,
        // "ourstandingAdvancesLoanAmount": consumer?.outstandingLoanOrAdvance? consumer?.ourstandingAdvancesLoanAmount : null,
        "outstandingLoanOrAdvance": +`${consumer?.outstandingLoanOrAdvance||0}`.replace(/[^\d]+/gi, ''),
        "ourstandingAdvancesLoanAmount": +`${consumer?.ourstandingAdvancesLoanAmount||0}`.replace(/[^\d]+/gi, ''),
        "useOfFunds": consumer?.useOfFunds,
        // "loanAmountRequested": consumer?.loanAmountRequested,
        "loanAmountRequested": +`${consumer?.loanAmountRequested||0}`.replace(/[^\d]+/gi, ''),
        "typeOfProperty": consumer?.typeOfProperty,
        "loanRequestId": id,
        "mortgageInformation": {
          // "monthlyMoratge": consumer?.mortgageInformation?.monthlyMortgage,
          "monthlyMoratge": +`${consumer?.mortgageInformation?.monthlyMortgage||0}`,
        }
      })
      addUpdateHandler({
        // "annualRevenue": consumer?.annualRevenue,
        "annualRevenue": +`${consumer?.annualRevenue||0}`.replace(/[^\d]+/gi, ''),
        // "dailyAverageBankBalance": null,
        // "outstandingLoanOrAdvance": consumer?.outstandingLoanOrAdvance,
        // "ourstandingAdvancesLoanAmount": consumer?.outstandingLoanOrAdvance? consumer?.ourstandingAdvancesLoanAmount : null,
        "outstandingLoanOrAdvance": +`${consumer?.outstandingLoanOrAdvance||0}`.replace(/[^\d]+/gi, ''),
        "ourstandingAdvancesLoanAmount": +`${consumer?.ourstandingAdvancesLoanAmount||0}`.replace(/[^\d]+/gi, ''),
        "useOfFunds": consumer?.useOfFunds,
        // "loanAmountRequested": consumer?.loanAmountRequested,
        "loanAmountRequested": +`${consumer?.loanAmountRequested||0}`.replace(/[^\d]+/gi, ''),
        "typeOfProperty": consumer?.typeOfProperty,
        "loanRequestId": id,
        "mortgageInformation": {
          // "monthlyMoratge": consumer?.mortgageInformation?.monthlyMortgage,
          "monthlyMoratge": +`${consumer?.mortgageInformation?.monthlyMortgage||0}`,
        }
      })
    }
    if (status == 2 && hasId !== null) {
      getConsumer({
        // "annualRevenue": consumer?.annualRevenue,
        "annualRevenue": +`${consumer?.annualRevenue||0}`.replace(/[^\d]+/gi, ''),
        // "dailyAverageBankBalance": null,
        // "outstandingLoanOrAdvance": consumer?.outstandingLoanOrAdvance,
        // "ourstandingAdvancesLoanAmount": consumer?.outstandingLoanOrAdvance? consumer?.ourstandingAdvancesLoanAmount : null,
        "outstandingLoanOrAdvance": +`${consumer?.outstandingLoanOrAdvance||0}`.replace(/[^\d]+/gi, ''),
        "ourstandingAdvancesLoanAmount": +`${consumer?.ourstandingAdvancesLoanAmount||0}`.replace(/[^\d]+/gi, ''),
        "useOfFunds": consumer?.useOfFunds,
        // "loanAmountRequested": consumer?.loanAmountRequested,
        "loanAmountRequested": +`${consumer?.loanAmountRequested||0}`.replace(/[^\d]+/gi, ''),
        "typeOfProperty": consumer?.typeOfProperty,
        "loanRequestId": id,
        "id": hasId,
        "mortgageInformation": {
          // "monthlyMoratge": consumer?.mortgageInformation?.monthlyMortgage,
          "monthlyMoratge": +`${consumer?.mortgageInformation?.monthlyMortgage||0}`,
        }
      })
      addUpdateHandler({
        // "annualRevenue": consumer?.annualRevenue,
        "annualRevenue": +`${consumer?.annualRevenue||0}`.replace(/[^\d]+/gi, ''),
        // "dailyAverageBankBalance": null,
        // "outstandingLoanOrAdvance": consumer?.outstandingLoanOrAdvance,
        // "ourstandingAdvancesLoanAmount": consumer?.outstandingLoanOrAdvance? consumer?.ourstandingAdvancesLoanAmount : null,
        "outstandingLoanOrAdvance": +`${consumer?.outstandingLoanOrAdvance||0}`.replace(/[^\d]+/gi, ''),
        "ourstandingAdvancesLoanAmount": +`${consumer?.ourstandingAdvancesLoanAmount||0}`.replace(/[^\d]+/gi, ''),
        "useOfFunds": consumer?.useOfFunds,
        // "loanAmountRequested": consumer?.loanAmountRequested,
        "loanAmountRequested": +`${consumer?.loanAmountRequested||0}`.replace(/[^\d]+/gi, ''),
        "typeOfProperty": consumer?.typeOfProperty,
        "loanRequestId": id,
        "id": hasId,
        "mortgageInformation": {
          // "monthlyMoratge": consumer?.mortgageInformation?.monthlyMortgage,
          "monthlyMoratge": +`${consumer?.mortgageInformation?.monthlyMortgage||0}`,
        }
      })

    }



    const data = removeEmpty(consumer)



    // (values, "val")

    // (status)
    // let refactoredData =
    // {

    //   "annualrevenueRevenue": Number(values?.annualrevenue),

    //   "outstandingLoanOrAdvance": values?.outstandingloanoradvance == "No" ? false : true,
    //   "ourstandingAdvancesLoanAmount": values?.ourstandingAdvancesLoanAmount,
    //   "useOfFunds": values?.useoffunds,
    //   "loanAmountRequested": values?.loanamountrequested,
    //   "typeOfProperty": "own",
    //   "loanRequestId": id,


    // }
    // if (status == 2) {
    //   refactoredData =
    //   {

    //     "annualrevenueRevenue": Number(values?.annualrevenue),
    //     "outstandingLoanOrAdvance": values?.outstandingloanoradvance == "No" ? false : true,
    //     "ourstandingAdvancesLoanAmount": values?.ourstandingAdvancesLoanAmount,
    //     "useOfFunds": values?.useoffunds,
    //     "loanAmountRequested": values?.loanamountrequested,
    //     "typeOfProperty": "Mortgage",
    //     "loanRequestId": id,
    //     "mortageInformation": {
    //       "monthlyMoratge": Number(values?.mortage)
    //     },


    //   }

    //   if (status == 3) {
    //     ("data")
    //     refactoredData =
    //     {

    //       "annualrevenueRevenue": Number(values?.annualrevenue),
    //       "outstandingLoanOrAdvance": values?.outstandingloanoradvance == "No" ? false : true,
    //       "ourstandingAdvancesLoanAmount": values?.ourstandingAdvancesLoanAmount,
    //       "useOfFunds": values?.useoffunds,
    //       "loanAmountRequested": values?.loanamountrequested,
    //       "typeOfProperty": "rent",
    //       "loanRequestId": id,
    //       "rentInformation": {
    //         "monthlyRent": Number(values?.rent),
    //         "landlordName": values?.landordName,
    //         "leaseStartDate": values?.firstDate,
    //         "leaseEndDate": values?.endDate
    //       }


    //     }
    //     if (hasId !== null) {
    //       refactoredData =
    //       {
    //         "id": hasId,
    //         "annualrevenueRevenue": values?.annualrevenue,
    //         "outstandingLoanOrAdvance": values?.outstandingloanoradvance == "No" ? false : true,
    //         "ourstandingAdvancesLoanAmount": values?.ourstandingAdvancesLoanAmount,
    //         "useOfFunds": values?.useoffunds,
    //         "loanAmountRequested": values?.loanamountrequested,
    //         "typeOfProperty": "rent",
    //         "loanRequestId": id,
    //         "rentInformation": {
    //           "monthlyRent": Number(values?.rent),
    //           "landlordName": values?.landordName,
    //           "leaseStartDate": values?.firstDate,
    //           "leaseEndDate": values?.endDate
    //         }
    //       }
    //     }

    //   }
    // }

    // addUpdateHandler(consumer)

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
    //         annualrevenueRevenuw: values.annualrevenue,
    //         // monthlyPayrollExpenses: values.payroll,
    //         // monthlyBusinessExpenses: values.expenses,
    //         // dailyAverageBankBalance: values.dailybalance,
    //         outstandingLoanOrAdvance: true,
    //         ourstandingAdvancesLoanAmount: values.outstandingloanoradvance,
    //         useOfFunds: values.useoffunds,
    //         loanAmountRequested: values.loanamountrequested,
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
    //           (response);
    //         }
    //       },
    //       (error) => {
    //         (error);
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
    //         annualrevenueRevenuw: values.annualrevenue,
    //         // monthlyPayrollExpenses: values.payroll,
    //         // monthlyBusinessExpenses: values.expenses,
    //         // dailyAverageBankBalance: values.dailybalance,
    //         outstandingLoanOrAdvance: true,
    //         ourstandingAdvancesLoanAmount: values.outstandingloanoradvance,
    //         useOfFunds: values.useoffunds,
    //         loanAmountRequested: values.loanamountrequested,
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
    //           (response);
    //         }
    //       },
    //       (error) => {
    //         (error);
    //       }
    //     );
    //   }
  };

  const GetAllInformations = async () => {
    try {
      if (id) {
        const response = await API.get(`/api/borrower/get-business-financials/${id}`);
        const data = await response?.payload;
        setHasID(data?.id)
        (data?.mortgageInformation?.monthlyMortgage, "sajakdbsj")

        setStatus(data?.typeOfProperty);


        getConsumer({
          ...data

        })

      }

    } catch (error) {
      // notification.error({ message: 'Error Occured', description: error?.data?.reason })
    }
  }


  useEffect(() => {
    GetAllInformations();
    
  }, [id]);

  function handleChange(event) {
    getConsumer(event.target.value);
  }




  return (
    <>
      <Head>
        <title>Financial Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu id={id} />
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
                  Business Revenue
                </label>
                <input
                prefix={'$'}
								thousandSeparator={true}
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter  Business Revenue"
                  defaultValue={consumer.annualRevenue ||''}
                  {...register("annualrevenue")}
                  onChange={(e) => getConsumer({ ...consumer, annualRevenue: e.target.value })}

                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="ffti" className="formlabel">
                  Do you have any outstanding outstandingloanoradvance or advances?
                </label>
                <div className="radio-two">
                  <div className="radio-container">
                    <input
                      type="radio"
                      name="olab"
                      value={true}
                      onClick={() => getConsumer({ ...consumer, outstandingLoanOrAdvance: true })}
                      checked={consumer.outstandingLoanOrAdvance}
                      defaultValue={consumer.outstandingLoanOrAdvance}
                      {...register("outstandingloanoradvance")}
                    />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="olab"

                      value={false}
                      onClick={() => getConsumer({ ...consumer, outstandingLoanOrAdvance: false })}
                      checked={!consumer.outstandingLoanOrAdvance}
                      defaultValue={consumer.outstandingLoanOrAdvance}
                      {...register("outstandingloanoradvance")}
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  Outstanding Loan/Advance Balance
                </label>
                <CurrencyFormat
                  disabled={!consumer?.outstandingLoanOrAdvance}
                  prefix={'$'}
                  thousandSeparator={true}
                  id="firstname"
                  className="textbox"
                  type="text"
                  
                  placeholder="Enter Outstanding Loan/Advance Balance"

                  defaultValue={consumer.ourstandingAdvancesLoanAmount||''}
                  {...register("outstandingloanoradvance")}
                  onValueChange={(e) => getConsumer({ ...consumer, ourstandingAdvancesLoanAmount: e.formattedValue })}
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
                  {...register("useoffunds", {
                    required: "Required",
                  })}
                  required
                  onChange={(e) => getConsumer({ ...consumer, useOfFunds: e.target.value })}

                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  Loan Amount Requested
                </label>
                <input
                 prefix={'$'}
                 thousandSeparator={true}
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter Loan Amount Requested"
                  defaultValue={consumer.loanAmountRequested||''}
                  {...register("loanAmountRequested", {
                    // required: "Required",
                  })}
                  onValueChange={(e) => getConsumer({ ...consumer, loanAmountRequested: e.formattedValue })}
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
                    value={1}
                    checked={status == 1}
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
                    value={2}
                    checked={status == 2}
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
                    value={3}
                    checked={status == 3}
                    defaultChecked={status === 3}
                    onChange={(e) => radioHandler(3)}
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
                   prefix={'$'}
                   thousandSeparator={true}

                    value={consumer?.mortgageInformation?.monthlyMortgage||''}
                    className="textbox"
                    type="text"
                    autoComplete="fname"
                    placeholder="Enter Monthly Rent/Mortgage"
                    {...register("mortage")}
                    onChange={(e) => getConsumer({ ...consumer, mortgageInformation: { monthlyMortgage: e.target.value } })}

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
                       prefix={'$'}
                       thousandSeparator={true}
                        value={consumer?.rentInformation?.monthlyRent||''}
                        className="textbox"
                        type="text"
                        autoComplete="fname"
                        placeholder="Enter Monthly Rent"
                        {...register("rent")}
                        onChange={(e) => getConsumer({
                          ...consumer, rentInformation: {
                            ...consumer?.rentInformation,
                            monthlyRent: e.target.value
                          }
                        })}

                      />
                    </div>
                  </div>

                  <div className="form-row-one form-gap">
                    <div className="form-group form-name">
                      <label htmlFor="fname" className="formlabel ">
                        Landlord Name
                      </label>
                      <input
                        value={consumer?.rentInformation?.landlordName}
                        id="firstname"
                        className="textbox"
                        type="text"
                        autoComplete="fname"
                        placeholder="Enter Landlord Name"
                        {...register("landordName", {
                          required: "Required",
                        })}
                        onChange={(e) => getConsumer({
                          ...consumer, rentInformation: {
                            ...consumer?.rentInformation,
                            landlordName: e.target.value
                          }
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
                        value={moment(consumer?.rentInformation?.leaseStartDate).format("YYYY-MM-DD")}
                        onChange={(e) => getConsumer({
                          ...consumer, rentInformation: {
                            ...consumer?.rentInformation,
                            leaseStartDate: e.target.value
                          }
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
                        value={moment(consumer?.rentInformation?.leaseEndDate).format("YYYY-MM-DD")}

                        onChange={(e) => getConsumer({
                          ...consumer, rentInformation: {
                            ...consumer?.rentInformation,
                            leaseEndDate: e.target.value
                          }
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <div className="form-row-button">
            <input type="submit" id="button" value="Continue" />
          </div>
        </form>
      </Hero>
    </>
  );
}
