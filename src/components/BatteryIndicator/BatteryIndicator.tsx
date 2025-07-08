import React from "react";
import "./BatteryIndicator.css";
import { Zap } from "lucide-react";
import clsx from "clsx";

interface BatteryProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  label?: string;
}

export const BatteryIndicator: React.FC<BatteryProgressBarProps> = ({
  value = 0,
  max = 100,
  className = "",
  ...props
}) => {
  const safeValue = Math.min(max, Math.max(value, 0));
  const percentage = max ? (safeValue / max) * 100 : safeValue;

  const barClass = clsx("battery-bar", {
    "battery-low": percentage <= 20,
    "battery-medium": percentage > 20 && percentage <= 50,
    "battery-high": percentage > 50,
  });

  return (
    <div className={clsx("battery-wrapper", className)} {...props}>
      <div
        className="battery-background"
        role="progressbar"
        aria-label="Battery level"
        aria-valuenow={value}
        aria-valuemax={max}
      >
        <div className={barClass} style={{ width: `${percentage}%` }} />

        <Zap className="battery-icon" size={16} />
        <span className="battery-percentage">{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};
