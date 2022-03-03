import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Form, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

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
    padding: 12px 20px;
    background: #f8f8ff;
    border-radius: 10px;
    & .ant-form-item-label>label {
        font-weight: bold;
        font-size: 18px;
    }
    header {
      .header-one {
        h1 {
          font-weight: bold;
          color: #333333;
        }

        p {
          font-size: 16px;
          font-weight: bold;
          line-height: 150%;
          color: #5c5c5c;
          letter-spacing: 0.5px;
        }
      }

      .header-two {
        p {
          margin-top: -10px;
          color: #adadad;
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
        border-bottom: 1px solid #ededed;
        border-top: 1px solid #ededed;
        margin-top: 10px;
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
          }
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

      font-size: inherit;
      font-weight: 500;
      margin-bottom: 1rem;
      outline: none;
      padding: 1rem 50px;
      position: relative;
      transition: all 0.3s;
      vertical-align: middle;
    }
  }
`;

export default function ProfitLoss() {
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
                process.env.NEXT_PUBLIC_BASE_URL + "/api/ /business-finance/upload-business-profit-and-loss/",
            data: {

            },
            headers: headers,
        }).then(
            (response) => {
                if (response.data.isSuccess) {
                    Router.push("/businessfinance_bs");
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
                <title>Profit and Loss</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BusinessStyle>
                <section className="main-style">

                    <header>
                        <div className="header-one">
                            <h1>Profit & Loss Statement</h1>
                            <p>
                                To evaluate how your business is doing so far this year, we
                                will analyze a Profit & Loss Sratement, also called Income
                                Statement. The profit & Loss Statement gives a snapshot of
                                your business’s financial performance since your most recent
                                tax filling.
                            </p>
                        </div>
                    </header>
                    <br />
                    <Form layout="vertical">
                        <Form.Item label="Upload Profit and loss statements">
                            <Dragger
                                max={5}
                                accept=".xls,.pdf,.csv"
                                previewFile={false}
                                multiple
                                // fileList={}
                                beforeUpload={(file) => {
                                    const isContentIsGreatedThan5MB = file?.size / 1024 / 1024 > 10;

                                    if (isContentIsGreatedThan5MB) {
                                        message.error("Please upload less than 10 mb content")
                                        return Upload.LIST_IGNORE;
                                    }
                                }}
                            >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Upload your profit and loss documents
                                </p>
                            </Dragger>
                        </Form.Item>
                    </Form>
                    <div className="footer">
                        <div className="continue-button">
                            <img src="/images/back.png" />
                            <input type="submit" id="button" value="Upload to continue" />
                        </div>

                        <div className="skip-link">
                            <a href="/businessfinance_bs">Skip</a>
                        </div>
                    </div>

                </section>
            </BusinessStyle>
        </>
    );
}
