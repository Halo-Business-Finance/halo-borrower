import { Button, Form, Radio } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
max-width:650px;
width:100%;
margin:0 auto;

background-color: white;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		border-radius: 10px;
		padding: 10px 20px 10px 20px;
      &  .ant-form-item-label > label{
        font-size: 16px;
    letter-spacing: .1px;
    line-height: 24px;
    color: #202124;
    font-weight: 400;
        }
`;
const ButtonWrapper = styled.div`


`;

const EIDLProcessing = () => {
    const [formStep, setFormStep] = useState(0);


    return (
        <StyledWrapper>
            <Form layout={"vertical"}>
                {formStep == 0 &&
                    <Form.Item name="applied" label="Have you already applied for a SBA EIDL disaster loan?">
                      <Radio.Group options={[
                          {
                              label:"Yes",
                              value:"Yes"
                            
                            },
                            {
                                label:"No",
                                value:"No"
                              
                              },
                              {
                                label:"Not Sure",
                                value:"Not_Sure"
                              
                              }
                          ]} />
                          
                      
                    </Form.Item>}
            </Form>
            <ButtonWrapper>
                <Button size="large" type="ghost">Previous</Button>
                <Button size="large" type="primary" >Next</Button>
            </ButtonWrapper>

        </StyledWrapper>
    )
}

export default EIDLProcessing
