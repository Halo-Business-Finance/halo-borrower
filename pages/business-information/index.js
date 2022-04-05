import { useState, useEffect } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import NavMenu from "../../components/NavMenu";
import { notification } from "antd";
import { API } from "../../utils/api";
import moment from "moment";
import PrivateRoute from "../withPrivateRoute";


const Hero = styled.div`
  display: flex;
  font-family: Mulish;

  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  padding: 20px;

  & .dis-code{
      border:1px solid blue !important;
  }
  .formstyle {
    width: 60%;
    background: #f8f8ff;
    border-radius: 10px;
  }
  .Form-design {
    padding: 30px 30px 30px 30px;
  }

  .textbox {
    width: 100%;
    padding: 12px;
  }

  .radio-four {
    column-count: 4;
    width: 100%;
    display: inline-block;
    column-gap: 5%;
  }

  .radio-two {
    column-count: 2;
    width: 100%;
    display: inline-block;
    column-gap: 5%;
  }

  .form-row-one {
    column-count: 2;
    width: 100%;
    display: inline-block;
    column-gap: 5%;
  }

  .form-row-two {
    width: 100%;
    display: inline-block;
  }

  .form-row-three {
    width: 100%;
    display: inline-block;
  }

  .form-row-four {
    width: 100%;
    display: inline-block;
  }

  .form-city {
    width: 40%;
    display: inline-block;
    margin-right: 5%;
  }

  .form-state {
    width: 25%;
    display: inline-block;
    margin-right: 5%;
  }

  .form-zip {
    width: 25%;
    display: inline-block;
  }

  .form-addess {
    width: 60%;
    display: inline-block;
    margin-right: 5%;
  }

  .form-phone {
    width: 40%;
    display: inline-block;
    margin-right: 5%;
  }

  .form-website {
    width: 55%;
    display: inline-block;
  }

  .form-suite {
    width: 35%;
    display: inline-block;
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

  .formlabel {
    color: #5c5c5c;
  }

  .textbox {
    border-radius: 4px;
    border: 1px solid #ededed;
  }

  .form-gap {
    margin-top: 20px;
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

  .radio-container {
      display: flex;
      align-items: center;
    padding: 5px 5px 5px 5px;
    border: 1px solid #ededed;
    border-radius: 4px;
    background-color: white;
    & input{
			margin-right: 5px;
		}
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .first-input,
  .second-input {
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #ededed;
    margin: 2px;
  }
`;

function BusinessInformation() {
    const router = useRouter();
    const id = router.query.id;
    const [hasId, setHasID] = useState(null);
    const {
        setValue,
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValue: {
            "binfo": 0
        }
    });

    const [consumer, getConsumer] = useState({
        legalEntity: "CCorp"
    });


    const addHandler = async (data) => {
        try {
            await API.post("api/borrower/add-update-business-info", data);
            localStorage.setItem("progress", "2")
            Router.push({ pathname: "/financial-information", query: { id: id } })
        } catch (error) {
            notification.error({ message: 'Error Occured', description: error?.data?.reason })
        }
    }
    const onSubmitForm = async (values) => {
        (values, "onsumbi")
        //     let refactored;
        //     let emp;
        // if(values?.totalContractors?.toString()?.includes(",")){
        //      refactored= values.totalContractors?.replace(/,/g,'')
        //      (refactored, 'check refactored');
        // }
        // if (values?.totalEmployees?.toString()?.includes(",")){
        //     emp=values.totalEmployees?.replace(/,/g,'')
        //     (refactored, 'check emp');
        // }


        // if (cookie.get("id") == "") {
        //     axios({
        //         method: "post",
        //         url: process.env.NEXT_PUBLIC_BASE_URL + "/api/borrower/add-update-business-info/",
        const data = {
            legalEntity: values.legalEntity,
            stateOfOrganization: values.organization,
            federalTaxId: values.federal,
            startDate: values.date,
            industryDescription: values.industry,
            typeOfProduct: values.product,
            // totalEmployees: Number(emp),
            // totalContractors: Number(refactored) ,
            totalEmployees: +`${values.totalEmployees}`.replace(/,/g, ''),
            totalContractors: +`${values.totalContractors}`.replace(/,/g, ''),
            wasPurchased: values.wasPurchased,
            id: hasId,
            loanRequestId: id
        }
        const dataWithoutID = {
            legalEntity: values.legalEntity,
            stateOfOrganization: values.organization,
            federalTaxId: values.federal,
            startDate: values.date,
            industryDescription: values.industry,
            typeOfProduct: values.product,
            // totalEmployees: Number(emp),
            // totalContractors:Number(refactored),
            totalEmployees: +`${values.totalEmployees}`.replace(/,/g, ''),
            totalContractors: +`${values.totalContractors}`.replace(/,/g, ''),
            wasPurchased: values.wasPurchased,
            loanRequestId: id
        }
        addHandler(hasId == null ? dataWithoutID : data)
    }
    const fetchBussinessInformation = async () => {
        if (id) {
            try {
                const response = await API.get(`/api/borrower/get-business-info/${id}`);
                const data = await response.payload;
                
                setValue("totalContractors", data?.totalContractors);
                setValue("totalEmployees", data?.totalEmployees)
                setHasID(data?.id)
                const res = await API.get(`/api/borrower/get-prequalify-request/${id}`);  
                getConsumer({ ...data, legalEntity: await res?.payload?.prequalifyAnswers?.ownership })
    
                
            } catch (error) {

            }

        }
    }
    useEffect(() => {
        fetchBussinessInformation();
    }, [id]);



    function numberWithCommas(x) {
        return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    function validate(evt) {
        var theEvent = evt || window.event;

        // Handle paste
        if (theEvent.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
            // Handle key press
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }


   
   

    return (
        <>
            <Head>
                <title> Business Information</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavMenu id={id} />
            <Hero>
                <form className="formstyle" onSubmit={handleSubmit(onSubmitForm)}>
                    <section className="Form-design">
                        <div className="form-head">
                            <h2 className="heading">Business Information</h2>
                            <h2 className="heading-step">
                                <p className="active">Step 2</p> /3
                            </h2>
                        </div>

                        <div className="form-row">
                            <label htmlFor="fentity" className="formlabel ">
                                Legal Entity
                            </label>
                            <div className="radio-four">
                                <div className={consumer.legalEntity == "CCORP"?"radio-container dis-code":"radio-container"}>
                                    <input
                                    
                                        disabled
                                        type="radio"
                                        name="binfo"
                                        value="CCORP"
                                        onClick={(e) => getConsumer({ ...consumer, legalEntity: "CCORP" })}
                                        defaultValue={consumer.legalEntity}
                                        checked={consumer.legalEntity == "CCORP"}
                                        // defaultChecked = {datache.CCorpprecheck}
                                        {...register("binfo")}

                                    />


                                    <label>C- Corp</label>
                                </div>


                                <div className={consumer.legalEntity == "SCORP"?"radio-container dis-code":"radio-container"}>
                                    <input
                                        disabled
                                        type="radio"
                                        name="binfo"
                                        value="SCORP"
                                        onClick={(e) => getConsumer({ ...consumer, legalEntity: "SCORP" })}

                                        checked={consumer.legalEntity == "SCORP"}
                                        defaultValue={consumer.legalEntity}
                                        {...register("binfo")}
                                    />
                                    <label>S-CORP</label>
                                </div>

                                <div className={consumer.legalEntity == "LLC"?"radio-container dis-code":"radio-container"}>
                                    <input
                                        disabled
                                        type="radio"
                                        name="binfo"
                                        value="LLC"
                                        {...register("binfo")}
                                        onChange={(e) => getConsumer({ ...consumer, legalEntity: "LLC" })}

                                        checked={consumer.legalEntity == "LLC"}
                                        defaultValue={consumer.legalEntity}

                                    />
                                    <label>LLC</label>
                                </div>

                                <div className={consumer.legalEntity == "Partnership"?"radio-container dis-code":"radio-container"}>
                                    <input
                                        disabled
                                        type="radio"
                                        name="binfo"
                                        value="Partnership"
                                        checked={consumer.legalEntity == "Partnership"}
                                        onClick={(e) => getConsumer({ ...consumer, legalEntity: "Partnership" })}

                                        defaultValue={consumer.legalEntity}
                                        {...register("binfo")}
                                    />
                                    <label>Partnership</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row-two form-gap">
                            <div className="form-addess">
                                <label htmlFor="fsoo" className="formlabel">
                                    State of Organization
                                </label>
                                <input
                                    id="stateOfOrganization"
                                    className="textbox"
                                    type="text"
                                    autoComplete="organization"
                                    placeholder="Enter State of Organization"
                                    defaultValue={consumer.stateOfOrganization}
                                    {...register("organization", {
                                        required: "Required",
                                    })}
                                />
                            </div>
                            <div className="form-suite">
                                <label htmlFor="ffti" className="formlabel">
                                    Federal Tax ID
                                </label>
                                <input
                                    id="suite"
                                    className="textbox"
                                    type="text"
                                    autoComplete="ffti"
                                    placeholder="Enter Federal Tax ID"
                                    defaultValue={consumer.federalTaxId}
                                    {...register("federal", {
                                        required: "Required",
                                    })}
                                />
                            </div>
                        </div>

                        <div className="form-row-four form-gap">
                            <div className="form-phone">
                                <label htmlFor="fname" className="formlabel">
                                    Business Start Date
                                </label>
                                <input
                                    id="date"
                                    className="textbox"
                                    type="date"
                                    autoComplete="fname"
                                    placeholder="(XXX)-(XXX)-(XXXX)"
                                    defaultValue={moment(consumer.startDate).format("YYYY-MM-DD")}
                                    {...register("date", {
                                        required: "Required",
                                    })}
                                />
                            </div>
                            <div className="form-website">
                                <label htmlFor="fname" className="formlabel">
                                    Industry Description/SIC/NAICS Code
                                </label>
                                <input
                                    id="industry"
                                    className="textbox"
                                    type="text"
                                    autoComplete="fname"
                                    placeholder="Enter Industry Description/SIC/NAICS Code"
                                    defaultValue={consumer.industryDescription}
                                    {...register("industry", {
                                        required: "Required",
                                    })}
                                />
                            </div>
                        </div>

                        <div className="form-row form-gap">
                            <div className="form-group">
                                <label htmlFor="fname" className="formlabel">
                                    Type of Product/Service Sold
                                </label>
                                <input
                                    id="product"
                                    className="textbox"
                                    type="text"
                                    autoComplete="fname"
                                    placeholder="Enter Type of Product/Service Sold"
                                    defaultValue={consumer.typeOfProduct}
                                    {...register("product", {
                                        required: "Required",
                                    })}
                                />
                            </div>
                        </div>

                        <div className="form-row-two form-gap">
                            <div className="form-addess">
                                <label htmlFor="fsoo" className="formlabel">
                                    Total Company Employees and 1099 Contractors
                                </label>
                                <input

                                    id="totalEmployees"
                                    className="first-input"
                                    type="text"
                                    autoComplete="fsoo"
                                    placeholder="Total Employees"
                                    defaultValue={consumer.totalEmployees}
                                    {...register("totalEmployees", {
                                        required: "Required",
                                    })}
                                    onChange={(e) => {
                                        // const formattedEmployees =numberWithCommas(e.target.value)
                                        const data = e.target.value.replace(/[^\d]+/gi, '')
                                        setValue("totalEmployees", data)
                                    }}
                                    onKeyPress={(e) => validate(e)}
                                    value={numberWithCommas(watch("totalEmployees"))}
                                />

                                <input
                                    id="totalContractors"
                                    className="second-input"
                                    type="text"
                                    autoComplete="fsoo"
                                    placeholder="Total Contractors"
                                    defaultValue={consumer.totalContractors}
                                    {...register("totalContractors", {
                                        required: "Required",
                                    })}
                                    onChange={(e) => {
                                        const data = e.target.value.replace(/[^\d]+/gi, '')
                                        setValue("totalContractors", data)
                                    }}
                                    onKeyPress={(e) => validate(e)}
                                    value={numberWithCommas(watch("totalContractors"))}
                                />
                            </div>
                            <div className="form-suite">
                                <label htmlFor="ffti" className="formlabel">
                                    Was this Business Purchased?
                                </label>

                                <div className="radio-two">
                                    <div className="radio-container">
                                        <input
                                            type="radio"
                                            name="business"
                                            value="Yes"
                                            onClick={() => getConsumer({ ...consumer, wasPurchased: "Yes" })}
                                            checked={consumer.wasPurchased == true || consumer.wasPurchased == "Yes"}
                                            // defaultChecked={consumer.wasPurchased}
                                            {...register("businesspurchased")}
                                        />
                                        <label>Yes</label>
                                    </div>

                                    <div className="radio-container">
                                        <input
                                            type="radio"
                                            name="business"
                                            value="No"
                                            onClick={() => getConsumer({ ...consumer, wasPurchased: "No" })}

                                            checked={consumer.wasPurchased == "No" || consumer.wasPurchased == false}
                                            // defaultChecked={consumer.wasPurchased}
                                            {...register("businesspurchased")}
                                        />
                                        <label>No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="form-row-button">
                        <input type="submit" id="button" value="Continue" />
                    </div>
                </form>
            </Hero>
        </>
    );
}
export default PrivateRoute(BusinessInformation)