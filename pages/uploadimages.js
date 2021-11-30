import Head from "next/head";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import React, { useState } from "react";

const Hero = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #e5e5e5;
	padding: 20px;
	font-family: Mulish;

	.formstyle {
		width: 60%;
		background: #fff;
		border-radius: 10px;
		padding: 0px 20px 20px 20px;
	}
	.Form-design {
		padding: 30px 30px 30px 30px;
	}

	.textbox {
		width: 100%;
		padding: 12px;
	}

	.form-group {
		margin-top: 5%;
	}

	.form-row-one {
		width: 60%;
		margin-top: 5%;
		margin-left: 20%;
	}

	.formlabel {
		color: #5c5c5c;
		font-weight: 600;
		font-size: 16px;
		line-height: 10px;
	}

	.form-head {
		display: inline-block;
		width: 100%;
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

	.textbox {
		border-radius: 4px;
		border: 2px solid #ededed;
	}

	.textbox ::placeholder {
		color: #adadad;
		opacity: 1;
		font-style: italic;
	}

	.form-gap {
		margin-top: 20px;
	}

	input[type="submit"] {
		background-color: #f3ba17;
		border: none;
		color: #333333;
		font-weight: 700;
		border-radius: 8px;
		padding: 14px 30px;
		text-decoration: none;
		cursor: pointer;
		font-size: 18px;
	}

	.form-row-button {
		width: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
	}
`;

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [aState, setA] = useState();

	const onSubmitForm = async (values) => {
		const formData = new FormData();
		const imagefile = document.querySelector("#file");
		formData.append("image", imagefile.files[0]);
		axios
			.post(
				"http://75.126.149.253/api/loan-type/upload-image/ba60a8ad-5ff1-4afc-9def-36a2700977bb",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization:
							"Bearer f0_nl2on0C2yESeccjqLuNkPrSK_bjdfn2-iClBlsDALl1_UWcX2oWxmFrT8HB1kvpGDOphRnKhCENvdl8vU8jFPi4CO40tNCp_mmd6UTvLsprCWE0azZKOu-33EG6w1ev-HGgeXCCZzyYXKUMa-HXYW5a72P9NoimfVJitbgOhitgN3va_DgjL6MEkRP0ynP4fVzt_wvWKyOGR-IjmlAkTbQUYsv3B7HYkv05IH87E0xHTmFmeul4IHrCiajGOrVxPfbuQNhGKvAyFT-PaLChCxDiDCwxetrYgwvcqPpPd3DBF_oHgi2JWkIQaD1Gry5sCT6bymppeYJxt9LpLHKEN_ODABT3SbdRRNwAJx6H6ZMIK510_-T1Cj3BdidWVdqWpRafmWp3JdOBmNmlUudOS7BqxC6L2JqgDu5QfI_3iIyHsKpZOkwQ_mCr59jICKU7RMwRaFBJSOStzy0tUIWmFLhBR_9tsC7W2T51ARiN9FII7Us11scJ0_BRL3hPWM_XTFDSItX6G9z45TfMHopg",
					},
				}
			)
			.then(
				(response) => {
					if (response.data.access_token != "") {
						console.log(response);
					} else {
						setA(response);
						return <div>{aState}</div>;
					}
				},
				(error) => {
					console.log(error);
				}
			);
	};

	// const onSubmitForm = async (values) => {
	//   axios({
	//     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	//     method: 'post',
	//     url: 'http://75.126.149.253/auth/token',
	//     data: {
	//       username: values.username,
	//       password: values.password,
	//       grant_type: "password",
	//     }
	//   })

	//   .then((response) => {
	//     if(response.data.isSuccess){
	//       console.log(response);
	//     }else{

	//       setA(response.data.reason);
	//       return (
	//           <div>{aState}</div>
	//       );
	//       // console.log(response.data.reason);
	//     }
	//   }, (error) => {
	//     console.log(error);
	//   });

	// }

	return (
		<>
			<Head>
				<title>Registration </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<div className="error">
					<p>{aState}</p>
				</div>

				<form className="formstyle" onSubmit={handleSubmit(onSubmitForm)}>
					<section className="Form-design">
						<div className="form-head">
							<h2 className="heading">Log In</h2>
						</div>

						<div className="form-row-one form-gap">
							<div className="form-group form-dba">
								<label htmlFor="fdba" className="formlabel">
									Image
								</label>
								<input
									id="file"
									name="file"
									className="textbox"
									type="file"
									autoComplete="fdba"
									required
								/>
								{errors.password && (
									<span role="alert">{errors.password.message}</span>
								)}
							</div>
						</div>
					</section>

					<div className="form-row-button">
						<input type="submit" id="button" value="Log In" />
					</div>
				</form>
			</Hero>
		</>
	);
}
