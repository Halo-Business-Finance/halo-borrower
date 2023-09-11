import { Form, Input, Button, Space, Radio } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { API } from '../../utils/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MainWrapper=styled.div`
max-width:750px;
margin:0 auto;
margin-top:50px;
& .ant-input{
    width: 100%;
}
& .dynamic-content{
    
    margin-top:20px;
    width:100%;
    display: flex;
    justify-content: space-between;
}
& .container{
    padding:24px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-top:10px;
    border-bottom: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 10px;
}

`;
const Demo = () => {
    const router = useRouter();
    const [form] = Form.useForm()
    const id=router.query.id;
    const [inputList, setInputList] = useState([]);
  const onFinish = values => {
    ('Received values of form:', values);
  };
  let initialValues = {
    users:inputList?.length >0? inputList:[],
  };
  const fetchOwnerInformations = async () => {
    if (id) {
        try {
            const response = await API.get(`/api/borrower/get-owners/${id}`, {
                headers: {
                    Authorization: "Bearer " + sessionStorage.getItem('token')
                }
            });
            const data = await response.payload;
            initialValues={users: [{fullName:"asdsa kj"}]}
            setInputList(data)
            setHasID(data[0]?.id)

        } catch (error) {

        }

    }
}
useEffect(() => {
    fetchOwnerInformations();
}, [id]);

useEffect(() =>{
  
  (initialValues);
},[inputList]);

useEffect(() => {
  form.setFieldsValue(inputList)
 }, [form, inputList])

 useEffect(() => form.resetFields(), [initialValues]);
  return (
      <MainWrapper>
   {inputList?.length>0 && <Form form={form} layout="vertical" initialValues={inputList} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List  name="users">
        {(inputList, { add, remove }) => (
          <>
            {inputList.map((field,{ key,name, ...restField }) => (
                <div className="container">
                    <img
												src={"/images/trash.png"}
												alt="trash"
												onClick={() => remove(name)}
											/>
                         {(field,"akjsbjk")}
                                            <br/>
              <div className="dynamic-content">
                 <Form.Item
                
                label={"Full Name"}
                  {...restField}
                  value={field?.name}
                  name={[field.name, 'fullName']}
                  rules={[{ required: true, message: 'required' }]}
                >
                  <Input size ="large" placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                 
                label={"Date of Birth"}
                  {...restField}
                  name={[name, 'dateOfBirth']}
                  rules={[{ required: true, message: 'required' }]}
                >
                  <Input size ="large" type="date" placeholder="Date of birth" />
                </Form.Item>
                </div>
                <div className="dynamic-content">
                <Form.Item
                
                label={"State"}
                  {...restField}
                  name={[name, 'state']}
                  rules={[{ required: true, message: 'required' }]}
                >
                  <Input size ="large"/>
                </Form.Item>
                <Form.Item
                
                label={"Zip Code"}
                  {...restField}
                  name={[name, 'zipCode']}
                  rules={[{ required: true, message: 'required' }]}
                >
                  <Input size ="large"/>
                </Form.Item>
                <Form.Item
                
                label={"Social Security Number"}
                  {...restField}
                  name={[name, 'ssn']}
                  rules={[{ required: true, message: 'required' }]}
                >
                  <Input size ="large"/>
                </Form.Item>
                </div>
                <div className="dynamic-content">
                <Form.Item
                
                label={"Email"}
                  {...restField}
                  name={[name, 'email']}
                  rules={[{ required: true, message: 'required' },{type:"email"}]}
                >
                  <Input size ="large"/>
                </Form.Item>
                <Form.Item
                
                label={"Phone Number"}
                  {...restField}
                  name={[name, 'phoneNumber']}
                //   rules={[{ required: true, message: 'required' },{type:"email"}]}
                >
                  <Input size ="large"/>
                </Form.Item>
                </div>
                <div>
                <Form.Item
                
                label={"Ownership"}
                  {...restField}
                  name={[name, 'ownershipPercentage']}
                //   rules={[{ required: true, message: 'required' },{type:"email"}]}
                >
                  <Input size ="large"/>
                </Form.Item>
                </div>
                <Form.Item
                
                label={"	Are you a:"}
                  {...restField}
                  name={[name, 'typeOfResident']}
                //   rules={[{ required: true, message: 'required' },{type:"email"}]}
                >
                    <Radio.Group defaultValue="UsCitizen" >
                        <Space  justify="space-between">
                        <Radio value="UsCitizen">Us Citizen</Radio>
      <Radio value="USPermanentResident">US Permanent Resident</Radio>
      <Radio value="Other">Other</Radio>
     
                        </Space>
      
    </Radio.Group>
                </Form.Item>

              
                   
              </div>
              
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add New Owner
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>}
    </MainWrapper>
  );
};
export default Demo;