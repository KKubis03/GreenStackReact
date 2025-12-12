// --- Konfiguracja Danych i Kolorów ---

export const COLORS: Record<string, string> = {
  wind: "#10B981",
  solar: "#F59E0B",
  nuclear: "#6CF527",
  coal: "#000000ff",
  gas: "#9CA3AF",
  biomass: "#F5B427",
  hydro: "#06B6D4",
  imports: "#A855F7",
  other: "#e6230aff",
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

export const CLEAN_FUELS = ["wind", "solar", "nuclear", "hydro"];
