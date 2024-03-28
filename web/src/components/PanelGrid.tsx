// PanelGrid.tsx
import React from "react";
import PanelCell from "./PanelCell";
import { PanelGridProps } from "./interfaces";

const PanelGrid: React.FC<PanelGridProps> = ({ panels }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {panels.map((panel) => (
        <PanelCell key={panel.id} panel={panel} />
      ))}
    </div>
  );
};

export default PanelGrid;
