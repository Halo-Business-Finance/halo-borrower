import { Button, Form, Input, message, Select } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import NavMenu from "../../../components/NavMenu";
import { API } from "../../../utils/api";


const { Option } = Select;
const OutstandingDebtStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Mulish;
	background: #e5e5e5;
	padding: 10px;

	.main-style {
		width: 52%;
		padding: 12px;
		background: #f8f8ff;
		border-radius: 10px;
		header {
			.header-one {
				display: flex;
				align-items: center;
				h1 {
					margin-right: auto;
				}
				h3 span {
					color: #1b46b0;
				}
			}
			.header-two {
				p {
					margin-top: -10px;
					color: #adadad;
				}
			}
		}
		.debt-form {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1.5rem;
			margin-bottom: 2rem;
			input {
				width: 350px;
				height: 40px;
				font-size: 16px;
				text-align: center;
				padding: 10px 30px;
				background: #ffffff;
				border: 2px solid #ededed;
				box-sizing: border-box;
				border-radius: 8px;
			}
			.button-one {
				border: 2px solid #f3ba17;
				color: #f3ba17;
			}
		}
			.footer {
				.continue-button {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 10px;
					img {
						padding: 14px;
						border: 1px solid #f3ba17;
						border-radius: 8px;
					}

					input {
						padding: 16px 32px;
						font-size: 16px;
						font-weight: bold;
						background: #f3ba17;
						border-radius: 8px;
						border: none;
					}
				}
				.skip-link {
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					p {
						text-decoration: underline;
					}
				}
			}
		
	}
`;

export default function Business() {

 const router = useRouter();
  const { id } = router.query;
  const [consumer, getConsumer] = useState({});
  const [form] = Form.useForm()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const headers = {
		"Content-Type": "application/json",
		Authorization: "Bearer" + " " ,
	};

	const onSubmitForm = async (values) => {
		console.log(values,'vl')

		
		try {

			await API.post(`api/business-finance/add-update-business-debt`, { ...refactoredValues, loanRequestId: id })

			router.push({ pathname: "/documents/profit-loss", query: { id: id } })
		} catch (error) {
			message.error(error?.payload?.reason || "Error Occured");
			setSaving(false)
		}
		setSaving(false)
	};
	const GetBusinessDebts = async () => {
		const baseUrl = "https://dev-api.halobusinessfinance.com/"
		if (id) {
			try {
			  const res = await API.get(`api/business-finance/get-business-debt/${id}`)
			  console.log(res,'bd')
			  const data = await res.payload;
			  getConsumer(data)
			  // const docs = data?.map((item) => ({
			  //   "id": item?.id,
			  //   'url': baseUrl + item?.fileName,
			  //   "name": item?.aliasFileName
		
			  // }))
			} 
			  catch (error) {
			  // message.error(error?.payload?.reason || "Error Occured");
			  // setFetching(false)
			}}}
		  //   setFetching(false)
		
		  // }
		  useEffect(() => {
			if (id) {
				GetBusinessDebts();
			}
		  }, [id])
		  useEffect(() => {
			form.setFieldsValue(consumer)
		  }, [form, consumer])
		
		//   useEffect(() => form.resetFields(), [initialValues]);
	  


	return (
		<>
			<Head>
				<title>Outstanding Debt</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavMenu id={id} />
			<OutstandingDebtStyle>
				<section className="main-style">
					<header>
						<div className="header-one">
							<h1>Tell us more about your outstanding debt</h1>
							<h3>
								<span> Step 2 </span> / 2
							</h3>
						</div>
						<div className="header-two">
							<p>
							We need to know about your company’s existing debts in order to give you an accurate cash flow decision. 
                            Business debts include terms loans, equipment leases, business credit cards (in the name of the business), 
                            lines of credit, leases or any other business debts.
							</p>
						</div>
					</header>
                    <div>
                      
                    <Form onFinish={onSubmitForm} form={form} layout="vertical">
                        <Form.Item 
                        label='Lender name'
					name='lenderName'
                        >
                            <Input
                            placeholder="Enter lender name"
                            />
                        </Form.Item>
                        <Form.Item 
                        label='Type of Debt'
						name='typeOfDebt'
                        >
							<Select>
                          <Option value={0}>Business</Option>
						  <Option value={1}>SomeOther</Option>
						  </Select>
                           
                        </Form.Item>
                        <Form.Item 
                        label='Origination Year'
						name='originationYear'
					    >
                        <Input
						 type='number'
                            placeholder="Enter lender name"
                            />
                        </Form.Item>
                       
                        <Form.Item 
                        label='Payment Frequency'
						name='paymentFrequency'
                        >
							<Select>
                          <Option value={0}>Monthly</Option>
						  <Option value={1}>Quarterly</Option>
						  <Option value={2}>SemiAnnually</Option>
						  <Option value={4}> Annually</Option>
						  </Select>
						  
                        </Form.Item>
                        <Form.Item 
                        label='Minimum Payment'
						name='minimumPayment'
                        >
                            <Input 
                            type='number'
                            placeholder="$"
                            />
                        </Form.Item>
                        <Form.Item 
                        label='Amount Remaining'
						name='amountRemainin'
                        >
                            <Input 
                             type='number'
                            placeholder="$"
                            />
                        </Form.Item>
                        <Form.Item>
              <Button  type="primary" htmlType="submit">
                Save debt
              </Button>
            </Form.Item>
                    </Form>
                    </div>
					{/* <form onSubmit={handleSubmit(onSubmitForm)}>
						<div className="debt-form">
							<input
								type="button"
								className="button-one"
								value="My business has debts"
								{...register("Debts")}
							/>
							<input
								type="button"
								value="My business doesn’t have any debts"
								{...register("noDebts")}
							/>
						</div>
						<div className="footer">
							<div className="continue-button">
                            <Upload >
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
							</div>

							<div className="skip-link">
								<a href="/businessfinance_pls">Skip</a>
							</div>
						</div>
					</form> */}
				</section>
			</OutstandingDebtStyle>
		</>
	);
}
