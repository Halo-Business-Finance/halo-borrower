import { Button, Form, Input, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import {useRouter} from 'next/router';
import CurrencyFormat from "react-currency-format";

const Container = styled.div`
max-width:500px;
margin:0 auto;
/* border:1px solid gray; */
padding:24px;
margin-top:100px;
background-color:#fff;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
& .ant-form-vertical{
  margin-top: 30px;
}
& .mobile {
  width:100%;
  height:42px;
  border: 1px solid #d9d9d9;
}
`;
const { Title } = Typography;
export const UserForm = () => {
  const router=useRouter();
  const formSubmitHandler=(data)=>{
    const jsonInfo=JSON.stringify(data);
    sessionStorage.setItem("user",jsonInfo)
    router.push({pathname:"/test",query:{id:router.query.id}})
  }
  return (
    <div>
      <Container>
        <Title level={2}>Tell us something about you</Title>
        <Form onFinish={formSubmitHandler} layout="vertical">
          <Form.Item
            name={"buinessName"}
            rules={[{ required: true, message: "Please fill in" }]}
            label={"Name of your buiness"}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item

            name="borrowerName"
            label="Name of Borrower"
            rules={[{ required: true, message: "Please fill in" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Personal Email of Borrower"
            rules={[{ required: true, message: "Please fill in" }, { type: "email", message: "Invalid email" }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please fill in" }]}
            name="phoneNumber"
            label="Cell Phone Number of Borrower "
          >
            <CurrencyFormat className="mobile"
            format="+1 (###) ###-####" mask="_"	 
            size="large"
             type="tel" 
             />
          </Form.Item>
          <Form.Item>
          <Button htmlType="submit" size="large" type="primary">
            Next
          </Button>
        </Form.Item>
        </Form>
        
      </Container>
    </div>
  );
};
