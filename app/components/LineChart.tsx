"use client";
import Image from "next/image";
import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type BloodPressureChartProps = {
  data: {
    blood_pressure: {
      systolic: {
        value: number;
        levels: string;
      };
      diastolic: {
        value: number;
        levels: string;
      };
    };
    month: string;
    year: string;
  }[];
};

export default function BloodPressureChart({ data }: BloodPressureChartProps) {
  const [systolicActive, setSystolicActive] = useState(true);
  const [diastolicActive, setDiastolicActive] = useState(true);

  const chartData = data.map(({ blood_pressure, month, year }) => ({
    name: `${month.slice(0, 3)},${year}`,
    systolic: blood_pressure.systolic.value,
    diastolic: blood_pressure.diastolic.value,
  }));

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-background py-4 my-4 mx-4">
      <div className="flex gap-72 px-4 py-2">
        <h1 className="text-2xl font-bold pl-4">Blood Pressure</h1>
        <select defaultValue={"All time"} className="bg-background rounded-xl ">
          <option value={"last 12 months"}>last 12 months</option>
          <option value={"last 6 months"}>last 6 months</option>
          <option value={"All time"}>All time</option>
        </select>
      </div>
      <div className="flex ">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData} width={300} height={400}>
            <CartesianGrid stroke="#e3e4e6" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[60, 180]} />
            <Tooltip />
            {systolicActive && (
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#7E6CAB"
                strokeWidth={3}
                activeDot={{ r: 9, fill: "#7E6CAB", stroke: "#7E6CAB" }}
                dot={{ r: 5, fill: "#7E6CAB", stroke: "#7E6CAB" }}
              />
            )}

            {diastolicActive && (
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#C26EB4"
                strokeWidth={3}
                activeDot={{ r: 9, fill: "#C26EB4", stroke: "#C26EB4" }}
                dot={{ r: 5, fill: "#C26EB4", stroke: "#C26EB4" }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-4 p-4 w-1/3">
          <div className="border-b border-gray-300 pb-4">
            <label className="flex justify-start items-center gap-2 text-lg">
              <div
                onClick={() => {
                  setSystolicActive(!systolicActive);
                }}
                className="rounded-full w-5 h-5 bg-[#7E6CAB] cursor-pointer"
              />
              Systolic
            </label>
            <h2 className="text-xl font-bold">
              {data[0].blood_pressure.systolic.value}
            </h2>
            <div className="flex gap-2">
              {data[0].blood_pressure.systolic.levels.includes("Lower") && (
                <Image
                  src="/ArrowDown.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                />
              )}
              {data[0].blood_pressure.systolic.levels.includes("Higher") && (
                <Image src="/ArrowUp.svg" alt="arrow" width={10} height={10} />
              )}
              {data[0].blood_pressure.systolic.levels}
            </div>
          </div>
          <div>
            <label className="flex justify-start items-center gap-2 text-lg">
              <div
                className="w-5 h-5 rounded-full bg-[#C26EB4] cursor-pointer"
                onClick={() => {
                  setDiastolicActive(!diastolicActive);
                }}
              />
              Diastolic
            </label>
            <h2 className="text-xl font-bold">
              {data[0].blood_pressure.diastolic.value}
            </h2>
            <div className="flex gap-2">
              {data[0].blood_pressure.diastolic.levels.includes("Lower") && (
                <Image
                  src="/ArrowDown.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                />
              )}
              {data[0].blood_pressure.diastolic.levels.includes("Higher") && (
                <Image src="/ArrowUp.svg" alt="arrow" width={10} height={10} />
              )}
              {data[0].blood_pressure.diastolic.levels}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
