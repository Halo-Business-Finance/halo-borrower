import React from 'react'
import { Card } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;
const StyledCard = styled(Card)`
max-width: 250px;
width: 100%;
border-radius: 10px;

& .ant-card-body{
    padding:5px 20px 15px 20px;
    
}
& .ant-card-meta-title{
    font-size:18px;
    font-weight: bold;
    text-align: center;
}
`;
export const LoanSelect = ({ image, title, onClick }) => {
    return (
        <div>
            <StyledCard
                hoverable

                cover={<img alt="example" height="120" width="120" src="/loantypes/1.svg" />}
            >
                <Meta title="Europe Street beat" />
            </StyledCard>
        </div>
    )
}
