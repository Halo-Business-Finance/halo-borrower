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

`;

const LoginAndVerification = () => {
    const [step,setStep]=useState(1);
    const {formState,setFormState}=useContext(AuthContext);
    const router=useRouter();
    useEffect(()=>{
        if(router.query?.id){
            setFormState(router.query.id)
        }
    },[router.query])
    return (
        <Container>
            <Steps current={formState}>
                <Step current={formState} status="finish" title="Basic Info" icon={formState==1 && <UserOutlined />}  />
                <Step current={formState} disabled={formState !==2} status="finish" title="Email Verification" icon={formState==2 && <MailOutlined />}   />
                <Step current={formState} disabled={formState !==3} status="process" title="Phone Verification" icon={formState==3 && <PhoneOutlined />} />
               
            </Steps>
             {formState==1 && <RegistrationForm/>}
             {formState==2 && <VerifyEmailForm/>}
             {formState==3 && <VerifyPhoneForm/>}
        </Container>
    )
}

export default LoginAndVerification
