import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api/orders/orders";

export function useGetOrders(
  pageSize: number,
  token: string | null,
  options?: { enabled?: boolean }
) {

  return useQuery({
    queryKey: ["orders"],
    enabled: options?.enabled ?? true,
    queryFn: async () => {
      console.log("token aqui" + token);
      if (!token) throw new Error("Missing token");
      const response = await getOrders(pageSize, token);
      return response.data;
    },
  });
}
