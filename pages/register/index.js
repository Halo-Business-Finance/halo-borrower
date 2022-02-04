import React, { useContext, useEffect, useState } from 'react'
import { Steps } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, SmileOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import RegistrationForm from '../../components/Organism/Register';
import { AuthContext } from '../../utils/AuthContext';
import VerifyEmailForm from '../../components/Organism/EmailVerify';
import VerifyPhoneForm from '../../components/Organism/PhoneVerify';
import { useRouter } from 'next/router';

const { Step } = Steps;
const Container= styled.div`
max-width:1440px;
margin: 0 auto;
background: white;
padding:24px;
margin-top: 20px;
@media (max-width: 768px) {
    margin-left: 20px;
margin-right: 20px;
}

box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`;

const LoginAndVerification = () => {
    const [step,setStep]=useState(1);
    const {formState,setFormState}=useContext(AuthContext);
    const router=useRouter();
    // useEffect(()=>{
    //     if(router.query?.id){
    //         setFormState(router.query.id)
    //     }
    // },[router.query])
    // console.log(formState,'state')
    return (
        <Container>
           
            <Steps type='navigation' current={formState}>
                <Step current={formState}  title="Basic Info" icon={formState==0 && <UserOutlined />}  />
                <Step current={formState}   disabled={formState !==1}  title="Email Verification" icon={formState==1 && <MailOutlined />}   />
                <Step current={formState}   disabled={formState !==2}  title="Phone Verification" icon={formState==2 && <PhoneOutlined />} />
               
            </Steps>
             {formState==0 && <RegistrationForm/>}
             {formState==1 && <VerifyEmailForm/>}
             {formState==2 && <VerifyPhoneForm/>}
        </Container>
    )
}

export default LoginAndVerification
