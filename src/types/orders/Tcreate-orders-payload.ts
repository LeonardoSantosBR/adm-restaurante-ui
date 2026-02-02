export type OrdersProps = {
  id: string;
  orderNumber: number;
  status: "IN_PROGRESS" | "READY";
  title: string;
  description: string;
  created_at: string;
};
