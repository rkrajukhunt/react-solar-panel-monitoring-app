// PanelCell.tsx
import React from "react";
import { PanelCellProps } from "./interfaces";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Chip } from "@mui/material";
import { Divider } from "@mui/material";

import { FiSun } from "react-icons/fi";
import WeakSvg from "../assets/weak.svg";

const PanelCell: React.FC<PanelCellProps> = ({ panel }) => {
  const isWeak = panel.voltage < 10 && panel.wattage < 200;

  return (
    <Paper
      elevation={0}
      sx={{ border: "1px solid #E5E5E5", borderRadius: "8px !important" }}
    >
      <Box
        sx={{
          p: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "end" }}>
          <FiSun className="mr-1 mb-[1px]" />
          <Typography
            variant="h5"
            sx={{ fontWeight: "500", fontSize: "13px", color: "#000000" }}
          >
            Panel #{panel.id}
          </Typography>
        </div>
        <Chip
          label={isWeak ? "Weak" : "healthy"}
          size="small"
          sx={{
            fontWeight: "500",
            fontSize: "11px",
            color: "#000000",
            backgroundColor: isWeak ? "#FEE2E1" : "#DCFCE7",
            height: "16px",
          }}
        />
      </Box>
      <Divider />
      <Grid container spacing={2} rowSpacing={2} sx={{ p: 1 }}>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "400",
                display: "flex",
                alignItems: "baseline",
                flexDirection: "row",
                fontSize: "12px",
                color: "#000000",
              }}
            >
              Voltage&nbsp;:&nbsp;
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "600", fontSize: "12px", color: "#000000" }}
              >
                {panel.voltage}V
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "400",
                display: "flex",
                alignItems: "baseline",
                flexDirection: "row",
                fontSize: "12px",
                color: "#000000",
              }}
            >
              Wattage&nbsp;:&nbsp;
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "600", fontSize: "12px", color: "#000000" }}
              >
                {panel.wattage}W
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              justifyItems: "center",
            }}
          >
            {isWeak ? (
              <img src={WeakSvg} loading="lazy" className="mr-2 w-9" />
            ) : (
              <img src={WeakSvg} loading="lazy" className="mr-2 w-9" />
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PanelCell;
