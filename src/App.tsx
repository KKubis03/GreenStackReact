import "./App.css";
import EnergyMixDashboard from "./components/EnergyMixDashboard";
import { OptimalChargingWindow } from "./components/OptimalChargingWindow";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">GreenStack</h1>
      <OptimalChargingWindow />
      <EnergyMixDashboard />
    </div>
  );
}

export default App;
