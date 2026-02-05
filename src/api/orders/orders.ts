import type { IcreateOrders } from "../../types/orders/Icreate-orders";
import { api } from "../api";
const token = localStorage.getItem("token");

export function createOrders(data: IcreateOrders) {
  return api.post("/orders", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function getOrders(offset: number, pageSize: number) {
  return api.get(`/orders`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { page: offset, limit: pageSize },
  });
}

export function updateOrders(
  id: string,
  data: {
    title: string;
    description: string;
    status: string;
  }
) {
  return api.put(`/orders/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function deleteOrders(id: string) {
  return api.delete(`/orders/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
