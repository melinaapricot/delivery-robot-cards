import React, { useState } from "react";
import "./RobotCard.css";
import type { RobotProps } from "../../types/types";
import { BatteryIndicator } from "../BatteryIndicator/BatteryIndicator";
import { DeliveryInfo } from "../DeliveryInfo/DeliveryInfo";
import { StatusBadge } from "../StatusBadge/StatusBadge";

export const RobotCard: React.FC<RobotProps> = ({
  robotId,
  model,
  status,
  batteryLevel,
  location,
  currentOrder,
  image,
}) => {
  const [localStatus, setLocalStatus] = useState(status);

  const canReturnToBase =
    localStatus === "Idle" || localStatus === "On Delivery";

  const handleReturnToBase = () => {
    if (canReturnToBase) {
      setLocalStatus("Returning");
    }
  };

  return (
    <div className="robot-card">
      <div className="robot-header">
        <div className="robot-header-left">
          <h2 className="robot-id">{robotId}</h2>
          <p className="robot-model">Model: {model}</p>
        </div>
      </div>

      <img
        className="robot-image"
        src={image}
        alt={`robot ${robotId}, model ${model}`}
      />

      <div className="robot-central-info">
        <StatusBadge aria-live="polite" status={localStatus} />
        <BatteryIndicator value={batteryLevel} />
      </div>
      <div
        className={`delivery-wrapper ${
          localStatus === "On Delivery" ? "expanded" : "collapsed"
        }`}
        aria-hidden={localStatus !== "On Delivery"}
      >
        <DeliveryInfo
          deliveryAddress={currentOrder?.deliveryAddress ?? ""}
          location={location}
          orderId={currentOrder?.orderId ?? ""}
          estimatedDelivery={currentOrder?.estimatedDelivery ?? ""}
        />
      </div>

      <button
        onClick={handleReturnToBase}
        disabled={!canReturnToBase}
        aria-disabled={!canReturnToBase}
        className="return-button"
        aria-label="Return to Base"
      >
        Return to Base
      </button>
    </div>
  );
};
