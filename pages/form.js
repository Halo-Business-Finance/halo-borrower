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
`;

export default function Form() {
  const { register, handleSubmit, formState: { errors }} = useForm();
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
              <h2 className="heading">Business Contact Information</h2>
              <h2 className="heading-step">
                <p className="active">Step 1</p> /3
              </h2>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="fname" className="formlabel ">
                  Business Legal Name
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Business Legal Name"
                  {...register("fname", {
                    required: "Required",
                  })}
                  
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  DBA
                </label>
                <input
                  id="firstname"
                  className="textbox"
                  type="text"
                  autoComplete="fdba"
                  placeholder="Enter DBA"
                  {...register("Dba", {
                    required: "Required",
                  })}

                />
              </div>
            </div>

            <div className="form-row-two form-gap">
              <div className="form-group form-addess">
                <label htmlFor="fname" className="formlabel">
                  Address
                </label>
                <input
                  id="address"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Address"
                  {...register("address", {
                    required: "Required",
                  })}

                />
              </div>
              <div className="form-group form-suite">
                <label htmlFor="fname" className="formlabel">
                  Suite/FL
                </label>
                <input
                  id="suite"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Suite/FL"
                  {...register("suite", {
                    required: "Required",
                  })}

                />
              </div>
            </div>

            <div className="form-row-three form-gap">
              <div className="form-group form-city">
                <label htmlFor="fname" className="formlabel">
                  City
                </label>
                <input
                  id="city"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter City"
                  {...register("city", {
                    required: "Required",
                  })}

                />
              </div>
              <div className="form-group form-state">
                <label htmlFor="fname" className="formlabel">
                  State
                </label>
                <input
                  id="state"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Select State"
                  {...register("state", {
                    required: "Required",
                  })}
                />
              </div>
              <div className="form-group form-zip">
                <label htmlFor="fname" className="formlabel">
                  Zip Code
                </label>
                <input
                  id="zipcode"
                  className="textbox"
                  type="number"
                  autoComplete="fname"
                  placeholder="Enter Zip Code"
                  {...register("zipcode", {
                    required: "Required",
                  })}

                />
              </div>
            </div>

            <div className="form-row-four form-gap">
              <div className="form-group form-phone">
                <label htmlFor="fname" className="formlabel">
                  Business Phone
                </label>
                <input
                  id="phone"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="(XXX)-(XXX)-(XXXX)"
                  {...register("phone", {
                    required: "Required",
                  })}

                />
              </div>
              <div className="form-group form-website">
                <label htmlFor="fname" className="formlabel">
                  Website
                </label>
                <input
                  id="website"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Website"
                  {...register("website", {
                    required: "Required",
                  })}

                />
              </div>
            </div>
          </section>

          <div className="form-row-button">
            <input type="submit" href="form2" id="button" value="Continue" />
          </div>
        </form>
      </Hero>
    </>
  );
}
