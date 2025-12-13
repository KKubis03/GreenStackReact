export interface FuelData {
  fuel: string;
  perc: number;
}

export interface ApiResponse {
  date: string;
  averageMix: FuelData[];
  cleanEnergyPercentage: number;
}

export interface DayCardProps {
  dayInfo: ApiResponse;
}

export interface ChargingWindowResponse {
  start: string;
  end: string;
  averageCleanEnergyPercentage: number;
}
