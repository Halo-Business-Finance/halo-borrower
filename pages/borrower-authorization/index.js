import Head from "next/head";
import styled from "styled-components";
import NavMenu from "../../components/NavMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { notification, Modal, Button } from "antd";
import { Success } from '../../components/Organism/Success';

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
    const [legalName,setLegalName] = useState();
    const router = useRouter();
    const [showSucessModal, setshowSucessModal] = useState(false);
    const owner = router.query.owners;
    useEffect(()=>{
        JSON.parse(owner);
       const legalName = localStorage.getItem('legal_name')
         setLegalName(legalName)
       ('ln',legalName)
     
    },[owner])
    (owner,'ow')
  

  
	return (
		<>
			<NavMenu id={id} />

			<Head>
				<title>Form</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<form className="formstyle" action="/loanallapplications">
					<section className="Form-design">
						<div className="form-head">
							<h2 className="heading">Borrower Authorization</h2>
							<h2 className="heading-step">
								<p className="active">Step 2</p> /3
							</h2>
						</div>

						<div className="form-head">
							<p className="heading">
           { `               I certify that all information entered thus far into the
                            application is accurate and that "${owner&&JSON.parse(owner)?.toString()}" is a principal
                            owner of "${legalName}" I am authorized to act on behalf of
                            "${legalName}" and I grant permission for Halo Business Finance
                            to procure ONLY a credit score number and share a PASS or FAIL
                            result only with Halo Business Finance lending partners for the
                            purpose of loan options. I understand this will not impact the
                            applicant’s credit score and will not show up as an inquiry on a
                            credit report pulled by Halo Business Finance.`}
							</p>
						</div>
					</section>

					<div className="form-row-button">
						<Button type="primary" size="large" onClick={()=>setshowSucessModal(true)} >
							Continue
						</Button>
						{/* <input type="submit" id="button" value="Continue" /> */}
					</div>
				</form>
			
			</Hero>
            <Modal visible={showSucessModal} footer={null}>
                <Success />
            </Modal>
		</>
	);
}
