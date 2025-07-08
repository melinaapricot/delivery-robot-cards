import type { RobotProps } from "../types/types";
import DeliveryRobotV1 from "../assets/DeliveryRobotV1.png";
import DeliveryRobotV2 from "../assets/DeliveryRobotV2.png";

export async function fetchRobotData(): Promise<RobotProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(robotData), 900);
  });
}

export const robotData: RobotProps[] = [
  {
    robotId: "R2D1",
    model: "V2",
    status: "On Delivery",
    batteryLevel: 34,
    location: {
      latitude: 12.3344,
      longitude: -122.5162,
    },
    currentOrder: {
      orderId: "ORD-12345",
      customerName: "",
      deliveryAddress: "Vienna, Holloid",
      estimatedDelivery: "2025-04-03T14:10:00Z",
    },
    image: DeliveryRobotV2,
  },
  {
    robotId: "R2D2",
    model: "V2",
    status: "Idle",
    batteryLevel: 87,
    location: {
      latitude: 34.0522,
      longitude: -54.2437,
    },
    currentOrder: {
      orderId: "ORD-12346",
      customerName: "Customer member",
      deliveryAddress: "Vienna, Holloid",
      estimatedDelivery: "2025-04-03T18:25:00Z",
    },
    image: DeliveryRobotV2,
  },
  {
    robotId: "R1D3",
    model: "V1",
    status: "On Delivery",
    batteryLevel: 19,
    location: {
      latitude: -43.058,
      longitude: -118.2437,
    },
    currentOrder: {
      orderId: "ORD-12347",
      customerName: "Customer Customer",
      deliveryAddress: "Vienna, Holloid",
      estimatedDelivery: "2025-04-03T10:11:00Z",
    },
    image: DeliveryRobotV1,
  },
];
