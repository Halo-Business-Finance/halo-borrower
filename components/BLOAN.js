import React from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import cookie from "js-cookie";
import Router from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Hero = styled.div`
	padding: 40px 0% 40px 0%;
	font-family: Mulish;
	background-color: #e5e5e5;

	.goal {
		background-color: white;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		border-radius: 10px;
		padding: 10px 20px 10px 20px;
		margin-top: 20px;
	}
	.button {
		background-color: #f3ba17;
		padding: 10px 20px 10px 20px;
		margin-top: 20px;
		border-radius: 5px;
		font-size: 15px;
	}
	.cast {
		padding: 10px 10px 10px 10px;
		font-size: 20px;
	}
	.term {
		margin: 10px 10px 10px 10px;
	}
	.radio {
		margin-left: 15px;
	}
	input {
		border-top-style: hidden;
		border-right-style: hidden;
		border-left-style: hidden;
	}
	.outline:focus {
		outline: none;
	}
	.other {
		margin-left: 15px;
	}
	.other:focus {
		outline: none;
	}
`;

export default function BLOAN() {
	return (
		<div>
			<Hero>
				<section>
					<div className="goal">
						<div className="cast">
							Tell us what you plan on using the funds for?
						</div>
						<div className="term">
							<input type="radio" name="goal" value="purchase" />
							<label className="radio">Purchase</label>
						</div>
						<div className="term">
							<input type="radio" name="goal" value="construct" />
							<label className="radio">Construction</label>
						</div>
						<div className="term">
							<input type="radio" name="goal" value="refinance" />
							<label className="radio">Refinance</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Refinance</div>
						<div className="term">
							<input type="radio" name="goal" value="refinance" />
							<label className="radio">Cash Out</label>
						</div>
						<div className="term">
							<input type="radio" name="goal" value="refinance" />
							<label className="radio">Rate and Term</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">If Cash Out, How much?</div>
						<div className="term">
							<input
								className="outline"
								type="text"
								placeholder="Your answer"
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Construction Amount </div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">25,000 - 250,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">250,000 - 1,000,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">1,000,000 - 5,000,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">5,000,000 - 25,000,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">25,000,000 - 100,000,000</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Rate and Term Amount </div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">25,000 - 250,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">250,000 - 1,000,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">1,000,000 - 5,000,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">5,000,000 - 25,000,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">25,000,000 - 100,000,000</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Property Address</div>
						<div className="term">
							<input
								className="outline"
								type="text"
								placeholder="Your answer"
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div>
							<div className="cast">Property Type</div>
						</div>
						<div className="term">
							<input type="radio" name="property" value="Food / Beverage" />
							<label className="radio">Food / Beverage</label>
						</div>
						<div className="term">
							<input type="radio" name="property" value="Industrial" />
							<label className="radio">Industrial</label>
						</div>
						<div className="term">
							<input type="radio" name="property" value="Mixed Use" />
							<label className="radio">Mixed Use</label>
						</div>
						<div className="term">
							<input type="radio" name="property" value="Retail" />
							<label className="radio">Retail</label>
						</div>
						<div className="term">
							<input type="radio" name="property" value="Office / Condo" />
							<label className="radio">Office / Condo</label>
						</div>
						<div className="term">
							<input type="radio" name="property" value="Investment Property" />
							<label className="radio">Investment Property</label>
						</div>
						<div className="term">
							<input type="radio" name="property" value="Multi-Family" />
							<label className="radio">Multi-Family</label>
						</div>
						<div className="term">
							<input type="radio" name="property" value="Hospitality" />
							<label className="radio">Hospitality</label>
						</div>
						<div className="term">
							<input
								type="radio"
								name="property"
								value="Apartment Multi-Family"
							/>
							<label className="radio">Apartment Multi-Family</label>
						</div>
						<div className="term">
							<input type="radio" name="property" value="Farm & Land" />
							<label className="radio">Farm & Land</label>
						</div>
						<div className="term">
							<input type="radio" name="property" value="Other" />
							<label className="radio">Other</label>
							<input
								className="other"
								type="text"
								// placeholder="Your answer"
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Term Requested </div>
						<div className="term">
							<input type="radio" name="term" value="term1" />
							<label className="radio">3-12 Months</label>
						</div>
						<div className="term">
							<input type="radio" name="term" value="term2" />
							<label className="radio">12-24 Months</label>
						</div>
						<div className="term">
							<input type="radio" name="term" value="term3" />
							<label className="radio">24-36 Months</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Owner Occupied or Investment Property</div>
						<div className="term">
							<input type="radio" name="owner" value="prop" />
							<label className="radio">Yes</label>
						</div>
						<div className="term">
							<input type="radio" name="owner" value="prop2" />
							<label className="radio">No</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Will You Occupy 51% or more of the space</div>
						<div className="term">
							<input type="radio" name="more" value="Yes" />
							<label className="radio">Yes</label>
						</div>
						<div className="term">
							<input type="radio" name="more" value="No" />
							<label className="radio">No</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">How many Tenants or Units</div>
						<div className="term">
							<input
								className="outline"
								type="text"
								placeholder="Your answer"
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Dollar Amount Wanted </div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">25,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">250,000 - 1,000,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">1,000,000 - 5,000,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">5,000,000 - 25,000,000</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">25,000,000 - 100,000,000</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Ownership Structure </div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">LLC</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">C-Corp</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">S-CORP</label>
						</div>
						<div className="term">
							<input type="radio" name="amount" value="dollar" />
							<label className="radio">Partnership</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">
							Are you or the property involved in a Lawsuit
						</div>
						<div className="term">
							<input type="radio" name="lawsuit" value="dollar" />
							<label className="radio">Yes</label>
						</div>
						<div className="term">
							<input type="radio" name="lawsuit" value="dollar2" />
							<label className="radio">No</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Ever File Bankruptcy?</div>
						<div className="term">
							<input type="radio" name="bankruptcy" value="Yes" />
							<label className="radio">Yes</label>
						</div>
						<div className="term">
							<input type="radio" name="bankruptcy" value="No" />
							<label className="radio">No</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">How much do you plan on putting down?</div>
						<div className="term">
							<input type="radio" name="putting" value="much" />
							<label className="radio">10%</label>
						</div>
						<div className="term">
							<input type="radio" name="putting" value="much" />
							<label className="radio">20%</label>
						</div>
						<div className="term">
							<input type="radio" name="putting" value="much" />
							<label className="radio">30%</label>
						</div>
						<div className="term">
							<input type="radio" name="putting" value="much" />
							<label className="radio">More then 30%</label>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Current Property Value</div>
						<div className="term">
							<input
								className="outline"
								type="text"
								name="value"
								placeholder="Your answer"
							/>
						</div>
					</div>
				</section>
				<section>
					<div className="goal">
						<div className="cast">Once Stabilized</div>
						<div className="term">
							<input
								className="outline"
								type="text"
								name="stabilized"
								placeholder="Your answer"
							/>
						</div>
					</div>
				</section>
			</Hero>
		</div>
	);
}
