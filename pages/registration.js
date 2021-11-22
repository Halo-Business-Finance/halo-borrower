import Head from 'next/head';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import Router from 'next/router';
import Borrower from './borrower-apply';


const Hero = styled.div`
padding: 40px 20% 40px 20%;
font-family: Mulish;
background-color: #E5E5E5;
  
  .formstyle{
    background: #FFF;
    border-radius: 10px; 
    padding: 0px 0px 20px 0px;
  }

  .Form-design{
    padding: 30px 30px 20px 30px;
  }
  
  .textbox{
    width:100%;
    padding: 12px;
  }
  
  .form-row-one{
    column-count: 2;
    width:100%;
    display:inline-block;
    column-gap:5%;
  }
  
  .form-head{
    display:inline-block;
    width:100%;
    text-align:center;
  }

  .heading{
    font-weight:700;
    color: #333333;
  }

  .formlabel{
    color: #5C5C5C;
    font-weight:600;
    font-size: 16px;
    line-height: 10px;
  }

  .textbox{
    border-radius: 4px;
    border: 2px solid #ededed;
    
  }

  .textbox ::placeholder {
    color:#ADADAD;
    opacity: 1; 
    font-style: italic;
  }

  input[type=submit]{
    
    background-color: #F3BA17;
    border: none;
    color: #333333;
    font-weight: 700;
    border-radius:8px;
    padding: 14px 30px;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
  }

  .form-row-button{
    width:100%;
    justify-content:center;
    align-items: center;
    display: flex;
  }

  .req{
    color: red;
    font-size: 14px;
  }

  .register-description{
    font-size: 16px;
    color: #5C5C5C;
    font-weight:400;
  }

  .reg-head{
    width:100%;
    background-color: #1B46B0;
    color: #fff;
    text-align:center;
    padding:20px;
    line-height:10px;
    margin-bottom:20px;
  }

  .reg-head p{
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    line-height:10px;
  }
  
  .login-link{
    color: blue;
    font-weight: 700;
  }

  .register-description{
    text-align: center;
  }

  .error{
    text-align:center;
  }

  .error p{
    color: #DC3545;
    padding: 10px 10px 10px 10px;
  }

`;

export default function Form() {
  
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const [aState, setA] = useState();

  if(typeof cookie.get('loanTypeId') !== "undefined"){

    // Router.push('/borrower-apply');
  }
      
  const onSubmitForm = async (values) => {
    
    axios({
      method: 'post',
      url: 'http://75.126.149.253/api/borrower/registration',
      data: {
        loanTypeId:  cookie.get('loanTypeId'),
        amount: cookie.get('amount'),
        borrowerInfo: {
            firstName: cookie.get('firstName'),
            lastName: cookie.get('lastName'),
            phone: cookie.get('phone'),
            businessName: cookie.get('businessName'),
            source: cookie.get('source')
          },
        account: {
            email: values.email,
            password: values.password,
          },
        applicationStarted: "2021-11-16T14:45:22.123Z",
        borrowerState: "PreQualify"
      }
    })

    .then((response) => {
      if(response.data.isSuccess){

        // Cookies.remove('name')

        console.log(response);
      }else{
        console.log(response);
        setA(response.data.reason);
        return (
            <div>{aState}</div>
        );
        // console.log(response.data.reason);
      }
    }, (error) => {
      console.log(error);
    });

  }

  return (
    <>
      <Head>
        <title>Registration</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>

        <section className="reg-head">
          <h3>Soft Credit Check – No Upfront Fees – Apply Online</h3>
          <p>Get started now by filling out the loan application below</p>
        </section>

        <form className="formstyle" action="/login" onSubmit={handleSubmit(onSubmitForm)}>

          <section className="Form-design">

            <div className="form-head">
              <h2 className="heading">Continue to Enroll</h2>
            </div>

            <div className="error">
              <p>{aState}</p>
            </div>

            <div className="form-row-one">
              <div className="form-group">
                <label htmlFor="emal" className="formlabel ">Email Address<sup className="req">*</sup></label>
                <input
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format"
                    }
                  })} id="email" className="textbox" type="email" autoComplete="fname" placeholder="Enter your email address" required />
                {errors.email && <span role="alert">{errors.email.message}</span>}

              </div>

              <div className="form-group">
                <label htmlFor="password" className="formlabel">Password<sup className="req">*</sup></label>
                <input
                  {...register("password", {
                    required: "required",
                    minLength: {
                      value: 5,
                      message: "min length is 5"
                    }
                  })} id="password" className="textbox" type="password" autoComplete="fdba" placeholder="Enter your password" required />
                {errors.password && <span role="alert">{errors.password.message}</span>}

              </div>
            </div>

            <p className="register-description"> By clicking “Register”, you consent to receive calls and emails from Halo Business Finance. You acknowledge that no purchase of credit or services is contingent upon such consent and acknowledge that you have read Halo Business Finance’s Application Agreement and Halo Business Finance’s privacy policy. You understand that you may opt-out of receiving communications of your choice from Halo Business Finance as provided in the privacy policy.</p>
          </section>

          <div className="form-row-button">
            <input type="submit" id="button" value="Register" />
          </div>

          <p className="register-description"> already have an account? <a href="/login" className="login-link">login</a></p>

        </form>
      </Hero>

    </>
  );
}
