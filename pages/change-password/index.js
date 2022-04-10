import { Button, Form, Input, notification } from 'antd';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import {API} from '../../utils/api'
import { AuthContext } from '../../utils/AuthContext';
import PrivateRoute from '../withPrivateRoute';
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

const ChangePassword = () => {
  const [userName,setUserName]=useState('')
    const [isUpdating,setIsUpdating]=useState(false);
    const router = useRouter();

 
    const handleChangePassword=async(value)=>{
        setIsUpdating(true);
        try {
            await API.post("/auth/change-password",value);
            notification.success({Message: "Sucess",description:"Password updated sucessfully"});
            router.push("/")
        } catch (error) {
            notification.error({ message: 'Error Occured', description: error?.data?.reason||"Please check your credentials"})
            setIsUpdating(false);
        }
        setIsUpdating(false);
    }
    useEffect(()=>{
        setUserName(sessionStorage.getItem("username"))
    },[])
    
  return (
    <MainContainer>
        
        <Form onFinish={handleChangePassword} layout="vertical">
        <img src="/images/logo.svg" />
        <br/>
        <br/>
        <br/>
            <Form.Item initialValue={sessionStorage.getItem("username")} rules={[{ required: true,message:"Required" }]} name="username" label="Username">
                <Input placeholder="Enter username" size="large"/>
            </Form.Item>
            <Form.Item rules={[{ required: true,message:"Required" }]} name="oldPassword" label="Enter old password">
                <Input.Password placeholder="Enter old password" size="large"/>
            </Form.Item>
            <Form.Item rules={[{ required: true,message:"Required" }]} name="newPassword" label="Enter new password">
                <Input.Password placeholder="Enter new password" size="large"/>
            </Form.Item>
            <Form.Item 
             dependencies={['newPassword']}
             hasFeedback
            rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]} name="newConfirmPassword" label="Confirm New Password">
                <Input.Password placeholder="Confirm New Password" size="large"/>
            </Form.Item>
            <Form.Item>
                <Button loading={isUpdating} size="large" htmlType="submit" type="primary">Submit</Button>
            </Form.Item>
        </Form>
        
    

    </MainContainer>
  )
}

export default PrivateRoute (ChangePassword)