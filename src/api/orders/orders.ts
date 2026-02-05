import type { IcreateOrders } from "../../types/orders/Icreate-orders";
import { api } from "../api";

export function createOrders(data: IcreateOrders) {
  return api.post("/orders", data);
}

export function getOrders(offset: number, pageSize: number) {
  return api.get(`/orders`, { params: { page: offset, limit: pageSize } });
}

export function updateOrders(
  id: string,
  data: {
    title: string;
    description: string;
    status: string;
  }
) {
  return api.put(`/orders/${id}`, data);
}

export function deleteOrders(id: string) {
  return api.delete(`/orders/${id}`);
}
