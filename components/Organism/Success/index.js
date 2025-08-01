import React from 'react';
import styled, { keyframes } from "styled-components";
import { Button, Typography } from 'antd';
import { useRouter } from 'next/router';

const { Title } = Typography;

const MainWrapper = styled.div`
max-width:500px;
background-color:#fff;
width:100%;
padding:24px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
& .ant-typography{
  margin-top:10px;
  font-size: 28px;
}
& .ant-btn-primary{
  font-size: 18px;
  height: 40px;
}
& p{
  font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 150%;
}
& .amount{
  font-weight:800 ;
}
`;


export const Success = ({ amount }) => {

  return (
    <MainWrapper>
      <img src="/success.svg" />
      <Title level={4}>Congratulations!</Title>
      <p>
        Based on your selections, you qualify for a loan up to
        <span className="amount">{" "}{amount}</span>

      </p>
      <Button onClick={() => window.location.assign("/")} type="primary">Back To Home</Button>
    </MainWrapper>);
};
