// PanelCell.tsx
import React from "react";
import { PanelCellProps } from "./interfaces";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const PanelCell: React.FC<PanelCellProps> = ({ panel }) => {
  const isWeak = panel.voltage < 10 && panel.wattage < 200;

  return (
    <div
      className={`justify-between rounded-md p-2 flex ${
        isWeak ? "bg-red-100" : "bg-green-100"
      }`}
    >
      <div>
        <p className="text-[12px] md:text-[14px] lg:text-[16px]">
          Panel ID: <span className="font-semibold">{panel.id}</span>
        </p>
        <p className="text-[12px] md:text-[14px] lg:text-[16px]">
          Voltage: <span className="font-semibold">{panel.voltage}V</span>
        </p>
        <p className="text-[12px] md:text-[14px] lg:text-[16px]">
          Wattage: <span className="font-semibold"> {panel.wattage}W</span>
        </p>
      </div>
      <div>{isWeak ? <FiArrowDown /> : <FiArrowUp />}</div>
    </div>
  );
};

export default PanelCell;
