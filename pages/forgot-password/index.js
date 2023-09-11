import { Button, Form, Input, notification } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import {API} from '../../utils/api'
const MainContainer=styled.div`

max-width:1440px;
width:100%;
margin:0 auto;
& .ant-form{
    max-width:550px;
    margin:0 auto;
    margin-top:80px;
    padding:24px;
    border:1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
`;

const ForgotPassword = () => {
    const [isCodeSent,setIsCodeSent]=useState(false);
    const [sendingCode,setSendingCode]=useState(false);
    const [isUpdating,setIsUpdating]=useState(false);
    const router = useRouter();

    const handleCode=async(value)=>{
        setSendingCode(true);
        try {
            await API.post("/auth/reset-password-request",value, {
                headers: {
                    Authorization: "Bearer " + sessionStorage.getItem('token')
                }
            });
            setIsCodeSent(true)
            notification.success({Message: "Sucess",description:"Code sent successfully"})
        } catch (error) {
            notification.error({ message: 'Error Occured', description: error?.data?.reason||"Please check your credentials"})
            setSendingCode(false); 
        }
        setSendingCode(false); 
    }
    const handleChangePassword=async(value)=>{
        setIsUpdating(true);
        try {
            await API.post("/auth/reset-password",value, {
                headers: {
                    Authorization: "Bearer " + sessionStorage.getItem('token')
                }
            });
            setIsCodeSent(true)
            notification.success({Message: "Sucess",description:"Password updated sucessfully"});
            router.push("/login")
        } catch (error) {
            notification.error({ message: 'Error Occured', description: error?.data?.reason||"Please check your credentials"})
            setIsUpdating(false);
        }
        setIsUpdating(false);
    }

  return (
    <MainContainer>
        
        {isCodeSent?<Form onFinish={handleChangePassword} layout="vertical">
        <img src="/images/logo.svg" />
        <br/>
        <br/>
        <br/>
            <Form.Item rules={[{ required: true,message:"Required" }]} name="username" label="Please provide your login email">
                <Input placeholder="example@gmail.com" size="large"/>
            </Form.Item>
            <Form.Item rules={[{ required: true,message:"Required" }]} name="code" label="Code">
                <Input placeholder="12345" size="large"/>
            </Form.Item>
            <Form.Item rules={[{ required: true,message:"Required" }]} name="newPassword" label="Enter new password">
                <Input.Password placeholder="xxxxxx-xxxxxx" size="large"/>
            </Form.Item>
            <Form.Item>
                <Button loading={isUpdating} size="large" htmlType="submit" type="primary">Submit</Button>
            </Form.Item>
        </Form>:<Form onFinish={handleCode} layout="vertical">
        <img src="/images/logo.svg" />
        <br/>
        <br/>
        <br/>
            <Form.Item rules={[{ required: true,message:"Required" }]} name="username" label="Please provide your login email">
                <Input placeholder="example@gmail.com" size="large"/>
            </Form.Item>
           
            <Form.Item>
                <Button loading={sendingCode} size="large" htmlType="submit" type="primary">Send me a code</Button>
            </Form.Item>
        </Form>
        
    }

    </MainContainer>
  )
}

export default ForgotPassword