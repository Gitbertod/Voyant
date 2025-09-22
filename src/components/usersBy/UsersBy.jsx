import React from "react";
import { HiUsers } from "react-icons/hi2";
import { Avatar, Card, Progress } from "flowbite-react";

const UsersBy = ({titulo, name}) => {
  const roles = [
    { name: "Admin", count: 19, color: "blue" },
    { name: "Editor", count: 8, color: "purple" },
    { name: "User", count: 29, color: "green" },
  ];

  const total = roles.reduce((sum, role) => sum + role.count, 0);

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
        {roles.map((role) => {
          const percent = ((role.count / total) * 100).toFixed(0);
          return (
            <div key={role.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {role.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {role.count} ({percent}%)
                </span>
              </div>
              <Progress
                progress={parseInt(percent)}
                color={role.color}
                size="sm"
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default UsersBy;
