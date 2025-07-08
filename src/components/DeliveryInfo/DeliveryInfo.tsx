import React from "react";
import { House, MapPin, Package, Clock } from "lucide-react";
import "./DeliveryInfo.css";

interface DeliveryInfoProps {
  deliveryAddress: string;
  location: { latitude: number; longitude: number };
  orderId: string;
  estimatedDelivery: string;
}

export const DeliveryInfo: React.FC<DeliveryInfoProps> = ({
  deliveryAddress,
  location,
  orderId,
  estimatedDelivery,
}) => {
  return (
    <div className="delivery-info">
      <div className="delivery-cardlet">
        <h3 className="cardlet-title">
          <House aria-hidden="true" size={14} /> Address:
        </h3>
        <p className="cardlet-value">{deliveryAddress}</p>
      </div>
      <div className="delivery-cardlet">
        <h3 className="cardlet-title">
          <MapPin aria-hidden="true" size={14} /> Location:
        </h3>
        <p className="cardlet-value location">
          {location.latitude}, {location.longitude}
        </p>
      </div>
      <div className="delivery-cardlet">
        <h3 className="cardlet-title">
          <Package aria-hidden="true" size={14} /> Order ID:
        </h3>
        <p className="cardlet-value">{orderId}</p>
      </div>
      <div className="delivery-cardlet">
        <h3 className="cardlet-title">
          <Clock aria-hidden="true" size={14} /> ETA:
        </h3>
        <p className="cardlet-value">
          {new Date(estimatedDelivery).toDateString()}
        </p>
      </div>
    </div>
  );
};
