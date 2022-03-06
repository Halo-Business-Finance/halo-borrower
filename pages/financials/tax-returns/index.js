import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import cookie from "js-cookie";
import NavMenu from "../../../components/NavMenu";
import { Button, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
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
    .header {
      .header-one h1 {
        font-weight: 500;
      }
      p {
        font-size: 16px;
        color: #5c5c5c;
        font-weight: bold;
      }
      .header-two {
        h3 {
          font-weight: 500;
        }

        p {
          margin-top: -10px;
          color: #adadad;
        }
      }
    }
  }
  .main-form {
    display: flex;
    /* flex-direction: column; */
    gap: 2.5rem;
  }

  .column-one {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: auto;
  }
  .column-two {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #ededed;
    border-radius: 8px;
    width: 60%;
    height: 70px;
  }

  .form-row-button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input {
      padding: 10px 32px;
      font-size: 16px;
      font-weight: bold;
      background: #f3ba17;
      border-radius: 8px;
      border: none;
    }
    p {
      text-decoration-line: underline;
      cursor: pointer;
    }
  }

  /* [type="file"] {
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
	} */
`;

export default function Business() {
  const [fileList, setFileList] = useState([])
  const [inputList, setInputList] = useState([
    { Date: "", File: "" },
    { Date: "", File: "" },
  ]);

  let i;
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { Date: "", File: "" }]);
  };

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: "Bearer" + " ",
  };

  const onSubmitForm = async (values) => {

    const formData = new FormData();
		try {
			await Promise.all(
			  fileList.map((item) => {
				formData.append("file")
			  })
			)
			await API.post(`api/business-finance/upload-tax-returns`, formData)
		  } catch (error) {
			message.error();
		  }
		};
   
  //   axios({
  //     method: "post",
  //     url:
  //       process.env.NEXT_PUBLIC_BASE_URL +
  //       "api/business-finance/upload-tax-returns/" +
  //       cookie.get("loan_request_id"),
  //     data: bodyFormData,
  //     headers: headers,
  //   }).then(
  //     (response) => {
  //       if (response.data.isSuccess) {
  //         Router.push("/businessfinance_bd");
  //       } else {
  //         console.log(response);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };

  return (
    <>
      <Head>
        <title>Business </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <BusinessStyle>
        <section className="main-style">
          <div className="header">
            <div className="header-one">
              <h1>Business Tax returns</h1>
              <p>
                In order to understand your business financials, we’ll need to
                analyze two of your most recent business Tax returns.
              </p>
            </div>
            <div className="header-two">
              <h3>Upload at least the last 2 years of business Tax returns</h3>
              <p>
                Include all schedules and statements, We need all pages to give
                an accurate analysis.
              </p>
            </div>
          </div>
          <form onSubmit={onSubmitForm}>
            {inputList.map((x, i) => {
              return (
                <>
                  <div className="main-form">
                    <div>
                      <div className="column-one">
                        <label>2020 Profit & Loss Statement</label>
                      </div>
                      <input
                        className=""
                        name="Date"
                        placeholder="Enter First Name"
                        type="date"
                        value={x.Date}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>
                    <Upload >
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>

                    <div className="btn-box">
                      {inputList.length - 1 === i && (
                        <button
                          className="mr10"
                          onClick={() =>
                            handleRemoveClick(inputList.length - 1)
                          }
                        >
                          Remove
                        </button>
                      )}
                      {inputList.length - 1 === i && (
                        <button onClick={handleAddClick}>Add</button>
                      )}
                    </div>
                  </div>
                </>
              );
            })}

            <div className="form-row-button">
              <input
                type="submit"
                id="button"
                value="Continue"
              />
              <a href="/businessfinance_bd">Skip</a>
            </div>
          </form>
        </section>
      </BusinessStyle>
    </>
  );
}
