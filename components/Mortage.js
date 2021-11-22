import React from "react";
import { useForm } from "react-hook-form";


function Mortage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="form-row-one form-gap mortgage">
      <div className="form-group form-name">
        <label htmlFor="fname" className="formlabel ">
          Monthly Mortgage
        </label>
        <input
          className="textbox"
          type="text"
          autoComplete="fname"
          placeholder="Enter Monthly Rent/Mortgage"
          {...register("mortage")}
        />
      </div>
    </div>
  );
}

export default Mortage;
