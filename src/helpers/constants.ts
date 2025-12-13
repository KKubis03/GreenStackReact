export const COLORS: Record<string, string> = {
  wind: "#3B82F6",
  solar: "#FBBF24",
  nuclear: "#8B5CF6",
  hydro: "#0EA5E9",     
  biomass: "#16A34A",
  gas: "#F97316",
  coal: "#1F2937",
  imports: "#6B7280",
  other: "#DC2626",
};

export const FUEL_NAMES: Record<string, string> = {
  wind: "Wiatr",
  solar: "Słońce",
  nuclear: "Atom",
  coal: "Węgiel",
  gas: "Gaz",
  biomass: "Biomasa",
  hydro: "Wodna",
  imports: "Import",
  other: "Inne",
};

export const CLEAN_FUELS = ["wind", "solar", "nuclear", "hydro", "biomass"];

export const API_BASE_URL = "https://greenstackapi.onrender.com/api/Mix/";
