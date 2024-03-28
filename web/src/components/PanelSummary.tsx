// PanelSummary.tsx
import React from "react";
import { FiMonitor, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { PanelSummaryProps } from "./interfaces";

const PanelSummary: React.FC<PanelSummaryProps> = ({
  healthyCount,
  weakCount,
}) => {
  return (
    <div className="bg-white p-4 f  shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-md">
      <h2 className="text-lg font-semibold mb-2">Panel Overview</h2>

      <div className="grid grid-cols-1 xl:grid-cols-2  ">
        <div className="flex items-center xl:justify-center">
          <div>
            <p className="flex items-center mb-2">
              <FiCheckCircle className="mr-2 text-green-500" /> Healthy Panels:
              <b className="text-[18px] ml-2">{healthyCount}</b>
            </p>
            <p className="flex items-center">
              <FiAlertTriangle className="mr-2 text-red-500" /> Weak Panels:
              <b className="text-[18px] ml-2">{weakCount}</b>
            </p>
          </div>
        </div>
        <div className="border-t-2 xl:border-t-0 mt-2 pt-2 xl:pt-0 xl:mt-0 xl:border-l-2 xl:text-center">
          <p className="flex items-center xl:justify-center text-[18px] font-semibold mb-2">
            <FiMonitor className="mr-2" />
            Total Panels
          </p>
          <p className="text-[25px] font-semibold ">
            {healthyCount + weakCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanelSummary;
