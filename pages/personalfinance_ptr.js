import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import cookie from "js-cookie";
import axios from "axios";
import ProGressTracker from "../components/PfTracker";


const PersonalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Mulish;
  background: #e5e5e5;
  padding: 10px;

  .main-style {
    width: 60%;
    padding: 12px;
    background: #ffffff;
    border-radius: 10px;
    header {
      .header-one {
        h1 {
          font-weight: 700;
        }
        p {
          font-size: 16px;
          color: #adadad;
          font-weight: bold;
        }
      }
      .header-two {
        display: flex;
        flex-direction: column;
        h3 {
          color: #5c5c5c;
        }

        .buttons {
          align-self: center;
          margin-bottom: 30px;
          button {
            background: #ffffff;
            font-size: 16px;
            padding: 10px 15px;
            margin: 0px 15px;
            border: 2px solid #ededed;
            border-radius: 8px;
          }
          .mid-button {
            border: 2px solid #f3ba17;
            border-radius: 8px;
            color: #f3ba17;
          }
        }
      }
    }

    //body section css
    .main-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      section {
        display: flex;
        align-items: center;
        border-top: 1px solid #ededed;
        padding-top: 8px;
        .column-one {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-right: auto;
          input {
            font-size: 16px;
            padding: 10px 5px;
            border: 1px solid #adadad;
            border-radius: 4px;
          }
          label {
            font-weight: bold;
            color: #5c5c5c;
          }
        }
        .column-two {
          margin-left: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border: 2px dashed #ededed;
          border-radius: 8px;
          width: 60%;
          height: 70px;
          label {
            color: #adadad;
          }
        }
        .new-column {
          h6 {
            margin-top: 0;
            font-size: 16px;
            color: #1b46b0;
            text-decoration-line: underline;
          }
        }
      }
    }
    .footer {
      .continue-button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        img {
          padding: 14px;
          border: 1px solid #f3ba17;
          border-radius: 8px;
        }

        input {
          padding: 16px 32px;
          font-size: 16px;
          font-weight: bold;
          background: #f3ba17;
          border-radius: 8px;
          border: none;
        }
      }
      .skip-link {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          text-decoration: underline;
        }
      }
    }
    [type="file"] {
      height: 0;
      overflow: hidden;
      width: 0;
    }

    [type="file"] + label {
      border: none;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      display: inline-block;

      font-size: inherit;
      font-weight: 500;
      margin-bottom: 1rem;
      outline: none;
      padding: 1rem 50px;
      position: relative;
      transition: all 0.3s;
      vertical-align: middle;
    }
  }

  .meter {
    margin-top: 20px;
    box-sizing: content-box;
    height: 10px;
    position: relative;
    background: #ededed;
    border-radius: 25px;
  }

  .meter > span {
    display: block;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #1b46b0;
    position: relative;
    overflow: hidden;
  }

  .meter span {
    width: 10%;
  }

  .pi span {
    width: 100%;
  }
  .gi span {
    width: 100%;
  }
  .is span {
    width: 100%;
  }
  .cl span {
    width: 100%;
  }

 


  .progress-tracker {
		width: 100%;
		display: inline-flex;
		flex-wrap: wrap;
		gap: 2%;
	}

	.progress-form {
		width: 10%;
		// min-height:100px;
		// background-color:red;
	}

	.progress-form {
		font-weight: 700;
		color: #1b46b0;
		font-size: 14px;
	}
	.mainrow {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 30px;
		margin-top: 15px;
	}

	.addrow {
		align-items: center;
	}
	.removerow {
		align-items: center;
	}
	.place {
		display: inline;
		justify-content: flex-start;
		width: 9%;
		margin-right: 7px;
	}
  .meter span {
		width: 10%;
	}

	.pi span {
		width: 100%;
	}
	.gi span {
		width: 100%;
	}
	.is span {
		width: 100%;
	}
	.cl span {
		width: 100%;
	}
	.bs span {
		width: 100%;
	}
	.soap span {
		width: 100%;
	}

  .bds span {
		width: 100%;
	}
	.meter-link {
		float: right;
		font-weight: 500;
		font-size: 14px;
		color: #1b46b0;
		text-decoration: underline;
	}
    
`;

export default function PersonalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer" + " "  + cookie.get("access_token"),
  };

  const onSubmitForm = async (values) => {
    axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_BASE_URL + "/api/personalFinance/upload-personal-tax-returns",
      data: {},
      headers: headers,
    }).then(
      (response) => {
        if (response.data.isSuccess) {
          Router.push("/");
        } else {
          (response);
        }
      },
      (error) => {
        (error);
      }
    );
  };



  return (
    <>
      <Head>
        <title>Personal Tax</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PersonalStyle>
      <ProGressTracker />

        <section className="main-style">
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div>
              <header>
                <div className="header-one">
                  <h1>Personal Tax Returns for Owner 1</h1>
                  <p>
                    Include all schedules and statements, We need all pages to
                    give an accurate analysis.
                  </p>
                </div>
               
              </header>
              <div className="main-section">
                <section>
                  <div className="column-one">
                    <label>Personal Tax Return 1</label>
                    <input
                      type="date"
                      id="business"
                      {...register("taxReturnDateOne")}
                    />
                  </div>
                  <div className="column-two">
                    <img src="/images/upload.png" />
                    <input type="file" id="file" {...register("fileOne")} />
                    <label>Drag & Drop or click to upload files</label>
                  </div>
                </section>
                <section>
                  <div className="column-one">
                    <label>Personal Tax Return 2</label>
                    <input type="date" {...register("taxReturnDateTwo")} />
                  </div>
                  <div className="column-two">
                    <img src="/images/upload.png" />
                    <input type="file" {...register("fileTwo")} />
                    <label htmlFor="file">
                      Drag & Drop or click to upload files
                    </label>
                  </div>
                </section>
                <section>
                  <div className="new-column">
                    <h6>Add Another Tax Return</h6>
                  </div>
                </section>
              </div>
            </div>

            <div className="footer">
              <div className="continue-button">
                <img src="/images/back.png" />
                <input
                  type="submit"
                  id="button"
                  value="Upload to continue"
                />
              </div>
              <div className="skip-link">
                <p>Skip</p>
              </div>
            </div>
          </form>
        </section>
      </PersonalStyle>
    </>
  );
}
