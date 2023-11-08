import { range } from 'lodash';
import React from 'react';

const StatisticsCard = () => {
  const statisticsData = [
    {
      id: 1,
      label: 'Total Inventory',
      value: 230,
    },
    {
      id: 2,
      label: 'Total Events',
      value: 10,
    },
    {
      id: 3,
      label: 'Total Volunteers',
      value: 60,
    },
  ];

  return (
    <div className="grid grid-cols-2 bigLaptop:grid-cols-4 television:grid-cols-5 mt-6 gap-4">
      {false
        ? range(3).map((data, index) => (
            <div
              key={index}
              className="flex flex-col relative p-6 w-[257px] h-[152px] rounded-2xl bg-gray-300 animate-pulse"
            >
              <h3 className="text-career-gray-200 font-medium text-14 w-24 h-8 animate-pulse bg-gray-100 rounded-md" />
              <p className="absolute bottom-0 text-[57px] font-medium text-career-black-200 w-16 rounded-md h-6 mb-4 animate-pulse bg-gray-100" />
            </div>
          ))
        : statisticsData.map((data) => (
            <div
              className="flex flex-col relative p-6 bg-white shadow-lg w-[257px] h-[152px] rounded-2xl"
              key={data.id}
            >
              <h3 className="text-career-gray-200 font-medium text-14">
                {data.label}
              </h3>
              <p className="absolute bottom-0 text-[57px] !font-medium font-sharp-grotesk text-career-black-200">
                {data.value}
              </p>
            </div>
          ))}
    </div>
  );
};

export default StatisticsCard;
