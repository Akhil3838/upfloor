"use client";
import React, { useState } from "react";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [months, setMonths] = useState("");
  const [interest, setInterest] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateLoan = () => {
    const principal = Number(amount) - Number(downPayment);
    const monthlyRate = Number(interest) / 100 / 12;
    const numPayments = Number(months);

    if (principal > 0 && numPayments > 0) {
      let payment;

      if (monthlyRate === 0) {
        // no interest case
        payment = principal / numPayments;
      } else {
        // standard amortization formula
        payment =
          (principal *
            monthlyRate *
            Math.pow(1 + monthlyRate, numPayments)) /
          (Math.pow(1 + monthlyRate, numPayments) - 1);
      }

      setMonthlyPayment(payment.toFixed(2));
    } else {
      setMonthlyPayment(null);
    }
  };

  return (
    <div className="single-property-element single-property-loan">
      <h5 className="title fw-6">Loan Calculator</h5>
      <form className="box-loan-calc" onSubmit={(e) => e.preventDefault()}>
        <div className="box-top">
          <div className="item-calc">
            <label htmlFor="loan1" className="label">
              Total Amount:
            </label>
            <input
              type="number"
              id="loan1"
              placeholder="10,000"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="item-calc">
            <label htmlFor="loan2" className="label">
              Down Payment:
            </label>
            <input
              type="number"
              id="loan2"
              placeholder="3000"
              className="form-control"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </div>
          <div className="item-calc">
            <label htmlFor="loan3" className="label">
              Amortization Period (months):
            </label>
            <input
              type="number"
              id="loan3"
              placeholder="12"
              className="form-control"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
            />
          </div>
          <div className="item-calc">
            <label htmlFor="loan4" className="label">
              Interest rate (%):
            </label>
            <input
              type="number"
              id="loan4"
              placeholder="5"
              className="form-control"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>
        </div>

        <div className="box-bottom">
          <button
            type="button"
            className="tf-btn primary"
            onClick={calculateLoan}
          >
            Calculator
          </button>
          {monthlyPayment && (
            <div className="d-flex gap-4">
              <span className="text-btn fw-6">Monthly Payment:</span>
              <span className="text-btn fw-6 text-primary">
                ₹{monthlyPayment}
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
