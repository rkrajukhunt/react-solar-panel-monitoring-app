// interfaces.ts
export interface Panel {
  id: number;
  wattage: number;
  voltage: number;
  energy: string;
}

export interface EnergySummaryProps {
  totalEnergy: number | string;
  averageVoltage: number | string;
  averageWattage: number | string;
}

export interface PanelSummaryProps {
  healthyCount: number;
  weakCount: number;
}

export interface DashboardProps {
  panels: Panel[];
}

export interface PanelGridProps {
  panels: Panel[];
}

export interface PanelCellProps {
  panel: Panel;
}
