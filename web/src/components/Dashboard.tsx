// Dashboard.tsx
import React from "react";
import { DashboardProps } from "./interfaces";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import EnergySummary from "./EnergySummary";
import PanelGrid from "./PanelGrid";
import PanelSummary from "./PanelSummary";

const Dashboard: React.FC<DashboardProps> = ({ panels }) => {
  const totalEnergy = panels
    .reduce(
      (acc, panel) =>
        acc + parseFloat(panel.energy.replace("kWh", "").replace(",", "")),
      0
    )
    ?.toFixed(2);

  const weakPanels = panels.filter(
    (panel) => panel.voltage < 10 && panel.wattage < 200
  ).length;

  const healthyPanels = panels.length - weakPanels;

  // Average Voltage
  const totalVoltage = panels.reduce(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (sum, panel) => sum + parseFloat(panel.voltage),
    0
  );
  const averageVoltage = (totalVoltage / panels.length)?.toFixed(2);

  // Average Wattage
  const totalWattage = panels.reduce(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (sum, panel) => sum + parseFloat(panel.wattage),
    0
  );
  const averageWattage = (totalWattage / panels.length)?.toFixed(2);

  return (
    <div className="p-4">
      <div className=" grid grid-cols-1 md:grid-cols-8 gap-4">
        {/* Energy Overview Card */}
        <div className="col-span-4">
          <EnergySummary
            totalEnergy={totalEnergy}
            averageVoltage={averageVoltage}
            averageWattage={averageWattage}
          />
        </div>

        {/* Panel Overview Card */}
        <div className="col-span-4">
          <PanelSummary healthyCount={healthyPanels} weakCount={weakPanels} />
        </div>
      </div>
      {/* Panel Monitoring Card */}
      <Paper
        sx={{
          mt: 2,
          px: 3,
          py: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 1, fontWeight: "600", fontSize: "20px" }}
        >
          Panel Monitoring
        </Typography>
        <PanelGrid panels={panels} />
      </Paper>
    </div>
  );
};

export default Dashboard;
