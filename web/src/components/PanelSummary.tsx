// PanelSummary.tsx
import React from "react";
import { Typography, Paper, Grid } from "@mui/material";
import { Box } from "@mui/material";
import { PanelSummaryProps } from "./interfaces";

import HealthyPanel from "../assets/healthy-panel.svg";
import WeakPanel from "../assets/weak-panel.svg";
import Energy from "../assets/solar-panel-solar-energy.svg";
import EnergyOverview from "../assets/energy-overview.png";

const PanelSummary: React.FC<PanelSummaryProps> = ({
  healthyCount,
  weakCount,
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
        Panel Overview
      </Typography>
      <Grid container spacing={2} rowSpacing={1}>
        <Grid item xs={7} container rowSpacing={1}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={HealthyPanel}
                loading="lazy"
                className="mr-3 w-[34px]"
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "400",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "20px",
                }}
              >
                Healthy Panels
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", fontSize: "18px" }}
                >
                  {healthyCount}
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={WeakPanel} loading="lazy" className="mr-[4px]" />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "400",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "20px",
                }}
              >
                Weak Panels
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", fontSize: "18px" }}
                >
                  {weakCount}
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={Energy} loading="lazy" className="mr-3 w-[34px]" />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "400",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "20px",
                }}
              >
                Total Panels
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "600", fontSize: "18px" }}
                >
                  {healthyCount - weakCount}
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
            <img src={EnergyOverview} loading="lazy" className="mx-5 -mt-10" />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PanelSummary;
