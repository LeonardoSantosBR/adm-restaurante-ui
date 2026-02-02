import type { IUpdateOrders } from "./Iupdate-orders";

export type EditOrdersModalProps = {
  open: boolean;
  order: IUpdateOrders | null;
  onClose: () => void;
};