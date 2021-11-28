import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    justify-content: center;
    align-items: center;
    display: flex;
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
		Authorization: "Bearer" + " " ,
	};

	const onSubmitForm = async (values) => {
		// const headers = {
		//   'Content-Type': 'application/json',
		//   'Authorization': 'Bearer' + ' ' + cookie.get('access_token')
		// }

		axios({
			method: "post",
			url:
				process.env.NEXT_PUBLIC_BASE_URL + "/api/",
			data: {
				
			},
			headers: headers,
		}).then(
			(response) => {
				if (response.data.isSuccess) {
					Router.push("/");
				} else {
					console.log(response);
				}
			},
			(error) => {
				console.log(error);
			}
		);
	};

  return (
    <>
      <Head>
        <title>Information</title>
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
                  <input type="radio" name="radio" {...register("assets")} />
                  <label>Yes</label>
                </div>

                <div className="radio-container">
                  <input type="radio" name="radio" {...register("assets")} />
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
                  <input type="radio" name="radio" {...register("legal")} />
                  <label>Yes</label>
                </div>

                <div className="radio-container">
                  <input type="radio" name="radio" {...register("legal")} />
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
                  <input type="radio" name="radio" {...register("citizen")} />
                  <label>Yes</label>
                </div>

                <div className="radio-container">
                  <input type="radio" name="radio" {...register("citizen")} />
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
                    {...register("bankruptcy")}
                  />
                  <label>Yes</label>
                </div>

                <div className="radio-container">
                  <input
                    type="radio"
                    name="radio"
                    {...register("bankruptcy")}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>
          </section>

          <div className="form-row-button">
            <input type="submit" href="" id="button" value="Continue" />
          </div>
        </form>
      </Hero>
    </>
  );
}
