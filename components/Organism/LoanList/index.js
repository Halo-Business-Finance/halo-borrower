import { Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import styled,{ keyframes} from 'styled-components';
import { flipInX } from 'react-animations';
const flip = keyframes`${flipInX}`;
const Wrapper = styled.div`
max-width:1300px;
width:100%;
margin:0 auto;
margin-top:30px;
background: #FFFFFF;
box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.08);
border-radius: 8px;
padding: 24px;
display: flex;
align-items: center;
animation: 2s ${flip};

justify-content:space-between;
@media (max-width: 768px) {
    flex-direction: column;
}
& .content{
    display: flex;
align-items: center;
gap:20px;
@media (max-width: 768px) {
    margin-top:10px;
    gap:5px;
    flex-direction: column;
}
}
& .content2{
    display: flex;
align-items: center;
gap:40px;
@media (max-width: 768px) {
    margin-top:15px;
    gap:5px;
    flex-direction: column;
}
}

& .ant-btn{
    background: #F3BA17;
border-radius: 8px;
height: 48px;
width: 108px;
font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 32px;
}

`;
const ContentWrapper = styled.div`

& h4{
    font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 150%;
}
& .status{
    height: 12px;
    width:12px;
    border-radius:50%;
}
& .title{
    font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 150%;
color: #ADADAD;
margin-bottom: 5px;
}
& .subtitle{
    font-family: Mulish;
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 150%;
}

`;
const LowerView=styled.div`
display: flex;
align-items: center;
height: 15px;
gap:8px;
& .process{
    font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 150%;
color: #5C5C5C;
}



`;

export const LoanList = ({name,startedDate,applicationNumber,amount=0,id,code}) => {
    const router = useRouter();
    return (
        <div>
            
            <Wrapper code={code}>
                <div className="content">
                <ContentWrapper>
                    <img src="/images/Pre-qualify.png" />
                </ContentWrapper>
                <ContentWrapper>
                   <h4>{name}</h4>
                   <LowerView>
                       <div
                       className="status"
                       style={{backgroundColor:"yellow"}}
                       ></div>
                       <span className="process">In process</span>
                       <img src="/images/Mask.svg"/>
                   </LowerView>
                </ContentWrapper>
                </div>
                <div className="content2">
                <ContentWrapper>
                    <h3 className="title">Application Started</h3>
                    <strong className="subtitle">{startedDate}</strong>
                </ContentWrapper>
                <ContentWrapper>
                    <h3 className="title">Application Number</h3>
                    <strong className="subtitle">{applicationNumber}</strong>
                </ContentWrapper>
                <ContentWrapper>
                    <h3 className="title">Amount to borrow</h3>
                    <strong className="subtitle">${amount}</strong>
                </ContentWrapper>
                <ContentWrapper>
                    <Button onClick={()=>router.push({
                        pathname:'/loan-overview',
                        query:{
                            id:id
                        }
                    })}>View</Button>
                </ContentWrapper>
                </div>

            </Wrapper>
        </div>
    )
}
