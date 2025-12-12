import React, { useState } from "react";
import { Battery, Zap } from "lucide-react";
import "../styles/OptimalChargingWindow.css";

interface ChargingWindowResponse {
  start: string;
  end: string;
  averageCleanEnergyPercentage: number;
}

export const OptimalChargingWindow: React.FC = () => {
  const [hours, setHours] = useState<number>(1);
  const [result, setResult] = useState<ChargingWindowResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (hours < 1 || hours > 6) {
      setError("Czas ładowania musi być w przedziale 1-6 godzin");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://greenstackapi.onrender.com/api/Mix/optimal-charging-window?windowHours=${hours}`,
        {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ChargingWindowResponse = await response.json();
      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Błąd podczas pobierania danych"
      );
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="charging-window-container">
      <div className="charging-window-card">
        <div className="charging-window-header">
          <Battery size={32} color="#3B82F6" />
          <h2 className="charging-window-title">Optymalny Czas Ładowania</h2>
        </div>

        <form onSubmit={handleSubmit} className="charging-window-form">
          <div className="charging-window-input-group">
            <label htmlFor="hours" className="charging-window-label">
              Czas ładowania (godziny):
            </label>
            <input
              id="hours"
              type="number"
              min="1"
              max="6"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="charging-window-input"
            />
            <span className="charging-window-hint">
              Wprowadź wartość od 1 do 6 godzin
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="charging-window-button"
          >
            {loading ? "Wyszukiwanie..." : "Znajdź optymalny czas"}
          </button>
        </form>

        {error && (
          <div className="charging-window-error">
            <p>{error}</p>
          </div>
        )}

        {result && !loading && (
          <div className="charging-window-result">
            <div className="charging-window-result-header">
              <Zap size={24} color="#10B981" />
              <h3 className="charging-window-result-title">Wynik</h3>
            </div>

            <div className="charging-window-result-grid">
              <div className="charging-window-result-item">
                <span className="charging-window-result-label">
                  Data i godzina rozpoczęcia:
                </span>
                <span className="charging-window-result-value">
                  {formatDateTime(result.start)}
                </span>
              </div>

              <div className="charging-window-result-item">
                <span className="charging-window-result-label">
                  Data i godzina zakończenia:
                </span>
                <span className="charging-window-result-value">
                  {formatDateTime(result.end)}
                </span>
              </div>

              <div className="charging-window-result-item">
                <span className="charging-window-result-label">
                  Średni udział czystej energii:
                </span>
                <span className="charging-window-result-value-highlight">
                  {result.averageCleanEnergyPercentage.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
