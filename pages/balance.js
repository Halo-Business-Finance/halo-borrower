import Head from "next/head";
import styled from "styled-components";
const Hero = styled.div`
	font-family: Mulish;
	background: #e5e5e5;
	padding: 40px 5% 40px 5%;

	.formstyle {
		width: 60%;
		background: #f8f8ff;
		border-radius: 10px;
		margin-left: 20%;
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

		padding: 8px;
	}
	tr:nth-child(odd) {
		background-color: #dddddd;
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
	.numberbox {
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

		cursor: pointer;
	}
	.form-row-button {
		width: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		margin: 20px 0px 20px 0px;
	}

	input[type="number"] {
		border: none;
		background: none;
		font-weight: 600;
		width: 80%;
	}

	input[type="number"]:focus {
		border: none !important;

		background: none;
		width: 80%;
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
`;
export default function Form() {
	return (
		<>
			<Head>
				<title>Form</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<section className="progress-tracker">
					<div className="progress-form">
						<h3>Personal Information</h3>
						<div className="meter pi">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>General Information</h3>
						<div className="meter gi">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>
							Income
							<br />
							Source
						</h3>
						<div className="meter is">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>Contigent Liabilities</h3>
						<div className="meter cl">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>
							Balance
							<br /> Sheet
						</h3>
						<div className="meter bs">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>Schedule of Assets Pledged</h3>
						<div className="meter soap">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>Business Debt Schedule</h3>
						<div className="meter bds">
							<span></span>
						</div>
					</div>

					<div className="progress-form">
						<h3>Personal Tax Returns(100%)</h3>
						<div className="meter ptr">
							<span></span>
						</div>
					</div>
				</section>
				<br />
				<br />
				<br />
				<br />

				<form className="formstyle" action="assets">
					<section className="Form-design">
						<div className="form-head">
							<h2 className="heading">Balance Sheet</h2>
							<h2 className="heading-step">
								<p className="active">Step 5 </p> / 6
							</h2>
						</div>

						<div className="form-gap table-form">
							<table>
								<tr>
									<th>Assets</th>
									<th>Amount ($)</th>
									<th>Liabilities & Net Worth</th>
									<th>Amount ($)</th>
								</tr>
								<tr>
									<th rowSpan="2">
										Cash in Bank(including money market accounts, CDs)
									</th>
									<th rowSpan="2">
										<input type="number" name="test" placeholder="0.00" />
									</th>{" "}
									<th>Notes Payable to Bank</th>
									<th rowSpan="2">
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>
										<th>Secured</th>
										<th>
											<input type="number" name="test" placeholder="0.00" />
										</th>
										<th>Unsecured</th>
										<th>
											$<input type="number" name="test" placeholder="__" />
										</th>
									</th>
								</tr>
								<tr>
									<th rowSpan="2">
										Cash in Bank(including money market accounts, CDs)
									</th>
									<th rowSpan="2">
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>Notes Payable to Others (Schedule F)</th>
									<th rowSpan="2">
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>
										<th>Secured</th>
										<th>
											$<input type="number" name="test" placeholder="__" />
										</th>
										<th>Unsecured</th>
										<th>
											$<input type="number" name="test" placeholder="__" />
										</th>
									</th>
								</tr>
								<tr>
									<th></th>
									<th></th>
									<th>Credit Cards & Accounts Payable</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th></th>
									<th></th>
									<th>Margin Accounts</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>Readily Marketable Securities (Schedule A)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>Notes Due to Privately Owned Businesse</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>Non-Readily Marketable Securities (Schedule A)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>Taxes Payable</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>Ownership in Privately Owned Businesses (Schedule B)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>Personal Residential Mortgages (Schedule D)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>Notes Receivable from Business</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>Investment Real Estate Debt (Schedule E)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>Notes Receivable from Others</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>Life Insurance Loans (Schedule C)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>
										Net Cash Surrender Value of Life Insurance (Schedule C)
									</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>Other Liabilities (List)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>Real Estate for Personal Use (Schedule D)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>List your liabilities separated by comma</th>
									<th></th>
								</tr>
								<tr>
									<th>Real Estate Investments (Schedule E)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th></th>
									<th></th>
								</tr>
								<tr>
									<th>
										Retirement Accounts (IRA, Keogh, Profit Sharing & Other)
									</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th></th>
									<th></th>
								</tr>
								<tr>
									<th>Automobiles</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>Total Liabilities</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>List your automobiles separated by comma</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th></th>
									<th></th>
								</tr>
								<tr>
									<th>Other Assets (List)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>Net Worth(Total Assets - Total Liabalities)</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
								<tr>
									<th>List your assets separated by comma</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th></th>
									<th></th>
								</tr>
								<tr>
									<th>Total Assets</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
									<th>Total Liabilities & Net Worth</th>
									<th>
										<input type="number" name="test" placeholder="0.00" />
									</th>
								</tr>
							</table>
						</div>
					</section>
					<div className="form-row-button">
						<input type="submit" href="form2" id="button" value="Continue" />
					</div>
				</form>
			</Hero>
		</>
	);
}
