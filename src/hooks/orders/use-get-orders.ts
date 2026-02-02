import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api/orders/orders";

export function useGetOrders(offset: number, pageSize: number) {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(offset, pageSize),
    select: (res) => res.data
  });
}
