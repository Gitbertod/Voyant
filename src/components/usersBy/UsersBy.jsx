import React from "react";
import { HiUsers } from "react-icons/hi2";
import { Card, Progress } from "flowbite-react";

const UsersBy = ({ titulo, data }) => {
  const total = Object.values(data).reduce((sum, val) => sum + val, 0);

  return (
    <Card className="max-w-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {titulo}
        </h5>
        <HiUsers className="h-8 w-8 text-blue-800 dark:text-blue-400" />
      </div>

      <div className="flex items-baseline text-gray-900 dark:text-white mb-4">
        <span className="text-4xl font-extrabold tracking-tight">{total}</span>
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          total
        </span>
      </div>

      <div className="space-y-3">
        {Object.entries(data).map(([key, count], idx) => {
          const percent = total ? ((count / total) * 100).toFixed(0) : 0;
          const colors = ["blue", "purple", "green", "red", "yellow"];
          const color = colors[idx % colors.length];

          return (
            <div key={key}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                  {key}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {count} ({percent}%)
                </span>
              </div>
              <Progress progress={parseInt(percent)} color={color} size="sm" />
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default UsersBy;
