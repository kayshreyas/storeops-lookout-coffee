# Lookout Cafe Strategic Dashboard

An interactive business intelligence dashboard for analyzing market opportunities, competition, and financial projections for the coffee shop industry.

## Features

- **Overview Tab**: Executive summary with key metrics and market opportunities
- **Market Analysis**: Demographics, trends, and economic factors
- **Competition**: Competitive landscape analysis and market positioning
- **Opportunities**: Revenue diversification and growth strategies
- **Financial**: Revenue projections, cost structure, and investment requirements
- **Action Plan**: 30-60-90 day strategic roadmap

## Design Language

This dashboard follows a clean, modern design language inspired by healthcare applications:
- Clean white card layouts
- Professional blue accent colors
- Clear typography with Inter font
- Data visualization with charts and metrics
- Responsive grid system
- Subtle shadows and borders

## Technologies Used

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Recharts** - Data visualization and charts
- **Lucide React** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## Getting Started

### Prerequisites

Make sure you have Node.js (version 14 or higher) installed on your system.

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

The dashboard will automatically reload when you make changes to the code.

### Build for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/           # Reusable dashboard components
│   ├── OverviewTab.js   # Overview tab component
│   └── FinancialTab.js  # Financial analysis tab
├── LookoutCafeDashboard.js  # Main dashboard component
├── App.js               # Main app component
├── index.js             # Entry point
└── index.css           # Global styles with Tailwind
```

## Customization

### Adding New Data

Update the data arrays in `LookoutCafeDashboard.js`:
- `keyMetrics` - Main KPIs and metrics
- `revenueProjections` - Monthly revenue forecast data
- `competitors` - Competitive analysis data
- `revenueOpportunities` - Growth opportunities
- `costStructure` - Business cost breakdown

### Styling

The dashboard uses Tailwind CSS for styling. Key design elements:
- Colors: Blue primary, green success, red alerts
- Typography: Inter font family
- Layout: Responsive grid system
- Components: Card-based design with shadows

### Adding New Tabs

1. Create a new component in `src/components/`
2. Import and add the tab button in the navigation
3. Add the conditional rendering in the main dashboard component

## License

This project is for demonstration purposes. Feel free to use and modify as needed. 