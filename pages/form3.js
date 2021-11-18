import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";

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
`;

export default function Form() {
  const { register,  handleSubmit,   formState: { errors }, } = useForm();
  function onSubmitForm(values) {
    console.log(values);
  }
  return (
    <>
      <Head>
        <title>Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Annual Business Revenue"
                  {...register("annual", {
                    required: "Required",
                  })}
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Monthly Total Payroll Expenses
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Monthly Total Payroll Expenses"
                  {...register("payroll", {
                    required: "Required",
                  })}
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  Monthly Total Business Expenses
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter Monthly Total Business Expenses"
                  {...register("expenses", {
                    required: "Required",
                  })}
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Average Daily Bank Balance
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Average Daily Bank Balance"
                  {...register("payroll", {
                    required: "Required",
                  })}
                  required
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
                    <input type="radio" name="radio" {...register("loans")} />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input type="radio" name="radio" {...register("loans")} />
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
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter Outstanding Loan/Advance Balance"
                  {...register("advanceloan", {
                    required: "Required",
                  })}
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Use of Funds
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Use of Funds"
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
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter Loan Amount Requested"
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
                  <input type="radio" name="radio" className="own-click" />
                  <label>Own</label>
                </div>

                <div className="radio-container">
                  <input type="radio" name="radio" className="mortgage-click" />
                  <label>Mortgage</label>
                </div>

                <div className="radio-container">
                  <input type="radio" name="radio" className="rent-click" />
                  <label>Rent</label>
                </div>
              </div>
            </div>

            <div className="form-row-one form-gap mortgage">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Monthly Rent/Mortgage
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Monthly Rent/Mortgage"
                />
              </div>
            </div>

            <div className="rent">
              <div className="form-row-one form-gap">
                <div className="form-group form-name">
                  <label htmlFor="fname" className="formlabel ">
                    Monthly Rent/Mortgage
                  </label>
                  <input
                    id="firstname"
                    className="textbox"
                    type="text"
                    autoComplete="fname"
                    placeholder="Enter Monthly Rent/Mortgage"
                  />
                </div>
              </div>

              <div className="form-row-one form-gap">
                <div className="form-group form-name">
                  <label htmlFor="fname" className="formlabel ">
                    Monthly Rent/Mortgage
                  </label>
                  <input
                    id="firstname"
                    className="textbox"
                    type="text"
                    autoComplete="fname"
                    placeholder="Enter Monthly Rent/Mortgage"
                  />
                </div>
              </div>

              <div className="form-group form-gap radio-two rent">
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
          </section>

          <div className="form-row-button">
            <input type="submit" id="button" value="Continue" />
          </div>
        </form>
      </Hero>
    </>
  );
}
