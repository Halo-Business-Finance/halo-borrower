import React from "react";
import { useForm } from "react-hook-form";

function Rent() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div>
			<div className="rent">
				<div className="form-row-one form-gap">
					<div className="form-group form-name">
						<label htmlFor="fname" className="formlabel ">
							Monthly Rent
						</label>
						<input
							className="textbox"
							type="text"
							autoComplete="fname"
							placeholder="Enter Monthly Rent"
							{...register("rent", {
								required: "Required",
							})}
						/>
					</div>
				</div>

				<div className="form-row-one form-gap">
					<div className="form-group form-name">
						<label htmlFor="fname" className="formlabel ">
							Landlord Name
						</label>
						<input
							id="firstname"
							className="textbox"
							type="text"
							autoComplete="fname"
							placeholder="Enter Landlord Name"
							{...register("landordName", {
								required: "Required",
							})}
						/>
					</div>
				</div>

				<div>
					<div className="form-phone">
						<label htmlFor="fname" className="formlabel">
							Lease Start Date
						</label>
						<input
							id="date"
							className="textbox"
							type="date"
							autoComplete="fname"
							placeholder="(XXX)-(XXX)-(XXXX)"
							{...register("date", {
								required: "Required",
							})}
						/>
					</div>
					<div className="form-phone">
						<label htmlFor="fname" className="formlabel">
							Lease End Date
						</label>
						<input
							id="date"
							className="textbox"
							type="date"
							autoComplete="fname"
							placeholder="(XXX)-(XXX)-(XXXX)"
							{...register("date", {
								required: "Required",
							})}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rent;
