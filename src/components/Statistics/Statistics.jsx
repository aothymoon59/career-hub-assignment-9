import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    fetch("/marks.json")
      .then((res) => res.json())
      .then((data) => setMarks(data));
  }, []);

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto bg-[#F9F9FF]">
        <div className="bg-[url('https://i.ibb.co/pf7qwYs/Vector.png')] bg-no-repeat bg-left-bottom min-h-[300px] flex justify-center items-center">
          <h2 className="font-extrabold text-xl md:text-[32px] text-[#1A1919]">
            Assignment Marks Analytics
          </h2>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto py-3 md:py-5 px-4 md:px-8">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart width={500} height={1000} data={marks}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="mark"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statistics;
