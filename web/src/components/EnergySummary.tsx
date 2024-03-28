import React from "react";
import { Typography, Paper, Grid } from "@mui/material";
import { EnergySummaryProps } from "./interfaces";
import { Box } from "@mui/material";

import Energy from "../assets/energy.svg";
import Voltage from "../assets/voltage.svg";
import Wattage from "../assets/wattage.png";
import EnergyOverview from "../assets/energy-overview.png";

const EnergySummary: React.FC<EnergySummaryProps> = ({
  totalEnergy,
  averageVoltage,
  averageWattage,
}) => {
  return (
    <Paper
      sx={{
        px: 3,
        py: 1,
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "600", fontSize: "20px" }}
      >
        Energy Overview
      </Typography>
      <Grid container spacing={2} rowSpacing={1}>
        <Grid item xs={7} container rowSpacing={1}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={Wattage} loading="lazy" className="mr-3 w-[34px]" />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "400",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "20px",
                }}
              >
                Avg. Power Consumption
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", fontSize: "18px" }}
                >
                  {averageWattage} watts
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={Voltage} loading="lazy" className="mr-3" />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "400",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "20px",
                }}
              >
                Avg. voltage
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", fontSize: "18px" }}
                >
                  {averageVoltage} volts
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={Energy} loading="lazy" className="mr-3" />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "400",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "20px",
                }}
              >
                Total yield
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", fontSize: "18px" }}
                >
                  {totalEnergy} kWh
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={5}
          container
          rowSpacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <img src={EnergyOverview} loading="lazy" className="mx-5 -mt-10 " />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EnergySummary;
