import Head from "next/head";
import Image from 'next/image'
import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  padding: 20px;

  .formstyle {
    width: 60%;
    background: #f8f8ff;
    border-radius: 10px;
  }
  .form-design {
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
  .form-row-five{
    width: 70%;
    column-count: 2;
  }
  .form-data{
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
    width:80%;
  }
  .form-header h3 span{
    font-weight: 400;
  }
  .form-header button{
    margin-left: auto;
    background: transparent;
    border: none;
  }
  .form-header img{
    width: 12px;
    height: 7.41px;
  }
  .form-suite {
    width: 100%;
    display: inline-block;
  }
`;

export default function Form() {
  return (
    <>
      <Head>
        <title>Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <form className="formstyle" action="assets2">
          <section className="form-design">
            <div className="form-head">
              <h2 className="heading">Schedule of Assets Pledged</h2>
              <h2 className="heading-step">
                <p className="active">Step 6</p> /6
              </h2>
            </div>

            <div className="form-row-two">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Value
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the value of pledged asset"
                  required
                />
              </div>
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  To Whom Pledged
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter to whom asset was pledged"
                  required
                />
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel">
                  Description
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the No. of Shares or Bond ..."
                  required
                />
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-header">
                <h3>
                  Schedule A - <span> All securities including non-money market mutual
                  funds{" "}</span>
                </h3>
                <button>
                    <img className="" src="images/Mask.png" />
                </button>
              </div>
            </div>

            <div className="form-row-three form-gap">
              <div className="form-group form-city">
                <label htmlFor="fname" className="formlabel">
                  No. of Shares or Bond Face value
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="state"
                  autoComplete="fname"
                  placeholder="Enter the No. of Shares or Bond ..."
                  required
                />
              </div>
              <div className="form-group form-state">
                <label htmlFor="fname" className="formlabel">
                  Current Market Value
                </label>
                <input
                  id="state"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Current Market ..."
                  required
                />
              </div>
              <div className="form-group form-zip">
                <label htmlFor="fname" className="formlabel">
                  Where held
                </label>
                <input
                  id="zipcode"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Where held"
                  required
                />
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Owner(s)
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Owner(s)"
                  required
                />
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel">
                  Description
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the No. of Shares or Bond ..."
                  required
                />
              </div>
            </div>

            <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="ffti" className="formlabel">
                  Do you have any outstanding loans or advances?
                </label>
                <div className="radio-two">
                  <div className="radio-container">
                    <input type="radio" name="radio" />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input type="radio" name="radio" />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row form-gap">
              <div className="form-group form-name form-header">
                <h3>Schedule B - <span>Ownership in privately held businesses </span> </h3>
                <button>
                    <img className="" src="images/Mask.png" />
                </button>
              </div>
              
              <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Business Name
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Business Name"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Nature of Business
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter Nature of Business"
                  required
                />
              </div>
            </div>
            <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Original Investment Cost
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Original Investment"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Present Value of Your Investment
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter the Present Value of Your Investment"
                  required
                />
              </div>
            </div>
            <div className="form-row-five form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Ownership %
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Ownership %"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Date of Investment
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="date"
                  placeholder="(MM-DD-YYYY)"
                  required
                />
              </div>
            </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group form-name form-header">
                <h3>Schedule C - <span>Life Insurance</span> </h3>
                <button>
                    <img className="" src="images/Mask.png" />
                </button>
              </div>
              <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Insurance Company
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Insurance Company"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Type of Policy
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter Type of Policy"
                  required
                />
              </div>
            </div>
            <div className="form-row-three form-gap">
              <div className="form-group form-city">
                <label htmlFor="fname" className="formlabel">
                 Face Amount of Policy
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="state"
                  autoComplete="fname"
                  placeholder="Enter the Face Amount ..."
                  required
                />
              </div>
              <div className="form-group form-state">
                <label htmlFor="fname" className="formlabel">
                 Cash Surrender Value
                </label>
                <input
                  id="state"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Cash Surrender Val.."
                  required
                />
              </div>
              <div className="form-group form-zip">
                <label htmlFor="fname" className="formlabel">
                Policy Loans
                </label>
                <input
                  id="zipcode"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the description"
                  required
                />
              </div>
            </div>
            <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Beneficiary
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Beneficiary"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Ownership
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter Ownership"
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
                    <input type="radio" name="radio" />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input type="radio" name="radio" />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-row form-gap">
              <div className="form-group form-name form-header">
                <h3>Schedule D - <span> Real Estate for personal use </span></h3>
                <button>
                    <img className="" src="images/Mask.png" />
                </button>
              </div>
              <div className="form-group form-gap form-name">
                <label htmlFor="fname" className="formlabel">
                Property Address
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Property Address"
                  required
                />
              </div>
              <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Legal Owner
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Montly Payment"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Market Value
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter the Market Value"
                  required
                />
              </div>
            </div>
            <div className="form-row-five form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Purchase Price
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Ownership %"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Purchase Year
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="date"
                  placeholder="(XXX)"
                  required
                />
              </div>
            </div>
            <div className="form-row-three form-gap">
              <div className="form-group form-city">
                <label htmlFor="fname" className="formlabel">
                Present Loan Balance
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="state"
                  autoComplete="fname"
                  placeholder="Enter Present Loan Balanc.."
                  required
                />
              </div>
              <div className="form-group form-state">
                <label htmlFor="fname" className="formlabel">
                Interest Rate
                </label>
                <input
                  id="state"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Interest Rate"
                  required
                />
              </div>
              <div className="form-group form-zip">
                <label htmlFor="fname" className="formlabel">
                Maturity Date
                </label>
                <input
                  id="zipcode"
                  className="textbox"
                  type="date"
                  placeholder="Enter Interest Rate"
                  required
                />
              </div>
            </div>
            <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Montly Payment
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Montly Payment"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Lender
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter the Lender Name"
                  required
                />
              </div>
            </div>
            </div>

            <div className="form-row form-gap">
              <div className=" form-header">
                <h3> Schedule E - <span>Real Estate Investments (Majority ownership only)</span></h3>
                <button>
                    <img className="" src="images/Mask.png" />
                </button>
              </div>
             
              <div className="form-group form-gap form-name">
                <label htmlFor="fname" className="formlabel">
                Property Address
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Property Address"
                  required
                />
              </div>
              <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Legal Owner
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Montly Payment"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Market Value
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter the Market Value"
                  required
                />
              </div>
            </div>
            <div className="form-row-five form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Purchase Price
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Ownership %"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Purchase Year
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="date"
                  placeholder="(XXX)"
                  required
                />
              </div>
            </div>
            <div className="form-row-three form-gap">
              <div className="form-group form-city">
                <label htmlFor="fname" className="formlabel">
                Present Loan Balance
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="state"
                  autoComplete="fname"
                  placeholder="Enter Present Loan Balanc.."
                  required
                />
              </div>
              <div className="form-group form-state">
                <label htmlFor="fname" className="formlabel">
                Interest Rate
                </label>
                <input
                  id="state"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Interest Rate"
                  required
                />
              </div>
              <div className="form-group form-zip">
                <label htmlFor="fname" className="formlabel">
                Maturity Date
                </label>
                <input
                  id="zipcode"
                  className="textbox"
                  type="date"
                  placeholder="Enter Interest Rate"
                  required
                />
              </div>
            </div>
            <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                Montly Payment
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Montly Payment"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Lender
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter the Lender Name"
                  required
                />
              </div>
            </div>
            </div>
            

            <div className="form-row form-gap">
              <div className="form-group form-name form-header">
                <h3>Schedule F - <span> Notes Payable </span></h3>
                <button>
                    <img className="" src="images/Mask.png" />
                </button>
              </div>
            </div>
            <div className="form-row form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel">
                  Type
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Property Address"
                  required
                />
              </div>
            </div>
            <div className="form-row-three form-gap">
              <div className="form-group form-city">
                <label htmlFor="fname" className="formlabel">
                  Original Amount
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="state"
                  autoComplete="fname"
                  placeholder="Enter Original Amount"
                  required
                />
              </div>
              <div className="form-group form-state">
                <label htmlFor="fname" className="formlabel">
                  Present Loan Balance
                </label>
                <input
                  id="state"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Present Loan Balan..."
                  required
                />
              </div>
              <div className="form-group form-zip">
                <label htmlFor="fname" className="formlabel">
                  Interest Rate
                </label>
                <input
                  id="zipcode"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Interest Rate"
                  required
                />
              </div>
            </div>
            <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="ffti" className="formlabel">
                  Is it Secured?
                </label>
                <div className="radio-two">
                  <div className="radio-container">
                    <input type="radio" name="radio" />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input type="radio" name="radio" />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row-four form-gap">
              <div className="form-group form-website">
                <label htmlFor="fname" className="formlabel">
                  Collateral
                </label>
                <input
                  id="website"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Collateral"
                  required
                />
              </div>
              <div className="form-group form-phone">
                <label htmlFor="fname" className="formlabel">
                  Maturity Date
                </label>
                <input
                  id="phone"
                  className="textbox"
                  type="date"
                  autoComplete="fname"
                  placeholder="(XXX)-(XXX)-(XXXX)"
                  required
                />
              </div>
            </div>
            <div className="form-row-two form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                 Montly Payment
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter the Montly Payment"
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                Lender
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter the Lender Name"
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
