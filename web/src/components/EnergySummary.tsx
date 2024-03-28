import React from "react";
import { FiMonitor, FiBattery, FiBatteryCharging } from "react-icons/fi";
import { EnergySummaryProps } from "./interfaces";

const EnergySummary: React.FC<EnergySummaryProps> = ({
  totalEnergy,
  averageVoltage,
  averageWattage,
}) => {
  return (
    <div className="bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-md">
      <h2 className="text-lg font-semibold mb-2 xl:ml-4">Energy Overview</h2>
      <div className="grid grid-cols-1 xl:grid-cols-2  ">
        <div className="flex items-center xl:justify-center">
          <div>
            <p className="flex items-center  mb-2">
              <FiBattery className="mr-2 text-green-500" />
              Average Wattage:
              <b className="text-[18px] ml-2">{averageWattage} W</b>
            </p>

            <p className="flex items-center ">
              <FiBatteryCharging className="mr-2 text-red-500" />
              Average Voltage:
              <b className="text-[18px] ml-2">{averageVoltage} V</b>
            </p>
          </div>
        </div>

        <div className="border-t-2 xl:border-t-0 mt-2 pt-2 xl:pt-0 xl:mt-0 xl:border-l-2 xl:text-center">
          <p className="flex items-center xl:justify-center text-[18px] font-semibold mb-2">
            <FiMonitor className="mr-2" /> Total Energy Generated
          </p>
          <p className="text-[25px] font-semibold">
            {totalEnergy} <span className="text-[14px]">kWh</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnergySummary;
