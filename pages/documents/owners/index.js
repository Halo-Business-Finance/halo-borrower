import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import NavMenu from "../../../components/NavMenu";
import { Button, Form, notification, Spin, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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
  & .ant-btn-primary{
    margin:10px ;
  }

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

 function UploadDocs() {
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

  const [article, setArticle] = useState([]);
  const [businessInfo, setBusinessInfo] = useState([]);
  const [voidedCheck, setVoidedCheck] = useState([]);
  const [saving, isSaving] = useState(false);
  const GetOwners = async () => {
    setFetching(true)
    try {
      const res = await API.get(`/api/borrower/get-owners/${id}`, {
          headers: {
              Authorization: "Bearer " + sessionStorage.getItem('token')
          }
      });
      const data = await res?.payload

      const response = data?.map((item, index) => (

        {
          name: item?.fullName,
          code: item?.id,
          "file": item?.licenseInfo !== null ? [
            {
              name: item?.licenseInfo?.aliasFileName,
              url: item?.licenseInfo != null ? baseUrl + item?.licenseInfo?.fileName : null,
              uid: null,
              id: item?.licenseInfo?.id,
              key: item?.licenseInfo?.key,
            }
          ] : []
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
      const res = await API.get(`/api/document/get-final-documents/${id}`, {
          headers: {
              Authorization: "Bearer " + sessionStorage.getItem('token')
          }
      });
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

  const updateFiles = () => {
    const afterDelete = finalDocs.filter((item) => (item));
console.log(afterDelete)
    setFinalDocs(afterDelete)
window.location.reload()
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
    isSaving(true)
    try {

      if (voidedCheck[0]?.status == "done") {
        bodyData.append("VoidedCheck", voidedCheck[0]?.originFileObj);

      }
      if (article[0]?.status == "done") {
        bodyData.append("Articles", article[0]?.originFileObj)

      }
      if (businessInfo[0]?.status == "done") {
        bodyData.append("BusinessInfo", businessInfo[0]?.originFileObj);

      }
      finalDocs?.map((item) => {
        if (item?.[item?.name]?.status == "done") {
          const key = `License:${item?.id}`
          bodyData.append(key, item?.[item?.name]?.originFileObj)

        }
      })


      await API.post(`api/document/upload-final-document/${id}`, bodyData)
      notification.success({ message: "Document added successfully" })
      localStorage.setItem("progress", "10");
      router.push({ pathname: "/loan-overview", query: { id: id } })
    } catch (error) {
      isSaving(false)
    }
    isSaving(false)
  }



  const HandleDelete = async (documentId) => {
    try {
      await API.delete(`/api/business-finance/delete-doc/${documentId}`);
      GetDocs();
      GetOwners();
    } catch (error) {

    }

  }



  let fileCode = 0;
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  return (
    <>
      <Head>
        <title>Upload</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu id={id} />
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
                  <Dragger
                    customRequest={dummyRequest}
                    onRemove={(file) => {
                      console.log(file)
                      if (file?.url) {
                        HandleDelete(file?.uid)
                      }
                    }}
                    fileList={article}
                    showUploadList
                    max={1}

                    multiple={false}

                    onChange={({ file, fileList }) => {


                      setArticle(fileList)



                      // setDocuments({ ...documents, article: file?.file?.originFileObj })
                    }
                    }

                  >
                    <p></p>

                    <Button disabled={article?.length > 0} size="large" type="primary" icon={<UploadOutlined />}>Click or drag file to this area to upload</Button>
                  </Dragger>

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
                  <Dragger
                    customRequest={dummyRequest}
                    fileList={voidedCheck}
                    onRemove={(file) => {
                      console.log(file)
                      if (file?.url) {
                        HandleDelete(file?.uid)
                      }

                    }}
                    showUploadList
                    max={1}

                    onChange={({ fileList }) => {

                      setVoidedCheck(fileList)
                    }
                    }

                  >
                    <Button disabled={voidedCheck?.length > 0} size="large" type="primary" icon={<UploadOutlined />}>Click or drag file to this area to upload</Button>
                  </Dragger>
                </div>
              </section>
              {
                owners?.map((item, index) => {

                  const filterData = finalDocs?.filter((data) => data?.name == item?.name)
                  const res = filterData?.find((docs) => docs?.name == item?.name)

                  return (<section key={index}>
                    <div className="column-one">
                      <label>Copy of driver license for {item?.name}</label>
                    </div>
                    <div className="column-two">
                      <Dragger
                        customRequest={dummyRequest}
                        max={1}
                        fileList={item?.file?.length > 0 ? item?.file : filterData?.[item?.name]}
                        onRemove={(file) => {
                          if (file?.url) {
                            HandleDelete(file?.id)
                          } else {


                            updateFiles();
                          
                          }


                        }}
                        showUploadList
                        onChange={({ fileList, file }) => {

                          const info = {
                            "id": item?.code,
                            "name": item?.name,
                            [item?.name]: file,
                            "codes": fileCode
                          }
                          fileCode = fileCode + 1;
                          file?.status == "done" && setFinalDocs([...finalDocs, info]);



                          //  setOwnersData([...ownersData, { ...ownersData?.val, val: fileList }])


                        }
                        }

                      >
                        <Button disabled={res?.[item?.name]?.size > 0 || item.file?.length > 0} size="large" type="primary" icon={<UploadOutlined />}>Click or drag file to this area to upload</Button>
                      </Dragger>
                    </div>
                  </section>)
                }
                )
              }


              <section>
                <div className="column-one">
                  <label>
                    Information about the business and types of service
                  </label>
                </div>
                <div className="column-two">
                  <Dragger
                    customRequest={dummyRequest}
                    onRemove={(file) => {
                      console.log(file)
                      if (file?.url) {
                        HandleDelete(file?.uid)
                      }

                    }}
                    fileList={businessInfo}
                    showUploadList
                    max={1}

                    onChange={({ fileList }) => setBusinessInfo(fileList)
                      //  setDocuments({ ...documents, businessInfo: file?.file?.originFileObj })
                    }

                  >
                    <Button disabled={businessInfo?.length > 0} size="large" type="primary" icon={<UploadOutlined />}>Click or drag file to this area to upload</Button>
                  </Dragger>
                </div>
              </section>
            </div>
            <div className="continue-button">
              <Button
                loading={saving}
                onClick={SaveFinalFiles}
                size="large"
                type="primary"
              >Upload to finish the applicaton</Button>
            </div>
          </form>
        </section>
      </BusinessStyle>
    </>
  );
}

export default PrivateRoute(UploadDocs);