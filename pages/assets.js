import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import e from "cors";

const Hero = styled.div`
  font-family: Mulish;
  background: #e5e5e5;
  padding: 40px 5% 40px 5%;

  .formstyle {
    width: 60%;
    background: #f8f8ff;
    border-radius: 10px;
    margin-left: 20%;
    padding-bottom: 20px;
  }
  .form-design {
    padding: 30px 30px 30px 30px;
  }

  .textbox {
    border-radius: 4px;
    border: 1px solid #ededed;
    width: 100%;
    padding: 12px;
  }

  .radio-two {
    column-count: 2;
    width: 100%;
    display: inline-block;
    column-gap: 5%;
  }

  .form-row-two {
    column-count: 2;
    width: 100%;
    display: inline-block;
    column-gap: 5%;
  }

  .form-row-three {
    width: 100%;
    display: inline-block;
  }

  .form-row-four {
    width: 100%;
    display: inline-block;
  }
  .form-row-five {
    width: 70%;
    column-count: 2;
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
    float: right;
  }

  .formlabel {
    color: #5c5c5c;
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
  .form-header {
    display: flex;
    align-items: center;
    width: 100%;
    background: rgba(224, 233, 255, 1);
    border-radius: 6px;
    padding: 1px;
  }

  .form-header h3 {
    font-family: Mulish;
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    padding: 0 8px;
    cursor: pointer;
    width: 80%;
  }
  .form-header h3 span {
    font-weight: 400;
  }
  .form-header button {
    margin-left: auto;
    background: transparent;
    border: none;
  }
  .form-header img {
    width: 12px;
    height: 7.41px;
  }
  .form-suite {
    width: 100%;
    display: inline-block;
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

  .pi span {
    width: 100%;
  }
  .gi span {
    width: 100%;
  }
  .is span {
    width: 100%;
  }
  .cl span {
    width: 100%;
  }
  .bs span {
    width: 100%;
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
`;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitAssests = (data) => {
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <section className="progress-tracker">
          <div className="progress-form">
            <h3>Personal Information</h3>
            <div className="meter pi">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>General Information</h3>
            <div className="meter gi">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>
              Income
              <br />
              Source
            </h3>
            <div className="meter is">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>Contigent Liabilities</h3>
            <div className="meter cl">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>
              Balance
              <br /> Sheet
            </h3>
            <div className="meter bs">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>Schedule of Assets Pledged</h3>
            <div className="meter soap">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>Business Debt Schedule</h3>
            <div className="meter bds">
              <span></span>
            </div>
          </div>

          <div className="progress-form">
            <h3>Personal Tax Returns(100%)</h3>
            <div className="meter ptr">
              <span></span>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />

        <form className="formstyle" onSubmit={handleSubmit(onSubmitAssests)}>
          <section className="form-design">
            <div className="form-head">
              <h2 className="heading">Schedule of Assets Pledged</h2>
              <h2 className="heading-step">
                <p className="active">Step 6</p> /6
              </h2>
            </div>

            <div className="form-row-two">
              <div className="form-group form-name">
                <label htmlFor="value" className="formlabel ">
                  Value
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="value"
                  placeholder="Enter the value of pledged asset"
                  {...register("value")}
                  required
                />
              </div>
              <div className="form-group form-name">
                <label htmlFor="wPledge" className="formlabel ">
                  To Whom Pledged
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="wPledge"
                  placeholder="Enter to whom asset was pledged"
                  {...register("pledge")}
                  required
                />
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group form-name">
                <label htmlFor="description" className="formlabel">
                  Description
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="description"
                  placeholder="Enter the No. of Shares or Bond ..."
                  {...register("description")}
                  required
                />
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-header">
                <h3>
                  Schedule A -{" "}
                  <span>
                    {" "}
                    All securities including non-money market mutual funds{" "}
                  </span>
                </h3>
                <button>
                  <img className="" src="images/Mask.png" />
                </button>
              </div>
            </div>

            <div className="form-row-three form-gap">
              <div className="form-group form-city">
                <label htmlFor="sBond" className="formlabel">
                  No. of Shares or Bond Face value
                </label>
                <input
                  className="textbox"
                  type="state"
                  autoComplete="sBond"
                  placeholder="Enter the No. of Shares or Bond ..."
                  {...register("shares")}
                  required
                />
              </div>
              <div className="form-group form-state">
                <label htmlFor="mValue" className="formlabel">
                  Current Market Value
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="mValue"
                  placeholder="Enter Current Market ..."
                  {...register("marketValue")}
                  required
                />
              </div>
              <div className="form-group form-zip">
                <label htmlFor="held" className="formlabel">
                  Where held
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="held"
                  placeholder="Enter Where held"
                  {...register("held")}
                  required
                />
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group form-name">
                <label htmlFor="owner" className="formlabel ">
                  Owner(s)
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="cValue"
                  placeholder="Enter the Owner(s)"
                  {...register("owner")}
                  required
                />
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group form-name">
                <label htmlFor="desc" className="formlabel">
                  Description
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="text"
                  autoComplete="desc"
                  placeholder="Enter the No. of Shares or Bond ..."
                  {...register("ownerdescription")}
                  required
                />
              </div>
            </div>

            <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="loans" className="formlabel">
                  Do you have any outstanding loans or advances?
                </label>
                <div className="radio-two">
                  <div className="radio-container">
                    <input type="radio" name="radio" {...register("loans")} />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input type="radio" name="radio" {...register("loans")} />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row form-gap">
              <div className="form-group form-name form-header">
                <h3>
                  Schedule B -{" "}
                  <span>Ownership in privately held businesses </span>{" "}
                </h3>
                <button>
                  <img className="" src="images/Mask.png" />
                </button>
              </div>

              <div className="form-row-two form-gap">
                <div className="form-group form-name">
                  <label htmlFor="business" className="formlabel ">
                    Business Name
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="business"
                    placeholder="Enter the Business Name"
                    {...register("businessName")}
                    required
                  />
                </div>
                <div className="form-group form-dba">
                  <label htmlFor="businessnature" className="formlabel">
                    Nature of Business
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="businessnature"
                    placeholder="Enter Nature of Business"
                    {...register("businessNature")}
                    required
                  />
                </div>
              </div>
              <div className="form-row-two form-gap">
                <div className="form-group form-name">
                  <label htmlFor="investment" className="formlabel ">
                    Original Investment Cost
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="investment"
                    placeholder="Enter the Original Investment"
                    {...register("investment")}
                    required
                  />
                </div>
                <div className="form-group form-dba">
                  <label htmlFor="valueinvestment" className="formlabel">
                    Present Value of Your Investment
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="valueinvestment"
                    placeholder="Enter the Present Value of Your Investment"
                    {...register("valueIvestment")}
                    required
                  />
                </div>
              </div>
              <div className="form-row-five form-gap">
                <div className="form-group form-name">
                  <label htmlFor="ownership" className="formlabel ">
                    Ownership %
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="ownership"
                    placeholder="Enter the Ownership %"
                    {...register("ownership")}
                    required
                  />
                </div>
                <div className="form-group form-dba">
                  <label htmlFor="dbi" className="formlabel">
                    Date of Investment
                  </label>
                  <input
                    className="textbox"
                    type="date"
                    placeholder="(MM-DD-YYYY)"
                    {...register("dateOfInvestment")}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group form-name form-header">
                <h3>
                  Schedule C - <span>Life Insurance</span>{" "}
                </h3>
                <button>
                  <img className="" src="images/Mask.png" />
                </button>
              </div>
              <div className="form-row-two form-gap">
                <div className="form-group form-name">
                  <label htmlFor="insurance" className="formlabel ">
                    Insurance Company
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="insurance"
                    placeholder="Enter the Insurance Company"
                    {...register("insuranceCompany")}
                    required
                  />
                </div>
                <div className="form-group form-dba">
                  <label htmlFor="policy" className="formlabel">
                    Type of Policy
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="policy"
                    placeholder="Enter Type of Policy"
                    {...register("policy")}
                    required
                  />
                </div>
              </div>
              <div className="form-row-three form-gap">
                <div className="form-group form-city">
                  <label htmlFor="amountpolicy" className="formlabel">
                    Face Amount of Policy
                  </label>
                  <input
                    className="textbox"
                    type="state"
                    autoComplete="amountpolicy"
                    placeholder="Enter the Face Amount ..."
                    {...register("amountPolicy")}
                    required
                  />
                </div>
                <div className="form-group form-state">
                  <label htmlFor="svalue" className="formlabel">
                    Cash Surrender Value
                  </label>
                  <input
                    id="state"
                    className="textbox"
                    type="text"
                    autoComplete="svalue"
                    placeholder="Enter Cash Surrender Val.."
                    {...register("sValue")}
                    required
                  />
                </div>
                <div className="form-group form-zip">
                  <label htmlFor="Lpolicy" className="formlabel">
                    Policy Loans
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="Lpolicy"
                    placeholder="Enter the description"
                    {...register("policyLoans")}
                    required
                  />
                </div>
              </div>
              <div className="form-row-two form-gap">
                <div className="form-group form-name">
                  <label htmlFor="beneficiary" className="formlabel ">
                    Beneficiary
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="beneficiary"
                    placeholder="Enter Beneficiary"
                    {...register("beneficiary")}
                    required
                  />
                </div>
                <div className="form-group form-dba">
                  <label htmlFor="bownership" className="formlabel">
                    Ownership
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="bownership"
                    placeholder="Enter Ownership"
                    {...register("bOwnership")}
                    required
                  />
                </div>
              </div>
              <div className="form-row-two form-gap">
                <div className="form-group form-name">
                  <label htmlFor="ffti" className="formlabel">
                    Is it Pledged?
                  </label>
                  <div className="radio-two">
                    <div className="radio-container">
                      <input
                        type="radio"
                        name="radio"
                        {...register("Lpledged")}
                      />
                      <label>Yes</label>
                    </div>

                    <div className="radio-container">
                      <input
                        type="radio"
                        name="radio"
                        {...register("Lpledged")}
                      />
                      <label>No</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row form-gap">
                <div className="form-group form-name form-header">
                  <h3>
                    Schedule D - <span> Real Estate for personal use </span>
                  </h3>
                  <button>
                    <img className="" src="images/Mask.png" />
                  </button>
                </div>
                <div className="form-group form-gap form-name">
                  <label htmlFor="address" className="formlabel">
                    Property Address
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="address"
                    placeholder="Enter Property Address"
                    {...register("propertyAddress")}
                    required
                  />
                </div>
                <div className="form-row-two form-gap">
                  <div className="form-group form-name">
                    <label htmlFor="lowner" className="formlabel ">
                      Legal Owner
                    </label>
                    <input
                      className="textbox"
                      type="text"
                      autoComplete="lowner"
                      placeholder="Enter the Montly Payment"
                      {...register("legalOwner")}
                      required
                    />
                  </div>
                  <div className="form-group form-dba">
                    <label htmlFor="marketV" className="formlabel">
                      Market Value
                    </label>
                    <input
                      className="textbox"
                      type="text"
                      autoComplete="marketV"
                      placeholder="Enter the Market Value"
                      {...register("dmarketValue")}
                      required
                    />
                  </div>
                </div>
                <div className="form-row-five form-gap">
                  <div className="form-group form-name">
                    <label htmlFor="pprice" className="formlabel ">
                      Purchase Price
                    </label>
                    <input
                      className="textbox"
                      type="text"
                      autoComplete="pprice"
                      placeholder="Enter the Ownership %"
                      {...register("purchasePrice")}
                      required
                    />
                  </div>
                  <div className="form-group form-dba">
                    <label htmlFor="fdba" className="formlabel">
                      Purchase Year
                    </label>
                    <input
                      className="textbox"
                      type="date"
                      placeholder="(XXX)"
                      {...register("purchaseYear")}
                      required
                    />
                  </div>
                </div>
                <div className="form-row-three form-gap">
                  <div className="form-group form-city">
                    <label htmlFor="pLoanB" className="formlabel">
                      Present Loan Balance
                    </label>
                    <input
                      className="textbox"
                      type="state"
                      autoComplete="pLoanB"
                      placeholder="Enter Present Loan Balanc.."
                      {...register("presentLoanBalance")}
                      required
                    />
                  </div>
                  <div className="form-group form-state">
                    <label htmlFor="iRate" className="formlabel">
                      Interest Rate
                    </label>
                    <input
                      id="state"
                      className="textbox"
                      type="text"
                      autoComplete="iRate"
                      placeholder="Enter the Interest Rate"
                      {...register("interestRate")}
                      required
                    />
                  </div>
                  <div className="form-group form-zip">
                    <label htmlFor="date" className="formlabel">
                      Maturity Date
                    </label>
                    <input
                      className="textbox"
                      type="date"
                      placeholder="Enter Interest Rate"
                      {...register("maturityDate")}
                      required
                    />
                  </div>
                </div>
                <div className="form-row-two form-gap">
                  <div className="form-group form-name">
                    <label htmlFor="mPayment" className="formlabel ">
                      Montly Payment
                    </label>
                    <input
                      className="textbox"
                      type="text"
                      autoComplete="mPayment"
                      placeholder="Enter the Montly Payment"
                      {...register("monthlyPayment")}
                      required
                    />
                  </div>
                  <div className="form-group form-dba">
                    <label htmlFor="lender" className="formlabel">
                      Lender
                    </label>
                    <input
                      className="textbox"
                      type="text"
                      autoComplete="lender"
                      placeholder="Enter the Lender Name"
                      {...register("Lender")}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row form-gap">
                <div className=" form-header">
                  <h3>
                    {" "}
                    Schedule E -{" "}
                    <span>
                      Real Estate Investments (Majority ownership only)
                    </span>
                  </h3>
                  <button>
                    <img className="" src="images/Mask.png" />
                  </button>
                </div>

                <div className="form-group form-gap form-name">
                  <label htmlFor="eAddress" className="formlabel">
                    Property Address
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="eAddress"
                    placeholder="Enter Property Address"
                    {...register("ePropertyAddress")}
                    required
                  />
                </div>
                <div className="form-row-two form-gap">
                  <div className="form-group form-name">
                    <label htmlFor="elegalowner" className="formlabel ">
                      Legal Owner
                    </label>
                    <input
                      className="textbox"
                      type="text"
                      autoComplete="elegalowner"
                      placeholder="Enter the Montly Payment"
                      {...register("eLegalOwner")}
                      required
                    />
                  </div>
                  <div className="form-group form-dba">
                    <label htmlFor="emvalue" className="formlabel">
                      Market Value
                    </label>
                    <input
                      className="textbox"
                      type="text"
                      autoComplete="emvalue"
                      placeholder="Enter the Market Value"
                      {...register("eMarketValue")}
                      required
                    />
                  </div>
                </div>
                <div className="form-row-five form-gap">
                  <div className="form-group form-name">
                    <label htmlFor="eprice" className="formlabel ">
                      Purchase Price
                    </label>
                    <input
                      id="firstname"
                      className="textbox"
                      type="text"
                      autoComplete="eprice"
                      placeholder="Enter the Ownership %"
                      {...register("ePurchasePrice")}
                      required
                    />
                  </div>
                  <div className="form-group form-dba">
                    <label htmlFor="fdba" className="formlabel">
                      Purchase Year
                    </label>
                    <input
                      className="textbox"
                      type="date"
                      placeholder="(XXX)"
                      {...register("ePurchaseYear")}
                      required
                    />
                  </div>
                </div>
                <div className="form-row-three form-gap">
                  <div className="form-group form-city">
                    <label htmlFor="eloan" className="formlabel">
                      Present Loan Balance
                    </label>
                    <input
                      id="city"
                      className="textbox"
                      type="state"
                      autoComplete="eloan"
                      placeholder="Enter Present Loan Balanc.."
                      {...register("ePresentLoanBalance")}
                      required
                    />
                  </div>
                  <div className="form-group form-state">
                    <label htmlFor="eRate" className="formlabel">
                      Interest Rate
                    </label>
                    <input
                      id="state"
                      className="textbox"
                      type="text"
                      autoComplete="eRate"
                      placeholder="Enter the Interest Rate"
                      {...register("eInterestRate")}
                      required
                    />
                  </div>
                  <div className="form-group form-zip">
                    <label htmlFor="date" className="formlabel">
                      Maturity Date
                    </label>
                    <input
                      className="textbox"
                      type="date"
                      placeholder="Enter Interest Rate"
                      {...register("eMaturityDate")}
                      required
                    />
                  </div>
                </div>
                <div className="form-row-two form-gap">
                  <div className="form-group form-name">
                    <label htmlFor="payment" className="formlabel ">
                      Montly Payment
                    </label>
                    <input
                      className="textbox"
                      type="text"
                      autoComplete="payment"
                      placeholder="Enter the Montly Payment"
                      {...register("eMonthlyPayment")}
                      required
                    />
                  </div>
                  <div className="form-group form-dba">
                    <label htmlFor="lender" className="formlabel">
                      Lender
                    </label>
                    <input
                      className="textbox"
                      type="text"
                      autoComplete="lender"
                      placeholder="Enter the Lender Name"
                      {...register("eLender")}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row form-gap">
                <div className="form-group form-name form-header">
                  <h3>
                    Schedule F - <span> Notes Payable </span>
                  </h3>
                  <button>
                    <img className="" src="images/Mask.png" />
                  </button>
                </div>
              </div>
              <div className="form-row form-gap">
                <div className="form-group form-name">
                  <label htmlFor="type" className="formlabel">
                    Type
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="type"
                    placeholder="Enter Property Address"
                    {...register("type")}
                    required
                  />
                </div>
              </div>
              <div className="form-row-three form-gap">
                <div className="form-group form-city">
                  <label htmlFor="amount" className="formlabel">
                    Original Amount
                  </label>
                  <input
                    className="textbox"
                    type="state"
                    autoComplete="amount"
                    placeholder="Enter Original Amount"
                    {...register("OriginalAmount")}
                    required
                  />
                </div>
                <div className="form-group form-state">
                  <label htmlFor="loan" className="formlabel">
                    Present Loan Balance
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="loan"
                    placeholder="Enter Present Loan Balan..."
                    {...register("fPresentLoanBalance")}
                    required
                  />
                </div>
                <div className="form-group form-zip">
                  <label htmlFor="rate" className="formlabel">
                    Interest Rate
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="rate"
                    placeholder="Enter Interest Rate"
                    {...register("fInterestRate")}
                    required
                  />
                </div>
              </div>
              <div className="form-row-two form-gap">
                <div className="form-group form-name">
                  <label htmlFor="secured" className="formlabel">
                    Is it Secured?
                  </label>
                  <div className="radio-two">
                    <div className="radio-container">
                      <input
                        type="radio"
                        name="radio"
                        {...register("secured")}
                      />
                      <label>Yes</label>
                    </div>

                    <div className="radio-container">
                      <input
                        type="radio"
                        name="radio"
                        {...register("secured")}
                      />
                      <label>No</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row-four form-gap">
                <div className="form-group form-website">
                  <label htmlFor="collateral" className="formlabel">
                    Collateral
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="collateral"
                    placeholder="Enter the Collateral"
                    {...register("collateral")}
                    required
                  />
                </div>
                <div className="form-group form-phone">
                  <label htmlFor="date" className="formlabel">
                    Maturity Date
                  </label>
                  <input
                    className="textbox"
                    type="date"
                    autoComplete="date"
                    placeholder="(XXX)-(XXX)-(XXXX)"
                    {...register("fMaturityDate")}
                    required
                  />
                </div>
              </div>
              <div className="form-row-two form-gap">
                <div className="form-group form-name">
                  <label htmlFor="payment" className="formlabel ">
                    Monthly Payment
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="payment"
                    placeholder="Enter the Montly Payment"
                    {...register("fMonthlyPayment")}
                    required
                  />
                </div>
                <div className="form-group form-dba">
                  <label htmlFor="lender" className="formlabel">
                    Lender
                  </label>
                  <input
                    className="textbox"
                    type="text"
                    autoComplete="lender"
                    placeholder="Enter the Lender Name"
                    {...register("flender")}
                    required
                  />
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
