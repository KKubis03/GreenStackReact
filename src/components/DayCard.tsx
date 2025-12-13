import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Leaf } from "lucide-react";
import type { DayCardProps } from "../helpers/types";
import { COLORS, FUEL_NAMES } from "../helpers/constants";
import { renderChartLegend } from "./ChartLegend";
import "../styles/EnergyMixDashboard.css";

export const DayCard: React.FC<DayCardProps> = ({ dayInfo }) => {
  const date = new Date(dayInfo.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  const diffDays = Math.floor(
    (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  let label = "";
  if (diffDays === 0) label = "Dzisiaj";
  else if (diffDays === 1) label = "Jutro";
  else if (diffDays === 2) label = "Pojutrze";
  else label = date.toLocaleDateString("pl-PL");

  const chartData = dayInfo.averageMix
    .map((fuel) => ({
      name: FUEL_NAMES[fuel.fuel] || fuel.fuel,
      value: fuel.perc,
      fuelKey: fuel.fuel,
    }))
    .sort((a, b) => b.value - a.value);

  return (
    <div className="energy-dashboard-card">
      <h3 className="energy-dashboard-card-title">{label}</h3>

      <div className="energy-dashboard-clean-energy-container">
        <Leaf size={20} color="#10B981" />
        <span className="energy-dashboard-clean-energy-text">
          Czysta energia: <strong>{dayInfo.cleanEnergyPercentage}%</strong>
        </span>
      </div>

      <div style={{ width: "100%", height: "auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PieChart width={300} height={450}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((entry, index) => {
                return (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.fuelKey]} />
                );
              })}
            </Pie>
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Legend content={renderChartLegend} />
          </PieChart>
        </div>
      </div>
    </div>
  );
};
