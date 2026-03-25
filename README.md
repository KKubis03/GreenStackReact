# GreenStack ⚡🌿

A React + TypeScript web application that provides real-time electricity grid composition forecasts for Poland and helps users find the optimal time to charge electric vehicles based on clean energy availability.

## Overview

GreenStack fetches 3-day energy mix forecasts from the [GreenStack API](https://greenstackapi.onrender.com/) and displays them as interactive donut charts. It breaks down electricity generation across nine fuel types, highlights the share of clean (renewable + nuclear) energy, and lets users query the best charging window of 1–6 hours.

## Features

- 📊 **3-Day Energy Forecast** – View upcoming electricity generation composition day by day
- 🌱 **Clean Energy Percentage** – Instantly see how green each day's energy mix is
- 🔋 **Optimal EV Charging Window** – Select a window of 1–6 hours and get the start/end time with the highest average clean energy share
- 🎨 **Interactive Charts** – Donut pie charts powered by Recharts with colour-coded fuel legends
- 🌍 **Polish UI** – Fuel names and labels displayed in Polish

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 |
| Language | TypeScript 5 |
| Build Tool | Vite 7 |
| Charts | Recharts 2 |
| Icons | Lucide React |
| Styling | CSS3 |
| Linting | ESLint + TypeScript-ESLint |
| Production Server | serve |

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/KKubis03/GreenStackReact.git
cd GreenStackReact
npm install
```

### Development

```bash
npm run dev
```

Opens the app at [http://localhost:5173](http://localhost:5173) with Hot Module Replacement (HMR). API requests to `/api/*` are automatically proxied to the backend at `https://greenstackapi.onrender.com/`.

### Production Build

```bash
npm run build
```

Outputs an optimised bundle to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally so you can verify the production build before deploying.

### Serve Production Build

```bash
npm start
```

Uses the `serve` package to host the `dist/` folder.

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── ChartLegend.tsx          # Custom Recharts legend with clean-energy indicators
│   ├── DayCard.tsx              # Per-day card with donut chart and stats
│   ├── EnergyMixDashboard.tsx   # Main dashboard: fetches data, renders DayCards
│   └── OptimalChargingWindow.tsx# Form to find the best EV charging window
├── helpers/
│   ├── constants.ts             # Fuel colours, Polish names, clean-fuel list, API URL
│   └── types.ts                 # TypeScript interfaces (FuelData, ApiResponse, …)
├── styles/
│   ├── EnergyMixDashboard.css
│   └── OptimalChargingWindow.css
├── App.tsx                      # Root component
└── main.tsx                     # Entry point
```

## API Endpoints

The application consumes two endpoints exposed by the GreenStack API:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/Mix/three-days-averages` | Fetches hourly energy-mix averages for the next three days |
| GET | `/api/Mix/optimal-charging-window?windowHours={hours}` | Returns the optimal start/end time and average clean energy % for the specified window length |

## Energy Sources

The dashboard tracks nine fuel categories:

| Category | Fuels |
|----------|-------|
| ✅ Clean | Wind, Solar, Nuclear, Hydro, Biomass |
| ❌ Non-clean | Gas, Hard Coal, Brown Coal, Other / Imports |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5173` | Dev server port |
