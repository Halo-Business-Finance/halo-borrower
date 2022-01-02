import React from "react";
import styled from "styled-components";

const Hero = styled.div`
	.finance-list {
		background-color: white;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		border-radius: 5px;
		padding: 10px 20px 10px 20px;
		width: 70%;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	/* .loan-step {
		color: #adadad;
		text-transform: uppercase;
		font-weight: 700;
	} */
	.loan-head {
		color: #333333;
		font-weight: 700;
	}

	.loan-describe {
		color: #adadad;
		font-weight: 400;
	}
	.loan-amount {
		margin: 0 auto;
	}

	.dvImageTextBox {
		position: relative;
		margin: 0 auto;
		width: 250px;
	}
	.dvImageTextBox input {
		border: 2px solid #e5e5e5;
		border-radius: 5px;
		box-shadow: #f3ba17 0px 2px 0px;
		display: block;
		width: 100%;
		box-sizing: border-box;
		min-height: 40px;
		text-align: center;
		color: #333333;
		font-weight: 600;
		font-size: 24px;
	}
	.dvImageTextBox .rightimage {
		position: absolute;
		right: 5px;
		top: 2px;
		padding: 5px 5px 5px 20px;
	}

	.dvImageTextBox .leftimage {
		position: absolute;
		padding: 5px 20px 5px 5px;
	}
	.loan-interest {
		width: 100%;
		display: inline-block;
	}

	.interest-rates {
		width: 25%;
		display: inline-block;
	}
`;

function Borrow() {
	return (
		<div>
			<Hero>
				<div className="finance-list">
					{/* <p className="loan-step">Step 2</p> */}
					<h3 className="loan-head">How much do you want to borrow?</h3>
					<p className="loan-describe">
						Use the slider to select your loan amount or enter an amount in the
						text field.
					</p>

					<section className="loan-amount">
						<div className="dvImageTextBox">
							<img src="/images/dollar.png" className="leftimage" />
							<input
								// {...register("amount", {
								// 	required: "true",
								// 	maxLength: {
								// 		value: 20,
								// 		message: "max length is 20",
								// 	},
								// })}
								type="number"
								required
							/>
							<img src="/images/pen.png" className="rightimage" />
						</div>
						<br />
						<hr />
						{/* <div className="loan-interest">
							<div className="interest-rates">
								<h3>$1,942</h3>
								<p>Monthly payment</p>
							</div>

							<div className="interest-rates">
								<h3>10 Years</h3>
								<p>Loan term</p>
							</div>

							<div className="interest-rates">
								<h3>
									6.00%
									<img src="/images/help-orange.png" />
								</h3>
								<p>Interest rate</p>
							</div>

							<div className="interest-rates">
								<h3>6.96%</h3>
								<p>APR with fees</p>
							</div>
						</div> */}
					</section>
				</div>
			</Hero>
		</div>
	);
}

export default Borrow;
