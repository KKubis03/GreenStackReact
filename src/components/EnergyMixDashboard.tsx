import React, { useState, useEffect } from "react";
import type { ApiResponse } from "../helpers/types";
import { DayCard } from "./DayCard";
import "../styles/EnergyMixDashboard.css";

// --- Główny Komponent Aplikacji ---

const EnergyMixDashboard: React.FC = () => {
  const [daysData, setDaysData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/Mix/three-days-averages");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse[] = await response.json();
        setDaysData(data);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Błąd podczas pobierania danych"
        );
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="energy-dashboard-container">
        <div className="energy-dashboard-loading-container">
          <p>Ładowanie danych...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="energy-dashboard-container">
        <div className="energy-dashboard-error-container">
          <p>Błąd: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="energy-dashboard-container">
      <header className="energy-dashboard-header">
        <h1 className="energy-dashboard-title">
          Prognoza Miksu Energetycznego
        </h1>
        <p className="energy-dashboard-subtitle">
          Analiza źródeł wytwarzania energii elektrycznej
        </p>
      </header>

      <div className="energy-dashboard-grid">
        {daysData.map((day, index) => (
          <DayCard key={index} dayInfo={day} />
        ))}
      </div>
    </div>
  );
};

export default EnergyMixDashboard;
