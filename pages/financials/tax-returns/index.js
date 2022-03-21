import { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import cookie from "js-cookie";
import NavMenu from "../../../components/NavMenu";
import { UploadOutlined } from '@ant-design/icons';
import { API } from "../../../utils/api"
import { useRouter } from "next/router";
import { Form, Input, Button, Space, Radio, Upload } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

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
  const [form] = Form.useForm()
  const router = useRouter();
  const { id } = router.query;
  const [hasId, setHasID] = useState(null);
  const [consumer, getConsumer] = useState({});
  
  // const onFinish = values => {
  //   console.log('Received values of form:', values);
  // };
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
  console.log(inputList, 'it')

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
  let initialValues = {
    users:  [],
  };

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: "Bearer" + " ",
  };

  const onFinish = async (values) => {
    console.log('Received values of form:', values);



    let formData = new FormData();

    await Promise.all(
      values?.users?.map((item) => {
        formData.append(item?.Date, item?.File?.file?.originFileObj)
      })
    )
    await API.post(`api/business-finance/upload-tax-returns/${id}`, formData)
    console.log('akjsndkjasdkj')
  };

  const GetTaxReturns = async () => {
    const baseUrl = "https://dev.amazingrm.com/"
  
      try {
        console.log("file")
        const res = await API.get(`api/business-finance/get-tax-returns/${id}`)
        const data = await res.payload;
        getConsumer(data)
        setHasID(data?.id)
        
        console.log(data, 'mydata')
        
          const docs = data?.map((item) => ({
            Date:item?.key,
            File:{
              file:[{
              "uid": item?.id,
          'url': baseUrl + item?.fileName,
          "name": item?.aliasFileName
            }]
          }
          

        }))
        console.log("focs")
        setInputList(docs)

        
        // const data = await res?.payload
        // const docs = data?.map((item) => ({
        //   "id": item?.id,
        //   'url': baseUrl + item?.fileName,
        //   "name": item?.aliasFileName

        // }))
      }
      catch (error) {
        console.log(error)
        // message.error(error?.payload?.reason || "Error Occured");
        // setFetching(false)
      }
    
  }
  //   setFetching(false)

  // }
  useEffect(() => {
    if (id) {
      GetTaxReturns();
    }
  }, [id])
  useEffect(() => {
    form.setFieldsValue(inputList)
  }, [form, inputList])

  useEffect(() => form.resetFields(), [initialValues]);
console.log(initialValues,'aodsjoaisdjo')
const HandleDelete = async (documentId) => {
  try {
    await API.delete(`/api/business-finance/delete-doc/${documentId}`);
    GetPLDocuments();
  } catch (error) {

  }

}
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
          {
        inputList.map((item) =>
        <Form initialValues={{"Date":"2020-10-11","file":{id:1,name:"test",url:"http://example.com"}}}>
          <Form.Item name="file">
            <Upload >File</Upload>
          </Form.Item>
          </Form>
        )

      }
          <Form onFinish={onFinish} form={form} initialValues={{ users: inputList }} name="dynamic_form_nest_item" autoComplete="off">
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField },index) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'Date']}
                        rules={[{ required: true, message: 'Missing first name' }]}
                      >
                        <Input type="date" placeholder="First Name" />
                      </Form.Item>
                      
                      <Form.Item
                        {...restField}
                        name={[name, 'File']}

                      >
                        <Upload
                        
                        onRemove={(file) => {
                  if (file?.uid) {
                    HandleDelete(file.uid);

                  }
                 
                }} fileList={inputList[index]?.File?.file||inputList?.file}><Button disabled={inputList[index]?.File?.file !==undefined}>File</Button></Upload>
                       {/* <Input type="file" /> */}
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item
                  
                  >
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button  type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {/* <form onSubmit={onSubmitForm}>
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
                        onChange={(e) =>{} }
                    />
                  
                    </div>
                    <Upload 
                     name="File"
                     value={x.File}
                     onChange={({file}) => { 
                      //  handleInputChange(e, i)
                      console.log(file,'on')

                    
                    }
                  }
                     
                    >
                    
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
          </form> */}
        </section>
      </BusinessStyle>
    </>
  );
}
