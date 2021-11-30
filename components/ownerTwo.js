import React from "react";
import { useForm } from "react-hook-form";

function ownerTwo() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<div>
			<section className="Form-design owner-two">
				<div className="form-head">
					<h2 className="heading">Owner 2</h2>
				</div>

				<div className="form-row-one form-gap">
					<div className="form-group form-name">
						<label htmlFor="fname" className="formlabel ">
							Full Name
						</label>
						<input
							{...register("fullname", {
								required: "true",
							})}
							id="firstname"
							className="textbox"
							type="text"
							autoComplete="fname"
							placeholder="John"
							required
						/>
					</div>
					<div className="form-group form-dba">
						<label htmlFor="fdba" className="formlabel">
							Date of Birth
						</label>
						<input
							{...register("dateofbirth", {
								required: "true",
							})}
							id="dateofbirth"
							className="textbox"
							type="date"
							autoComplete="fdba"
							placeholder="Enter Monthly Total Business Expenses"
							required
						/>
					</div>
				</div>

				<div className="form-row-one form-gap">
					<div className="form-group form-name">
						<label htmlFor="fname" className="formlabel ">
							Home Address
						</label>
						<input
							{...register("homeaddress", {
								required: "true",
							})}
							id="firstname"
							className="textbox"
							type="text"
							autoComplete="fname"
							placeholder="Enter Address"
							required
						/>
					</div>
					<div className="form-group form-dba">
						<label htmlFor="fdba" className="formlabel">
							City
						</label>
						<input
							{...register("city", {
								required: "true",
							})}
							id="firstname"
							className="textbox"
							type="text"
							autoComplete="fdba"
							placeholder="Enter City"
							required
						/>
					</div>
				</div>

				<div className="form-row-three form-gap">
					<div className="form-group form-city">
						<label htmlFor="fname" className="formlabel">
							State
						</label>
						<input
							{...register("state", {
								required: "true",
							})}
							id="city"
							className="textbox"
							type="state"
							autoComplete="fname"
							placeholder="Select State"
							required
						/>
					</div>
					<div className="form-group form-state">
						<label htmlFor="fname" className="formlabel">
							Zip Code
						</label>
						<input
							{...register("zipcode", {
								required: "true",
							})}
							id="state"
							className="textbox"
							type="text"
							autoComplete="fname"
							placeholder="Enter Zip Code"
							required
						/>
					</div>
					<div className="form-group form-zip">
						<label htmlFor="fname" className="formlabel">
							Social Security Number
						</label>
						<input
							{...register("zipcode", {
								required: "true",
							})}
							id="zipcode"
							className="textbox"
							type="number"
							autoComplete="fname"
							placeholder="Social Security Number"
							required
						/>
					</div>
				</div>

				<div className="form-row-one form-gap">
					<div className="form-group form-name">
						<label htmlFor="fname" className="formlabel ">
							Email
						</label>
						<input
							{...register("email", {
								required: "true",
							})}
							id="firstname"
							className="textbox"
							type="text"
							autoComplete="fname"
							placeholder="Enter Email"
							required
						/>
					</div>
					<div className="form-group form-dba">
						<label htmlFor="fdba" className="formlabel">
							Mobile
						</label>
						<input
							{...register("mobile", {
								required: "true",
							})}
							id="firstname"
							className="textbox"
							type="text"
							autoComplete="fdba"
							placeholder="(XXX)-(XXX)-(XXXX)"
							required
						/>
					</div>
				</div>

				<div className="form-row-one form-gap">
					<div className="form-group form-name">
						<label htmlFor="fname" className="formlabel ">
							Ownership
						</label>
						<input
							{...register("ownership", {
								required: "true",
							})}
							id="firstname"
							className="textbox"
							type="text"
							autoComplete="fname"
							placeholder="Enter percent of ownership"
							required
						/>
					</div>
				</div>

				<div className="form-group form-gap">
					<label htmlFor="ffti" className="formlabel">
						Are you a:
					</label>
					<div className="radio-three">
						<div className="radio-container">
							<input
								{...register("citizenship", {
									required: "true,",
								})}
								type="radio"
								name="radio"
								className="own-click"
							/>
							<label>US Citizen</label>
						</div>

						<div className="radio-container">
							<input
								{...register("citizenship", {
									required: "true",
								})}
								type="radio"
								name="radio"
								className="mortgage-click"
							/>
							<label>US Permanent Resident</label>
						</div>

						<div className="radio-container">
							<input
								{...register("citizenship")}
								type="radio"
								name="radio"
								className="rent-click"
							/>
							<label>Other</label>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ownerTwo;
