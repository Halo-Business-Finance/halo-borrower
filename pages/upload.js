import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import NavMenu from "../components/NavMenu";
import { Button, Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from "react";

const { Dragger } = Upload;

const BusinessStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mulish;
  background: #e5e5e5;
  padding: 10px;

  .main-style {
    width: 60%;
    padding: 12px;
    background: #f8f8ff;
    border-radius: 10px;
    header {
      .header-one {
        h1 {
          color: #333333;
        }
        p {
          font-size: 16px;
          letter-spacing: 0.5px;
          color: #5c5c5c;
        }
      }
      .header-two {
        p {
          margin-top: -10px;
          color: #adadad;
        }
      }
    }
  }
  .main-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    section {
      display: flex;
      align-items: center;
      border-top: 1px solid #ededed;

      .column-one {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-right: auto;
        width: 50%;
        label {
          font-weight: bold;
          font-size: 18px;
          color: #5c5c5c;
          width: 70%;
        }
      }
      .column-two {
        margin-top: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px dotted #ededed;
        border-radius: 8px;
        width: 60%;
        height: 70px;
        gap: 10px;
        label {
          color: #adadad;
          font-size: 13px;
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
  .continue-button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;

    input {
      padding: 8px 32px;
      font-size: 16px;
      font-weight: bold;
      background: #f3ba17;
      border-radius: 8px;
      border: none;
      width: 329px;
      height: 48px;
      color: #333333;
      margin: 0px 10px;
    }
    p {
      text-decoration-line: underline;
    }
  }

  [type="file"] {
    height: 0;
    overflow: hidden;
    width: 0;
  }

  [type="file"] + label {
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
  }
`;

export default function UploadDocs() {
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
				process.env.NEXT_PUBLIC_BASE_URL + "/api/",
			data: {
				
			},
			headers: headers,
		}).then(
			(response) => {
				if (response.data.isSuccess) {
					Router.push("/");
				} else {
					(response);
				}
			},
			(error) => {
				(error);
			}
		);
	};
  const [documents,setDocuments]=useState({
    article:null
  })

  return (
    <>
      <Head>
        <title>Upload</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu  />
      <BusinessStyle>
        <section className="main-style">
          <header>
            <div className="header-one">
              <h1>Upload documents</h1>
              <p>Include all necessary documents that listed below</p>
            </div>
          </header>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="main-section">
              <section>
                <div className="column-one">
                  <label> Copy of articles</label>
                </div>
                <div className="column-two">
                      <Upload
                        name="avatar"
                        
                        
                      >
                         <Button size="large" type="primary" icon={<UploadOutlined />}>Click to Upload</Button>
                      </Upload>

                  {/* <input type="file" id="file" {...register("fileOne")} />
                  <label htmlFor="file">
                    Drag & Drop or click to upload files
                  </label> */}
                </div>
              </section>
              <section>
                <div className="column-one">
                  <label>Copy of voided check</label>
                </div>
                <div className="column-two">
                  <input type="file" id="file" {...register("fileTwo")} />
                  <label htmlFor="file">
                    Drag & Drop or click to upload files
                  </label>
                </div>
              </section>
              <section>
                <div className="column-one">
                  <label>Copy of driver license for John Smith</label>
                </div>
                <div className="column-two">
                  <input type="file" id="file" {...register("fileThree")} />
                  <label htmlFor="file">
                    Drag & Drop or click to upload files
                  </label>
                </div>
              </section>
              <section>
                <div className="column-one">
                  <label>Copy of driver license for Peter Dykson</label>
                </div>
                <div className="column-two">
                  <input type="file" id="file" {...register("fileFour")} />
                  <label htmlFor="file">
                    Drag & Drop or click to upload files
                  </label>
                </div>
              </section>
              <section>
                <div className="column-one">
                  <label>
                    Information about the business and types of service
                  </label>
                </div>
                <div className="column-two">
                  <input type="file" id="file" {...register("fileFive")} />
                  <label htmlFor="file">
                    Drag & Drop or click to upload files
                  </label>
                </div>
              </section>
            </div>
            <div className="continue-button">
              <input
                type="submit"
                href="form2"
                id="button"
                value="Upload to finish the applicaton"
              />
            </div>
          </form>
        </section>
      </BusinessStyle>
    </>
  );
}
