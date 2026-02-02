export interface IUpdateOrders {
  id: string;
  title: string;
  description: string;
  orderNumber: number;
  status: "IN_PROGRESS" | "READY";
}
