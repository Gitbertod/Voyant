// components/DashboardCard.jsx
import React from "react";

const DashboardCard = ({ title, value, icon, color = "bg-yellow-400" }) => {
  console.trace("DashboardCard renderizado");
  return (
    <div className={`p-6 rounded-lg shadow-md flex items-center ${color} text-white`}>
      <div className="text-4xl mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-3xl font-bold ">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
