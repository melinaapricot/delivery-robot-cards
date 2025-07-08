import React from "react";
import clsx from "clsx";
import "./StatusBadge.css";

interface StatusIndicatorProps {
  status: string;
}

export const StatusBadge: React.FC<StatusIndicatorProps> = ({ status }) => {
  const getStatusClass = (status: string) => {
    return clsx("status-indicator", {
      idle: status.toLowerCase() === "idle",
      "on-delivery": status.toLowerCase() === "on delivery",
      error: status.toLowerCase() === "error",
      returning: status.toLowerCase() === "returning",
    });
  };

  return <span className={getStatusClass(status)}>{status}</span>;
};
