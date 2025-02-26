import { useState } from "react";
import './App.css'
export default function BaiTap2() {
  const [money, setMoney] = useState(0);
  const [rate, setRate] = useState(0);
  const [goal, setGoal] = useState(0);
  const [results, setResults] = useState([]);

  const calculateInvestment = () => {
    let year = new Date().getFullYear();
    let currentMoney = money;
    let data = [];

    while (currentMoney < goal) {
      let endYearMoney = Math.floor(currentMoney + (currentMoney * rate) / 100);
      data.push({ year, money: currentMoney, rate, endYearMoney });
      currentMoney = endYearMoney;
      year++;
    }

    setResults(data);
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-lg font-bold mb-4 text-center">Investment Calculator</h2>
        <label className="block mb-2">Input Your Invest Money:</label>
        <input
          id="money"
          type="text"
          value={money}
          onChange={(e) => setMoney(Number(e.target.value))}
          className="border rounded p-2 w-full mb-4"
        />

        <br />

   
        <label className="block mb-2">Input Rate:</label>
        <input
        id="rate"
          type="text"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="border rounded p-2 w-full mb-4"
        />

         <br />

        <label className="block mb-2">Input your Goal:</label>
        <input
        id="goal"
          type="text"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          className="border rounded p-2 w-full mb-4"
        />

        <br />

        <button
          onClick={calculateInvestment}
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700"
        >
          Calculate
        </button>
      </div>

      {results.length > 0 && (
        <table className="mt-6 w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Year</th>
              <th className="p-2">Money</th>
              <th className="p-2">Rate</th>
              <th className="p-2">End Year</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="p-2">{row.year}</td>
                <td className="p-2">{row.money}</td>
                <td className="p-2">{row.rate}</td>
                <td className="p-2">{row.endYearMoney}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
