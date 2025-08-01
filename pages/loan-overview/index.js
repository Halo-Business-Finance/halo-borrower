import Head from "next/head";
import styled from "styled-components";
import { useEffect, useState } from "react";
import NavMenu from "../../components/NavMenu";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { API } from '../../utils/api';
import moment from "moment";
import { LoanCode } from '../../utils/code'
import { Button, Progress,Tag } from "antd";
import PrivateRoute from "../withPrivateRoute";

const Hero = styled.div`
  padding: 40px 10% 40px 10%;
  font-family: Mulish;
  margin-top:20px ;

  .top-borrower {
    width: 100%;
    height: 40px;
  }
  .top-heading {
    column-count: 2;
    color: #5c5c5c;
  }

  .progress-title {
    font-style: Bold;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    /* align: Left; */
    vertical-align: Center;
    color: #333333;
  }

  .progress-button {
    float: right;
  }

  .button-step {
    /* float: right; */
    float: right;

    padding: 5px 20px 5px 20px;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    display: inline-block;
    line-height: 30px;
    text-align: left;
    text-decoration: none;
    border-radius: 5px;
    
    margin-left: 5%;
    
    & button{
      color: #333333;
background-color: #f3ba17;
border:1px solid yellow;
    }
  }

  .button-time {
    /* float: right; */
    float: right;

    line-height: 30px;
    padding: 5px 20px 5px 20px;
    cursor: pointer;
    border-radius: 5px;
    display: inline-block;
    & span{
      font-weight: 700;
      font-size: 18px;
      line-height:30px ;
    }
    
  }

  #button-time-icon {
    background: rgb(255, 255, 255) url("./images/ic_update.png") no-repeat;
  }
  #button-time-icon span {
    padding-left: 30px;
  }
  .progress-button {
    padding: 0px 10px 5px 10px;
    width: 200px;
    cursor: pointer;
    display: inline-block;
    line-height: 30px;
    text-align: left;
    text-decoration: none;
    border-radius: 3px;
  }

  #progress-button {
    background: rgb(255, 255, 255) url("./images/dashboard.png") no-repeat
      scroll 8px 5px / 25px 25px border-box;
    border: 1px solid #f3ba17;
  }

  #progress-button span {
    font-style: Bold;
    font-weight: 500;
    font-size: 18px;
    padding-left: 20%;
    vertical-align: Center;

    color: #f3ba17;
  }

  .meter {
    margin-top: 20px;
    box-sizing: content-box;
    height: 15px;
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
    width: 80%;
  }

  .meter-link {
    float: right;
    font-weight: 500;
    font-size: 14px;
    color: #1b46b0;
    text-decoration: underline;
  }

  .strong-color {
    color: #1b46b0;
  }

  .dot {
    height: 10px;
    width: 10px;
    background-color: #f3ba17;
    border-radius: 50%;
    display: inline-block;
  }

  .inprogress {
    font-weight: 700;
    font-size: 16px;
    color: #5c5c5c;
    padding-left: 10px;
  }

  .sba-header-container {
    
    width: 100%;
    padding: 20px;
    border: 2px solid
      rgba(236.93750202655792, 236.93750202655792, 236.93750202655792, 1);
    border-radius: 15px;
  }

  .sba-image {
    
    height: 70px;
    width: 70px;
    padding: 5px;
    border: 2px solid #f3ba17;
    display: inline-block;
    border-radius: 6px;
  }

  .sba-details {
    display: inline-block;
    width: 68%;
    vertical-align: top;
    padding-left: 15px;
    margin-top:10px ;
  }

  .sba-application-details {
    width: 48%;
    vertical-align: top;
    display: inline-block;
  }

  .application-container {
    width: 40%;
    column-count: 2;
    display: inline-block;
  }
  .app-details-2 {
    float: right;
  }

  .sba-detail-title {
    font-weight: 600;
    font-size: 18px;
    padding: 0px;
    line-height: 0px;
  }

  .sba-detail-amount {
    font-weight: 700;
    font-size: 28px;
    vertical-align: Top;
    color: #1b46b0;
    line-height: 10px;
  }

  .application-detail-title {
    color: #5c5c5c;
    font-size: 14px;
  }

  .application-detail-details {
    color: #333333;
    font-size: 14px;
    font-weight: bold;
    line-height: 8px;
  }

  .application-image-container {
    width: 60%;
  }

  .finance-image-container {
    width: 60%;
  }

  .finance-container-one {
    width: 40%;
    display: inline-block;
  }

  .finance-container-two {
    width: 50%;
    display: inline-block;
    vertical-align: super;
  }

  .finance-detail-title {
    line-height: 0px;
    font-weight: 700;
    font-size: 20px;
    color: #333333;
  }

  .finance-detail-detail {
    font-weight: 400;
    font-size: 16px;
    color: #adadad;
  }
  .owner-list{
	  margin-top: 10px ;
  }
  & .finance-list{
    margin-top: 20px;
    & .sba-header-container{
    
    display: flex;
    align-items: center;
    justify-content:space-between;
    }
  }
`;

 function LoanOverview() {

  const router = useRouter();
  const { id } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [details, setDetails] = useState();

  useEffect(() => {
    fetchLoanOverview();
  }, [id]);

  const fetchLoanOverview = async () => {
    try {
      const response = await API.get(`/api/borrower/get-prequalify-request/${router.query.id}`, {
          headers: {
              Authorization: "Bearer " + sessionStorage.getItem('token')
          }
      })
      setDetails(await response.payload);
      setFormState(await response.payload?.formProgress)
    } catch (error) {

    }
  }
  const [formState, setFormState] = useState(null)
  




  return (
    <>
      <Head>
        <title>Borrower Section</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavMenu id={id} /> */}
      <Hero>
        <div className="top-borrower">
          <div className="top-heading">
            <div className="progress-title">Loan Application Overview</div>
            <div className="progress-button">
              <a href="/" className="progress-button" id="progress-button">
                <span>View your loans</span>
              </a>
            </div>
          </div>

          <Progress
            strokeColor={{
              from: '#108ee9',
              to: '#87d068',
            }}
            percent={formState && Math.ceil(formState/21*100)}
            status="active"
          />
          <div className="top-heading">
            <p>
              <strong className="strong-color">{formState && Math.ceil(formState/21*100)}%</strong> complete
            </p>

            <p className="meter-link">
              <a href="#">Estimated Loan Terms</a>
            </p>
          </div>
          <br />

          <div className="top-heading">
            <div >

              <p>Keep up the good work!  We are only a phone call or chat away to assist you with your application if you have any questions.</p>
            </div>

            <div className="sba-header-container">
              <div className="sba-application-details application-image-container">
                <img src="/images/SBA7ALoan.png" className="sba-image" />

                <div className="sba-details">
                  <p className="sba-detail-title">{LoanCode?.find((loan) => loan?.code == details?.loanTypes)?.name}</p>
                  <p className="sba-detail-amount">{details?.amountToBeBorrowed} </p>
                </div>
              </div>

              <div className="sba-application-details application-container">
                <div>
                  <span className="application-detail-title">
                    Application Started
                  </span>
                  <p className="application-detail-details">
                    {moment(details?.applicationStartedDate).format("YYYY-MM-DD")}
                  </p>
                </div>

                <div className="app-details-2">
                  <span className="application-detail-title">
                    Application Number
                  </span>
                  <p className="application-detail-details">
                    {details?.applicationNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="finance-list">
            <div className="sba-header-container ">
              <div className="finance-container-one">
                <img src="/images/Pre-qualify.png" className="sba-image" />

                <div className="sba-details">
                  <p className="finance-detail-title">Pre-qualify</p>
                  <p className="finance-detail-detail">
                    You've pre-qualified for a loan!
                  </p>
                </div>
              </div>

              <div className="finance-container-two">
                <div className="button-step">
                  <Button
                    size="large"
                    onClick={() => router.push({
                      pathname: "/business-contact",
                      query: {
                        id: id
                      }
                    })} type="primary">Next Step</Button>
                </div>

                <div className="button-time">
                <Tag  color={formState>=4?"#87d068":"#108ee9"}>
       { formState>=4?"Completed":"5 Minutes"}
      </Tag>
                    
                  
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="finance-list">
            <div className="sba-header-container">
              <div className="finance-container-one">
                <img src="/images/financials.png" className="sba-image" />

                <div className="sba-details">
                  <p className="finance-detail-title">Business Financials</p>
                  <p className="finance-detail-detail">
                    You need to enter your business financial info!
                  </p>
                </div>
              </div>

              <div className="finance-container-two">

                <div className="button-step">
                  <Button
                    size="large"
                    disabled={formState < 4}
                    onClick={() => router.push({
                      pathname: "/financials/tax-returns",
                      query: {
                        id: id
                      }
                    })} type="primary">Next Step</Button>
                </div>

                <div className="button-time">
                <Tag  color={formState>=9?"#87d068":"#108ee9"}>
       { formState>=9?"Completed":"5 Minutes"}
      </Tag>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="finance-list">
            <div className="sba-header-container">
              <div className="finance-container-one">
                <img src="/images/document.svg" className="sba-image" />

                <div className="sba-details">
                  <p className="finance-detail-title">Documents</p>
                  <p className="finance-detail-detail">
                    Upload necessary documents
                  </p>
                </div>
              </div>

              <div className="finance-container-two">

                <div className="button-step">
                  <Button
                    disabled={formState < 14}
                    size="large"
                    onClick={() => router.push({
                      pathname: "/documents/owners",
                      query: {
                        id: id
                      }
                    })} type="primary">Next Step</Button>
                </div>



                <div className="button-time">
                <Tag  color={formState>=15?"#87d068":"#108ee9"}>
       { formState>=15?"Completed":"5 Minutes"}
      </Tag>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="finance-list">
            {owners.map((owner, ownerdetails) => {
              return (
                <form onClick={handleSubmit(onSubmitForm)} key={owner.id}>
                  <div className="sba-header-container owner-list">
                    <div className="finance-container-one">
                      <img src="/images/financials.png" className="sba-image" />

                      <div className="sba-details">
                        <p className="finance-detail-title">{owner.fullName}</p>
                        <p className="finance-detail-detail">
                          {owner.homeAddress}
                          <input
                            type="hidden"
                            defaultValue={owner.id}
                            {...register("ownerid")}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="finance-container-two">
                      <div className="button-step">
                        <a href="/personalfinance_pi">
                          <span>Continue</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </form>
              );
            })}
          </div> */}

        </div>
      </Hero>
    </>
  );

} 
export default PrivateRoute(LoanOverview)