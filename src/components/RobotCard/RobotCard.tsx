import React from "react";
import "./RobotCard.css";
import type { RobotProps } from "../../types/types";
import clsx from "clsx";
import { BatteryIndicator } from "../BatteryIndicator/BatteryIndicator";
import { DeliveryInfo } from "../DeliveryInfo/DeliveryInfo";

export const RobotCard: React.FC<RobotProps> = ({
  robotId,
  model,
  status,
  batteryLevel,
  location,
  currentOrder,
  image,
}) => {
  return (
    <div className="robot-card">
      <div className="robot-header">
        <div className="robot-header-left">
          <h2 className="robot-id">{robotId}</h2>
          <p className="robot-model">Model: {model}</p>
        </div>
      </div>

      <img className="robot-image" src={image} alt={`${model} robot`} />
      <div className="robot-central-info">
        <p
          className={clsx("robot-status", {
            idle: status.toLowerCase() === "idle",
            "on-delivery": status.toLowerCase() === "on delivery",
          })}
        >
          {status}
        </p>
        <BatteryIndicator value={batteryLevel}></BatteryIndicator>
      </div>
      {status === "On Delivery" && currentOrder && (
        <DeliveryInfo
          deliveryAddress={currentOrder.deliveryAddress}
          location={location}
          orderId={currentOrder.orderId}
          estimatedDelivery={currentOrder.estimatedDelivery}
        />
      )}
    </div>
  );
};
