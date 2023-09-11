import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Form, message, Spin, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { API } from "../../../utils/api";
import { useRouter } from "next/router";
import PrivateRoute from "../../withPrivateRoute";

const { Dragger } = Upload;

const BusinessStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mulish;
  background: #e5e5e5;
  padding: 10px;
 & .ant-upload-drag{
margin-bottom:10px ;
  }

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
const SpinWrapper = styled.div`
min-height:50vh ;
width: 100%;
display:flex ;
justify-content: center;
align-items: center;
`;

 function ProfitLoss() {
  const router = useRouter();
  const { id } = router.query
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
    setIsSaving(true)
    const formData = new FormData();

    try {
      await Promise.all(
        fileList.map((item) => {
          if(item?.status=="done"){
            formData.append("file", item?.originFileObj, item?.name)
          }
          
        })
      )
      await API.post(`api/business-finance/upload-business-profit-and-loss/${id}`, formData, {
          headers: {
              Authorization: "Bearer " + sessionStorage.getItem('token')
          }
      })
      localStorage.setItem("progress","8");
      router.push({pathname:"/documents/balance-sheet",query:{id:id}})
    } catch (error) {
      console.log(error)
      message.error(error?.payload?.reason || "Error Occured");
      setIsSaving(false)
    }
    setIsSaving(false)
  };
  const [fileList, setFileList] = useState([])
  const [isSaving, setIsSaving] = useState(false);
  const [fetching, setFetching] = useState(false);
  const GetPLDocuments = async () => {
    setFetching(true)
    const baseUrl = "https://dev.amazingrm.com/"
    try {
      const res = await API.get(`api/business-finance/get-document/${id}?typeOfDocument=2`, {
          headers: {
              Authorization: "Bearer " + sessionStorage.getItem('token')
          }
      });
      const data = await res?.payload
      const docs = data?.map((item) => ({
        "id": item?.id,
        'url': baseUrl + item?.fileName,
        "name": item?.aliasFileName

      }))

      setFileList(docs)
    } catch (error) {
      message.error(error?.payload?.reason || "Error Occured");
      setFetching(false)
    }
    setFetching(false)

  }
  useEffect(() => {
    if (id)
 {
      GetPLDocuments();
    }

  }, [id])
  const HandleDelete = async (documentId) => {
    try {
      await API.delete(`/api/business-finance/delete-doc/${documentId}`);
      GetPLDocuments();
    } catch (error) {

    }

  }
  if (fetching) {
    return (
      <SpinWrapper><Spin size="large" /></SpinWrapper>
    )
  }
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
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
              customRequest={dummyRequest}
                max={5}
                listType="picture-card"
                accept=".xls,.pdf,.csv"
                previewFile={false}
                multiple
                fileList={fileList}
                onRemove={(file) => {
                  if (file?.id) {
                    HandleDelete(file.id);

                  }
                  
                }}
                onChange={({ fileList: newFileList }) => {
                  setFileList(newFileList);

                }}
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
              <br/>
            </Form.Item>
          </Form>
          <div className="footer">
            <div className="continue-button">
              
              <Button size="large" loading={isSaving} onClick={onSubmitForm} type="primary" >Upload to continue</Button>
            </div>
           
          </div>

        </section>
      </BusinessStyle>
    </>
  );
}
export default PrivateRoute(ProfitLoss);