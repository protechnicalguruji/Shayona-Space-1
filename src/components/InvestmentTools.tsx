import { useState } from 'react';

export const EMICalculator = () => {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

  return (
    <div className="bg-white p-8 rounded-3xl border border-secondary-bg">
      <h3 className="text-2xl font-serif mb-6">EMI Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm text-text-secondary">Loan Amount (₹)</label>
          <input type="range" min="100000" max="10000000" step="100000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full" />
          <div className="font-bold">{amount.toLocaleString('en-IN')}</div>
        </div>
        <div>
          <label className="text-sm text-text-secondary">Interest Rate (%)</label>
          <input type="range" min="5" max="15" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full" />
          <div className="font-bold">{rate}%</div>
        </div>
        <div>
          <label className="text-sm text-text-secondary">Tenure (Years)</label>
          <input type="range" min="1" max="30" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full" />
          <div className="font-bold">{tenure} Years</div>
        </div>
        <div className="mt-6 p-4 bg-secondary-bg rounded-xl text-center">
            <div className="text-sm text-text-secondary">Estimated EMI</div>
            <div className="text-3xl font-serif font-bold text-accent">₹{Math.round(emi).toLocaleString('en-IN')}</div>
        </div>
      </div>
    </div>
  );
};
