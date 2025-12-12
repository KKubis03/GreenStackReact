// --- Definicje Typów (TypeScript Interfaces) ---

export interface FuelData {
  fuel: string;
  perc: number;
}

export interface ApiResponse {
  date: string;
  averageMix: FuelData[];
  cleanEnergyPercentage: number;
}
