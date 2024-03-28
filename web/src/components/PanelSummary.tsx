// PanelSummary.tsx
import React from "react";
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
    <div className="bg-white pl-8 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h1 className="text-2xl font-medium mb-4">Panel Overview</h1>

          <div className="flex items-center mb-4">
            <img src={HealthyPanel} alt="" className="h-12 w-12 " />
            <div className="ml-4">
              <p className="text-base lg:text-base xl:text-xl font-normal">
                Healthy Panels
              </p>
              <p className="text-base lg:text-base xl:text-xl font-semibold">
                {healthyCount}{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <img src={WeakPanel} alt="" className="h-12 w-12 " />
            <div className="ml-4">
              <p className="text-base lg:text-base xl:text-xl font-normal">
                Weak Panels
              </p>
              <p className="text-base lg:text-base xl:text-xl font-semibold">
                {weakCount}{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <img src={Energy} alt="" className="h-12 w-12 " />
            <div className="ml-4">
              <p className="text-base lg:text-base xl:text-xl font-normal">
                Total Panels
              </p>
              <p className="text-base lg:text-base xl:text-xl font-semibold">
                {healthyCount + weakCount}{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <img src={EnergyOverview} alt="" className="h-[260px] w-[230px]" />
        </div>
      </div>
    </div>
  );
};

export default PanelSummary;
