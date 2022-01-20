import React from 'react';
import styled, { keyframes } from "styled-components";
import { Button, Typography } from 'antd';

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
`;


export const Disqulaified = () => {
  return (
    <MainWrapper>
      <img src="/decline.svg" />
      <Title level={4}>Try again in future</Title>
      <p>
      We are sorry, but Halo Business Finance isn't able to move forward with your loan request at this time. Please try again in the future.
      </p>
      <Button onClick={()=>window.location.reload()} type="primary">Continue</Button>
    </MainWrapper>);
};
