import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";

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
`;

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitForm = async (values) => {
    console.log(values);

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer dEAC2qkkZesCHzXyMcNCk4WQnc5_BEbEc9iaXovE4RB5FSjfVFUqn7JGye1uj7NDBdwEox9lXoSlg9y862n2UaTK2ykb7cgaK5Ws2oyIjK-JAcmfxCOac7kmQ3NPF2vtK-8v43anmRsWpojXTkaQ7h78X0pB0VDRy_P3XiZ0dz8yUNpcJulWcLjOU1H9DfndD8HCkj7lqFCI08E9lyYFaWmspGAPb97KhrlFqfHkD6oBl3SMYXDt_TcV-9iTRBgBh-wfzqXS7EYMv6eVuhezT4M0-hcLMrEJEHQ7VJszJM-5r8fK-szoYJ7yrsd-dzsOI0TAtBwd3MoEQQ_-hwmiBNAbYqyZgGZoBMc9wcm8SdXvMy5MpwAnEHhoIBZh6oT7DCRjohGKl5IAxlbNNQCHn_8W3PO8_aY7Mg8uiER_0d1M-HM-IV_89r5nJyr3IvhwmxKN3a_OR39djfHoOhGDzn1XbRCqyZo6pVPXBIOX1ng42f0eOLK3Tl46nNtH6Esy_5fLDHDwbjAlmZ8U2evS3w'
    }
   
    axios({
      method: 'post',
      url: 'http://75.126.149.253/api/borrower/add-business-info',
      data: {
        "legalEntity": values.binfo,
        "stateOfOrganization": values.organization,
        "federalTaxId": values.federal,
        "startDate": values.date,
        "industryDescription": values.industry,
        "typeOfProduct": values.product,
        "totalEmployees": values.totalEmployees,
        "totalContractors": values.employees,
        "wasPurchased": values.business,
        borrowerId: "4c3728a5-25aa-4b49-9c26-c9551e716275",
      }, 
      headers: headers
    })
      
      .then((response) => {
        if (response.data.isSuccess) {
          
          console.log(response);
          Router.push('/form3');
          console.log('test');
        } else {
          console.log(response);
        }
      }, (error) => {
        console.log(error);
      });

  }


  return (
    <>
      <Head>
        <title>Form2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <form className="formstyle" onSubmit={handleSubmit(onSubmitForm)}  >
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
              <div className="form-group form-addess">
                <label htmlFor="fsoo" className="formlabel">
                  State of Organization
                </label>
                <input
                  id="address"
                  className="textbox"
                  type="text"
                  autoComplete="fsoo"
                  placeholder="Enter State of Organization"
                  {...register("organization", {
                    required: "Required",
                  })}
                />
              </div>
              <div className="form-group form-suite">
                <label htmlFor="ffti" className="formlabel">
                  Federal Tax ID
                </label>
                <input
                  id="suite"
                  className="textbox"
                  type="text"
                  autoComplete="ffti"
                  placeholder="Enter Federal Tax ID"
                  {...register("federal", {
                    required: "Required",
                  })}
                />
              </div>
            </div>

            <div className="form-row-four form-gap">
              <div className="form-group form-phone">
                <label htmlFor="fname" className="formlabel">
                  Business Start Date
                </label>
                <input
                  id="date"
                  className="textbox"
                  type="date"
                  autoComplete="fname"
                  placeholder="(XXX)-(XXX)-(XXXX)"
                  {...register("date", {
                    required: "Required",
                  })}
                />
              </div>
              <div className="form-group form-website">
                <label htmlFor="fname" className="formlabel">
                  Industry Description/SIC
                </label>
                <input
                  id="industry"
                  className="textbox"
                  type="text"
                  autoComplete="fname"
                  placeholder="Enter Industry Description/SIC:"
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
                  {...register("product", {
                    required: "Required",
                  })}
                />
              </div>
            </div>

            <div className="form-row-two form-gap">
              <div className="form-group form-addess">
                <label htmlFor="fsoo" className="formlabel">
                  Total Company Employees and 1099 Contractors
                </label>
                <input
                  id="totalEmployees"
                  className="textbox"
                  type="text"
                  autoComplete="fsoo"
                  placeholder="Total Company Employees and 1099 Contractors"
                  {...register("totalEmployees", {
                    required: "Required",
                  })}
                />

                <input
                  id="employees"
                  className="textbox"
                  type="text"
                  autoComplete="fsoo"
                  placeholder="Total Company Employees and 1099 Contractors"
                  {...register("employees", {
                    required: "Required",
                  })}
                />
              </div>
              <div className="form-group form-suite">
                <label htmlFor="ffti" className="formlabel">
                  Was this Business Purchased?
                </label>

                <div className="radio-two">
                  <div className="radio-container">
                    <input
                      type="radio"
                      name="business"
                      value="yes"
                      {...register("business")}
                    />
                    <label>Yes</label>
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      name="business"
                      value="false"
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
