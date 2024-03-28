```markdown
# Solar Farm Energy Dashboard

This project is a web-based dashboard for monitoring energy production of a solar farm. It displays information about the total energy produced by the farm, the status of individual solar panels, and provides real-time updates.

## Features

- Display total energy produced by the farm.
- Display the status of individual solar panels (healthy or weak).
- Update UI with fresh data every 5 seconds.
- Responsive UI design for desktop, tablet, and smartphone screens.
- Use of icons for better visualization.
- Error handling for failed API requests.

## Technologies Used

- React.js: Used for building the user interface.
- TypeScript: Used for static typing and improved code readability.
- Tailwind CSS: Used for styling and responsive design.
- Axios: Used for fetching data from the server.
- react-icons: Used for adding icons to the UI.

## File Structure

- `src/`
  - `components/`: Contains React components.
  - `interfaces.ts`: Contains TypeScript interfaces used across the application.
  - `App.tsx`: Main component that orchestrates the application.
  - `Dashboard.tsx`: Component for displaying the main dashboard.
  - `EnergySummary.tsx`: Component for displaying energy summary information.
  - `PanelSummary.tsx`: Component for displaying panel summary information.
  - `PanelGrid.tsx`: Component for displaying the grid of panels.
  - `PanelCell.tsx`: Component for displaying individual panel information.
  - `Header.tsx`: Component for the header section of the dashboard.
  - `api.ts`: Contains functions for interacting with the server API.
  - `index.tsx`: Entry point of the application.
```

## Installation

1. Clone the repository:

```bash
git clone [<repository-url>](https://github.com/rkrajukhunt/react-solar-panel-monitoring-app)
```

2. Install dependencies:

```bash
cd react-solar-panel-monitoring-app
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open the browser and navigate to `http://localhost:3000` to view the dashboard.

## Usage

- Upon opening the dashboard, you will see the total energy produced by the farm, panel overview, and panel monitoring sections.
- The panel overview section provides information about the total number of panels, active panels, and inactive panels.
- The panel monitoring section displays the status of individual panels and updates every 5 seconds.
- The UI adapts to different screen sizes, providing a seamless experience across devices.

## Testing

- Unit tests can be written using testing libraries such as Jest and React Testing Library.
- To run tests, use the following command:

```bash
npm test
```
