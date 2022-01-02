import Head from "next/head";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import NavMenu from "../components/NavMenu";

const BusinessStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mulish;
  background: #e5e5e5;
  padding: 10px;

  .main-style {
    width: 52%;
    padding: 12px;
    background: #f8f8ff;
    border-radius: 10px;
    header {
      .header-one p {
        font-size: 16px;
        letter-spacing: 0.5px;
        color: #5c5c5c;
        font-weight: bold;
      }
      .header-two {
        p {
          margin-top: -10px;
          color: #adadad;
        }
      }
    }
  }
  .mid-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    section {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ededed;
      border-top: 1px solid #ededed;

      .column-one {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-right: auto;
        width: 50%;
      }
      .column-two {
        margin-top: 3%;
        margin-bottom: 3%;
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px dotted #ededed;
        border-radius: 8px;
        width: 60%;
        height: 70px;
        label {
          color: #adadad;
        }
      }
      .new-column {
        h6 {
          margin-top: 0;
          font-size: 16px;
          color: #1b46b0;
          text-decoration-line: underline;
        }
      }
    }
  }
  .footer {
    .continue-button {
      margin-top: 3%;
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

  [type="file"] {
    /* height: 0;
    overflow: hidden;
    width: 0; */
  }

  /* [type="file"] + label {
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: "Rubik", sans-serif;
    font-size: inherit;
    font-weight: 500;
    margin-bottom: 1rem;
    outline: none;
    padding: 1rem 50px;
    position: relative;
    transition: all 0.3s;
    vertical-align: middle;
  }  */
`;

export default function balanceSheet() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer" + " ",
  };

  const onSubmitForm = async (values) => {
    axios({
      method: "post",
      url:
        process.env.NEXT_PUBLIC_BASE_URL +
        "/api/business-finance/upload-business-balancesheet/",
      data: {},
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
        <title>Balance sheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <BusinessStyle>
        <section className="main-style">
          <header>
            <div className="header-one">
              <h1>Upload your Balance Sheet</h1>
              <p>
                We need a summary of your business’s assets and liabilities
                since the most recent tax filing. The easiest way to do this is
                to run a Balance Sheet report in your account software.
              </p>
            </div>
          </header>

          <form onClick={handleSubmit(onSubmitForm)}>
            <div className="mid-section">
              <section>
                <div className="column-one">
                  <label>Balance Sheet</label>
                </div>
                <div className="column-two">
                  <img src="/images/upload.png" />
                  <input type="file" id="file" {...register("files")} />
                  {/* Drag & Drop or click to upload files */}
                  {/* <label htmlFor="file">
                    Drag & Drop or click to upload files
                  </label> */}
                  
                </div>
              </section>
            </div>
            <div className="footer">
              <div className="continue-button">
                <img src="/images/back.png" />
                <input type="submit" id="button" value="Upload to continue" />
              </div>

              <div className="skip-link">
                <a href="/upload">Skip</a>
              </div>
            </div>
          </form>
        </section>
      </BusinessStyle>
    </>
  );
}
