import Head from "next/head";
import styled from "styled-components";
import Router from 'next/router';
import cookie from 'js-cookie';
import { useForm } from "react-hook-form";

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  padding: 20px;
  font-family: Mulish;


  .formstyle {
    width: 60%;
    background: #f8f8ff;
    border-radius: 10px;
  }
  .Form-design {
    padding: 30px 30px 30px 30px;
  }

  .form-head {
    display: inline-block;
    width: 100%;
  }

  .active {
    color: #1b46b0;
    display: inline;
  }

  .heading {
    display: inline;
    float: left;
  }

  .heading-step {
    display: inline;
    color: #adadad;
    display: inline;
    float: right;
  }

  input[type="submit"] {
    background-color: #f3ba17;
    border: none;
    color: black;
    font-weight: 600;
    border-radius: 8px;
    padding: 14px 30px;
    text-decoration: none;
    cursor: pointer;
  }

  .form-row-button {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 20px 0px 20px 0px;
  }

  .scrollimage {
    min-width: 100%;
  }
`;

export default function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitForm = async (values) => {
    Router.push('/form6');
  };

  return (
    <>
      <Head>
        <title>Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <form className="formstyle" action="form5"  onSubmit={handleSubmit(onSubmitForm)}>
          <section className="Form-design">
            <div className="form-head">
              <h2 className="heading">
                Credit Rating for  (Owner 1)
              </h2>
              <h2 className="heading-step">
                <p className="active">Step 2</p> /3
              </h2>
            </div>

            <img className="scrollimage" src="images/sliderone.jpg" />
          </section>

      
          <div className="form-row-button">
            <input type="submit" id="button" value="Continue" />
          </div>
        </form>
      </Hero>
    </>
  );
}
