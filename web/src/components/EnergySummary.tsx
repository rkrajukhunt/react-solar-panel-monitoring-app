import React from "react";
import Energy from "../assets/energy.svg";

import Voltage from "../assets/voltage.svg";
import Wattage from "../assets/wattage.png";

import EnergyOverview from "../assets/energy-overview.png";
import { EnergySummaryProps } from "./interfaces";

const EnergySummary: React.FC<EnergySummaryProps> = ({
  totalEnergy,
  averageVoltage,
  averageWattage,
}) => {
  return (
    <div className="bg-white pl-8 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-md capitalize">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h1 className="text-2xl font-medium mb-4">Energy Overview</h1>

          <div className="flex items-center mb-4">
            <img src={Wattage} alt="" className="h-12 w-12" />
            <div className="ml-4">
              <p className="text-base lg:text-base xl:text-xl font-normal">
                Avg. Power Consumption
              </p>
              <p className="text-base lg:text-base xl:text-xl font-semibold">
                {averageWattage} <span className="text-[14px]">Watts</span>
              </p>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <img src={Voltage} alt="" className="h-12 w-12 " />
            <div className="ml-4">
              <p className="text-base lg:text-xl font-normal">Avg. voltage</p>
              <p className="text-base lg:text-base xl:text-xl font-semibold">
                {averageVoltage} <span className="text-[14px]">Volts</span>
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <img src={Energy} alt="" className="h-12 w-12 " />
            <div className="ml-4">
              <p className="text-base lg:text-xl font-normal">Total yield</p>
              <p className="text-base lg:text-base xl:text-xl font-semibold">
                {totalEnergy} <span className="text-[14px]">kWh</span>
              </p>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center ">
          <img src={EnergyOverview} alt="" className="h-[260px] w-[230px]" />
        </div>
      </div>
    </div>
  );
};

export default EnergySummary;
