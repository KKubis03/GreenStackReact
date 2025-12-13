import { Leaf } from "lucide-react";
import { FUEL_NAMES, CLEAN_FUELS } from "../helpers/constants";

interface ChartLegendProps {
  payload?: any[];
}

export const renderChartLegend = ({ payload }: ChartLegendProps) => {
  if (!payload) return null;

  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: "10px 0 0 0",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {payload.map((entry: any, index: number) => {
        const fuelKey = Object.keys(FUEL_NAMES).find(
          (key) => FUEL_NAMES[key] === entry.value
        );
        const isClean = fuelKey && CLEAN_FUELS.includes(fuelKey);

        return (
          <li
            key={`item-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  backgroundColor: entry.color,
                  marginRight: "8px",
                  borderRadius: "2px",
                }}
              />
              <span style={{ color: "#374151" }}>
                {entry.value}: <strong>{entry.payload.value}%</strong>
              </span>
            </div>
            {isClean && <Leaf size={16} color="#10B981" />}
          </li>
        );
      })}
    </ul>
  );
};
