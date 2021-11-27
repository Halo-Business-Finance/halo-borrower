import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
	padding: 40px 10% 40px 10%;
	font-family: Mulish;

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
				<title>Borrower Section</title>
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
			</Hero>
		</>
	);
}
