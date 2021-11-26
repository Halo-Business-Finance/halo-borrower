import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Hero = styled.div`
  display: flex;
  font-family: Mulish;
  justify-content: center;
  align-items: center;
  font-family: Mulish;
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
  .footer {
    .continue-button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      img {
        padding: 14px;
        border: 1px solid #f3ba17;
        border-radius: 8px;
      }
      input {
        padding: 16px 32px;
        font-size: 16px;
        font-weight: bold;
        background: #f3ba17;
        border-radius: 8px;
        border: none;
      }
    }
    .skip-link {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        text-decoration: underline;
      }
    }
  }
`;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Business Debt Two</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <form className="formstyle" onSubmit={handleSubmit(SubmitForm)}>
          <section className="Form-design">
            <div className="form-head">
              <h2 className="heading">
                Tell us more about your outstanding debt.
              </h2>
              <h2 className="heading-step">
                <p className="active">Step 2</p> / 2
              </h2>
            </div>
            <p>
              We need to know about your company’s existing debts in order to
              give you an accurate cash flow decision. Business debts include
              terms loans, equipment leases, business credit cards (in the name
              of the business), lines of credit, leases or any other business
              debts.
            </p>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="lender" className="formlabel ">
                  Lender name
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="lender"
                  placeholder="Enter lender name"
                  {...register("lender")}
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="debt" className="formlabel">
                  Type of Debt
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="debt"
                  placeholder="Select"
                  {...register("typeOfDebt")}
                  required
                />
              </div>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="year" className="formlabel">
                  Origination Year
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="year"
                  placeholder="YYYY"
                  {...register("originationYear")}
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="payment" className="formlabel">
                  Payment Frequency
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="payment"
                  placeholder="Select"
                  {...register("paymentFrequency")}
                  required
                />
              </div>
            </div>
            <div className="form-row-one form-gap">
              <div className="form-group form-name">
                <label htmlFor="payment" className="formlabel">
                  Minimum Payment
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="payment"
                  placeholder="$"
                  {...register("minimumPayment")}
                  required
                />
              </div>
              <div className="form-group form-dba">
                <label htmlFor="amount" className="formlabel">
                  Amount Remaining
                </label>
                <input
                  className="textbox"
                  type="text"
                  autoComplete="amount"
                  placeholder="$"
                  {...register("amountRemaining")}
                  required
                />
              </div>
            </div>
          </section>

          <div className="footer">
            <div className="continue-button">
              <img src="/images/back.png" />
              <input
                type="submit"
                href="form2"
                id="button"
                value="Upload to continue"
              />
            </div>
            <div className="skip-link">
              <p>Skip</p>
            </div>
          </div>
        </form>
      </Hero>
    </>
  );
}
