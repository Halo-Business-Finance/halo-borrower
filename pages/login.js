import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  padding: 20px;

  .formstyle {
    width: 60%;
    background: #fff;
    border-radius: 10px;
    padding: 0px 20px 20px 20px;
  }
  .Form-design {
    padding: 30px 30px 30px 30px;
  }

  .textbox {
    width: 100%;
    padding: 12px;
  }

  .form-group {
    margin-top: 5%;
  }

  .form-row-one {
    width: 60%;
    margin-top: 5%;
    margin-left: 20%;
  }

  .formlabel {
    color: #5c5c5c;
    font-weight: 600;
    font-size: 16px;
    line-height: 10px;
  }

  .form-head {
    display: inline-block;
    width: 100%;
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

  .textbox {
    border-radius: 4px;
    border: 2px solid #ededed;
  }

  .textbox ::placeholder {
    color: #adadad;
    opacity: 1;
    font-style: italic;
  }

  .form-gap {
    margin-top: 20px;
  }

  input[type="submit"] {
    background-color: #f3ba17;
    border: none;
    color: #333333;
    font-weight: 700;
    border-radius: 8px;
    padding: 14px 30px;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
  }

  .form-row-button {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export default function Form() {
  const { register, handleSubmit, formState: { errors }, } = useForm();



  //   const onSubmitForm = async() => {
  //     const response = await fetch('https://75.126.149.253/api/borrower/registration', {
  //     method: 'POST',
  //     body: JSON.stringify( { data }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },

  //   })
  //   const data = await response.json()
  //   console.log(data)
  // }


  // function onSubmitForm(values) {
  //   console.log(values);
  //   fetch('/api/route-name', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(objectWithData),
  //   })
  // }

  return (
    <>
      <Head>
        <title>Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <form className="formstyle" onSubmit={handleSubmit(onSubmitForm)} >
          <section className="Form-design">
            <div className="form-head">
              <h2 className="heading">Log In</h2>
            </div>

            <div className="form-row-one form-gap">
              <div className="form-name">
                <label htmlFor="fname" className="formlabel ">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format"
                    }
                  })}
                  className="textbox"
                  type="email"
                  autoComplete="fname"
                  placeholder="Enter your email address"

                />
              {errors.email && <span role="alert">{errors.email.message}</span>}

              </div>
              <div className="form-group form-dba">
                <label htmlFor="fdba" className="formlabel">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "required",
                    minLength: {
                      value: 5,
                      message: "min length is 5"
                    }
                  })}
                  className="textbox"
                  type="password"
                  autoComplete="fdba"
                  placeholder="Enter your password"
                  required
                />
                {errors.password && <span role="alert">{errors.password.message}</span>}
              </div>
            </div>
          </section>

          <div className="form-row-button">
            <input type="submit" id="button" value="Log In" />
          </div>
        </form>
      </Hero>
    </>
  );
}
