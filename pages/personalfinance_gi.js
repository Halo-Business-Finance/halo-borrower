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
  .form-design {
    padding: 30px 30px 30px 30px;
  }

  .textbox {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #ededed;
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

  .form-address {
    width: 60%;
    display: inline-block;
    margin-right: 5%;
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
    color: #333333;
  }

  .heading-step {
    display: inline;
    color: #adadad;
    display: inline;
    float: right;
  }

  .formlabel {
    color: #5c5c5c;
    font-size: 14px;
    line-height: 150%;
    border-radius: 8px;
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
    padding: 8px;
    border: 1px solid #ededed;
    border-radius: 4px;
    background-color: white;
    height: 40px;
    width: 100px;
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

export default function InformationTwo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer" + " " + cookie.get("access_token"),
  };

  const onSubmitForm = async (values) => {
    console.log(values);
    axios({
      method: "post",
      url:
        process.env.NEXT_PUBLIC_BASE_URL +
        "add-update-personal-general-info/",
      data: {
        id: cookie.get("id"),
        ownerId: cookie.get("ownerId"),
        assetsPledged: values.assets,
        defendants: values.legal,
        usCitizen: values.citizen,
        personalBankAccount: values.bankAccount,
        everDeclaredBankruptcy: values.bankruptcy,
      },
      headers: headers,
    }).then(
      (response) => {
        if (response.data.isSuccess) {
          Router.push("/personalfinance_is");
        } else {
          console.log(response);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const [consumer, getConsumer] = useState({});

  useEffect(() => {
    let url =
      process.env.NEXT_PUBLIC_BASE_URL +
      "/get-personal-general-info/" +
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
            assetsPledged: "",
            defendants: "",
            usCitizen: "",
            personalBankAccount: "",
            everDeclaredBankruptcy: "",
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


  return (
    <>
      <Head>
        <title>General Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <NavMenu />
      <Hero>
        <ProGressTracker />

        <form className="formstyle" onSubmit={handleSubmit(onSubmitForm)}>
          <section className="form-design">
            <div className="form-head">
              <h2 className="heading">General Information</h2>
              <h2 className="heading-step">
                <p className="active">Step 2</p> /6
              </h2>
            </div>

            <div className="form-row-one">
              <label htmlFor="fentity" className="formlabel ">
                Are any assets pledged?
              </label>
              <div className="radio-two">
                <div className="radio-container">
                  <input
                    type="radio"
                    name="assets"
                    value="Yes"
                    defaultValue={consumer.assetsPledged}
                    {...register("assets")}
                  />
                  <label>Yes</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="assets"
                    value="No"
                    defaultValue={consumer.assetsPledged}
                    {...register("assets")}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>

            <div className="form-row-one form-gap">
              <label htmlFor="fentity" className="formlabel ">
                Are you a defendant in any suits or legal actions?
              </label>
              <div className="radio-two">
                <div className="radio-container">
                  <input
                    type="radio"
                    value="Yes"
                    defaultValue={consumer.defendants}
                    {...register("legal")}
                  />
                  <label>Yes</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    value="No"
                    defaultValue={consumer.defendants}
                    {...register("legal")}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>

            <div className="form-row-one form-gap">
              <label htmlFor="fentity" className="formlabel ">
                US Citizen?
              </label>
              <div className="radio-two">
                <div className="radio-container">
                  <input
                    type="radio"
                    name="citizen"
                    value="Yes"
                    defaultValue={consumer.usCitizen}
                    {...register("citizen")}
                  />
                  <label>Yes</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="citizen"
                    value="No"
                    defaultValue={consumer.usCitizen}
                    {...register("citizen")}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>

            <div className="form-row-two form-gap">
              <div className="form-group form-address">
                <label htmlFor="fsoo" className="formlabel">
                  Personal bank account carried at (name of financial
                  institutions)
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="fsoo"
                  placeholder="Enter State of Organization"
                  defaultValue={consumer.personalBankAccount}
                  {...register("bankAccount")}
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <label htmlFor="fentity" className="formlabel ">
                Have you or any business you have owned ever declared
                bankruptcy?
              </label>
              <div className="radio-two">
                <div className="radio-container">
                  <input
                    type="radio"
                    name="radio"
                    value="Yes"
                    defaultValue={consumer.everDeclaredBankruptcy}
                    {...register("bankruptcy")}
                  />
                  <label>Yes</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="radio"
                    value="No"
                    defaultValue={consumer.everDeclaredBankruptcy}
                    {...register("bankruptcy")}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>
          </section>

          <div className="form-row-button">
            <input type="submit" href="" id="button" value="Continue" />
            <a href="/personalfinance_is">Skip</a>
          </div>
        </form>
      </Hero>
    </>
  );
}
