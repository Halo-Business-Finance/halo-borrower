import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import data from "../data/people.json";
import ProGressTracker from "../components/PfTracker";
import NavMenu from "../components/NavMenu";

const Hero = styled.div`
	font-family: Mulish;
	background: #e5e5e5;
	padding: 40px 5% 40px 5%;

	.formstyle {
		width: 85%;
		background: #f8f8ff;
		border-radius: 10px;
		margin-left: 8%;
		padding-bottom: 20px;
	}
	.Form-design {
		padding: 30px 30px 30px 30px;
	}
	.form-row-one {
		width: 100%;
		display: inline-block;
		border: 2px solid rgba(27, 70, 176, 1);
		border-radius: 6px;
		padding: 4px 10px;
	}
	.form-row-one p {
		color: rgba(27, 70, 176, 1);
		font-weight: 600;
		font-size: 16px;
		line-height: 150%;
	}
	table {
		font-family: Mulish;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: 18px;
		border-collapse: collapse;
		width: 100%;
	}
	td,
	th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}
	tbody:nth-child(odd) {
		background-color: #f5f5f5;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0px 20px 0px;
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
	.bs span {
		width: 100%;
	}
	.soap span {
		width: 100%;
	}

	.meter-link {
		float: right;
		font-weight: 500;
		font-size: 14px;
		color: #1b46b0;
		text-decoration: underline;
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

	/* input[type=""] {
		border: none;
		background: none;
		font-weight: 600;
		width: 30%;
	}

	input[type=""]:focus {
		border: none !important;
		background: none;
		width: 30%;
	} */
`;
export default function Form() {
	const [people, setPeople] = useState(data);
	const [displayForm, setDisplayForm] = useState(false);
	const [newPerson, setNewPerson] = useState({
		lendername: "",
		loandate: "",
		originalloanamount: "",
		presentbalance: "",
		interestrate: "",
		monthlypayment: "",
		colletral: "",
		balloon: "",
		loancurrent: "",
		refi: "",
	});

	const addButton = () => {
		setPeople([...people, { ...newPerson }]);
		setNewPerson({
			lendername: "",
			loandate: "",
			originalloanamount: "",
			presentbalance: "",
			interestrate: "",
			monthlypayment: "",
			colletral: "",
			balloon: "",
			loancurrent: "",
			refi: "",
		});
		setDisplayForm(false);
	};

	const handleOnChange = (e) => {
		setNewPerson({
			...newPerson,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<Head>
				<title>Business Debt Schedule</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavMenu />
			<Hero>
				<ProGressTracker />

				<form className="formstyle">
					<section className="Form-design">
						<div className="form-head">
							<h2 className="heading">Business Debt Schedule</h2>
							<h2 className="heading-step">
								<p className="active">Step 6 </p> / 7
							</h2>
						</div>

						<div className="form-gap table-form">
							<table>
								<tbody>
									<tr>
										<th colSpan="2">Lender Name & Address</th>
										<th>Loan Date</th>
										<th>Original Loan Amount</th>
										<th>Present Balance</th>
										<th>Interest Rate</th>
										<th>Monthly Payment</th>
										<th>Collateral/Security</th>
										<th>Balloon?(Y/N)</th>
										<th>Loan Current?(Y/N)</th>
										<th>Refi?(Y/N)</th>
									</tr>
								</tbody>
								{/* <tbody>
									<tr>
										<td>
											<input type="checkbox" />
										</td>
										<td>2464 Royal Ln. Mesa, New Jersey 45463</td>
										<td>12/15/2016</td>
										<td>$10000</td>
										<td>$10000</td>
										<td>12%</td>
										<td>$5000</td>
										<td>$50000</td>
										<td>Y</td>
										<td>N</td>
										<td>N</td>
									</tr>
								</tbody> */}
								{/* <tbody>
									<tr>
										<td>
											<input type="checkbox" />
										</td>
										<td>2464 Royal Ln. Mesa, New Jersey 45463</td>
										<td>12/15/2016</td>
										<td>$10000</td>
										<td>$10000</td>
										<td>12%</td>
										<td>$5000</td>
										<td>$50000</td>
										<td>Y</td>
										<td>N</td>
										<td>N</td>
									</tr>
								</tbody> */}
								<tbody>
									{people &&
										people.map((row) => (
											<tr>
												<input type="checkbox" />
												<td> {row.lendername} </td>
												<td> {row.loandate} </td>
												<td> {row.originalloanamount} </td>
												<td> {row.presentbalance} </td>
												<td> {row.interestrate} </td>
												<td> {row.monthlypayment} </td>
												<td> {row.colletral} </td>
												<td> {row.balloon} </td>
												<td> {row.loancurrent} </td>
												<td> {row.refi} </td>
											</tr>
										))}
								</tbody>

								{/* <tbody>
									<tr>
										<td>
											<input type="checkbox" />
										</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody> */}
								{/* <tbody>
									<tr>
										<td>
											<input type="checkbox" />
										</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody> */}

								{/* <tbody>
									<tr>
										<td>
											<input type="checkbox" />
										</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody> */}

								{/* <tbody>
									<tr>
										<td>
											<input type="checkbox" />
										</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody> */}
								{/* <tbody>
									<tr>
										<td>
											<input type="checkbox" />
										</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody> */}

								{/* <tbody>
									<tr>
										<th colSpan="3">Total</th>
										<th>$20000</th>
										<th>$20000</th>
										<th colSpan="6"></th>
									</tr>
								</tbody> */}
							</table>
							{displayForm ? (
								<div className="emptyrow">
									<input type="checkbox" />

									<input
										className="place"
										placeholder="Lender Name"
										onChange={handleOnChange}
										value={newPerson.lendername}
										name="lendername"
									/>

									<input
										className="place"
										placeholder="Loan Date"
										onChange={handleOnChange}
										value={newPerson.loandate}
										name="loandate"
									/>

									<input
										className="place"
										placeholder="Original Loan Amount"
										onChange={handleOnChange}
										value={newPerson.originalloanamount}
										name="originalloanamount"
									/>

									<input
										className="place"
										placeholder="Present Balance"
										onChange={handleOnChange}
										value={newPerson.presentbalance}
										name="presentbalance"
									/>

									<input
										className="place"
										placeholder="Interest Rate"
										onChange={handleOnChange}
										value={newPerson.interestrate}
										name="interestrate"
									/>
									<input
										className="place"
										placeholder="Monthly Payment"
										onChange={handleOnChange}
										value={newPerson.monthlypayment}
										name="monthlypayment"
									/>
									<input
										className="place"
										placeholder="Colletral"
										onChange={handleOnChange}
										value={newPerson.colletral}
										name="colletral"
									/>
									<input
										className="place"
										placeholder="Balloon"
										onChange={handleOnChange}
										value={newPerson.balloon}
										name="balloon"
									/>
									<input
										className="place"
										placeholder="Loan Current"
										onChange={handleOnChange}
										value={newPerson.loancurrent}
										name="loancurrent"
									/>
									<input
										className="place"
										placeholder="Refi"
										onChange={handleOnChange}
										value={newPerson.refi}
										name="refi"
									/>

									<div className="mainrow">
										<div className="addrow">
											<img src="images/plus.png" onClick={addButton} /> Add Row
											{/* <button onClick={addButton}>Add More Row</button> */}
										</div>
										{/* <div className="removerow">
											<img src="images/delete.png" />
											Remove Row
										</div> */}
									</div>
								</div>
							) : (
								<button onClick={() => setDisplayForm(!displayForm)}>
									Add Row
								</button>
							)}
						</div>
					</section>
					<div className="form-row-button">
						<input type="submit" href="form2" id="button" value="Continue" />
						<a href="/personalfinance_ptr">Skip</a>
					</div>
				</form>
			</Hero>
		</>
	);
}
