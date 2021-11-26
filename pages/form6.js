import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  padding: 20px;
  font-family: Mulish;


  .formstyle {
    width: 60%;
    background: #f8f8ff;
    border-radius: 10px;
  }
  .Form-design {
    padding: 30px 30px 30px 30px;
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

  .scrollimage {
    min-width: 100%;
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
        <form className="formstyle" action="/form5">
          <section className="Form-design">
            <div className="form-head">
              <h2 className="heading">Borrower Authorization</h2>
              <h2 className="heading-step">
                <p className="active">Step 3</p> /3
              </h2>
            </div>

            <div className="form-head">
              <p className="heading">
                I certify that all information entered thus far into the
                application is accurate and that "Borrower Name" is a principal
                owner of "Business Name" I am authorized to act on behalf of
                "Business Name" and I grant permission for Halo Business Finance
                to procure ONLY a credit score number and share a PASS or FAIL
                result only with Halo Business Finance lending partners for the
                purpose of loan options. I understand this will not impact the
                applicant’s credit score and will not show up as an inquiry on a
                credit report pulled by Halo Business Finance.
              </p>
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
