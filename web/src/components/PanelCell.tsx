// PanelCell.tsx
import React from "react";
import { PanelCellProps } from "./interfaces";
import PanelSvg from "../assets/panel.svg";
import WeakSvg from "../assets/weak.svg";
import { FiSun } from "react-icons/fi";

const PanelCell: React.FC<PanelCellProps> = ({ panel }) => {
  const isWeak = panel.voltage < 10 && panel.wattage < 200;

  return (
    <div className="border border-gray-300 rounded-lg ">
      <div
        className={`flex justify-between p-[7px] border-b border-gray-300  items-center `}
      >
        <div className="flex items-center gap-2">
          <FiSun />
          <p className="text-[13px] font-medium">Panel #{panel.id}</p>
        </div>
        <span
          className={`px-4 py-[2px] ${
            isWeak ? "bg-red-300" : "bg-green-300"
          }  rounded-full flex justify-center items-center text-[11px]`}
        >
          {isWeak ? "Weak" : "Healthy"}
        </span>
      </div>
      <div className="px-[8px] py-[9px] flex  justify-between items-center">
        <div>
          <p className="text-[12px]">
            <span>Voltage &nbsp;: </span>
            <span className="ml-2 font-semibold">{panel.voltage}v</span>
          </p>
          <p className="text-[12px]">
            <span>Wattage : </span>
            <span className="ml-1 font-semibold">{panel.wattage}w</span>
          </p>
        </div>
        <div className="pr-3">
          <img
            src={isWeak ? WeakSvg : PanelSvg}
            className="w-[32px] h-[32px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PanelCell;
