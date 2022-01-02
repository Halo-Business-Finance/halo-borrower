import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import ProGressTracker from "../components/PfTracker";
import NavMenu from "../components/NavMenu";

const Hero = styled.div`
  background: #e5e5e5;
  font-family: Mulish;
  padding: 40px 5% 40px 5%;

  .Form-design {
    width: 60%;
    margin-left: 20%;
    background: #f8f8ff;
    border-radius: 10px;
    padding-bottom: 20px;
    background: #f8f8ff;
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
    //   font-weight: 600;
    font-size: 16px;
    line-height: 150%;
  }

  table {
    font-size: 14px;
    line-height: 18px;
    border-collapse: collapse;
    width: 100%;
  }
  th {
    width: 80%;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
  }

  tbody:nth-child(odd) {
    background-color: #f5f5f5;
  }
  .table-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    background: #f5f5f5;
    border: 1px solid #dddddd;
    border-radius: 5px 5px 0 0;
    gap: 10rem;
  }
  .table-footer-first {
    margin-right: auto;
  }
  .table-footer-first,
  .table-footer-second {
    font-weight: bold;
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
    font-weight: bold;
    font-size: 20px;
    color: #333333;
  }

  .heading-step {
    display: inline;
    color: #adadad;
    display: inline;
    float: right;
  }
  .table-head {
    font-weight: bold;
  }
  .thead {
    font-size: 16px;
    font-weight: 500;
  }

  .textbox {
    border-radius: 4px;
    border: 1px solid #ededed;
  }

  .form-gap {
    margin-top: 10px;
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

  input[type="number"] {
    border: none;
    background: none;
    font-weight: 600;
    width: 100%;
  }

  input[type="number"]:focus {
    outline: none;
    padding: 6px 0;
    background: transparent;
    width: 90%;
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

  .table-header {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: auto; */
    padding: 0 6px;
    background: #f5f5f5;
    border: 1px solid #dddddd;
    border-radius: 5px 5px 0 0;
  }
  .table-header-one {
    margin-right: auto;
  }
  .table-header-one,
  .table-header-two {
    font-weight: 700;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const _defaultCosts = [
  {
    Incomes: "As Guarantor, Endorser, or Co-maker",
    amount: "",
  },
  {
    Incomes: "On Leases or Contracts ",
    amount: "",
  },
  {
    Incomes: "Legal Claims",
    amount: "",
  },
  {
    Incomes: "  Provisions for Federal Income Taxes",
    amount: "",
  },
  {
    Incomes: "Other Special Debt",
    amount: "",
  },
];
export default function Incomes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [costs, setCosts] = useState(_defaultCosts);

  const addNewCost = () => {
    setCosts((prevCosts) => [...prevCosts, { name: "", price: "" }]);
  };

  const getTotalCosts = () => {
    return costs.reduce((total, item) => {
      return total + Number(item.amount);
    }, 0);
  };

  const handleCostsChange = (event) => {
    const _tempCosts = [...costs];
    _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;

    setCosts(_tempCosts);
  };
  const onSubmitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Incomes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <Hero>
      <ProGressTracker />

        <section className="Form-design">
          <div className="form-head">
            <h2 className="heading">Income Source</h2>
            <h2 className="heading-step">
              <p className="active">Step 3 </p> / 6
            </h2>
          </div>
          <div className="form-row-one">
            <p>
              You need not disclose alimony, child support or separate
              maintenance income unless you wish the Bank to consider them in a
              credit decision.
            </p>
          </div>
          <div className="table-header  form-gap">
            <p className="table-header-one">Incomes</p>
            <p className="table-header-two">Amount ($)</p>
          </div>

          <div className="table-form">
            {costs.map((item, index) => (
              <table key={index}>
                <tbody>
                  <tr>
                    <th className="thead">{item.Incomes}</th>
                    <th>
                      <input
                        name="amount"
                        data-id={index}
                        type="number"
                        value={item.amount}
                        onChange={handleCostsChange}
                        placeholder="0.00"
                      />
                    </th>
                  </tr>
                </tbody>
              </table>
            ))}
            <div className="table-footer">
              <p className="table-footer-first">Total Contingent Liabilities</p>
              <p className="table-footer-second">{getTotalCosts()}</p>
            </div>
          </div>
        </section>

        <div className="form-row-button">
            <input
              type="submit"
              href="information2"
              id="button"
              value="Continue"
            />
            <a href="/personalfinance_cl">Skip</a>
          </div>
      </Hero>
    </>
  );
}
