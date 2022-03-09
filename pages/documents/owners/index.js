import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import NavMenu from "../../../components/NavMenu";
import { Button, Form, Spin, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { API } from "../../../utils/api";
import { useRouter } from "next/router";

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
        /* border: 2px dotted #ededed; */
        border-radius: 8px;
        
        /* height: 70px; */
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
const SpinWrapper = styled.div`
min-height:50vh ;
width: 100%;
display:flex ;
justify-content: center;
align-items: center;
`;

export default function UploadDocs() {
  const router = useRouter();
  const [fetching, setFetching] = useState(true);
  const { id } = router.query;
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

        }
      },
      (error) => {

      }
    );
  };
  const [documents, setDocuments] = useState({
    article: null,
    voidedCheck: null,
    businessInfo: null

  })
  const baseUrl = "https://dev.amazingrm.com/"
  const [owners, setOwners] = useState([]);
  const [ownersData, setOwnersData] = useState([])
  const [article, setArticle] = useState([]);
  const [businessInfo, setBusinessInfo] = useState([]);
  const [voidedCheck, setVoidedCheck] = useState([]);
  const GetOwners = async () => {
    setFetching(true)
    try {
      const res = await API.get(`/api/borrower/get-owners/${id}`)
      const data = await res?.payload

    const response=  data?.map((item) => ({
        name: item?.fullName,
        file:[{
          name:item?.licenseInfo?.aliasFileName,
          url:baseUrl+item?.licenseInfo?.fileName,
          uid:item?.licenseInfo?.id,
          key:item?.licenseInfo?.key,
        }]
      }))
      setOwners(response)

    } catch (error) {
      setFetching(false)
    }
    setFetching(false)
  }
  const [finalDocs, setFinalDocs] = useState([]);
  const GetDocs = async () => {
    setFetching(true)
    try {
      const res = await API.get(`/api/document/get-final-documents/${id}`)
      const data = await res?.payload


      const refactoredData = await data?.documentInformations?.map((item, index) => ({
        "url": baseUrl + item?.fileName,
        "uid": item?.id,
        "type": item?.key,
        "name": item?.aliasFileName,
        "id": index + 1

      }))

      const refactoredOwners = await data?.ownersDocument?.map((item, index) => {


        // file: [{
        //   "url": baseUrl + item?.document[index]?.fileName,
        //   "uid": item?.document[index]?.id,
        //   "type": item?.document[index]?.key,
        //   "name": item?.document[index]?.aliasFileName||"file",
        //   "docs":item?.document
        // }],
        // "id": index + 1,
        // "name": "ajskajsdk"
      }



      )


      const article = refactoredData?.filter((item) => item?.type == "Articles");
      const business = refactoredData?.filter((item) => item?.type == "BusinessInfo")
      const voidedCheck = refactoredData?.filter((item) => item?.type == "VoidedCheck")
      setVoidedCheck(voidedCheck)
      setBusinessInfo(business)
      setArticle(article)
      console.log(refactoredOwners)

      // setOwners(data)

    } catch (error) {
      setFetching(false)
    }
    setFetching(false)
  }
  useEffect(() => {
    if (id) {
      GetOwners();
      GetDocs();
    }

  }, [id])
  const updateFiles = (id) => {
    const data = ownersData?.filter((item) => {
      return item?.file?.file?.uid !== id
    })

  }
  useEffect(() => {

    if (finalDocs) {

      // setDocuments(refactoredData)
    }

  }, [finalDocs])


  if (fetching) {
    return (
      <SpinWrapper><Spin size="large" /></SpinWrapper>
    )
  }


  const SaveFinalFiles = async () => {
    const bodyData = new FormData();

    try {
      bodyData.append("VoidedCheck", documents?.voidedCheck);
      bodyData.append("Articles", documents?.article)
      bodyData.append("BusinessInfo", documents?.businessInfo);
      Promise.all(
        ownersData?.map((item) => {
          const key = `License:${item?.id}`
          bodyData.append(key, item?.file)
        })
      )
      await API.post(`api/document/upload-final-document/${id}`, bodyData)

    } catch (error) {

    }
  }



  const HandleDelete = async (documentId) => {
    try {
      await API.delete(`/api/business-finance/delete-doc/${documentId}`);
      GetDocs();
    } catch (error) {

    }

  }


  return (
    <>
      <Head>
        <title>Upload</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <BusinessStyle>
        <section className="main-style">
          <header>
            <div className="header-one">
              <h1>Upload documents</h1>
              <p>Include all necessary documents that listed below</p>
            </div>
          </header>
          <form>
            <div className="main-section">
              <section>
                <div className="column-one">
                  <label> Copy of articles</label>
                </div>
                <div className="column-two">
                  <Upload
                    onRemove={(file) => {
                      if (file?.url) {
                        HandleDelete(file?.uid)
                      }
                    }}
                    fileList={article}
                    showUploadList
                    max={1}

                    multiple={false}
                    name="avatar"
                    onChange={({ file, fileList }) => {
                      console.log(fileList)
                      if (file?.size > 0) {
                        setArticle([])
                        setArticle(fileList)
                      }


                      // setDocuments({ ...documents, article: file?.file?.originFileObj })
                    }
                    }

                  >
                    {console.log(article, "articles")}
                    <Button disabled={article?.length > 0} size="large" type="primary" icon={<UploadOutlined />}>Click to Upload</Button>
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
                  <Upload
                    fileList={voidedCheck}
                    showUploadList
                    max={1}
                    name="avatar"
                    onChange={(file) => setDocuments({ ...documents, voidedCheck: file?.file?.originFileObj })
                    }

                  >
                    <Button size="large" type="primary" icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </div>
              </section>
              {
                owners?.map((item, index) =>
                  <section key={index}>
                    <div className="column-one">
                      <label>Copy of driver license for {item?.name}</label>
                    </div>
                    <div className="column-two">
                      <Upload
                        fileList={item?.file}
                        onRemove={(file) => {
                          if (file?.url) {
                            HandleDelete(file?.uid)
                          }
                          updateFiles(file?.uid);

                        }}
                        showUploadList
                        max={1}
                        name="avatar"
                        onChange={(file) => {

                          const info = {
                            "id": item?.id,
                            "file": file?.file?.originFileObj
                          }
                          file?.file?.status == "done" && setOwnersData([...ownersData, info])


                        }

                        }

                      >
                        <Button size="large" type="primary" icon={<UploadOutlined />}>Click to Upload</Button>
                      </Upload>
                    </div>
                  </section>
                )
              }


              <section>
                <div className="column-one">
                  <label>
                    Information about the business and types of service
                  </label>
                </div>
                <div className="column-two">
                  <Upload
                  onRemove={(file)=>{
                    if (file?.url) {
                      HandleDelete(file?.uid)
                    }

                  }}
                    fileList={businessInfo}
                    showUploadList
                    max={1}
                    name="avatar"
                    onChange={(file) => setDocuments({ ...documents, businessInfo: file?.file?.originFileObj })
                    }

                  >
                    <Button size="large" type="primary" icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </div>
              </section>
            </div>
            <div className="continue-button">
              <Button
                onClick={SaveFinalFiles}

                type="primary"
              >Upload to finish the applicaton</Button>
            </div>
          </form>
        </section>
      </BusinessStyle>
    </>
  );
}

