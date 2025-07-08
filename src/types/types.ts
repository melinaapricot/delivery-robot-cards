export type RobotProps = {
  robotId: string;
  model: string;
  status: string;
  batteryLevel: number;
  location: {
    latitude: number;
    longitude: number;
  };
  currentOrder?: {
    orderId: string;
    customerName: string;
    deliveryAddress: string;
    estimatedDelivery: string;
  };
  image?: string;
};
